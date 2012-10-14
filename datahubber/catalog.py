import urllib
import json


class Base(object):
    def __init__(self, **kwargs):
        for kw, val in kwargs.items():
            setattr(self, kw, val)

class Catalog(Base):
    def __init__(self):
        self._loaded = False
        self._cache = {
        }

    def load(self, datasets):
        if self._loaded:
            return
        for key in datasets:
            for id_ in datasets[key]:
                ds = self.get(id_)
                ds.owner = key
                self._cache[id_] = ds

    def get(self, id_):
        if id_ in self._cache:
            return self._cache[id_]
        else:
            return self._get(id_)

    def query(self, q=''):
        # TODO: actual search
        return self._cache.values()

    def _get(self, id_):
        url = 'https://raw.github.com/datasets/' + id_ + '/master/' + \
            'datapackage.json'
        datapackage = json.load(urllib.urlopen(url))
        meta = datapackage.get('metadata', {})
        dataset = Dataset(**meta)
        dataset.datapackage_url = url
        dataset.id = dataset.name
        dataset.github_url = 'https://github.com/datasets/' + dataset.name
        for info in datapackage['files']:
            df = DataFile(**info)
            if(not hasattr(df, 'url')):
                df.url = dataset.github_url.replace('github.com',
                        'raw.github.com') + '/master/' + df.path;
            dataset.files.append(df)
        return dataset


class Dataset(Base):
    def __init__(self, **kwargs): 
        super(Dataset, self).__init__(**kwargs)
        self.files = []


class DataFile(Base):
    pass


catalog = Catalog()


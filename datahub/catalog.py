import urllib
import json


class Catalog(object):
    def __init__(self):
        self._loaded = False
        self._cache = {
        }

    def load(self, datasets):
        if self._loaded:
            return
        for id_ in datasets:
            ds = self._load(id_)
            if ds:
                self._cache[id_] = ds

    def get(self, id_):
        return self._cache.get(id_, None)

    def query(self, q=''):
        # TODO: actual search
        return self._cache.values()

    def _load(self, id_):
        url = 'https://raw.github.com/datasets/' + id_ + '/master/' + \
            'datapackage.json'
        # TODO: deal with 404s gracefully
        try:
            datapackage = json.load(urllib.urlopen(url))
        except:
            print('Failed to load %s from %s' % (id_, url))
            return None
        meta = datapackage.get('metadata', {})
        dataset = Dataset(**meta)
        dataset.datapackage_url = url
        dataset.id = dataset.name
        dataset.github_url = 'https://github.com/datasets/' + dataset.name
        for info in datapackage['files']:
            df = DataFile(**info)
            if (not df.url):
                df.url = dataset.github_url.replace('github.com',
                        'raw.github.com') + '/master/' + df.path;
            dataset.files.append(df)
        return dataset


class Base(dict):
    def __getattr__(self, attr):
        return self.get(attr, None)

    def __setattr__(self, attr, val):
        self[attr] = val


class Dataset(Base):
    def __init__(self, **kwargs): 
        super(Dataset, self).__init__(**kwargs)
        self.files = []


class DataFile(Base):
    def dictize(self):
        return self


catalog = Catalog()


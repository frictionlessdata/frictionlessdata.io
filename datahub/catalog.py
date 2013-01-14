import urllib
import json


class Catalog(object):
    def __init__(self):
        self._loaded = False
        self._cache = {
        }

    def load(self, url):
        try:
            dps = json.load(urllib.urlopen(url))
        except:
            print('Failed to load Index from %s' % url)
            raise
        for id_ in dps:
            ds = self._load(dps[id_])
            if ds:
                self._cache[id_] = ds

    def get(self, id_):
        return self._cache.get(id_, None)

    def query(self, q=''):
        # TODO: actual search
        return self._cache.values()

    def _load(self, dict_):
        if not 'id' in dict_:
            dict_['id'] = dict_.get('name', 'no-id')
        dataset = Dataset(**dict_)
        for info in dict_['data']:
            df = DataFile(**info)
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


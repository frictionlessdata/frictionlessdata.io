from nose.tools import assert_equal
import datahub.catalog as catalog

def test__load():
    c = catalog.Catalog()
    url = 'gdp'
    out = c._load(url)
    assert_equal(out.name, 'gdp')
    assert_equal(out.title, u'Country, Regional and World GDP (Gross Domestic Product)')
    assert_equal(len(out.files), 1)

def test_dictize():
    df = catalog.DataFile(x=1, y=2)
    out = df.dictize()
    assert_equal(out['x'], 1)
    assert_equal(len(out.keys()), 2)



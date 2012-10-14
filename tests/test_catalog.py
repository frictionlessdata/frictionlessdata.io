from nose.tools import assert_equal
import datahubber.catalog as catalog

def test_get():
    c = catalog.Catalog()
    url = 'gdp'
    out = c.get(url)
    assert_equal(out.name, 'gdp')
    assert_equal(out.title, u'Country, Regional and World GDP (Gross Domestic Product)')
    assert_equal(len(out.files), 1)


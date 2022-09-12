# Table Schema

Table Schema is a specification for providing a “schema” (similar to a [database schema](https://en.wikipedia.org/wiki/Database_schema)) for tabular data. This information includes the expected type of each value in a column *(“string”, “number”, “date”, etc.)*, constraints on the value *(“this string can only be at most 10 characters long”)*, and the expected format of the data *(“this field should only contain strings that look like email addresses)*. Table Schema can also specify relations between tables.

Given the following table of user information:

| Name | Email        | Age |
|------|--------------|-----|
| Jill | jill@foo.com |  25 |
| Jack | jack@bar.com |  33 |

An example schema would look like the following (in JSON).  Note that a minimum age of 18 is specified in the `Age` column and a string that looks like an email address must be present in the `Email` column:


```json
{
  "fields": [
    {
      "name": "Name",
      "type": "string",
      "description": "User’s name"
    },
    {
      "name": "Email",
      "type": "string",
      "format": "email",
      "description": "User’s email"
    },
    {
      "name": "Age",
      "type": "integer",
      "description": "User’s age",
      "constraints": {
        "minimum": 18
      }
    }
  ]
}
```

[Software](/products/tabulator) that supports reading and validating tabular data against a Table Schema can help publishers and ordinary users improve the quality of CSV and Excel files online by flagging validation errors based on the types, formats, and constraints specified in the schema.  For an example, see [goodtables](/blog/2016/06/24/validating-data/).

## Next Steps

* Read the [full specification](https://specs.frictionlessdata.io/table-schema/).
* Get to know the [tools](/products/table-schema-tools).
* Understand how it can be used in a [Data Package](/data-package).

[dp]: /data-package
[dp-main]: /data-package
[tdp]: /data-package/#tabular-data-package
[ts]: /table-schema/
[ts-types]: https://specs.frictionlessdata.io/table-schema/#field-descriptors
[csv]: /blog/2018/07/09/csv/
[json]: http://en.wikipedia.org/wiki/JSON

[spec-dp]: https://specs.frictionlessdata.io/data-package/
[spec-tdp]: https://specs.frictionlessdata.io/tabular-data-package/
[spec-ts]: https://specs.frictionlessdata.io/table-schema/
[spec-csvddf]: https://specs.frictionlessdata.io/csv-dialect/

[publish]: /docs/publish/
[pub-tabular]: /blog/2016/07/21/publish-tabular/
[pub-online]: /blog/2016/08/29/publish-online/
[pub-any]: /blog/2016/07/21/publish-any/
[pub-geo]: /blog/2016/04/30/publish-geo/
[pub-faq]: /blog/2016/04/20/publish-faq/

[dp-creator]: http://create.frictionlessdata.io
[dp-viewer]: http://create.frictionlessdata.io


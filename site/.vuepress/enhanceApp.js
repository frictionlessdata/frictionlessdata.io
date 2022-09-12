const redirectList = [
  {
    path: "/software/",
    redirect: "/",
  },
  {
    path: "/articles/",
    redirect: "/blog/",
  },
  {
    path: "/docs/",
    redirect: "/guide/",
  },
  {
    path: "/articles/nimblelearn-dpc/",
    redirect: "/blog/2019/07/22/nimblelearn-dpc/",
  },
  {
    path: "/articles/datacurator/",
    redirect: "/blog/2019/03/01/datacurator/",
  },
  {
    path: "/articles/nimblelearn/",
    redirect: "/blog/2018/07/20/nimblelearn/",
  },
  {
    path:
      "/articles/center-for-data-science-and-public-policy-workforce-data-initiative/",
    redirect:
      "/blog/2017/08/15/center-for-data-science-and-public-policy-workforce-data-initiative/",
  },
  {
    path: "/articles/openml/",
    redirect: "/blog/2017/12/04/openml/",
  },
  {
    path: "/articles/zegami/",
    redirect: "/blog/2017/09/28/zegami/",
  },
  {
    path: "/articles/cmso/",
    redirect: "/blog/2017/05/23/cmso/",
  },
  {
    path: "/articles/collections-as-data/",
    redirect: "/blog/2017/08/09/collections-as-data/",
  },
  {
    path: "/articles/the-data-retriever/",
    redirect: "/blog/2017/05/24/the-data-retriever/",
  },
  {
    path: "/articles/dataship/",
    redirect: "/blog/2016/11/15/dataship/",
  },
  {
    path: "/articles/dataworld/",
    redirect: "/blog/2017/04/11/dataworld/",
  },
  {
    path: "/articles/john-snow-labs/",
    redirect: "/blog/2017/03/28/john-snow-labs/",
  },
  {
    path: "/articles/tesera/",
    redirect: "/blog/2016/11/15/tesera/",
  },
  {
    path: "/articles/open-power-system-data/",
    redirect: "/blog/2016/11/15/open-power-system-data/",
  },
  {
    path: "/articles/matt-thompson/",
    redirect: "/blog/2017/10/26/matt-thompson/",
  },
  {
    path: "/articles/georges-labreche/",
    redirect: "/blog/2017/10/24/georges-labreche/",
  },
  {
    path: "/articles/oleg-lavrovsky/",
    redirect: "/blog/2018/07/16/oleg-lavrovsky/",
  },
  {
    path: "/articles/open-knowledge-greece/",
    redirect: "/blog/2017/10/27/open-knowledge-greece/",
  },
  {
    path: "/articles/ori-hoch/",
    redirect: "/blog/2018/07/16/ori-hoch/",
  },
  {
    path: "/articles/daniel-fireman/",
    redirect: "/blog/2017/11/01/daniel-fireman/",
  },
  {
    path: "/articles/nes/",
    redirect: "/blog/2019/07/03/nes/",
  },
  {
    path: "/articles/nes-tool/",
    redirect: "/blog/2020/01/23/nes-tool/",
  },
  {
    path: "/articles/andre-heughebaert/",
    redirect: "/blog/2019/09/12/andre-heughebaert/",
  },
  {
    path: "/articles/stephan-max/",
    redirect: "/blog/2019/07/02/stephan-max/",
  },
  {
    path: "/articles/open-referral/",
    redirect: "/blog/2019/07/09/open-referral/",
  },
  {
    path: "/articles/frictionless-darwincore/",
    redirect: "/blog/2020/01/22/frictionless-darwincore/",
  },
  {
    path: "/articles/open-referral-tool/",
    redirect: "/blog/2020/01/22/open-referral-tool/",
  },
  {
    path: "/articles/dm4t/",
    redirect: "/blog/2017/12/19/dm4t/",
  },
  {
    path: "/articles/ukds/",
    redirect: "/blog/2017/12/12/ukds/",
  },
  {
    path: "/articles/university-of-pittsburgh/",
    redirect: "/blog/2017/12/15/university-of-pittsburgh/",
  },
  {
    path: "/articles/elife/",
    redirect: "/blog/2017/10/24/elife/",
  },
  {
    path: "/articles/causa-natura-pescando-datos/",
    redirect: "/blog/2017/08/15/causa-natura-pescando-datos/",
  },
  {
    path: "/articles/university-of-cambridge/",
    redirect: "/blog/2017/08/15/university-of-cambridge/",
  },
  {
    path:
      "/articles/pacific-northwest-national-laboratory-active-data-biology/",
    redirect:
      "/blog/2018/05/07/pacific-northwest-national-laboratory-active-data-biology/",
  },
  {
    path: "/docs/using-data-packages-in-clojure/",
    redirect: "/blog/2018/05/07/using-data-packages-in-clojure/",
  },
  {
    path: "/docs/using-data-packages-in-java/",
    redirect: "/blog/2018/04/28/using-data-packages-in-java/",
  },
  {
    path: "/docs/using-data-packages-in-go/",
    redirect: "/blog/2018/02/16/using-data-packages-in-go/",
  },
  {
    path: "/docs/creating-tabular-data-packages-in-r/",
    redirect: "/blog/2018/02/14/creating-tabular-data-packages-in-r/",
  },
  {
    path: "/docs/using-data-packages-in-r/",
    redirect: "/blog/2018/02/14/using-data-packages-in-r/",
  },
  {
    path: "/docs/using-data-packages-in-python/",
    redirect: "/blog/2016/08/29/using-data-packages-in-python/",
  },
  {
    path: "/docs/creating-tabular-data-packages-in-python/",
    redirect: "/blog/2016/07/21/creating-tabular-data-packages-in-python/",
  },
  {
    path: "/docs/creating-tabular-data-packages-in-javascript/",
    redirect: "/blog/2018/04/04/creating-tabular-data-packages-in-javascript/",
  },
  {
    path: "/docs/joining-data-in-python/",
    redirect: "/blog/2018/04/06/joining-data-in-python/",
  },
  {
    path: "/docs/joining-tabular-data-in-python/",
    redirect: "/blog/2018/04/05/joining-tabular-data-in-python/",
  },
  {
    path: "/docs/publish-data-as-data-packages/",
    redirect: "/blog/2018/07/16/publish-data-as-data-packages/",
  },
  {
    path: "/docs/applying-licenses/",
    redirect: "/blog/2018/03/27/applying-licenses/",
  },
  {
    path: "/docs/publish/",
    redirect: "/blog/2016/08/30/publish/",
  },
  {
    path: "/docs/publish-online/",
    redirect: "/blog/2016/08/29/publish-online/",
  },
  {
    path: "/docs/publish-any/",
    redirect: "/blog/2016/07/21/publish-any/",
  },
  {
    path: "/docs/publish-tabular/",
    redirect: "/blog/2016/07/21/publish-tabular/",
  },
  {
    path: "/docs/publish-geo/",
    redirect: "/blog/2016/04/30/publish-geo/",
  },
  {
    path: "/docs/publish-faq/",
    redirect: "/blog/2016/04/20/publish-faq/",
  },
  {
    path: "/docs/point-location-data/",
    redirect: "/blog/2018/07/16/point-location-data/",
  },
  {
    path: "/docs/csv/",
    redirect: "/blog/2018/07/09/csv/",
  },
  {
    path: "/docs/validating-data/",
    redirect: "/blog/2016/06/24/validating-data/",
  },
  {
    path: "/field-guide/",
    redirect: "/tag/field-guide",
  },
  {
    path: "/field-guide/well-packaged-datasets/",
    redirect: "/blog/2018/03/07/well-packaged-datasets/",
  },
  {
    path: "/field-guide/visible-findable-shareable-data/",
    redirect: "/blog/2018/07/16/visible-findable-shareable-data/",
  },
  {
    path: "/field-guide/validated-tabular-data/",
    redirect: "/blog/2018/07/16/validated-tabular-data/",
  },
  {
    path: "/field-guide/used-and-useful-data/",
    redirect: "/blog/2019/05/20/used-and-useful-data/",
  },
  {
    path: "/field-guide/automatically-validated-tabular-data/",
    redirect: "/blog/2018/03/12/automatically-validated-tabular-data/",
  },
  {
    path: "/field-guide/data-publication-workflow-example/",
    redirect: "/blog/2018/03/12/data-publication-workflow-example/",
  },
  {
    path: "/docs/tutorial-template/",
    redirect: "/contribute/",
  },
  {
    path: "/docs/developer-guide/",
    redirect: "/contribute/",
  },
  {
    path: "/universe/",
    redirect: "/adoption/",
  },
  {
    path: "/docs/data-package/",
    redirect: "/standards",
  },
  {
    path: "/docs/table-schema/",
    redirect: "/table-schema/",
  },
  {
    path: "/tooling/data-package-tools/",
    redirect: "/tooling/python/",
  },
  {
    path: "/tooling/table-schema-tools/",
    redirect: "/tooling/python/",
  },
  {
    path: "/guide/",
    redirect: "/introduction/",
  },
  {
    path: "/tooling/application/",
    redirect: "/software/",
  },
  {
    path: "/tooling/framework/",
    redirect: "/software/",
  },
  {
    path: "/tooling/libraries/",
    redirect: "/software/",
  },
  {
    path: "/tooling/goodtables/",
    redirect: "/software/",
  },
  {
    path: "/tooling/datahub/",
    redirect: "/software/",
  },
  {
    path: "/tooling/labs/",
    redirect: "/software/",
  },
  {
    path: "/specs/",
    redirect: "/standards/",
  },
  {
    path: "/reproducible-research/",
    redirect: "/adoption/",
  },
  {
    path: "/team/",
    redirect: "/people/",
  },
  {
    path: "/about/",
    redirect: "/introduction/",
  },
  {
    path: "/support/",
    redirect: "/work-with-us/get-help/",
  },
  {
    path: "/contribute/",
    redirect: "/work-with-us/contribute/",
  },
  {
    path: "/code-of-conduct/",
    redirect: "/work-with-us/code-of-conduct/",
  },
  {
    path: "/events/",
    redirect: "/work-with-us/events/",
  },
  {
    path: "/table-schema",
    redirect: "/standards",
  },
  {
    path: "/data-package/",
    redirect: "/standards/",
  },
  {
    path: "/software/",
    redirect: "/projects/",
  },
  {
    path: "/standards/",
    redirect: "/projects/",
  },
  {
    path: "/software",
    redirect: "/projects/",
  },
  {
    path: "/standards",
    redirect: "/projects/",
  },
];

export default ({ Vue, router }) => {
  router.addRoutes(redirectList);
};

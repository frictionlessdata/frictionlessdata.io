<template>
  <div class="jobs-diagram" ref="diagram"></div>
</template>

<script>
const titlesAndURLs = [
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["Document Dataset", "/jobs/document-dataset/"],
  ["", undefined],
  ["Have a Data Hub", "/jobs/have-a-data-hub/"],
  ["", undefined],
  ["Find Datasets", "/jobs/find-datasets/"],
  ["Pull Dataset", "/jobs/pull-dataset/"],
  ["Version Dataset", "/jobs/version-dataset/"],
  ["Validate Dataset", "/jobs/validate-dataset/"],
  ["Pipeline\nTransformations", "/jobs/pipeline-transformations/"],
  ["Publish Dataset", "/jobs/publish-dataset/"],
  [
    "Do Analysis &\nMachine Learning",
    "/jobs/do-analysis-and-machine-learning/"
  ],
  ["Scale Scope", "/jobs/scale-scope/"],
  ["Data Audit", "/jobs/data-audit/"],
  ["Do Initial\nData Exploration", "/jobs/do-initial-data-exploration/"],
  ["Quickly\nEdit Dataset", "/jobs/quickly-edit-dataset/"],
  ["Store Dataset", "/jobs/store-dataset/"],
  ["Data API", "/jobs/data-api/"],
  ["Create\nVisualizations", "/jobs/create-visualizations/"],
  ["Orchestrate\nData Platform", "/jobs/orchestrate-data-platform/"],
  ["Scale Size", "/jobs/scale-size/"],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined]
];

class Diagram {
  constructor(domNode) {
    this.shape = [8, 3];
    this.domNode = domNode;
  }

  configure() {
    let that = this;

    const Hex = Honeycomb.extendHex({
      size: 61,
      orientation: "flat",

      currentIndex() {
        const position = this.toPoint();
        const hexPos = that.gridType.pointToHex([position.x, position.y]);
        return hexPos.x + 1 + (hexPos.y + 1) * that.shape[0];
      },

      render(draw) {
        const { x, y } = this.toPoint();
        const position = this.toPoint();
        const centerPosition = this.center().add(position);
        const hexPos = that.gridType.pointToHex([position.x, position.y]);
        const corners = this.corners();
        const index = this.currentIndex();
        let stroke = { width: 1, color: "#999" };
        if (titlesAndURLs[index][0] === "") {
          stroke = {};
        }
        this.draw = draw
          .polygon(corners.map(({ x, y }) => `${x},${y}`))
          .fill("none")
          .stroke(stroke)
          .translate(x, y);
        const fontSize = 13;
        const title = titlesAndURLs[index][0];
        const yPosition = title.includes("\n")
          ? centerPosition.y - fontSize * 2
          : centerPosition.y - fontSize;
        draw
          .text(title)
          .font({
            size: fontSize,
            anchor: "middle",
            leading: 1.4,
            fill: "#EA6D4C"
          })
          .translate(centerPosition.x, yPosition);
      },

      openAnchor() {
        const index = this.currentIndex();
        if (titlesAndURLs[index][0] === "") {
          return;
        }
        window.open(titlesAndURLs[index][1]);
      },

      highlight() {
        const index = this.currentIndex();
        if (titlesAndURLs[index][0] === "") {
          return;
        }
        this.draw
          .stop(true, true)
          .fill({ opacity: 0.2, color: "#EA6D4C" })
          .animate(1000)
          .fill({ opacity: 0, color: "none" });
      }
    });
    this.gridType = Honeycomb.defineGrid(Hex);
  }

  setup() {
    const shape = this.shape;
    this.configure();
    const draw = SVG(this.domNode);
    this.gridInstance = this.gridType.rectangle({
      width: shape[0],
      height: shape[1],
      onCreate(hex) {
        hex.render(draw);
      }
    });
  }

  setupMouseOverEvent() {
    this.domNode.addEventListener("mouseover", ({ offsetX, offsetY }) => {
      const hexCoordinates = this.gridType.pointToHex([offsetX, offsetY]);
      const hex = this.gridInstance.get(hexCoordinates);
      if (hex) {
        hex.highlight();
      }
    });
  }

  setupClickEvent() {
    this.domNode.addEventListener("click", ({ offsetX, offsetY }) => {
      const hexCoordinates = this.gridType.pointToHex([offsetX, offsetY]);
      const hex = this.gridInstance.get(hexCoordinates);
      if (hex) {
        hex.openAnchor();
      }
    });
  }
}

export default {
  mounted() {
    const diagram = new Diagram(this.$refs["diagram"]);
    diagram.setup();
    diagram.setupMouseOverEvent();
    diagram.setupClickEvent();
  }
};
</script>

<style scoped>
.jobs-diagram {
  height:370px;
  min-width: 900px;
}

polygon,
text {
  cursor: pointer;
}
</style>

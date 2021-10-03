// FROM https://gojs.net/latest/intro/buttons.html

diagram.nodeTemplate =
  $(go.Node, "Spot",
    $(go.Panel, "Auto",
      $(go.Shape, "Rectangle",
        { fill: "gold" }),
      $(go.TextBlock, "Click small button\nto collapse/expand subtree",
        { margin: 5 })
    ),
    $("TreeExpanderButton",
      { alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top },
      { visible: true })
  );

diagram.layout = $(go.TreeLayout, { angle: 90 });

diagram.model = new go.GraphLinksModel(
  [ { key: 1 },
    { key: 2 } ],
  [ { from: 1, to: 2 } ] );
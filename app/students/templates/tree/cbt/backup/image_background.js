// FROM https://forum.nwoods.com/t/set-background-image-of-gojs-diagram-dynamically/13130

goJsDiagram.add(
            $$(go.Part,
              {
                name: 'BackgroundImage',
                layerName: "Background",
                position: new go.Point(0, 0),
                selectable: false, pickable: false
              },
              $$(go.Picture, {
                  height: 600,
                  width: 900
              },
                  new go.Binding("source", "", function(data){
                      if(goJsPanel.backgroundImageId)
                          return `/OneView/services/MapImage?id=${goJsPanel.backgroundImageId}`;
                      return '';
                  })
              )
         ));
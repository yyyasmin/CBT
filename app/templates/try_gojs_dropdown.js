// FROM http://5.9.10.113/68195466/vue-js-and-gojs
<script>
import * as go from "gojs"
let $ = go.GraphObject.make

export default {
    name: "Diagrama",
    data(){
        return{
        nodeDataArray : [
            {key:1,text:"Alpha"},
            {key:2,text:"Beta"}
        ],
        linkDataArray : [
            {from:1,to:2}
        ]
        }
    },
    methods : {
        unit(){
            var myDiagram = $(go.Diagram,"Circuit",
            {
                "undoManager.isEnabled" : true
            });
            myDiagram.model = new go.GraphLinksModel(this.nodeDataArray,this.linkDataArray);
        }
    },
    mounted(){
        this.unit();
    },
    
}
</script>

<template>
    <div id="Circuit">

    </div>
    
</template>
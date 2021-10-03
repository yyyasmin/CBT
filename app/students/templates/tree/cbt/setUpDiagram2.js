{% block setUpDiagram %}   
	
	function setupDiagram2(total) {
				
	    {% for s in situations  %}  // DESTINATIONS			
			{% include "./tree/cbt/situation_data.js" %}
			
					

		{% for t in thoughts if (s.is_parent_of(t) ) %}  // GOALS		
			{% include "./tree/cbt/thought_data.js" %}
			
				
					{% for e in emotions if ( t.is_parent_of(e) ) %}  // TODOS	
						
						{% include "./tree/cbt/emotion_data.js" %}

					{% endfor %}  //TODOS		
			{% endfor %}  //GOALS		
			
        {% endfor %}  // DESTINATIONS

      myFullDiagram.model = new go.TreeModel(nodeDataArray);
    }	
	
{% ensblock setUpDiagram %}   

{% block behaviors_data_3 %}
	
	behavior_already_in_diagram = false
	
	console.log ("IN BEHAVIOR NODE nodesKeyPushed:", nodesKeyPushed)
	
	for (let nkp_idx=0; nkp_idx<=nodesKeyPushed.length; nkp_idx++) {
		console.log ( "nodesKeyPushed-i", nkp_idx, nodesKeyPushed[nkp_idx] )
		if (nodesKeyPushed[nkp_idx] == behavior.id )  {
			behavior_already_in_diagram = true
			console.log ("This NODE ALLREADY IN DIAGRAM behavior.id", behavior.id, nodesKeyPushed)
			break;
		}
	}


	if (!behavior_already_in_diagram )  {
		
		nodesKeyPushed[nodesKeyPushed.length] = behavior.id 

		
		nodeDataArray.push( {
			key: behavior.id,
			parent: emotion.id,

			fill_color: behavior.color,
			gt_color: behavior.color,
			source:  behavior.image_url,
			h_name:  behavior.h_name,
			
			name: behavior.title,
			class_name:  behavior.class_name,
			
			user_node: "false",
			in_user_path: "false",
					
			textEditable: false,
			editable: false,
			
			} );
	}
	
{% endblock behaviors_data_3 %}


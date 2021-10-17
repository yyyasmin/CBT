{% block thought_data_3 %}

	let thought_already_in_diagram = false
	
	//console.log ("IN THOUGHT NODE thought:", thought)
	
	for (let nkp_idx=0; nkp_idx<=nodesKeyPushed.length; nkp_idx++) {
		console.log ( "nodesKeyPushed-i", nkp_idx, nodesKeyPushed[nkp_idx] )
		if (nodesKeyPushed[nkp_idx] == thought.id )  {
			thought_already_in_diagram = true
			//console.log ("This NODE ALLREADY IN DIAGRAM thought.id", thought.id, nodesKeyPushed)
			break;
		}
	}	
	
	
	if (!thought_already_in_diagram )  {
		
		nodesKeyPushed[nodesKeyPushed.length] = thought.id 
	
		nodeDataArray.push( {
			key: thought.id,
			//parent: thought.id,
			parent: thought.prnt_id,

			fill_color: thought.color,
			gt_color: thought.color,
			source:  thought.image_url,
			h_name:  thought.h_name,
			
			name: thought.title,
			class_name:  thought.class_name,
			
			user_node: thought.usr_node,
			in_user_path: "false",
					
			textEditable: thought.usr_node=="true" ? true : false,
			editable: false,
		
			//text_color: sts.color,
			//status: sts.title,
		} );
	}

				
{% endblock thought_data_3 %}

{% block emotions_data_3 %}
	
	let emotion_already_in_diagram = false
	
	console.log ("IN EMOTION NODE emotion:", emotion)
	
	for (let nkp_idx=0; nkp_idx<=nodesKeyPushed.length; nkp_idx++) {
		console.log ( "nodesKeyPushed-i", nkp_idx, nodesKeyPushed[nkp_idx] )
		if (nodesKeyPushed[nkp_idx] == emotion.id )  {
			emotion_already_in_diagram = true
			console.log ("This NODE ALLREADY IN DIAGRAM emotion.id", emotion.id, nodesKeyPushed)
			break;
		}
	}


	if (!emotion_already_in_diagram )  {
		
		nodesKeyPushed[nodesKeyPushed.length] = emotion.id 

		
		nodeDataArray.push( {
			key: emotion.id,
			//parent: thought.id,
			parent: emotion.prnt_id,

			fill_color: emotion.color,
			gt_color: emotion.color,
			source:  emotion.image_url,
			h_name:  emotion.h_name,
			
			name: emotion.title,
			class_name:  emotion.class_name,
			
			user_node: emotion.usr_node,
			in_user_path: "false",
					
			textEditable: emotion.usr_node=="true" ? true : false,
			editable: false,
		
			
			} );
	}
	
{% endblock emotions_data_3 %}


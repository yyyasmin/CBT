{% block results_data_3 %}
	
	let result_already_in_diagram = false
	
	console.log ("IN RESULT NODE nodesKeyPushed:", nodesKeyPushed)
	
	for (let nkp_idx=0; nkp_idx<=nodesKeyPushed.length; nkp_idx++) {
		console.log ( "nodesKeyPushed-i", nkp_idx, nodesKeyPushed[nkp_idx] )
		if (nodesKeyPushed[nkp_idx] == result.id )  {
			result_already_in_diagram = true
			console.log ("This NODE ALLREADY IN DIAGRAM result.id", result.id, nodesKeyPushed)
			break;
		}
	}


	if (!result_already_in_diagram )  {
		
		nodesKeyPushed[nodesKeyPushed.length] = result.id 

		
		nodeDataArray.push( {
			key: result.id,
			//parent: behavior.id,
			parent: result.prnt_id,
			
			fill_color: result.color,
			gt_color: result.color,
			source:  result.image_url,
			h_name:  result.h_name,
			
			name: result.title,
			class_name:  result.class_name,
			
			
			user_node: result.usr_node,
			in_user_path: "false",
					
			textEditable: result.usr_node=="true" ? true : false,
			editable: false,
			
			} );
	}
	
{% endblock results_data_3 %}


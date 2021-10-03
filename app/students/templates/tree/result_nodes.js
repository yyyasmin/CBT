{% block results_data_3 %}

	console.log("result.parent_id", behavior.id, result.parent_id)

	nodeDataArray.push( {
		key: result.id,
		parent: result.parent_id,

		fill_color: result.color,
		gt_color: result.color,
		source:  result.image_url,
		h_name:  result.h_name,
		
		name: result.title,
		class_name:  result.class_name,
				
		textEditable: "false",
		editable: "false",
		
		user_node: false,	
		in_user_path: false,
	} );
												
		
{% endblock results_data_3 %}


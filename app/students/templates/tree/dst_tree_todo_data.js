{% block todos_data_3 %}

					
	nodeDataArray.push( {
		key: todo.id,
		parent: goal.id,

		fill_color: todo.color,
		gt_color: todo.color,
		source:  todo.image_url,
		h_name:  todo.h_name,
		
		name: todo.title,
		class_name:  todo.class_name,
		
		user_node: "false",
		in_user_path: "false",

	} );
												
		
{% endblock todos_data_3 %}


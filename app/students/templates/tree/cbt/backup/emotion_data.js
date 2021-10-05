{% block e_data %}

	//{% for sts in statuss %}
		//{% if e.is_parent_of(sts) %}
		
			console.log("EMOTION E ",{{ e.id }} )

		
			nodeDataArray.push({
				key: {{e.id}},
				parent: {{t.id}},

				fill_color: {{e.color}},
				gt_color: {{e.color}},
				source:  {{e.image_url}},
				h_name:  {{e.h_name}},
				
				name: {{e.title}},
				class_name:  {{e.class_name}},
				
				user_node: "false",
				in_user_path: "false",
						
				textEditable: false,
				editable: false,
				
				//text_color: '{{ sts.color }}',
				//name: '{{ e.title }}',
				//status: 'סטאטוס: {{ sts.title }}',
			},
			);														
		//{% endif %}
	//{% endfor %}
				
{% endblock e_data %}

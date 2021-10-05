{% block dst_data %}
		
			console.log("SITUATION_DATA ", {{s.id}} )
			
			//{% for sts in statuss %}
				//{% if dest.is_parent_of(sts) %}
					nodeDataArray.push({
					
					key: {{ s.id }},
					parent: 0, 

					fill_color:  {{ s.color }},
					gt_color:    {{ s.color }},
					source:      {{ s.image_url }},
					h_name:      {{ s.h_name }},
					
					name:        {{ s.title }},
					class_name:  {{ s.class_name}},
					
					user_node: "false",
					in_user_path: "false",
							
					textEditable: false,
					editable: false,
						
					} );
																			
				//{% endif %}
			//{% endfor %}
			
			
{% endblock dst_data %}

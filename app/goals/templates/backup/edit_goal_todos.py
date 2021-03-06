{% extends "layout.html" %}

{% include "dst_title.html" %}

{% block content %}

<div class="w3-container" id="container_id">

<button class="btn btn-info btn-xs" id="add_button"><h5><strong>
	<a href="{{ url_for('destinations.dsply_goal_form2', selected_destination_id=dst.id) }}">הוסף יעד חדש</a>
<strong></h5></button>
</br></br>
	
	<p></p>
	
	<div> 			
	{% for goal in dst.children.all() if (goal.type=='goal') %}
			<br><br>						
			
			<button class="btn btn-warning btn-xs" id="edit_list_id"><a style="color: black" href="{{ url_for('goals.goal_update', selected_goal_id=goal.id) }}">ערוך</a></button>			
			
			<button class="btn btn-success btn-xs" id="edit_sub_list_id"><a style="color: black" href="{{ url_for('goals.edit_goal_files2', selected_goal_id=goal.id) }}">ערוך קבצים</a></button>

			<button class="btn btn-success btn-xs" style="background-color: #ffff66"><a style="color: black" href="{{ url_for('goals.edit_goal_todos2', selected_goal_id=goal.id) }}">ערוך משימות להשגת היעד</a></button>
			
			<button class="btn btn-warning btn-xs" id="show_tree_id"><a style="color: black" href="{{ url_for('destinations.show_dummy_student_tree2') }}">הצג עץ מטרות</a></button>
			
			<button class="btn btn-danger btn-xs"  id="delete_id"><a style="color: black" href="{{ url_for('destinations.goal_from_destination_delete2', selected_goal_id=goal.id) }}">מחק</a></button>		
			
			<button class="accordion">יעד: {{ goal.id }}:     {{ goal.title }}</button>
			
			<div class="panel">
				<p class="white_ppp">תאור היעד: {{ goal.title }}</p>
			
			</div>
	{% endfor %}
	
  </div>
  
  </br>
  
 </div>   <!-- container -->
 
  	
<script type="text/javascript" src="{{ url_for('static', filename='js/tree_list_plus.js') }}"></script>
<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
</script>



{% endblock %}
{% block cbt_menu %}

<style>

</style>

</br>
	
	<center><table class="std_table">
		<tr>			
			<th>מספר</th>
			<th>מטרה</th>
			<th>תאור</th> 
			<th>פעולות עריכה</th>
		</tr>
			
		<tr>
			<td>{{ dst.id }}</td>
			<td>{{ dst.title }}</td>
			<td>{{ dst.body }}</td> 
			<td>
				{% include "dst_actions.html" %}
			</td>
		</tr>
			
	</table></center>
	

{% endblock cbt_menu %}

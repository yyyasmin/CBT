{% block show_dst_tree %}
            
@std.route('/show_student_tree', methods=['GET', 'POST'])
@login_required
def show_student_tree():

    ###########import pdb; #pdb.set_trace()
    dst = Destination.query.filter(Destination.selected==True).first()
    if dst == None:
        flash("Please select a student first ")
        return redirect(url_for('students.edit_destinations'))
      
        

    dst_goals = []    # Get all student's destinations

	'''
	all_goals = Goal.query.filter(Goal.hide==False).all()     
    for g in std_gts:
        if g in all_goals:
            student_goals.append(g)
    #goals_not_of_student = list(set(all_goals).difference(set(student_goals)))  #goals_not_of_student = all_destinations - std_destinations
    '''
                                  
    student_todos = []    # Get all student's destinations
    all_todos = Todo.query.filter(Todo.hide==False).all()
    
    for g in std_gts:
        if g in all_todos:
            student_todos.append(g)
    #todos_not_of_student = list(set(all_todos).difference(set(student_todos)))  #todos_not_of_student = all_destinations - std_destinations


    #DEBUG ONLY
    for d in student_dsts:
        print("D", d.title, d.id)
        for g in student_goals: 
            if d.is_parent_of(g):
                print("   G", g.title, g.id)
            for t in student_todos:
                if g.is_parent_of(t):
                    print("         G  T", g.id,  t.id)
    #DEBUG ONLY
    
        
    whos = Accupation.query.all()
    default_who = Accupation.query.filter(Status.default==True).first()

    statuss = Status.query.all()
    default_status = Status.query.filter(Status.default==True).first()
        
    whos = Accupation.query.all()
    default_who = Accupation.query.filter(Accupation.default==True).first()

    tags = Tag.query.all()
    
    std_txts = Std_general_txt.query.filter(Std_general_txt.student_id==std.id).all()
     
    due_date = date.today()
        
    age_ranges = Age_range.query.order_by(Age_range.title).all()
    tags = Tag.query.order_by(Tag.title).all()

    #return render_template('./tree/backup/tree_base.html', std=std, student=std,     
    return render_template('./tree/backup/root_tree_family7.html', std=std, student=std,     
    #return render_template('./tree/show_students_tree.js', std=std, student=std,  
                                                        student_dsts=student_dsts,
                                                        student_goals=student_goals,
                                                        student_todos=student_todos,
                                                        total_gts = len(student_dsts)+len(student_goals)+len(student_todos),
                                                        std_txts=std_txts,
                                                        statuss=statuss,
                                                        whos=whos,
                                                        tags=tags, 
                                                        age_ranges=age_ranges,
                                                        due_date=due_date)			
               
    
    
@std.route('/show_student_tree2/<int:selected_student_id>', methods=['GET', 'POST'])
@login_required
def show_student_tree2(selected_student_id):
    std = student_select2(selected_student_id)
    return redirect(url_for('students.show_student_tree'))

{% endblock show_dst_tree %}

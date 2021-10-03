	
@std.route('/document_to_student_add', methods=['GET', 'POST'])
def document_to_student_add():

    author_id = current_user._get_current_object().id
    
    std = Student.query.filter(Student.selected==True).first()
    if std == None:
        flash("Please select a student first ")
        return redirect(url_for('select.edit_students'))	

    if request.method == 'GET':
        return render_template('./documents/document_to_std_add.html', std=std)

    file_name = request.form.get('file_name')
    uploaded_file = request.files.get('file_name')
    file_name = uploaded_file.filename

    file_data = uploaded_file.read()
    uploaded_file = Ufile(file_name, file_data, author_id)  #find out how to set file_data    
    db.session.add(uploaded_file)
    print("IN document_to_student_add uploaded_file: ", uploaded_file)
    db.session.commit()
    
    ### UPDATE DOCUMENT 
    title = file_name    
    body = request.form.get('description')

    #import pdb; pdb.set_trace()
    
    doc = Document.query.filter(Document.title == title).first()
    
    if doc != None:
        flash ("document with this name already exist. Attaching it to {1} this student ", std.first_name)
        
    else:
        doc = Document(title, body, author_id)        
        doc.ufile_id = uploaded_file.id
        db.session.add(doc)
        
    db.session.commit()
    std_gt = attach_gt_to_std(std.id, doc.id)

  db.session.commit()
        
    return redirect(url_for('students.edit_student_documents' ))   

@std.route('/document_to_student_add2/<int:selected_student_id>', methods=['GET', 'POST'])
def document_to_student_add2(selected_student_id):
	#std = student_select2(selected_student_id)
	return redirect(url_for('students.document_to_student_add'))			

	
from flask import render_template, flash, redirect
from flask_sqlalchemy import SQLAlchemy

from flask_login import login_user
from flask import render_template, flash, redirect, session, url_for, request, g, jsonify, json
from flask_login import login_user, logout_user, current_user, login_required
#from flask_login import login_manager

from flask_login import LoginManager
from config import basedir
import config

from app import  db
from app.models import User, Teacher, Student, Profile, Strength, Weakness, Role

from app.forms import LoginForm, EditForm
from app.select.select import feedback_select2

from app.templates import *

from sqlalchemy import update

from app.content_management import Content

from sqlalchemy import text # for execute SQL raw SELECT ...


#FROM https://github.com/realpython/discover-flask/blob/master/project/users/views.py
#################
#### imports ####
#################

from flask import Blueprint

from app import forms
#try move to __init__
from app.models import User, Feedback, Teacher, Profile, Strength, Weakness, Role

################
#### config ####
################

fdb = Blueprint(
    'feedback', __name__,
    template_folder='templates'
) 
from app.select.select import student_select2, teacher_select2
from app import *


@fdb.route('/teacher_home' )
@login_required
def feedback_home():
	print("in teacher_home")
	return render_template('form6.html')

	
@fdb.route('/edit_feedback')
@login_required
def edit_feedback():

    print("")
    print("")
    print ("IN edit_feedback ")
    feedback = Feedback.query.all()
    return render_template('edit_feedback.html',feedback=feedback)
                            
                            								
@fdb.route('/feedback_add/<int:user_id>', methods=['GET', 'POST'])
def feedback_add(user_id):

    print("")
    print("")
    print ("IN teacher_add ")    

    #author_id = current_user._get_current_object().id
      
    if request.method == 'GET':
        return render_template('add_feedback.html', user_id=user_id)
           
    email = request.form.get('email')
    if email == None or email==[]:
        flash("בבקשה תמלא שדה זה")
        return render_template('add_feedback.html')
        
    user_friendly = request.form.get('user_friendly')
    if user_friendly == None or user_friendly==[]:
        flash("בבקשה תמלא את סעיף ידידותיות למשתמש")
        return render_template('add_feedback.html')
        
    team_work = request.form.get('team_work')
    
    make_job_easy = request.form.get('make_job_easy')
    if make_job_easy == None or make_job_easy==[]:
        flash("בבקשה תמלא שדה זה")
        return render_template('add_feedback.html')
           
    
    save_time = request.form.get('save_time')

    continue_using = request.form.get('continue_using')
    if user_friendly == None or user_friendly==[]:
        flash("בבקשה תענה על השאלה אם ייתה רוצה להמשיך להשתמש במערכת")
        return render_template('add_feedback.html')
               
    add = request.form.get('add')    
    remove = request.form.get('remove')        
    change = request.form.get('change')
    db_helps = request.form.get('db_helps')
    
    #feedback = Feedback.query.filter(Feedback.email==email).first()

    feedback = Feedback(email)
    
    feedback.user_friendly = user_friendly
    feedback.team_work = team_work
    feedback.make_job_easy = make_job_easy
    feedback.save_time = save_time
    feedback.continue_using = continue_using
    feedback.add = add
    feedback.remove = remove
    feedback.change = change
    feedback.db_helps = db_helps
        
    db.session.add(feedback)	
      
    db.session.commit()  
    db.session.refresh(feedback)
    # test insert res
    #return render_template('user_filled_feedback.html')
    user = User.query.filter(User.id==user_id).first()
    login_user(user)
    return redirect(url_for('students.student_home'))
  
    return render_template('student_login.html')

@fdb.route('/feedback_update/<int:selected_feedback_id>', methods=['GET', 'POST'])
@login_required
def feedback_update(selected_feedback_id):
        
    feedback = feedback_select2(selected_feedback_id)
        
    feedback = Feedback.query.filter(Feedback.id==selected_feedback_id).first()
    if feedback==None:
        flash ("אין משוב כה")
        return edit_feedback()

    if request.method == 'GET':
        #print("GET render update_teacher.html")
        return render_template('update_feedback.html', feedback=feedback)

    feedback.email = request.form.get('email')

    db.session.commit()  
    db.session.refresh(feedback)
    return edit_feedback()


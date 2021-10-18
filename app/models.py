
#FROM https://github.com/miguelgrinberg/microblog/blob/v0.15/app/models.py3#from hashlib import md5
from flask import current_app
from app import db, login
#FROM https://github.com/miguelgrinberg/microblog/blob/v0.15/app/models.py

from datetime import datetime
from sqlalchemy.dialects.postgresql import INET
	
#FROM https://stackoverflow.com/questions/26470637/many-to-many-relationship-with-extra-fields-using-wtforms-sqlalchemy-and-flask
from sqlalchemy import event
#from common import UTCDateTime

#FROM https://botproxy.net/docs/how-to/how-to-handle-ordered-many-to-many-relationship-association-proxy-in-flask-admin-form/
from sqlalchemy.ext.associationproxy import association_proxy

  
############################################ Dst Form for cascade dropdown display     
### For cascade dropdown FROM https://github.com/PrettyPrinted/dynamic_select_flask_wtf_javascript
### FROM https://www.tutorialspoint.com/flask/flask_wtf.htm
from flask_wtf import Form
from wtforms import TextField, TextAreaField, SubmitField, DateField , FieldList, FormField, IntegerField
from wtforms import SelectField, validators, ValidationError
### For cascade dropdown FROM https://github.com/PrettyPrinted/dynamic_select_flask_wtf_javascript
from flask import jsonify
from flask_wtf import FlaskForm 
from wtforms.fields.html5 import DateField

from wtforms.fields import StringField
from wtforms.widgets import TextArea
    
 
from datetime import datetime
from flask_login import UserMixin
   
### For Inheritance
from sqlalchemy.ext.declarative import declared_attr, has_inherited_table

#from sqlalchemy_imageattach.entity import Image, image_attachment


#FROM https://hackersandslackers.com/forms-in-flask-wtforms/
from wtforms import (StringField,
                     TextAreaField,
                     SubmitField,
                     PasswordField,
                     DateField,
                     SelectField)

'''
#from http://flask-appbuilder.readthedocs.io/en/latest/multipledbs.html for dealing with 2 data bases db
class Psps_db(db.Model):
	id = db.Column(db.Integer, primary_key=True)

class Menta_db(db.Model):
	__bind_key__ = 'menta_db'
	id = db.Column(db.Integer, primary_key=True)

####################################### User
'''


  
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column('username', db.String(20), unique=True , index=True)
    password = db.Column('password' , db.String(50))
    email = db.Column('email',db.String(50),unique=True , index=True)
    registered_on = db.Column('registered_on' , db.DateTime)
    is_super_user = db.Column(db.Boolean, nullable=True)
    school_logo_name = db.Column(db.String(200), nullable=True)  # FOR LAYOUT
    matya_logo_name =  db.Column(db.String(200), nullable=True)  # FOR LAYOUT
    
    def __init__(self , username ,password , email, is_super_user):
        self.username = username
        self.password = password
        self.email = email
        self.registered_on = datetime.utcnow()
        self.is_super_user = is_super_user

    def get_is_super_user(self):
        return self.is_super_user == True

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        try:
            return unicode(self.id)  # python 2
        except NameError:
            return str(self.id)	  # python 3
               
    def add(self,user):
        db.session.add(user)
        return session_commit ()

    def update(self):
        return session_commit()

    def delete(self,user):
        db.session.delete(user)
        return session_commit()
        

    def __repr__(self):
        return '<User %r>' % (self.username)
  
    ####################################### User

  
class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column('name', db.String(20), unique=True , index=True)
    email = db.Column('email',db.String(50),unique=True , index=True)
    registered_on = db.Column('registered_on' , db.DateTime)

    user_friendly =  db.Column(db.Integer)
    team_work =      db.Column(db.Integer)
    make_job_easy =  db.Column(db.Integer)
    save_time =      db.Column(db.Integer)
    continue_using = db.Column(db.Integer)
    
    change =         db.Column('change', db.Text)
    add =            db.Column('add', db.Text)
    remove =         db.Column('remove', db.Text)
    
    db_helps =       db.Column('db_helps', db.String(300), nullable=True)
    
    def __init__(self, email):
        self.email = email
        self.registered_on = datetime.utcnow()


    def __repr__(self):
        return '<Feedback %r>' % (self.name)
  
    ####################################### Feedback





#FROM https://github.com/miguelgrinberg/microblog/blob/v0.8/app/models.py

########################################## Parent_child_relationship

parent_child_relationship = db.Table('parent_child_relationship',
    db.Column('parent_id', db.Integer, db.ForeignKey('general_txt.id')),
    db.Column('child_id',  db.Integer, db.ForeignKey('general_txt.id'))
) 	
		   
########################################## Parent_child_relationship 
			   

############################################ General_txt 
from sqlalchemy.dialects.postgresql import JSON

class General_txt(db.Model):
   
    id = db.Column(db.Integer, primary_key=True)
    timestamp = datetime.utcnow()

    prnt_id =  db.Column(db.Integer, nullable=True)
    
    ufile_id =  db.Column(db.Integer, db.ForeignKey('ufile.id'), nullable=True)
 
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
        
    type = db.Column(db.String(50))     # for example" 'subject'
    
    h_name = db.Column(db.String(50))   # for example" 'חוזקה'
    e_name = db.Column(db.String(50))   # for example" 'Are of Subject'
    h_plural_name = db.Column(db.String(100))

    gt_type = db.Column(db.String(50))  # for example" 'Subject'
    class_name = db.Column(db.String(50))  # for example" 'Subject'

    title = db.Column(db.String(255), nullable=False)
    body =  db.Column(db.String(1000))
    default = db.Column(db.Boolean)
    
    #json = db.Column(db.JSON)
    
    color_txt = db.Column(db.String(50),   nullable=True)
    color = db.Column(db.String(50),       nullable=True)
    table_color = db.Column(db.String(50), nullable=True)
    title_color = db.Column(db.String(50), nullable=True)
    odd_color = db.Column(db.String(50),   nullable=True)
    even_color = db.Column(db.String(50),  nullable=True)
    
    image_url = db.Column(db.String(1000), nullable=True)
        
    selected = db.Column(db.Boolean)
    hide = db.Column(db.Boolean) 
    used = db.Column(db.Boolean) 
    usr_node = db.Column(db.String(10),   nullable=True) 


   # Anthonies suggestion
    children = db.relationship(
            'General_txt', secondary=parent_child_relationship,
            primaryjoin=(parent_child_relationship.c.parent_id == id),
            secondaryjoin=(parent_child_relationship.c.child_id == id),
            backref=db.backref('parent_child_relationship', lazy=False),
            lazy=False) 
 
    __mapper_args__ = {
        'polymorphic_identity':'general_txt',
        'polymorphic_on':type
    }
    
    def get_parent(self, type):
        parents = [i for i in self.parent_child_relationship if i.type == type]
        #assert len(parents) <= 1
        if len(parents) > 0:
            return parents[0]
        return None
        #all_gts = General_txt.query.all()
        #for parent_gt in all_gts:
        #    if (parent_gt.is_parent_of(self) and parent_gt.type=='tag'):
        #        return parent_gt
        #return None
 
    def set_parent(self, general_txt):
        if not self.is_parent_of(general_txt):
            self.children.append(general_txt)
            
    def unset_parent(self, general_txt):
        if self.is_parent_of(general_txt):
            self.children.remove(general_txt)
    
    #Anthonies suggestion
    def is_parent_of(self, general_txt):
            return general_txt in self.children 
            
    def children_ids(self):
            return General_txt.query.join(
                parnet_child_relationship, (parnet_child_relationship.c.children_id == General_txt.id)).filter(
                    parnet_child_relationship.c.parent_id == self.id).order_by(
                        Generl_txt.title) 
                        
    def get_all_gts_of_type(self):
        return eval(self.gt_type).query.all()
                     
    def get_childrens_of_type(self, type):
        #return eval(type).query.filter(eval(type) in self.children).all()
        return eval(type).query.filter(eval(type) in self.children) # So the caller can deside if he wants forstor all
                      
    def set_json_obj(self):
        json_obj = { 
            "h_name": self.h_name,
            "gt_type": self.gt_type,
            "title": self.title,
            "body": self.body,
            "color": self.color 
        }
        return json_obj
                        
                                        
    def __init__(self ,title, body, author_id):
            
        self.prnt_id = -1
        
        self.title = title
        self.body = body
        
        self.author_id = author_id

        self.timestamp = datetime.utcnow()        

        self.selected = False
        self.hide = False
        self.default = False
        self.used = True
        self.usr_node = "false"   # String an not boolean so it matches gojs template js file
        
        self.image_url = 'default_image.jpg'
        
    def __repr__(self):
        return self.class_name + ' ' + self.gt_type + ' ' +  str(self.id) + '  ' + self.title
  
############################################ General_txt

class Gt_form(FlaskForm):
      
    tag =  SelectField('נושא', choices=[], validators=[validators.Length(3, 200), validators.Required(message=('יש לבחור נושא'))], coerce=int)
    sub_tag =  SelectField('תת נושא', choices=[], validators=[validators.Required(message=('יש לבחור תת נושא'))], coerce=int)
    ar =  SelectField('קבוצת גיל', choices=[], validators=[validators.Required(message=('יש לבחור קבוצת גיל'))], coerce=int)
    scrt =  SelectField('רמת אבטחה', choices=[], validators=[validators.Required(message=('יש לבחור רמת אבטחה'))], coerce=int)
    
    gt_color_txt = StringField('שחור')
    gt_color = StringField('black')
    gt_title_color = StringField('gray')    
    gt_table_color = StringField('gray_table')
   
    gt_title = TextField("כותרת",[validators.Required("יש להכניס כותרת")])                                   
    gt_body =  TextField("תאור", render_kw={"rows": 70, "cols": 11})
    gt_type =  StringField('type')
    gt_class_name =  StringField('Class')
    gt_single_type_txt = StringField('single')
    gt_plural_type_txt = StringField('plural')

    who = SelectField('תפקיד מבצע המשימה', choices=[], validators=[validators.Required(message=('יש לבחור מבצע למשימה'))])
    status = SelectField('סטאטוס ביצוע', choices=[],   validators=[validators.Required(message=('יש לבחור סטאטוס ביצוע'))])
    due_date =  DateField('due_date')
          
    submit = SubmitField("שמור")
    
    ### FROM https://stackoverflow.com/questions/44242802/python-flask-validate-selectfield
    def validate_tag(form):
        if not form.tag.data == None:
          raise ValidationError('יש לבחור נושא')
          
############ General_txt Inherited classes #################

   
class Person(General_txt):

    __tablename__ = 'person'
    __mapper_args__ = {'polymorphic_identity': 'person'}
       
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)

    person_id = db.Column(db.Integer)
    
    gender = db.Column('gender', db.String(20), nullable = True)        
    first_name = db.Column('first_name', db.String(20), nullable = True)
    last_name = db.Column('last_name', db.String(20), index=True, nullable = True)
    email = db.Column('email',db.String(50),unique=True , index=True, nullable = True)
    birth_date = db.Column(db.Date, nullable = True)
    grade  = db.Column('grade', db.String(10), nullable = True)
    background = db.Column('background', db.Text, nullable = True)
    profetional = db.Column(db.String(140), nullable=True)
    
    def __init__(self ,person_id, title, body, author_id):
   
        self.h_name = "איש"          # for example" 'חוזקה'
        self.e_name = 'Person'       # for example" 'subect' 
        self.h_plural_name = 'אנשים'
        
        self.class_name = 'Person'
        self.gt_type = 'Person'
              
        self.color_txt = 'black'
        self.color = '##000066'
        
        self.editable = True
        
        self.person_id = person_id
        
        super(self.__class__, self).__init__(title=title, body=body, author_id=author_id)
          
            
class Teacher(General_txt):
    __tablename__ = 'teacher'
    __mapper_args__ = {'polymorphic_identity': 'teacher'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)

    teacher_id = db.Column(db.Integer)
    
    gender = db.Column('gender', db.String(20), nullable = True)        
    first_name = db.Column('first_name', db.String(20), nullable = True)
    last_name = db.Column('last_name', db.String(20), index=True, nullable = True)
    email = db.Column('email',db.String(50),unique=True , index=True, nullable = True)
    birth_date = db.Column(db.Date, nullable = True)
    grade  = db.Column('grade', db.String(10), nullable = True)
    background = db.Column('background', db.Text, nullable = True)
    profetional = db.Column(db.String(140), nullable=True)
    
    def __init__(self, teacher_id, title, body, author_id):
        self.h_name = "מורה"    # for example" 'חוזקה'
        self.e_name = 'Teacher'   # for example" 'subect' 
        self.h_plural_name = 'מורים'
        
        self.class_name = 'Teacher'
        self.gt_type = 'Teacher'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
        self.teacher_id = teacher_id
                
        super(self.__class__, self).__init__(title, body, author_id)       


class Student(General_txt):
    __tablename__ = 'student'
    __mapper_args__ = {'polymorphic_identity': 'student'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)

    student_id = db.Column(db.Integer)    
    gender = db.Column('gender', db.String(20), nullable = True)        
    first_name = db.Column('first_name', db.String(20), nullable = True)
    last_name = db.Column('last_name', db.String(20), index=True, nullable = True)
    email = db.Column('email',db.String(50),unique=True , index=True, nullable = True)
    birth_date = db.Column(db.Date, nullable = True)
    grade  = db.Column('grade', db.String(10), nullable = True)
    background = db.Column('background', db.Text, nullable = True)
    profetional = db.Column(db.String(140), nullable=True)
    
    def __init__(self, student_id, title, body, author_id):
        self.h_name = "תלמיד"    # for example" 'חוזקה'
        self.e_name = 'Student'   # for example" 'subect' 
        self.h_plural_name = 'תלמידים'
        
        self.class_name = 'Student'
        self.gt_type = 'Student'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
        
        self.id = student_id
        self.student_id = student_id
        self.first_name = title
        self.last_name = body
                                
        super(self.__class__, self).__init__(title, body, author_id)       
        
    @login.user_loader
    def load_user(id):
        return User.query.get(int(id))

  
class Role(General_txt):

    __tablename__ = 'role'
    __mapper_args__ = {'polymorphic_identity': 'role'}
       
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    student_id = db.Column(db.ForeignKey(Student.id), primary_key=False)
    teacher_id = db.Column(db.ForeignKey(Teacher.id), primary_key=False)
    

    def __init__(self ,student_id, teacher_id, role_name, author_id):
    
        self.student_id = student_id
        self.teacher_id = teacher_id
        
        super(self.__class__, self).__init__(role_name, role_name, author_id)
        
                   
class Value(General_txt):
    __tablename__ = 'value'
    __mapper_args__ = {'polymorphic_identity': 'value'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    description = db.Column('description', db.Text, nullable = True)

    def __init__(self ,title, body, author_id):
        self.h_name = "ערך"    # for example" 'חוזקה'
        self.e_name = 'Value'   # for example" 'subect' 
        self.h_plural_name = 'ערכים'
        
        self.class_name = 'Value'
        self.gt_type = 'Value'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
                
        super(self.__class__, self).__init__(title, body, author_id)       
                   
class Obstacle(General_txt):
    __tablename__ = 'obstacle'
    __mapper_args__ = {'polymorphic_identity': 'obstacle'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    description = db.Column('description', db.Text, nullable = True)

    def __init__(self ,title, body, author_id):
        self.h_name = "מכשול"    # for example" 'חוזקה'
        self.e_name = 'Obstacle'   # for example" 'subect' 
        self.h_plural_name = 'מכשולים'
        
        self.class_name = 'Obstacle'
        self.gt_type = 'Obstacle'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
                
        super(self.__class__, self).__init__(title, body, author_id)       

               

class Situation(General_txt):
    __tablename__ = 'situation'
    __mapper_args__ = {'polymorphic_identity': 'situation'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    description = db.Column('description', db.Text, nullable=True)

    def __init__(self ,title, body, author_id):
        self.h_name = "סיטואציה"    # for example" 'חוזקה'
        self.e_name = 'Situation'   # for example" 'subect' 
        self.h_plural_name = 'סיטואציות'
        
        self.class_name = 'Situation'
        self.gt_type = 'Situation'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
                
        super(self.__class__, self).__init__(title, body, author_id)       

            
class Solution(General_txt):
    __tablename__ = 'Solution'
    __mapper_args__ = {'polymorphic_identity': 'solution'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    description = db.Column('description', db.Text, nullable = True)

    def __init__(self ,title, body, author_id):
        self.h_name = "פתרון"    # for example" 'חוזקה'
        self.e_name = 'Solution'   # for example" 'subect' 
        self.h_plural_name = 'פתרונות'
        
        self.class_name = 'Solution'
        self.gt_type = 'Solution'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
                
        super(self.__class__, self).__init__(title, body, author_id)       


class Thought(General_txt):
    __tablename__ = 'Thought'
    __mapper_args__ = {'polymorphic_identity': 'thought'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    description = db.Column('description', db.Text, nullable = True)

    def __init__(self ,title, body, author_id):
        self.h_name = "מחשבה"    # for example" 'חוזקה'
        self.e_name = 'Thought'   # for example" 'subect' 
        self.h_plural_name = 'מחשבות'
        
        self.class_name = 'Thought'
        self.gt_type = 'Thought'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
                
        super(self.__class__, self).__init__(title, body, author_id)       

           
class Emotion(General_txt):
    __tablename__ = 'Emotion'
    __mapper_args__ = {'polymorphic_identity': 'emotion'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    description = db.Column('description', db.Text, nullable = True)

    def __init__(self ,title, body, author_id):
        self.h_name = "רגש"    # for example" 'חוזקה'
        self.e_name = 'Emotion'   # for example" 'subect' 
        self.h_plural_name = 'רגשות'
        
        self.class_name = 'Emotion'
        self.gt_type = 'Emotion'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
                
        super(self.__class__, self).__init__(title, body, author_id)       

                   
class Behavior(General_txt):
    __tablename__ = 'Behavior'
    __mapper_args__ = {'polymorphic_identity': 'behavior'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    description = db.Column('description', db.Text, nullable = True)

    def __init__(self ,title, body, author_id):
        self.h_name = "התנהגות"    # for example" 'חוזקה'
        self.e_name = 'Behavior'   # for example" 'subect' 
        self.h_plural_name = 'התנהגויות'
        
        self.class_name = 'Behavior'
        self.gt_type = 'Behavior'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
                
        super(self.__class__, self).__init__(title, body, author_id)       

                   
class Result(General_txt):
    __tablename__ = 'Result'
    __mapper_args__ = {'polymorphic_identity': 'result'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    description = db.Column('description', db.Text, nullable = True)

    def __init__(self ,title, body, author_id):
        self.h_name = "תוצאה"    # for example" 'חוזקה'
        self.e_name = 'Result'   # for example" 'subect' 
        self.h_plural_name = 'התנהגויות'
        
        self.class_name = 'Result'
        self.gt_type = 'Result'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
                
        super(self.__class__, self).__init__(title, body, author_id)       




class School(General_txt):
    __tablename__ = 'school'
    __mapper_args__ = {'polymorphic_identity': 'school'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    school_logo_name = db.Column(db.String(200))
    matya_logo_name =  db.Column(db.String(200))

    def __init__(self ,title, body, author_id):
        
        self.h_name = 'בית ספר'   
        self.e_name = 'School'  
     
        self.class_name = 'School'
        self.color_txt = 'black'
        self.color = '##000066'  
        self.editable = True
        super(self.__class__, self).__init__(title, body, author_id)       
            

  
class Destination(General_txt):
    __tablename__ = 'destination'
    __mapper_args__ = {'polymorphic_identity': 'destination'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self ,title, body, author_id):
        self.h_name = "מטרה"          # for example" 'חוזקה'
        self.e_name = 'Destination'   # for example" 'subect' 
        self.h_plural_name = 'מטרות'
        
        self.class_name = 'Destination'
        self.gt_type = 'Destination'

        self.color_txt = 'green'
        self.color = '#006600' 
        self.table_color = 'green_table'
        self.title_color = '#66ff99'
        self.editable = True
                
        super(self.__class__, self).__init__(title, body, author_id)       
            
### FROM https://stackoverflow.com/questions/44242802/python-flask-validate-selectfield
class Dst_form(FlaskForm):
    ar =   SelectField('קבוצת גיל', choices=[], validators=[validators.Required(message=('יש לבחור קבוצת גיל'))], coerce=int)                      
    tag =  SelectField('נושא',      choices=[], validators=[validators.Required(message=('יש לבחור נושא'))], coerce=int)
    sub_tag =  SelectField('תת נושא',   choices=[], validators=[validators.Required(message=('יש לבחור תת נושא'))], coerce=int)
    scrt = SelectField('רמת אבטחה', choices=[], validators=[validators.Required(message=('יש לבחור רמת אבטחה'))], coerce=int)
    
    gt_title = TextField("כותרת מטרה",[validators.Required("יש להכניס מטרה")])                                   
    gt_body =  TextField("תאור מטרה", render_kw={"rows": 70, "cols": 11})
    
    submit = SubmitField("שמור מטרה")
    
    ### FROM https://stackoverflow.com/questions/44242802/python-flask-validate-selectfield
    def validate_ar(form):
        if  not form.ar.data == None:
          raise ValidationError('יש לבחור קבוצת גיל')

############################################ Dst Form for cascade dropdown display     
    

class Goal(General_txt):
    __tablename__ = 'goal'
    __mapper_args__ = {'polymorphic_identity': 'goal'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self ,title, body, author_id):        
    
        self.h_name = 'יעד'   
        self.e_name = 'Goal'  
        self.h_plural_name = 'יעדים'
        
        self.class_name = 'Goal'

        self.color_txt = 'MidnightBlue'
        self.color = '#0000cc'
        self.table_color = 'blue_table'
        self.title_color = '#d6e0f5'
  
        self.editable = True
        super(self.__class__, self).__init__(title, body, author_id)       
            

### FROM https://stackoverflow.com/questions/44242802/python-flask-validate-selectfield
class Goal_form(FlaskForm):
 
    goal_title = TextField("כותרת יעד",[validators.Required("יש להכניס יעד")])                                   
    goal_body =  TextField("תאור יעד", render_kw={"rows": 70, "cols": 11})

    gt_title = TextField("כותרת מטרה",[validators.Required("יש להכניס מטרה")])                                   
    gt_body =  TextField("תאור מטרה", render_kw={"rows": 70, "cols": 11})
        
    submit = SubmitField("שמור יעד")

############################################ Goal Form for cascade dropdown display     


### FROM https://stackoverflow.com/questions/44242802/python-flask-validate-selectfield
class Std_goal_form(FlaskForm):

    goal_id = IntegerField('מספר היעד')  
    goal_title = TextField("כותרת מטרה",[validators.Required("יש להכניס מטרה")])                                   
    goal_body =  TextField("תאור מטרה", render_kw={"rows": 70, "cols": 11})

    status =   SelectField('סטאטוס', choices=[], validators=[validators.Required(message=('יש לבחור סטאטוס'))], coerce=int)                      
    due_date = db.Column(db.Date)
        
    submit = SubmitField("שמור יעד")
    
    ### FROM https://stackoverflow.com/questions/44242802/python-flask-validate-selectfield
    def validate_ar(form):
        if  not form.status.data == None:
          raise ValidationError('יש לבחור סטאטוס')

############################################ Dst Form for cascade dropdown display     

    
class Todo(General_txt):
    __tablename__ = 'todo'
    __mapper_args__ = {'polymorphic_identity': 'todo'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self ,title, body, author_id):
        
        self.h_name = 'משימה'   
        self.e_name = 'Mission'  
        self.h_plural_name = 'משימות'
        
        self.class_name = 'Todo'
        
        self.color_txt = 'orange'
        self.color = '#ffcc00' 
        self.table_color = 'orange_table'
        self.title_color = '#ffff99'
          
        self.editable = True
        super(self.__class__, self).__init__(title, body, author_id)       
            

    
class Test(General_txt):
    __tablename__ = 'test'
    __mapper_args__ = {'polymorphic_identity': 'test'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self ,title, body, author_id):
        
        self.h_name = 'אמות מידה להערכה'   
        self.e_name = 'Evaluation indices'  
        self.h_plural_name = 'אמות מידה להערכה'
        
        self.class_name = 'Test'
        
        self.color_txt = 'orange'
        self.color = '#ffcc00' 
        self.table_color = 'orange_table'
        self.title_color = '#ffff99'
          
        self.editable = True
        super(self.__class__, self).__init__(title, body, author_id)       
            

    
class Method(General_txt):
    __tablename__ = 'method'
    __mapper_args__ = {'polymorphic_identity': 'method'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self ,title, body, author_id):
        
        self.h_name = 'דרכי הוראה, שיטות, אמצעים ומשאבים'   
        self.e_name = 'Mission'  
        self.h_plural_name = 'דרכי הוראה, שיטות, אמצעים ומשאבים'
        
        self.class_name = 'Method'
        
        self.color_txt = 'purple'
        self.color = '#660066' 
        self.table_color = 'purple_table'
        self.title_color = '#cc3399'
          
        self.editable = True
        super(self.__class__, self).__init__(title, body, author_id)       
            


############################################ Todo_form
#FROM https://stackoverflow.com/questions/7979548/how-to-render-my-textarea-with-wtforms
########################################## Todo     
class Todo_form(FlaskForm):
    id = db.Column(db.Integer, primary_key=True)
    
    dst_id =  db.Column(db.Integer,  db.ForeignKey('destination.id'))
    goal_id =  db.Column(db.Integer, db.ForeignKey('goal.id'))

    title = TextField("כותרת משימה",[validators.Required("יש להכניס מטרה")])                                   
    body =  TextField("תאור משימה", render_kw={"rows": 70, "cols": 90})
    
    who = SelectField('תפקיד מבצע המשימה', choices=[], validators=[validators.Required(message=('יש לבחור מבצע למשימה'))])
    status = SelectField('סטאטוס ביצוע', choices=[],   validators=[validators.Required(message=('יש לבחור סטאטוס ביצוע'))])
    method_type = SelectField('מדיית הוראה', choices=[], validators=[validators.Required(message=('יש לבחור מדיית הוראה'))])
    
    due_date =  DateField('due_date')

    selected = db.Column(db.Boolean)
    hide =     db.Column(db.Boolean)
    
    submit = SubmitField("שמור")	
    
############################################ Todo_form

    
class Profile(General_txt):
    __tablename__ = 'profile'
    __mapper_args__ = {'polymorphic_identity': 'profile'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
       
    def __init__(self ,title, body, author_id):
                
        self.h_name = 'פרופיל'   
        self.e_name = 'Profile'  

        self.class_name = 'Profile'
        self.gt_type = 'Profile'
        
        self.color_txt = 'black'
        self.color = '##000066'  
        self.editable = True
        super(self.__class__, self).__init__(title, body, author_id)       
            

    ### FROM https://stackoverflow.com/questions/44242802/python-flask-validate-selectfield
    def validate_tag(form):
        if not form.tag.data == None:
          raise ValidationError('יש לבחור נושא')

class Strength(General_txt):
    __tablename__ = 'strength'
    __mapper_args__ = {'polymorphic_identity': 'strength'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self ,title, body, author_id):
        
        self.h_name = 'מוקד כח'   
        self.e_name = 'Strenght' 
        self.h_plural_name = 'מוקדי כח'

        self.class_name = 'Strength'
        self.gt_type = 'Strength'
        
        self.color_txt = 'green'
        self.color = 'mediumseagreen'
        self.table_color = 'light_green_table'
        self.title_color = '#66ff99'
        self.odd_color = '#e6ffe6'
        self.even_color = '#ccffcc'
              
        self.editable = True
        super(self.__class__, self).__init__(title, body, author_id)       
            
class Subject(General_txt):
    __tablename__ = 'subject'
    __mapper_args__ = {'polymorphic_identity': 'subject'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
          
    def __init__(self ,title, body, author_id):
                 
        self.h_name = 'תחום עיניין'   
        self.e_name = 'Subject'  
        self.h_plural_name = 'תחומי עיניין'
        
        self.class_name = 'Subject'
        self.gt_type = 'Subject'
        
        self.color_txt = 'blue'
        self.color = '#0089b3' 
        self.table_color = 'light_blue_table'
        self.title_color = '#d6e0f5'
        self.odd_color = '#e6f2ff'  
        self.even_color = '#cce5ff' 
        
        self.editable = True
        
        super(self.__class__, self).__init__(title, body, author_id)

class Weakness(General_txt):
    __tablename__ = 'weakness'
    __mapper_args__ = {'polymorphic_identity': 'weakness'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self ,title, body, author_id):
                 
        self.h_name = 'מוקד לחיזוק'   
        self.e_name = 'Weakness'  
        self.h_plural_name = 'מוקדים לחיזוק'
        
        self.class_name = 'Weakness'
        self.gt_type = 'Weakness'
        
        self.color_txt = 'red'
        self.color = '#ff5c33'
        self.table_color = 'light_red_table'
        self.title_color = '#ff9999'
        self.odd_color = '#ffe6e6'
        self.even_color = '#ffb3b3'
        
        self.editable = True         
        super(self.__class__, self).__init__(title, body, author_id)

class Gray(General_txt):
    __tablename__ = 'gray'
    __mapper_args__ = {'polymorphic_identity': 'gray'}
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self ,title, body, author_id):
                 
        self.h_name = 'לתלמיד'   
        self.e_name = 'to student'  
        self.h_plural_name = 'חדשים'
        
        self.class_name = 'Gray'
        self.gt_type = 'Gray'
        
        self.color_txt = 'gray'
        self.color = '#606060'
        self.table_color = 'gray_table'
        self.title_color = '#D8D8D8'
        self.editable = True         
        super(self.__class__, self).__init__(title, body, author_id)

   
##########Choices #####################################

class Tag(General_txt):
    __tablename__ = 'tag'

    __mapper_args__ = {'polymorphic_identity': 'tag'}

    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self, title, body, author_id):
                          
        self.h_name = 'נושא'   
        self.e_name = 'Tag'  
        
        self.class_name = 'Tag'
        self.gt_type = 'Tag'
        
        self.color_txt = 'black'
        self.color = '#00284d'
        self.editable = True     
        super(self.__class__, self).__init__(title, body, author_id)
        
        
class Sub_tag(General_txt):
    __tablename__ = 'sub_tag'

    __mapper_args__ = {'polymorphic_identity': 'sub_tag'}

    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)


    def __init__(self, title, body, author_id):
                         
        self.h_name = 'תת נושא'   
        self.e_name = 'Sub tag'  
        
        self.class_name = 'Sub_tag'
        self.gt_type = 'Sub_tag'
        
        self.color_txt = 'black'
        self.color = '#00284d'
        self.editable = True     
        super(self.__class__, self).__init__(title, body, author_id)

        
class Age_range(General_txt):

    __tablename__ = 'age_range'

    __mapper_args__ = {'polymorphic_identity': 'age_range'}

    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
     
    from_age = db.Column(db.Integer)
    to_age = db.Column(db.Integer)
         
    def __init__(self, title, body, from_age, to_age, author_id):
        self.from_age = from_age
        self.to_age = to_age
                         
        self.h_name = 'קבוצת גיל'   
        self.e_name = 'Age range'  
                
        self.class_name = 'Age_range'
        self.gt_type = 'Age_range'
        
        self.color_txt = 'black'
        self.color = '#00284d'
        self.editable = True         
        super(self.__class__, self).__init__(title, body, author_id)
        
class Scrt(General_txt):

    __tablename__ = 'scrt'
    __mapper_args__ = {'polymorphic_identity': 'scrt'}

    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self, title, body, author_id):
        
        self.h_name = 'רמת אבטחה'   
        self.e_name = 'Security level'  
                
        self.class_name = 'Scrt'
        self.gt_type = 'Scrt'
        
        self.color_txt = 'black'
        self.color = '#00284d'
        self.editable = True     
        super(self.__class__, self).__init__(title, body, author_id)
     
      
class Status(General_txt):

    __tablename__ = 'status'
    __mapper_args__ = {'polymorphic_identity': 'status'}
    
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
        
    def __init__(self, title, body, author_id):
           
        self.h_name = 'סטאטוס'   
        self.e_name = 'Status'  
                
        self.class_name = 'Status'
        self.gt_type = 'Status'
        
        self.color_txt = 'black'
        self.color = '#00284d'
        self.editable = True     
        super(self.__class__, self).__init__(title, body, author_id)

    
class Accupation(General_txt):

    __tablename__ = 'accupation'
    __mapper_args__ = {'polymorphic_identity': 'accupation'}
       
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self, title, body, author_id):
    
        self.h_name = 'תפקיד'   
        self.e_name = 'Accupation'  
            
        self.class_name = 'Accupation'
        self.gt_type = 'Accupation'
        
        self.color_txt = 'black'
        self.color = '#00284d'
        self.editable = True     
        super(self.__class__, self).__init__(title, body, author_id)
    
    
class Method_type(General_txt):

    __tablename__ = 'method_type'
    __mapper_args__ = {'polymorphic_identity': 'method_type'}
       
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self, title, body, author_id):
    
        self.h_name = 'סוג\מדיית הוראה'   
        self.e_name = 'Method media or type'  
            
        self.class_name = 'Method_type'
        self.gt_type = 'Method_type'
        
        self.color_txt = 'black'
        self.color = '#00284d'
        self.editable = True     
        super(self.__class__, self).__init__(title, body, author_id)
    
##########Choices #####################################


########################################## Resource
						   			   
class Resource(General_txt):

    __tablename__ = 'resource'
    __mapper_args__ = {'polymorphic_identity': 'resource'}
       
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self, title, body, author_id):
    
        self.h_name = 'מקורות'   
        self.e_name = 'Resource'  
            
        self.class_name = 'Resource'
        self.gt_type = 'Resource'
        
        self.color_txt = 'black'
        self.color = '#00284d'
        self.editable = True     
        super(self.__class__, self).__init__(title, body, author_id)
   

class Document(General_txt):

    __tablename__ = 'document'
    __mapper_args__ = {'polymorphic_identity': 'document'}
       
    id = db.Column(db.ForeignKey(General_txt.id), primary_key=True)
    
    def __init__(self, title, body, author_id):
    
        self.h_name = 'מסמך'   
        self.e_name = 'Document'  
            
        self.class_name = 'Document'
        self.gt_type = 'Document'
        
        self.color_txt = 'black'
        self.color = '#00284d'
        self.editable = True     
        super(self.__class__, self).__init__(title, body, author_id)

############################################ Document  

  
########################################## U-File
                           						   
class Ufile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    data = db.Column(db.LargeBinary)   #file content    
    name = db.Column(db.String(300), nullable=True)
    
    body = db.Column(db.String(255), nullable=True) 
    selected = db.Column(db.Boolean)
    hide = db.Column(db.Boolean)
   
    def __init__(self, name, data, author_id):

        self.name = name
        self.data = data
        self.author_id = author_id
        self.hide = False
        self.selected = False


 
  
# from https://github.com/Leo-G/Freddy/blob/master/app/models.py		  
#Universal functions

def  session_commit ():
	try:
		db.session.commit()
	except SQLAlchemyError as e:
		db.session.rollback()
		reason=str(e)
		return reason
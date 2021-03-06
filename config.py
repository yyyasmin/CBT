import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    
    '''

    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
    'postgresql://postgres:postgres@localhost:5432/menta'
    '''

    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', '').replace('postgres://', 'postgresql://') or \
        'postgresql://postgres:postgres@localhost:5432/menta'
  
    #SQLALCHEMY_TRACK_MODIFICATIONS = True
    LOG_TO_STDOUT = os.environ.get('LOG_TO_STDOUT')
    #SQLALCHAMY_ECHO = True

    #FROM https://stackoverflow.com/questions/53678781/how-to-configure-flask-uploads-properly-to-upload-files

    ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'PNG', 'jpg', 'jpeg', 'gif', 'dcox', 'JPG'])
    UPLOAD_FOLDER = '/resource files'
    UPLOADED_FILES_DEST = '/uploaded_files_dest'
    #FROM https://pythonhosted.org/Flask-Scss/
    SCSS_STATIC_DIR = 'app/static'
    SCSS_ASSET_DIR = 'app/static/assets'
    #SCSS_LOAD_PATHS = [ '/Library/Ruby/Gems/1.8/gems/compass-0.11.5/frameworks/compass/stylesheets/']

    #ANTHONIES ADVISE 
    #SQLALCHEMY_ECHO = True 
    #FROM https://stackoverflow.com/questions/53678781/how-to-configure-flask-uploads-properly-to-upload-files
      
    '''
    MAIL_SERVER = os.environ.get('MAIL_SERVER')
    MAIL_PORT = int(os.environ.get('MAIL_PORT') or 25)
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS') is not None
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    ADMINS = ['your-email@example.com']
    LANGUAGES = ['en', 'es']
    MS_TRANSLATOR_KEY = os.environ.get('MS_TRANSLATOR_KEY')
    POSTS_PER_PAGE = 25
    '''
    
    WTF_CSRF_ENABLED = True    
    DEBUG = True
    TEMPLATES_AUTO_RELOAD = True
    FLASK_ENV = 'development'
    
    
        
    

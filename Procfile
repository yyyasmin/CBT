web: gunicorn run:app --log-level=debug;

init: python db_create.py;
migrate: flask db migrate
upgrade: flask db upgrade

worker: rq worker -u $REDIS_URL menta4-tasks
web2: gunicorn app:app --log-level=debug

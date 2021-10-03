web: gunicorn run:app --log-level=debug;

init: flask db init;
migrate: flask db migrate
upgrade: flask db upgrade

worker: rq worker -u $REDIS_URL menta4-tasks
web2: gunicorn app:app --log-level=debug

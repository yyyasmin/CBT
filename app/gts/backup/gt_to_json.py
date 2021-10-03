#FROM https://stackoverflow.com/questions/7102754/jsonify-a-sqlalchemy-result-set-in-flask

from flask.ext.restful import Resource, fields, marshal

topic_fields = {
    'id':   fields.Number,
    'class_name': fields.String,
    'title': fields.String,
    'body':     fields.text,
    'status': fields.String,
}

class TopicListApi(Resource):
    def get(self):
        return {'topics': [marshal(topic, topic_fields) for topic in DbTopic.query.all()]}
"""empty message

Revision ID: d71a04a60d55
Revises: 
Create Date: 2021-10-21 00:09:25.262114

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd71a04a60d55'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    
    op.rename_table('accupation', 'Accupation')
    op.rename_table('student', 'Student')
    op.rename_table('age_range', 'Age_range')
    op.rename_table('destination', 'Destination')
    op.rename_table('document', 'Document')
    op.rename_table('feedback', 'Feedback')
    op.rename_table('goal', 'Goal')
    op.rename_table('gray', 'Gray')
    op.rename_table('value', 'Value')
    op.rename_table('status', 'Status')
    op.rename_table('scrt', 'Scrt')
    op.rename_table('sub_tag', 'Sub_tag')
    op.rename_table('tag', 'Tag')
    op.rename_table('weakness', 'Weakness')
    op.rename_table('subject', 'Subject')
    op.rename_table('strength', 'Strength')
    op.rename_table('profile', 'Profile')
    op.rename_table('method', 'Method')
    op.rename_table('test', 'Test')
    op.rename_table('todo', 'Todo')
    op.rename_table('school', 'School')
    op.rename_table('teacher', 'Teacher')
    op.rename_table('person', 'Person')
    op.rename_table('obstacle', 'Obstacle')
    op.rename_table('role', 'Role')

    

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.rename_table('Accupation', 'accupation')
    op.rename_table('Student', 'student')
    # ### end Alembic commands ###

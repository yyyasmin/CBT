"""empty message

Revision ID: 64b60ee81ed7
Revises: 
Create Date: 2021-10-04 16:06:23.853502

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '64b60ee81ed7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('general_txt', sa.Column('prnt_id', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('general_txt', 'prnt_id')
    # ### end Alembic commands ###

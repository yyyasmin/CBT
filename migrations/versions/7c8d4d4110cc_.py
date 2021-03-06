"""empty message

Revision ID: 7c8d4d4110cc
Revises: 
Create Date: 2021-10-23 17:46:08.978205

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7c8d4d4110cc'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('accupation',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('age_range',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('from_age', sa.Integer(), nullable=True),
    sa.Column('to_age', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('behavior',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('destination',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('document',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('emotion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('goal',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('gray',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('method',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('method_type',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('obstacle',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('profile',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('resource',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('result',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('school',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('school_logo_name', sa.String(length=200), nullable=True),
    sa.Column('matya_logo_name', sa.String(length=200), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('scrt',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('situation',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('solution',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('status',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('strength',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('student',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.Column('gender', sa.String(length=20), nullable=True),
    sa.Column('first_name', sa.String(length=20), nullable=True),
    sa.Column('last_name', sa.String(length=20), nullable=True),
    sa.Column('email', sa.String(length=50), nullable=True),
    sa.Column('birth_date', sa.Date(), nullable=True),
    sa.Column('grade', sa.String(length=10), nullable=True),
    sa.Column('background', sa.Text(), nullable=True),
    sa.Column('profetional', sa.String(length=140), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_student_email'), 'student', ['email'], unique=True)
    op.create_index(op.f('ix_student_last_name'), 'student', ['last_name'], unique=False)
    op.create_table('sub_tag',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('subject',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tag',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('teacher',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('teacher_id', sa.Integer(), nullable=True),
    sa.Column('gender', sa.String(length=20), nullable=True),
    sa.Column('first_name', sa.String(length=20), nullable=True),
    sa.Column('last_name', sa.String(length=20), nullable=True),
    sa.Column('email', sa.String(length=50), nullable=True),
    sa.Column('birth_date', sa.Date(), nullable=True),
    sa.Column('grade', sa.String(length=10), nullable=True),
    sa.Column('background', sa.Text(), nullable=True),
    sa.Column('profetional', sa.String(length=140), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_teacher_email'), 'teacher', ['email'], unique=True)
    op.create_index(op.f('ix_teacher_last_name'), 'teacher', ['last_name'], unique=False)
    op.create_table('test',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('thought',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('todo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('value',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('weakness',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('role',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.Column('teacher_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], ),
    sa.ForeignKeyConstraint(['student_id'], ['student.id'], ),
    sa.ForeignKeyConstraint(['teacher_id'], ['teacher.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('Test')
    op.drop_table('Profile')
    op.drop_table('Behavior')
    op.drop_table('Status')
    op.drop_table('Sub_tag')
    op.drop_table('Tag')
    op.drop_table('Goal')
    op.drop_table('Age_range')
    op.drop_table('Weakness')
    op.drop_table('Situation')
    op.drop_table('Result')
    op.drop_table('Resource')
    op.drop_table('Role')
    op.drop_table('Obstacle')
    op.drop_table('Strength')
    op.drop_table('Thought')
    op.drop_table('Method')
    op.drop_table('Solution')
    op.drop_table('Subject')
    op.drop_table('Gray')
    op.drop_index('ix_Teacher_email', table_name='Teacher')
    op.drop_index('ix_Teacher_last_name', table_name='Teacher')
    op.drop_table('Teacher')
    op.drop_table('Emotion')
    op.drop_table('Method_type')
    op.drop_table('Todo')
    op.drop_table('Document')
    op.drop_index('ix_Student_email', table_name='Student')
    op.drop_index('ix_Student_last_name', table_name='Student')
    op.drop_table('Student')
    op.drop_table('Scrt')
    op.drop_table('Value')
    op.drop_table('Accupation')
    op.drop_table('School')
    op.drop_table('Destination')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Destination',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Destination_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Destination_pkey')
    )
    op.create_table('School',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('school_logo_name', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('matya_logo_name', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='School_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='School_pkey')
    )
    op.create_table('Accupation',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='accupation_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='accupation_pkey')
    )
    op.create_table('Value',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Value_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Value_pkey')
    )
    op.create_table('Scrt',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Scrt_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Scrt_pkey')
    )
    op.create_table('Student',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('student_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('gender', sa.VARCHAR(length=20), autoincrement=False, nullable=True),
    sa.Column('first_name', sa.VARCHAR(length=20), autoincrement=False, nullable=True),
    sa.Column('last_name', sa.VARCHAR(length=20), autoincrement=False, nullable=True),
    sa.Column('email', sa.VARCHAR(length=50), autoincrement=False, nullable=True),
    sa.Column('birth_date', sa.DATE(), autoincrement=False, nullable=True),
    sa.Column('grade', sa.VARCHAR(length=10), autoincrement=False, nullable=True),
    sa.Column('background', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('profetional', sa.VARCHAR(length=140), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Student_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Student_pkey'),
    postgresql_ignore_search_path=False
    )
    op.create_index('ix_Student_last_name', 'Student', ['last_name'], unique=False)
    op.create_index('ix_Student_email', 'Student', ['email'], unique=False)
    op.create_table('Document',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Document_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Document_pkey')
    )
    op.create_table('Todo',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Todo_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Todo_pkey')
    )
    op.create_table('Method_type',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Method_type_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Method_type_pkey')
    )
    op.create_table('Emotion',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Emotion_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Emotion_pkey')
    )
    op.create_table('Teacher',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('teacher_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('gender', sa.VARCHAR(length=20), autoincrement=False, nullable=True),
    sa.Column('first_name', sa.VARCHAR(length=20), autoincrement=False, nullable=True),
    sa.Column('last_name', sa.VARCHAR(length=20), autoincrement=False, nullable=True),
    sa.Column('email', sa.VARCHAR(length=50), autoincrement=False, nullable=True),
    sa.Column('birth_date', sa.DATE(), autoincrement=False, nullable=True),
    sa.Column('grade', sa.VARCHAR(length=10), autoincrement=False, nullable=True),
    sa.Column('background', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('profetional', sa.VARCHAR(length=140), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Teacher_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Teacher_pkey'),
    postgresql_ignore_search_path=False
    )
    op.create_index('ix_Teacher_last_name', 'Teacher', ['last_name'], unique=False)
    op.create_index('ix_Teacher_email', 'Teacher', ['email'], unique=False)
    op.create_table('Gray',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Gray_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Gray_pkey')
    )
    op.create_table('Subject',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Subject_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Subject_pkey')
    )
    op.create_table('Solution',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Solution_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Solution_pkey')
    )
    op.create_table('Method',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Method_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Method_pkey')
    )
    op.create_table('Thought',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Thought_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Thought_pkey')
    )
    op.create_table('Strength',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Strength_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Strength_pkey')
    )
    op.create_table('Obstacle',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Obstacle_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Obstacle_pkey')
    )
    op.create_table('Role',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('student_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('teacher_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Role_id_fkey'),
    sa.ForeignKeyConstraint(['student_id'], ['Student.id'], name='Role_student_id_fkey'),
    sa.ForeignKeyConstraint(['teacher_id'], ['Teacher.id'], name='Role_teacher_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Role_pkey')
    )
    op.create_table('Resource',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Resource_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Resource_pkey')
    )
    op.create_table('Result',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Result_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Result_pkey')
    )
    op.create_table('Situation',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Situation_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Situation_pkey')
    )
    op.create_table('Weakness',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Weakness_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Weakness_pkey')
    )
    op.create_table('Age_range',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('from_age', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('to_age', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Age_range_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Age_range_pkey')
    )
    op.create_table('Goal',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Goal_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Goal_pkey')
    )
    op.create_table('Tag',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Tag_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Tag_pkey')
    )
    op.create_table('Sub_tag',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Sub_tag_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Sub_tag_pkey')
    )
    op.create_table('Status',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Status_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Status_pkey')
    )
    op.create_table('Behavior',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Behavior_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Behavior_pkey')
    )
    op.create_table('Profile',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Profile_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Profile_pkey')
    )
    op.create_table('Test',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['id'], ['general_txt.id'], name='Test_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='Test_pkey')
    )
    op.drop_table('role')
    op.drop_table('weakness')
    op.drop_table('value')
    op.drop_table('todo')
    op.drop_table('thought')
    op.drop_table('test')
    op.drop_index(op.f('ix_teacher_last_name'), table_name='teacher')
    op.drop_index(op.f('ix_teacher_email'), table_name='teacher')
    op.drop_table('teacher')
    op.drop_table('tag')
    op.drop_table('subject')
    op.drop_table('sub_tag')
    op.drop_index(op.f('ix_student_last_name'), table_name='student')
    op.drop_index(op.f('ix_student_email'), table_name='student')
    op.drop_table('student')
    op.drop_table('strength')
    op.drop_table('status')
    op.drop_table('solution')
    op.drop_table('situation')
    op.drop_table('scrt')
    op.drop_table('school')
    op.drop_table('result')
    op.drop_table('resource')
    op.drop_table('profile')
    op.drop_table('obstacle')
    op.drop_table('method_type')
    op.drop_table('method')
    op.drop_table('gray')
    op.drop_table('goal')
    op.drop_table('emotion')
    op.drop_table('document')
    op.drop_table('destination')
    op.drop_table('behavior')
    op.drop_table('age_range')
    op.drop_table('accupation')
    # ### end Alembic commands ###

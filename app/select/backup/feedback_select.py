
###Select a feedback from a list 	
@slct.route('/feedback_select2/<int:selected_feedback_id>', methods=['GET', 'POST'])
def feedback_select2(selected_feedback_id):
	
    feedbacks = Feedback.query.all()
    for feedback in feedbacks:
        feedback.selected = False

    feedback = Feedback.query.filter(Feedback.id==selected_feedback_id).first()
    if feedback == None:
        flash("אין כזה בית ספר")
        redirect(url_for('feedbacks.edit_feedbacks'))
        
    feedback.selected = True
    db.session.commit()

    return feedback
###Select a feedback from a list 	


@prf.route('/edit_profile_by_tag', methods=['GET', 'POST'])
@login_required
def edit_profile_by_tag():

    profile = reset_and_get_profile(0)   
    tags = Tag.query.order_by(Tag.title).all()
    
    prf_subjects=[]
    all_subjects = Subject.query.all()
    for s in all_subjects:
        if profile.is_parent_of(s):
            prf_subjects.append(s)
        
    prf_weaknesses=[]
    all_weaknesses = Weakness.query.all()
    for s in all_weaknesses:
        if profile.is_parent_of(s):
            prf_weaknesses.append(s)
        
    prf_strengths=[]
    all_strengths = Strength.query.all()
    for s in all_strengths:
        if profile.is_parent_of(s):
            prf_strengths.append(s)
        
        
    return render_template('edit_profile2.html', profile=profile, tags=tags, 
                            prf_subjects=prf_subjects, prf_weaknesses=prf_weaknesses, prf_strengths=prf_strengths )															

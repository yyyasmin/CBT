
@slct.route('/sub_tag_select2/<int:selected_sub_tag_id>', methods=['GET', 'POST'])
def sub_tag_select2(selected_sub_tag_id):
	
    sub_tags = Sub_tag.query.all()
    for sub_tag in sub_tags:
        sub_tag.selected = False

    sub_tag = sub_tag.query.filter(Sub_tag.id==selected_sub_tag_id).first()
    if sub_tag == None:
        flash("There is no sush sub_tag ", sub_tag.id, sub_tag.title)
        return redirect(url_for("gts.edit_gts"))

    sub_tag.selected = True		
    db.session.commit()

    sub_tag = sub_tag.query.filter(Sub_tag.selected==True).first()	

    print("")
    print("In SELECT_sub_tag AFTER  query sub_tag-id: ", sub_tag.id)	

    return sub_tag


function setClassChoices()  {
	
	switch (parent_gt.class_name) {
		
		case 'Situation':
		
			print("SITUATION-BROTHERSBBBBBBBBBBBBBBBBBBBB ", parent_gt["BROTHERS"])
			print("SITUATION-BROTHERS-0 ", parent_gt["BROTHERS"][0])
			
			if (!parent_gt["BROTHERS"][0].situations )  {
				class_choices = ["There is no options in this category"]
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].situations.length; i++)  {
					//console.log("I ", i, parent_gt["BROTHERS"][0].situations[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].situations[i].title )
				}
			}
			break;
			
		case 'Thought':	
			if (!parent_gt["BROTHERS"][0].thoughts )  {
				//console.log("parent_gt-BROTHERS[0].thoughts", parent_gt["BROTHERS"][0].thoughts)
				class_choices.push( ["There is no options in this category"] )
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].thoughts.length; i++)  {
					//console.log("I ", i, parent_gt["BROTHERS"][0].thoughts[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].thoughts[i].title )
				}
			}
			break;
					
			
		case 'Emotion':	
			if (!parent_gt["BROTHERS"][0].emotions )  {			
				//console.log( "Emotion: ", parent_gt["BROTHERS"][0].emotions )
				class_choices.push( ["There is no options in this category"] )
			}

			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].emotions.length; i++)  {
					//console.log("I ", i, parent_gt["BROTHERS"][0].emotions[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].emotions[i].title )
				}
			}
			break;
				
		case 'Behavior':	
			if (!parent_gt["BROTHERS"][0].behaviors )  {
				class_choices.push( ["There is no options in this category"] )
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].behaviors.length; i++)  {
					//console.log("I ", i, parent_gt["BROTHERS"][0].behaviors[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].behaviors[i].title )
				}
			}
			break;
			
		case 'Result':	
			if (!parent_gt["BROTHERS"][0].results )  {
				class_choices = ["There is no options in this category"]
			}
			else  {
				for (let i=0; i<parent_gt["BROTHERS"][0].results.length; i++)  {
					//console.log("I ", i, parent_gt["BROTHERS"][0].results[i].title)
					class_choices.push ( parent_gt["BROTHERS"][0].results[i].title )
				}
			}
			break;
			
		default:
			class_choices = ["Hello", "Daa", "Welcome", "Go away!"]
			break;
	}
}

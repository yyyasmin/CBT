--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, password, email, registered_on, is_super_user, school_logo_name, matya_logo_name) FROM stdin;
1	yyy	yyy	yyy@gmail.com	2021-08-29 14:56:39.768526	t	\N	\N
\.


--
-- Data for Name: ufile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ufile (id, author_id, data, name, body, selected, hide) FROM stdin;
\.


--
-- Data for Name: general_txt; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.general_txt (id, ufile_id, author_id, type, h_name, e_name, h_plural_name, gt_type, class_name, title, body, "default", color_txt, color, table_color, title_color, odd_color, even_color, image_url, selected, hide, used, prnt_id, usr_node) FROM stdin;
7559	\N	1	thought	מחשבה	Thought	מחשבות	CBT	Thought	אני לא שווה 	אני לא מספיק טוב ולא רוצים אותי	f	red	#ff0000	green_table	#66ff99	\N	\N	/static/img/CBT/bad_thought.jpg	f	t	t	0	false
0	\N	1	student	תלמיד	Student	תלמידים	CBT	Student	Dummy	Dummy	t	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/somebody.jpg	t	f	t	0	false
8403	\N	1	emotion	רגש	Emotion	רגשות	Emotion	Emotion	8888	999999	f	blue	blue	green_table	#66ff99	\N	\N	true	f	t	t	8074	false
1	\N	1	student	תלמיד	Student	תלמידים	Student	Student	Dummy	Dummy	f	green	#006600	green_table	#66ff99	\N	\N	\N	f	t	t	\N	false
23	\N	1	sub_tag	תת קטגוריה	Sub category	\N	DBT	Sub_tag	יחסים עם תלמידים מהכיתה	Relationship with class mates	t		#000000	\N	\N	\N	\N	/static/img/DBT/	f	f	t	\N	false
13	\N	1	accupation	תפקיד	Accupation	\N	Accupation	Accupation	Dummy	Dummy	f	black	#00284d	\N	\N	\N	\N	\N	f	f	t	\N	false
7	\N	1	emotion	רגש	Emotion	רגשות	CBT	Emotion	תסכול וכעס	אני כועס מתוסכל ומרגיש מבואס	f	red	#ff0000	green_table	#66ff99	\N	\N	/static/img/CBT//static/img/CBT/sad.jpg	f	f	t	8074	false
12	\N	1	test	אמות מידה להערכה	Evaluation indices	אמות מידה להערכה	\N	Test	Dummy	Dummy	f	orange	#ffcc00	orange_table	#ffff99	\N	\N	\N	f	f	t	\N	false
19	\N	1	value	Value	Value	ערכים	DBT	Value	עצמאות	independence	f		#000000	green_table	#66ff99	\N	\N	/static/img/DBT/independence.jpg	f	f	t	\N	false
20	\N	1	age_range	קבוצת גיל	Age range	\N	DBT	Age_range	ביס יסודי	כיתות ג-ו	t		#000000	\N	\N	\N	\N	/static/img/DBT/	f	f	t	\N	false
22	\N	1	tag	קטגוריה	Category	\N	DBT	Tag	יחסים בין אישיים	Personal relationships	t		#000000	\N	\N	\N	\N	/static/img/DBT/	f	f	t	\N	false
10	\N	1	tag	נושא	Tag	\N	Tag	Tag	כללי	general	f	black	#00284d	\N	\N	\N	\N	\N	f	f	t	\N	false
21	\N	1	scrt	רמת אבטחה	Security level	\N	DBT	Scrt	ציבורי	public	t		#000000	\N	\N	\N	\N	/static/img/DBT/	f	f	t	\N	false
24	\N	1	destination	מטרה	Destination	מטרות	Destination	Destination	New dest		f	green	#006600	green_table	#66ff99	\N	\N	\N	f	f	t	\N	false
18	\N	1	value	Value	Value	ערכים	DBT	Value	יחסים בין אישיים	personal relationship	f		#000000	green_table	#66ff99	\N	\N	/static/img/DBT/personal.jpg	f	f	t	\N	false
8507	\N	1	result	תוצאה	Result	התנהגויות	Result	Result	החברים מתרחקים ממני	איבדתי חברים	f	blue	blue	green_table	#66ff99	\N	\N	true	f	t	t	8117	false
15	\N	1	result	תוצאה	Result	התנהגויות	CBT	Result	החברים מתרחקים ממני	החברים מתרחקים ממני ולא מזמינים אותי למשחקי כדור	f	red	#ff0000	green_table	#66ff99	\N	\N	/static/img/CBT/edison.jpg	f	f	t	9	false
7636	\N	1	emotion	רגש	Emotion	רגשות	CBT	Emotion	אני מרגיש רגוע וטוב לי	אני מרגיש רגוע ומסופק. טוב לי. 	t	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/happy_1.jpg	f	f	t	8074	false
25	\N	1	destination	מטרה	Destination	מטרות	Destination	Destination	התלמיד יזהה מצב רוח אצל ילד אחר מהכיתה	התלמיד יזהה מצב רוח  כללי (שמח \\ עצוב \\ נרגש\\ כועס ) אצל ילד אחר מהכיתה	f	green	#006600	green_table	#66ff99	\N	\N	\N	f	f	t	0	false
8341	\N	1	emotion	רגש	Emotion	רגשות	Emotion	Emotion	devistated	devistated	f	false	false	green_table	#66ff99	\N	\N	/static/img/CBT/default_image.jpg	f	t	t	8074	false
8074	\N	1	thought	מחשבה	Thought	מחשבות	CBT	Thought	אני לא שווה	אני לא מספיק טוב ואף אחד לא צריך אותי. אני אשאר לבד	f	red	#ff0000	green_table	#66ff99	\N	\N	/static/img/CBT/bad_thought.jpg	f	f	t	7558	false
8117	\N	1	behavior	התנהגות	Behavior	התנהגויות	CBT	Behavior	אני מצטרף למשחק ןמבקש עזרה להשתפר	 אני ממצטרף למשחק ומבקש ממשהו שחזק במשחק לאמן אותי כדי להשתפר	t	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/good_choice.jpg	f	f	t	7	false
11	\N	1	method_type	סוג\\מדיית הוראה	Method media or type	\N	Method_type	Method_type	Dummy	Dummy	f	black	#00284d	\N	\N	\N	\N	\N	f	f	t	\N	false
7558	\N	1	situation	סיטואציה	Situation	סיטואציות	CBT	Situation	לא הזמינו אותי למשחק	היו בחירות למשחק בכדור ונשארתי אחרון	t	orange	#ff981a	green_table	#66ff99	\N	\N	/static/img/CBT/situation_1.jpg	f	f	t	0	false
16	\N	1	obstacle	ערך	Obstacle	מכשולים	CBT	Obstacle	עצמאות	אני רוצה להחליט ולעשות דברים בעצמי	t	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/	f	f	t	\N	false
8376	\N	1	emotion	רגש	Emotion	רגשות	Emotion	Emotion	1111111111	2222222222222	f	false	false	green_table	#66ff99	\N	\N	false	f	t	t	8074	false
2	\N	1	student	תלמיד	Student	תלמידים	Student	Student	Dummy	Dummy	f	green	#006600	green_table	#66ff99	\N	\N	\N	f	t	t	\N	false
8382	\N	1	emotion	רגש	Emotion	רגשות	Emotion	Emotion	66666	77777	f	false	false	green_table	#66ff99	\N	\N	true	f	t	t	8074	false
17	\N	1	value	ערך	Value	ערכים	DBT	Value	משפחה	family	t		#000000	green_table	#66ff99	\N	\N	/static/img/DBT/family.jpg	f	f	t	\N	false
8542	\N	1	result	תוצאה	Result	התנהגויות	Result	Result	החברים מתרחקים ממני	the friends i have are drifted away	f	blue	blue	green_table	#66ff99	\N	\N	true	f	t	t	9	false
9	\N	1	behavior	התנהגות	Behavior	התנהגויות	CBT	Behavior	ברוגז	אני עוזב בכעס ולא מצורף יותר לעולם שילכו לה....	f	red	#ff0000	green_table	#66ff99	\N	\N	/static/img/CBT//static/img/CBT/bad_choice.jpg	f	f	t	7	false
9432	\N	1	situation	סיטואציה	Situation	סיטואציות	Situation	Situation	1111	Enter your description	f	green	green	green_table	#66ff99	\N	\N	/static/img/CBT/default_image.jpg	f	t	t	0	false
10218	\N	1	profile	פרופיל	Profile	\N	Profile	Profile	Dummys Profile	0	f	black	##000066	\N	\N	\N	\N	default_image.jpg	f	f	t	-1	false
10063	\N	1	thought	מחשבה	Thought	מחשבות	Thought	Thought	המורה לא אוהבת אותי	המורה שכחה להזכיר לי מה לעשות. אני לאחשוב לה. 	f	red	red	green_table	#66ff99	\N	\N	/static/img/Thought/default_image.jpg	f	f	t	9574	true
10464	\N	1	behavior	התנהגות	Behavior	התנהגויות	Behavior	Behavior	Enter your title	Enter your description	f	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/default_image.jpg	f	f	f	7	true
10465	\N	1	result	תוצאה	Result	התנהגויות	Result	Result	Enter your title	Enter your description	f	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/default_image.jpg	f	f	f	9	true
9574	\N	1	situation	סיטואציה	Situation	סיטואציות	Situation	Situation	לא הכנתי שיעורים	I didn't make my homework 	f	red	red	green_table	#66ff99	\N	\N	/static/img/CBT/default_image.jpg	f	f	t	0	true
10467	\N	1	situation	סיטואציה	Situation	סיטואציות	Situation	Situation	Enter your title	Enter your description	f	green	lightgray	green_table	#66ff99	\N	\N	/static/img/Situation/default_image.jpg	f	f	f	0	true
10469	\N	1	emotion	רגש	Emotion	רגשות	Emotion	Emotion	Enter your title	Enter your description	f	green	lightgray	green_table	#66ff99	\N	\N	/static/img/Emotion/default_image.jpg	f	f	f	10063	true
10470	\N	1	thought	מחשבה	Thought	מחשבות	Thought	Thought	Enter your title	Enter your description	f	green	lightgray	green_table	#66ff99	\N	\N	/static/img/Thought/default_image.jpg	f	f	f	10218	true
5	\N	1	thought	מחשבה	Thought	מחשבות	CBT	Thought	אולי אני לא טוב במשחקי כדור, אבל בדברים אחרים כן	משחק כדור זה לא הצד החזק שלי, אבל  בדברים אחרים אני יותר טוב, ואני יכול להתאמן כדי להשתפר. לא צריך להיות טוב במשהו כדיל להתאמן בו. 	f	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/good_thought.jpg	f	f	t	7558	false
26	\N	1	destination	מטרה	Destination	מטרות	Destination	Destination	התלמיד יזהה מצב רוח אצל ילד אחר מהכיתה	התלמיד יזהה מצב רוח  כללי (שמח \\ עצוב \\ נרגש\\ כועס ) אצל ילד אחר מהכיתה	f	green	#006600	green_table	#66ff99	\N	\N	\N	f	f	t	\N	false
\.


--
-- Data for Name: Behavior; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Behavior" (id, description) FROM stdin;
9	\N
8117	\N
10464	\N
\.


--
-- Data for Name: Emotion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Emotion" (id, description) FROM stdin;
7	\N
8341	\N
10469	\N
8376	\N
8382	\N
8403	\N
7636	\N
\.


--
-- Data for Name: Result; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Result" (id, description) FROM stdin;
15	\N
8507	\N
10465	\N
8542	\N
\.


--
-- Data for Name: Solution; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Solution" (id, description) FROM stdin;
\.


--
-- Data for Name: Thought; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Thought" (id, description) FROM stdin;
5	\N
8074	\N
10470	\N
10063	\N
7559	\N
\.


--
-- Data for Name: accupation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accupation (id) FROM stdin;
13
\.


--
-- Data for Name: age_range; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.age_range (id, from_age, to_age) FROM stdin;
20	7	12
\.


--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alembic_version (version_num) FROM stdin;
4d10f796f704
\.


--
-- Data for Name: destination; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.destination (id) FROM stdin;
24
25
26
\.


--
-- Data for Name: document; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.document (id) FROM stdin;
\.


--
-- Data for Name: feedback; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.feedback (id, name, email, registered_on, user_friendly, team_work, make_job_easy, save_time, continue_using, change, add, remove, db_helps) FROM stdin;
\.


--
-- Data for Name: goal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.goal (id) FROM stdin;
\.


--
-- Data for Name: gray; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gray (id) FROM stdin;
\.


--
-- Data for Name: method; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.method (id) FROM stdin;
\.


--
-- Data for Name: method_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.method_type (id) FROM stdin;
11
\.


--
-- Data for Name: obstacle; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.obstacle (id, description) FROM stdin;
16	\N
\.


--
-- Data for Name: parent_child_relationship; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.parent_child_relationship (parent_id, child_id) FROM stdin;
7	9
22	23
25	20
25	22
25	23
25	21
22	25
23	25
0	25
26	20
26	22
26	23
26	21
22	26
23	26
0	26
7559	7
7558	5
7558	8074
8074	7
0	7558
0	9432
0	9574
9	15
9574	10063
0	10218
\.


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.person (id, person_id, gender, first_name, last_name, email, birth_date, grade, background, profetional) FROM stdin;
\.


--
-- Data for Name: profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profile (id) FROM stdin;
10218
\.


--
-- Data for Name: resource; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resource (id) FROM stdin;
\.


--
-- Data for Name: student; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student (id, student_id, gender, first_name, last_name, email, birth_date, grade, background, profetional) FROM stdin;
1	0	male	\N	\N	\N	2021-01-01	1	\tddd	\N
2	0	male	\N	\N	\N	2021-01-01	1	\tddd	\N
0	0	male	Dummy	Dummy	\N	2021-01-01	1	\tddd	\N
\.


--
-- Data for Name: teacher; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teacher (id, teacher_id, gender, first_name, last_name, email, birth_date, grade, background, profetional) FROM stdin;
\.


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role (id, student_id, teacher_id) FROM stdin;
\.


--
-- Data for Name: school; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.school (id, school_logo_name, matya_logo_name) FROM stdin;
\.


--
-- Data for Name: scrt; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.scrt (id) FROM stdin;
21
\.


--
-- Data for Name: situation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.situation (id, description) FROM stdin;
9432	\N
10467	\N
7558	\N
9574	\N
\.


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.status (id) FROM stdin;
\.


--
-- Data for Name: strength; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strength (id) FROM stdin;
\.


--
-- Data for Name: sub_tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sub_tag (id) FROM stdin;
23
\.


--
-- Data for Name: subject; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subject (id) FROM stdin;
\.


--
-- Data for Name: tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tag (id) FROM stdin;
10
22
\.


--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.test (id) FROM stdin;
12
\.


--
-- Data for Name: todo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.todo (id) FROM stdin;
\.


--
-- Data for Name: value; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.value (id, description) FROM stdin;
17	\N
18	\N
19	\N
\.


--
-- Data for Name: weakness; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.weakness (id) FROM stdin;
\.


--
-- Name: feedback_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.feedback_id_seq', 1, false);


--
-- Name: general_txt_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.general_txt_id_seq', 10470, true);


--
-- Name: ufile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ufile_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 1, true);


--
-- PostgreSQL database dump complete
--


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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Behavior; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Behavior" (
    id integer NOT NULL,
    description text
);


ALTER TABLE public."Behavior" OWNER TO postgres;

--
-- Name: Emotion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Emotion" (
    id integer NOT NULL,
    description text
);


ALTER TABLE public."Emotion" OWNER TO postgres;

--
-- Name: Result; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Result" (
    id integer NOT NULL,
    description text
);


ALTER TABLE public."Result" OWNER TO postgres;

--
-- Name: Solution; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Solution" (
    id integer NOT NULL,
    description text
);


ALTER TABLE public."Solution" OWNER TO postgres;

--
-- Name: Thought; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Thought" (
    id integer NOT NULL,
    description text
);


ALTER TABLE public."Thought" OWNER TO postgres;

--
-- Name: accupation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accupation (
    id integer NOT NULL
);


ALTER TABLE public.accupation OWNER TO postgres;

--
-- Name: age_range; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.age_range (
    id integer NOT NULL,
    from_age integer,
    to_age integer
);


ALTER TABLE public.age_range OWNER TO postgres;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


ALTER TABLE public.alembic_version OWNER TO postgres;

--
-- Name: destination; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.destination (
    id integer NOT NULL
);


ALTER TABLE public.destination OWNER TO postgres;

--
-- Name: document; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.document (
    id integer NOT NULL
);


ALTER TABLE public.document OWNER TO postgres;

--
-- Name: feedback; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.feedback (
    id integer NOT NULL,
    name character varying(20),
    email character varying(50),
    registered_on timestamp without time zone,
    user_friendly integer,
    team_work integer,
    make_job_easy integer,
    save_time integer,
    continue_using integer,
    change text,
    add text,
    remove text,
    db_helps character varying(300)
);


ALTER TABLE public.feedback OWNER TO postgres;

--
-- Name: feedback_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.feedback_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.feedback_id_seq OWNER TO postgres;

--
-- Name: feedback_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.feedback_id_seq OWNED BY public.feedback.id;


--
-- Name: general_txt; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.general_txt (
    id integer NOT NULL,
    ufile_id integer,
    author_id integer,
    type character varying(50),
    h_name character varying(50),
    e_name character varying(50),
    h_plural_name character varying(100),
    gt_type character varying(50),
    class_name character varying(50),
    title character varying(255) NOT NULL,
    body character varying(1000),
    "default" boolean,
    json json,
    color_txt character varying(50),
    color character varying(50),
    table_color character varying(50),
    title_color character varying(50),
    odd_color character varying(50),
    even_color character varying(50),
    image_url character varying(1000),
    selected boolean,
    hide boolean,
    used boolean
);


ALTER TABLE public.general_txt OWNER TO postgres;

--
-- Name: general_txt_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.general_txt_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.general_txt_id_seq OWNER TO postgres;

--
-- Name: general_txt_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.general_txt_id_seq OWNED BY public.general_txt.id;


--
-- Name: goal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.goal (
    id integer NOT NULL
);


ALTER TABLE public.goal OWNER TO postgres;

--
-- Name: gray; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gray (
    id integer NOT NULL
);


ALTER TABLE public.gray OWNER TO postgres;

--
-- Name: method; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.method (
    id integer NOT NULL
);


ALTER TABLE public.method OWNER TO postgres;

--
-- Name: method_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.method_type (
    id integer NOT NULL
);


ALTER TABLE public.method_type OWNER TO postgres;

--
-- Name: obstacle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.obstacle (
    id integer NOT NULL,
    description text
);


ALTER TABLE public.obstacle OWNER TO postgres;

--
-- Name: parent_child_relationship; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parent_child_relationship (
    parent_id integer,
    child_id integer
);


ALTER TABLE public.parent_child_relationship OWNER TO postgres;

--
-- Name: person; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.person (
    id integer NOT NULL,
    person_id integer,
    gender character varying(20),
    first_name character varying(20),
    last_name character varying(20),
    email character varying(50),
    birth_date date,
    grade character varying(10),
    background text,
    profetional character varying(140)
);


ALTER TABLE public.person OWNER TO postgres;

--
-- Name: profile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profile (
    id integer NOT NULL
);


ALTER TABLE public.profile OWNER TO postgres;

--
-- Name: psps_db; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.psps_db (
    id integer NOT NULL
);


ALTER TABLE public.psps_db OWNER TO postgres;

--
-- Name: psps_db_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.psps_db_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.psps_db_id_seq OWNER TO postgres;

--
-- Name: psps_db_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.psps_db_id_seq OWNED BY public.psps_db.id;


--
-- Name: resource; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resource (
    id integer NOT NULL
);


ALTER TABLE public.resource OWNER TO postgres;

--
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    id integer NOT NULL,
    student_id integer,
    teacher_id integer
);


ALTER TABLE public.role OWNER TO postgres;

--
-- Name: school; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.school (
    id integer NOT NULL,
    school_logo_name character varying(200),
    matya_logo_name character varying(200)
);


ALTER TABLE public.school OWNER TO postgres;

--
-- Name: scrt; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.scrt (
    id integer NOT NULL
);


ALTER TABLE public.scrt OWNER TO postgres;

--
-- Name: situation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.situation (
    id integer NOT NULL,
    description text
);


ALTER TABLE public.situation OWNER TO postgres;

--
-- Name: status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.status (
    id integer NOT NULL
);


ALTER TABLE public.status OWNER TO postgres;

--
-- Name: strength; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strength (
    id integer NOT NULL
);


ALTER TABLE public.strength OWNER TO postgres;

--
-- Name: student; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student (
    id integer NOT NULL,
    student_id integer,
    gender character varying(20),
    first_name character varying(20),
    last_name character varying(20),
    email character varying(50),
    birth_date date,
    grade character varying(10),
    background text,
    profetional character varying(140)
);


ALTER TABLE public.student OWNER TO postgres;

--
-- Name: sub_tag; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sub_tag (
    id integer NOT NULL
);


ALTER TABLE public.sub_tag OWNER TO postgres;

--
-- Name: subject; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subject (
    id integer NOT NULL
);


ALTER TABLE public.subject OWNER TO postgres;

--
-- Name: tag; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tag (
    id integer NOT NULL
);


ALTER TABLE public.tag OWNER TO postgres;

--
-- Name: teacher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teacher (
    id integer NOT NULL,
    teacher_id integer,
    gender character varying(20),
    first_name character varying(20),
    last_name character varying(20),
    email character varying(50),
    birth_date date,
    grade character varying(10),
    background text,
    profetional character varying(140)
);


ALTER TABLE public.teacher OWNER TO postgres;

--
-- Name: test; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test (
    id integer NOT NULL
);


ALTER TABLE public.test OWNER TO postgres;

--
-- Name: todo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.todo (
    id integer NOT NULL
);


ALTER TABLE public.todo OWNER TO postgres;

--
-- Name: ufile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ufile (
    id integer NOT NULL,
    author_id integer,
    data bytea,
    name character varying(300),
    body character varying(255),
    selected boolean,
    hide boolean
);


ALTER TABLE public.ufile OWNER TO postgres;

--
-- Name: ufile_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ufile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ufile_id_seq OWNER TO postgres;

--
-- Name: ufile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ufile_id_seq OWNED BY public.ufile.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(20),
    password character varying(50),
    email character varying(50),
    registered_on timestamp without time zone,
    is_super_user boolean,
    school_logo_name character varying(200),
    matya_logo_name character varying(200)
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: value; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.value (
    id integer NOT NULL,
    description text
);


ALTER TABLE public.value OWNER TO postgres;

--
-- Name: weakness; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.weakness (
    id integer NOT NULL
);


ALTER TABLE public.weakness OWNER TO postgres;

--
-- Name: feedback id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.feedback ALTER COLUMN id SET DEFAULT nextval('public.feedback_id_seq'::regclass);


--
-- Name: general_txt id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general_txt ALTER COLUMN id SET DEFAULT nextval('public.general_txt_id_seq'::regclass);


--
-- Name: psps_db id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.psps_db ALTER COLUMN id SET DEFAULT nextval('public.psps_db_id_seq'::regclass);


--
-- Name: ufile id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ufile ALTER COLUMN id SET DEFAULT nextval('public.ufile_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: Behavior; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Behavior" (id, description) FROM stdin;
8	\N
9	\N
7519	\N
7520	\N
\.


--
-- Data for Name: Emotion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Emotion" (id, description) FROM stdin;
6	\N
7	\N
7517	\N
7518	\N
\.


--
-- Data for Name: Result; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Result" (id, description) FROM stdin;
14	\N
15	\N
7521	\N
7522	\N
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
4	\N
5	\N
7515	\N
7516	\N
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
-- Data for Name: general_txt; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.general_txt (id, ufile_id, author_id, type, h_name, e_name, h_plural_name, gt_type, class_name, title, body, "default", json, color_txt, color, table_color, title_color, odd_color, even_color, image_url, selected, hide, used) FROM stdin;
25	\N	1	destination	מטרה	Destination	מטרות	Destination	Destination	התלמיד יזהה מצב רוח אצל ילד אחר מהכיתה	התלמיד יזהה מצב רוח  כללי (שמח \\ עצוב \\ נרגש\\ כועס ) אצל ילד אחר מהכיתה	f	\N	green	#006600	green_table	#66ff99	\N	\N	\N	f	f	t
0	\N	1	student	תלמיד	Student	תלמידים	CBT	Student	Dummy	Dummy	t	\N	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/somebody.jpg	t	f	t
7514	\N	1	situation	סיטואציה	Situation	סיטואציות	Situation	Situation	Enter your title	Enter your body	f	\N	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/situation_1.jpg	f	f	f
7515	\N	1	thought	מחשבה	Thought	מחשבות	Thought	Thought	Enter your title	Enter your body	f	\N	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/bad_thought.jpg	f	f	f
7516	\N	1	thought	מחשבה	Thought	מחשבות	Thought	Thought	Enter your title	Enter your body	f	\N	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/good_thought.jpg	f	f	f
7517	\N	1	emotion	רגש	Emotion	רגשות	Emotion	Emotion	Enter your title	Enter your body	f	\N	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/happy_1.jpg	f	f	f
7518	\N	1	emotion	רגש	Emotion	רגשות	Emotion	Emotion	Enter your title	Enter your body	f	\N	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/sad.jpg	f	f	f
7519	\N	1	behavior	התנהגות	Behavior	התנהגויות	Behavior	Behavior	Enter your title	Enter your body	f	\N	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/good_choice.jpg	f	f	f
7520	\N	1	behavior	התנהגות	Behavior	התנהגויות	Behavior	Behavior	Enter your title	Enter your body	f	\N	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/bad_choice.jpg	f	f	f
7521	\N	1	result	תוצאה	Result	התנהגויות	Result	Result	Enter your title	Enter your body	f	\N	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/i_did_it.jpg	f	f	f
7522	\N	1	result	תוצאה	Result	התנהגויות	Result	Result	Enter your title	Enter your body	f	\N	green	lightgray	green_table	#66ff99	\N	\N	/static/img/CBT/edison.jpg	f	f	f
8	\N	1	behavior	התנהגות	Behavior	התנהגויות	CBT	Behavior	1111 - אני מצטרף למשחק ןמבקש עזרה להשתפר	1111 - אני מצטרף למשחק ומבקש ממשהו שחזק במשחק לאמן אותי כדי להשתפר	t	{"h_name": "\\u05d4\\u05ea\\u05e0\\u05d4\\u05d2\\u05d5\\u05ea", "gt_type": "CBT", "title": "1111", "body": "1111", "color": "#006600"}	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/good_choice.jpg	f	f	t
24	\N	1	destination	מטרה	Destination	מטרות	Destination	Destination	New dest		f	\N	green	#006600	green_table	#66ff99	\N	\N	\N	f	t	t
4	\N	1	thought	מחשבה	Thought	מחשבות	CBT	Thought	11 - אף אחד לא אוהב אותי	11 - אני לא שווה, אף פעם לא ירצו אותי	t	{"h_name": "\\u05de\\u05d7\\u05e9\\u05d1\\u05d4", "gt_type": "CBT", "title": "11", "body": "11", "color": "#006600"}	red	#ff0000	green_table	#66ff99	\N	\N	/static/img/CBT/bad_thought.jpg	f	f	t
1	\N	1	student	תלמיד	Student	תלמידים	Student	Student	Dummy	Dummy	f	\N	green	#006600	green_table	#66ff99	\N	\N	\N	f	t	t
2	\N	1	student	תלמיד	Student	תלמידים	Student	Student	Dummy	Dummy	f	\N	green	#006600	green_table	#66ff99	\N	\N	\N	f	t	t
3	\N	1	situation	סיטואציה	Situation	סיטואציות	CBT	Situation	1 - לא הזמינו אותי למשחק	נערכו בחירות למשחק בכדור ונשארתי אחרון	t	{"h_name": "\\u05e1\\u05d9\\u05d8\\u05d5\\u05d0\\u05e6\\u05d9\\u05d4", "gt_type": "CBT", "title": "1", "body": "1", "color": "#006600"}	yellow	#ffcc00	green_table	#66ff99	\N	\N	/static/img/CBT/situation_1.jpg	f	f	t
6	\N	1	emotion	רגש	Emotion	רגשות	CBT	Emotion	111 - אני מרגשיש שלווה 	111 - אני סבבה עם עצמי ומרגיש שלווה	t	{"h_name": "\\u05e8\\u05d2\\u05e9", "gt_type": "CBT", "title": "111", "body": "111", "color": "#006600"}	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/happy_1.jpg	f	f	t
10	\N	1	tag	נושא	Tag	\N	Tag	Tag	כללי	general	f	\N	black	#00284d	\N	\N	\N	\N	\N	f	f	t
11	\N	1	method_type	סוג\\מדיית הוראה	Method media or type	\N	Method_type	Method_type	Dummy	Dummy	f	\N	black	#00284d	\N	\N	\N	\N	\N	f	f	t
12	\N	1	test	אמות מידה להערכה	Evaluation indices	אמות מידה להערכה	\N	Test	Dummy	Dummy	f	\N	orange	#ffcc00	orange_table	#ffff99	\N	\N	\N	f	f	t
13	\N	1	accupation	תפקיד	Accupation	\N	Accupation	Accupation	Dummy	Dummy	f	\N	black	#00284d	\N	\N	\N	\N	\N	f	f	t
14	\N	1	result	תוצאה	Result	התנהגויות	CBT	Result	הרווחתי חבר והשתפרתי במשחק	החבר שביקשתי ממנו לאמן אותי  עזרתי לו בשיעורים והתקרבנו וגם השתפרתי במשחק. 	t	{"h_name": "\\u05ea\\u05d5\\u05e6\\u05d0\\u05d4", "gt_type": "CBT", "title": "\\u05d4\\u05e8\\u05d5\\u05d5\\u05d7\\u05ea\\u05d9 \\u05d7\\u05d1\\u05e8 \\u05d5\\u05d4\\u05e9\\u05ea\\u05e4\\u05e8\\u05ea\\u05d9 \\u05d1\\u05de\\u05e9\\u05d7\\u05e7", "body": "\\u05d4\\u05d7\\u05d1\\u05e8 \\u05e9\\u05d1\\u05d9\\u05e7\\u05e9\\u05ea\\u05d9 \\u05de\\u05de\\u05e0\\u05d5 \\u05dc\\u05d0\\u05de\\u05df \\u05d0\\u05d5\\u05ea\\u05d9  \\u05e2\\u05d6\\u05e8\\u05ea\\u05d9 \\u05dc\\u05d5 \\u05d1\\u05e9\\u05d9\\u05e2\\u05d5\\u05e8\\u05d9\\u05dd \\u05d5\\u05d4\\u05ea\\u05e7\\u05e8\\u05d1\\u05e0\\u05d5 \\u05d5\\u05d2\\u05dd \\u05d4\\u05e9\\u05ea\\u05e4\\u05e8\\u05ea\\u05d9 \\u05d1\\u05de\\u05e9\\u05d7\\u05e7. ", "color": "#006600"}	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/i_did_it.jpg	f	f	t
15	\N	1	result	תוצאה	Result	התנהגויות	CBT	Result	החברים מתרחקים ממני	החברים מתרחקים ממני ולא מזמינים אותי למשחקי כדור	f	{"h_name": "\\u05ea\\u05d5\\u05e6\\u05d0\\u05d4", "gt_type": "CBT", "title": "\\u05d4\\u05d7\\u05d1\\u05e8\\u05d9\\u05dd \\u05de\\u05ea\\u05e8\\u05d7\\u05e7\\u05d9\\u05dd \\u05de\\u05de\\u05e0\\u05d9", "body": "\\u05d4\\u05d7\\u05d1\\u05e8\\u05d9\\u05dd \\u05de\\u05ea\\u05e8\\u05d7\\u05e7\\u05d9\\u05dd \\u05de\\u05de\\u05e0\\u05d9 \\u05d5\\u05dc\\u05d0 \\u05de\\u05d6\\u05de\\u05d9\\u05e0\\u05d9\\u05dd \\u05d0\\u05d5\\u05ea\\u05d9 \\u05dc\\u05de\\u05e9\\u05d7\\u05e7\\u05d9 \\u05db\\u05d3\\u05d5\\u05e8", "color": "#006600"}	red	#ff0000	green_table	#66ff99	\N	\N	/static/img/CBT/edison.jpg	f	f	t
16	\N	1	obstacle	ערך	Obstacle	מכשולים	CBT	Obstacle	עצמאות	אני רוצה להחליט ולעשות דברים בעצמי	t	{"h_name": "\\u05e2\\u05e8\\u05da", "gt_type": "CBT", "title": "\\u05e2\\u05e6\\u05de\\u05d0\\u05d5\\u05ea", "body": "\\u05d0\\u05e0\\u05d9 \\u05e8\\u05d5\\u05e6\\u05d4 \\u05dc\\u05d4\\u05d7\\u05dc\\u05d9\\u05d8 \\u05d5\\u05dc\\u05e2\\u05e9\\u05d5\\u05ea \\u05d3\\u05d1\\u05e8\\u05d9\\u05dd \\u05d1\\u05e2\\u05e6\\u05de\\u05d9", "color": "#006600"}	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/	f	f	t
17	\N	1	value	ערך	Value	ערכים	DBT	Value	משפחה	family	t	{"h_name": "\\u05e2\\u05e8\\u05da", "gt_type": "DBT", "title": "\\u05de\\u05e9\\u05e4\\u05d7\\u05d4", "body": "family", "color": "#006600"}		#000000	green_table	#66ff99	\N	\N	/static/img/DBT/family.jpg	f	f	t
18	\N	1	value	Value	Value	ערכים	DBT	Value	יחסים בין אישיים	personal relationship	f	{"h_name": "Value", "gt_type": "DBT", "title": "\\u05d9\\u05d7\\u05e1\\u05d9\\u05dd \\u05d1\\u05d9\\u05df \\u05d0\\u05d9\\u05e9\\u05d9\\u05d9\\u05dd", "body": "personal relationship", "color": "#006600"}		#000000	green_table	#66ff99	\N	\N	/static/img/DBT/personal.jpg	f	f	t
19	\N	1	value	Value	Value	ערכים	DBT	Value	עצמאות	independence	f	{"h_name": "Value", "gt_type": "DBT", "title": "\\u05e2\\u05e6\\u05de\\u05d0\\u05d5\\u05ea", "body": "independence", "color": "#006600"}		#000000	green_table	#66ff99	\N	\N	/static/img/DBT/independence.jpg	f	f	t
20	\N	1	age_range	קבוצת גיל	Age range	\N	DBT	Age_range	ביס יסודי	כיתות ג-ו	t	{"h_name": "\\u05e7\\u05d1\\u05d5\\u05e6\\u05ea \\u05d2\\u05d9\\u05dc", "gt_type": "DBT", "title": "\\u05d1\\u05d9\\u05e1 \\u05d9\\u05e1\\u05d5\\u05d3\\u05d9", "body": "\\u05db\\u05d9\\u05ea\\u05d5\\u05ea \\u05d2-\\u05d5", "color": "#00284d"}		#000000	\N	\N	\N	\N	/static/img/DBT/	f	f	t
21	\N	1	scrt	רמת אבטחה	Security level	\N	DBT	Scrt	ציבורי	public	t	{"h_name": "\\u05e8\\u05de\\u05ea \\u05d0\\u05d1\\u05d8\\u05d7\\u05d4", "gt_type": "DBT", "title": "\\u05e6\\u05d9\\u05d1\\u05d5\\u05e8\\u05d9", "body": "public", "color": "#00284d"}		#000000	\N	\N	\N	\N	/static/img/DBT/	f	f	t
22	\N	1	tag	קטגוריה	Category	\N	DBT	Tag	יחסים בין אישיים	Personal relationships	t	{"h_name": "\\u05e7\\u05d8\\u05d2\\u05d5\\u05e8\\u05d9\\u05d4", "gt_type": "DBT", "title": "\\u05d9\\u05d7\\u05e1\\u05d9\\u05dd \\u05d1\\u05d9\\u05df \\u05d0\\u05d9\\u05e9\\u05d9\\u05d9\\u05dd", "body": "Personal relationships", "color": "#00284d"}		#000000	\N	\N	\N	\N	/static/img/DBT/	f	f	t
23	\N	1	sub_tag	תת קטגוריה	Sub category	\N	DBT	Sub_tag	יחסים עם תלמידים מהכיתה	Relationship with class mates	t	{"h_name": "\\u05ea\\u05ea \\u05e7\\u05d8\\u05d2\\u05d5\\u05e8\\u05d9\\u05d4", "gt_type": "DBT", "title": "\\u05d9\\u05d7\\u05e1\\u05d9\\u05dd \\u05e2\\u05dd \\u05ea\\u05dc\\u05de\\u05d9\\u05d3\\u05d9\\u05dd \\u05de\\u05d4\\u05db\\u05d9\\u05ea\\u05d4", "body": "Relationship with class mates", "color": "#00284d"}		#000000	\N	\N	\N	\N	/static/img/DBT/	f	f	t
9	\N	1	behavior	התנהגות	Behavior	התנהגויות	CBT	Behavior	1112 - ברוגז	1112 - אני עוזב בכעס ולא מצורף יותר לעולם שילכו לה....	f	{"h_name": "\\u05d4\\u05ea\\u05e0\\u05d4\\u05d2\\u05d5\\u05ea", "gt_type": "CBT", "title": "1112", "body": "1112", "color": "#006600"}	red	#ff0000	green_table	#66ff99	\N	\N	/static/img/CBT/bad_choice.jpg	f	f	t
5	\N	1	thought	מחשבה	Thought	מחשבות	CBT	Thought	12 - אולי אני לא טוב במשחקי כדור, אבל בדברים אחרים כן	12 = משחק כדור זה לא הצד החזק שלי, אבל  בדברים אחרים אני יותר טוב, ואני יכול להתאמן כדי להשתפר. לא צריך להיות טוב במשהו כדיל להתאמן בו. 	f	{"h_name": "\\u05de\\u05d7\\u05e9\\u05d1\\u05d4", "gt_type": "CBT", "title": "12", "body": "12", "color": "#006600"}	green	#00b300	green_table	#66ff99	\N	\N	/static/img/CBT/good_thought.jpg	f	f	t
7	\N	1	emotion	רגש	Emotion	רגשות	CBT	Emotion	121 -תסכול וכעס	121 - אני כועס מתוסכל ומרגיש מבואס	f	{"h_name": "\\u05e8\\u05d2\\u05e9", "gt_type": "CBT", "title": "112", "body": "112", "color": "#006600"}	red	#ff0000	green_table	#66ff99	\N	\N	/static/img/CBT/sad.jpg	t	f	t
26	\N	1	destination	מטרה	Destination	מטרות	Destination	Destination	התלמיד יזהה מצב רוח אצל ילד אחר מהכיתה	התלמיד יזהה מצב רוח  כללי (שמח \\ עצוב \\ נרגש\\ כועס ) אצל ילד אחר מהכיתה	f	\N	green	#006600	green_table	#66ff99	\N	\N	\N	f	t	t
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
3	4
3	5
4	7
0	3
5	5
8	14
5	6
9	15
7	9
1	3
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
6	8
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
\.


--
-- Data for Name: psps_db; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.psps_db (id) FROM stdin;
\.


--
-- Data for Name: resource; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resource (id) FROM stdin;
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
3	\N
7514	\N
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
-- Data for Name: student; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student (id, student_id, gender, first_name, last_name, email, birth_date, grade, background, profetional) FROM stdin;
1	0	male	\N	\N	\N	2021-01-01	1	\tddd	\N
2	0	male	\N	\N	\N	2021-01-01	1	\tddd	\N
0	0	male	Dummy	Dummy	\N	2021-01-01	1	\tddd	\N
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
-- Data for Name: teacher; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teacher (id, teacher_id, gender, first_name, last_name, email, birth_date, grade, background, profetional) FROM stdin;
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
-- Data for Name: ufile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ufile (id, author_id, data, name, body, selected, hide) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, password, email, registered_on, is_super_user, school_logo_name, matya_logo_name) FROM stdin;
1	yyy	yyy	yyy@gmail.com	2021-08-29 14:56:39.768526	t	\N	\N
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

SELECT pg_catalog.setval('public.general_txt_id_seq', 7522, true);


--
-- Name: psps_db_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.psps_db_id_seq', 1, false);


--
-- Name: ufile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ufile_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 1, true);


--
-- Name: Behavior Behavior_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Behavior"
    ADD CONSTRAINT "Behavior_pkey" PRIMARY KEY (id);


--
-- Name: Emotion Emotion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Emotion"
    ADD CONSTRAINT "Emotion_pkey" PRIMARY KEY (id);


--
-- Name: Result Result_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Result"
    ADD CONSTRAINT "Result_pkey" PRIMARY KEY (id);


--
-- Name: Solution Solution_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Solution"
    ADD CONSTRAINT "Solution_pkey" PRIMARY KEY (id);


--
-- Name: Thought Thought_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Thought"
    ADD CONSTRAINT "Thought_pkey" PRIMARY KEY (id);


--
-- Name: accupation accupation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accupation
    ADD CONSTRAINT accupation_pkey PRIMARY KEY (id);


--
-- Name: age_range age_range_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.age_range
    ADD CONSTRAINT age_range_pkey PRIMARY KEY (id);


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: destination destination_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.destination
    ADD CONSTRAINT destination_pkey PRIMARY KEY (id);


--
-- Name: document document_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.document
    ADD CONSTRAINT document_pkey PRIMARY KEY (id);


--
-- Name: feedback feedback_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.feedback
    ADD CONSTRAINT feedback_pkey PRIMARY KEY (id);


--
-- Name: general_txt general_txt_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general_txt
    ADD CONSTRAINT general_txt_pkey PRIMARY KEY (id);


--
-- Name: goal goal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.goal
    ADD CONSTRAINT goal_pkey PRIMARY KEY (id);


--
-- Name: gray gray_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gray
    ADD CONSTRAINT gray_pkey PRIMARY KEY (id);


--
-- Name: method method_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.method
    ADD CONSTRAINT method_pkey PRIMARY KEY (id);


--
-- Name: method_type method_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.method_type
    ADD CONSTRAINT method_type_pkey PRIMARY KEY (id);


--
-- Name: obstacle obstacle_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.obstacle
    ADD CONSTRAINT obstacle_pkey PRIMARY KEY (id);


--
-- Name: person person_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (id);


--
-- Name: profile profile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_pkey PRIMARY KEY (id);


--
-- Name: psps_db psps_db_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.psps_db
    ADD CONSTRAINT psps_db_pkey PRIMARY KEY (id);


--
-- Name: resource resource_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resource
    ADD CONSTRAINT resource_pkey PRIMARY KEY (id);


--
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);


--
-- Name: school school_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.school
    ADD CONSTRAINT school_pkey PRIMARY KEY (id);


--
-- Name: scrt scrt_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scrt
    ADD CONSTRAINT scrt_pkey PRIMARY KEY (id);


--
-- Name: situation situation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.situation
    ADD CONSTRAINT situation_pkey PRIMARY KEY (id);


--
-- Name: status status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);


--
-- Name: strength strength_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strength
    ADD CONSTRAINT strength_pkey PRIMARY KEY (id);


--
-- Name: student student_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (id);


--
-- Name: sub_tag sub_tag_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sub_tag
    ADD CONSTRAINT sub_tag_pkey PRIMARY KEY (id);


--
-- Name: subject subject_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_pkey PRIMARY KEY (id);


--
-- Name: tag tag_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);


--
-- Name: teacher teacher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pkey PRIMARY KEY (id);


--
-- Name: test test_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);


--
-- Name: todo todo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_pkey PRIMARY KEY (id);


--
-- Name: ufile ufile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ufile
    ADD CONSTRAINT ufile_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: value value_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.value
    ADD CONSTRAINT value_pkey PRIMARY KEY (id);


--
-- Name: weakness weakness_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.weakness
    ADD CONSTRAINT weakness_pkey PRIMARY KEY (id);


--
-- Name: ix_feedback_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_feedback_email ON public.feedback USING btree (email);


--
-- Name: ix_feedback_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_feedback_name ON public.feedback USING btree (name);


--
-- Name: ix_person_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_person_email ON public.person USING btree (email);


--
-- Name: ix_person_last_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_person_last_name ON public.person USING btree (last_name);


--
-- Name: ix_student_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_student_email ON public.student USING btree (email);


--
-- Name: ix_student_last_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_student_last_name ON public.student USING btree (last_name);


--
-- Name: ix_teacher_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_teacher_email ON public.teacher USING btree (email);


--
-- Name: ix_teacher_last_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_teacher_last_name ON public.teacher USING btree (last_name);


--
-- Name: ix_user_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_user_email ON public."user" USING btree (email);


--
-- Name: ix_user_username; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_user_username ON public."user" USING btree (username);


--
-- Name: Behavior Behavior_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Behavior"
    ADD CONSTRAINT "Behavior_id_fkey" FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: Emotion Emotion_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Emotion"
    ADD CONSTRAINT "Emotion_id_fkey" FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: Result Result_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Result"
    ADD CONSTRAINT "Result_id_fkey" FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: Solution Solution_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Solution"
    ADD CONSTRAINT "Solution_id_fkey" FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: Thought Thought_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Thought"
    ADD CONSTRAINT "Thought_id_fkey" FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: accupation accupation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accupation
    ADD CONSTRAINT accupation_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: age_range age_range_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.age_range
    ADD CONSTRAINT age_range_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: destination destination_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.destination
    ADD CONSTRAINT destination_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: document document_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.document
    ADD CONSTRAINT document_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: general_txt general_txt_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general_txt
    ADD CONSTRAINT general_txt_author_id_fkey FOREIGN KEY (author_id) REFERENCES public."user"(id);


--
-- Name: general_txt general_txt_ufile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general_txt
    ADD CONSTRAINT general_txt_ufile_id_fkey FOREIGN KEY (ufile_id) REFERENCES public.ufile(id);


--
-- Name: goal goal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.goal
    ADD CONSTRAINT goal_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: gray gray_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gray
    ADD CONSTRAINT gray_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: method method_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.method
    ADD CONSTRAINT method_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: method_type method_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.method_type
    ADD CONSTRAINT method_type_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: obstacle obstacle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.obstacle
    ADD CONSTRAINT obstacle_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: parent_child_relationship parent_child_relationship_child_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parent_child_relationship
    ADD CONSTRAINT parent_child_relationship_child_id_fkey FOREIGN KEY (child_id) REFERENCES public.general_txt(id);


--
-- Name: parent_child_relationship parent_child_relationship_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parent_child_relationship
    ADD CONSTRAINT parent_child_relationship_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.general_txt(id);


--
-- Name: person person_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: profile profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: resource resource_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resource
    ADD CONSTRAINT resource_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: role role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: role role_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.student(id);


--
-- Name: role role_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teacher(id);


--
-- Name: school school_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.school
    ADD CONSTRAINT school_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: scrt scrt_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.scrt
    ADD CONSTRAINT scrt_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: situation situation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.situation
    ADD CONSTRAINT situation_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: status status_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: strength strength_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strength
    ADD CONSTRAINT strength_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: student student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: sub_tag sub_tag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sub_tag
    ADD CONSTRAINT sub_tag_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: subject subject_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: tag tag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: teacher teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: test test_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: todo todo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: ufile ufile_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ufile
    ADD CONSTRAINT ufile_author_id_fkey FOREIGN KEY (author_id) REFERENCES public."user"(id);


--
-- Name: value value_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.value
    ADD CONSTRAINT value_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- Name: weakness weakness_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.weakness
    ADD CONSTRAINT weakness_id_fkey FOREIGN KEY (id) REFERENCES public.general_txt(id);


--
-- PostgreSQL database dump complete
--


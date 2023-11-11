export const languages = Object.freeze({
	en: "English",
	ta: "Tamil",
});
/**
 * @typedef {keyof typeof languages} Language
 */

export const LANGUAGES_DISPLAY_TEXT = Object.freeze(
	/**
	 * @type {Record<Language, string>}
	 */
	{
		en: "English",
		ta: "தமிழ்",
	},
);

/**
 * @type {Array<Language>}
 */
// @ts-expect-error
export const LIST_OF_LANGUAGES = Object.keys(languages);

export const defaultLang = "en";

/**
 * @typedef UiStrings
 * @prop {string} meta__description
 * @prop {string} nav__timetable
 * @prop {string} nav__exam_centres
 * @prop {string} nav__past_papers
 * @prop {string} nav__about
 * @prop {string} hero__title
 * @prop {string} find_your_examination_centres__tile
 * @prop {string} find_your_examination_centres__description
 * @prop {string} looking_for_past_papers__title
 * @prop {string} timetable__title
 * @prop {string} committee__title
 * @prop {string} committee__president_name
 * @prop {string} committee__president_post
 * @prop {string} committee__president_faculty
 * @prop {string} committee__secretary_faculty
 * @prop {string} committee__treasurer_faculty
 * @prop {string} committee__vice_president_faculty
 * @prop {string} committee__secretary_name
 * @prop {string} committee__secretary_post
 * @prop {string} committee__treasurer_name
 * @prop {string} committee__treasurer_post
 * @prop {string} committee__vice_president_name
 * @prop {string} committee__vice_president_post
 * @prop {string} committee__university
 * @prop {string} looking_for_past_papers__description
 * @prop {string} footer_title_1
 * @prop {string} footer_title_1_description_p1
 * @prop {string} footer_title_1_description_p2
 * @prop {string} footer_title_2
 * @prop {string} footer_title_3
 * @prop {string} footer_title_4
 * @prop {string} footer_title_4_s1
 * @prop {string} footer_title_4_s2
 * @prop {string} footer_title_4_s3
 * @prop {string} footer_title_4_s4
 * @prop {string} footer_title_4_s5
 * @prop {string} elearning_videos_title
 * @prop {string} elearning_videos_p
 * @prop {string} elearning_videos_sub1
 * @prop {string} elearning_videos_sub2
 * @prop {string} elearning_videos_sub3
 * @prop {string} pathway__title
 * @prop {string} pathway__card1_title
 * @prop {string} pathway__card2_title
 * @prop {string} pathway__card3_title
 * @prop {string} pathway__card4_title
 * @prop {string} pathway__card1_para
 * @prop {string} pathway__card2_para
 * @prop {string} pathway__card3_para
 * @prop {string} pathway__card4_para
 * @prop {string} statistics__years
 * @prop {string} statistics__districts
 * @prop {string} statistics__centers
 * @prop {string} statistics__candidates
 * @prop {string} feedback_iroshan
<<<<<<< HEAD
 * @prop {string} feedback_abarna
 * @prop {string} feedback_sankavi
 * @prop {string} feedback_jathurshan
 * @prop {string} feedback_sundarbavan
 * @prop {string} feedback_suriya
=======
 * @prop {string} timetable__start
 * @prop {string} timetable__date25_sub1
 * @prop {string} timetable__date25_sub2 
 * @prop {string} timetable__date26_sub1
 * @prop {string} timetable__date26_sub2
 * @prop {string} timetable__date30_sub1
 * @prop {string} timetable__date03_sub1
 * @prop {string} timtable__date09_sub1
 * @prop {string} timtable__date09_sub2
 * @prop {string} timtable__date10_sub1
 * @prop {string}	timtable__date10_sub2
 * 
>>>>>>> 62fe1fb40c90132cadfca55c0b133b125d8ef724
 */

/**
 * @type {Readonly<Record<Language, UiStrings>>}}
 */
export const ui = Object.freeze({
	en: {
		meta__description:
			"Mora Exams is the largest, island-wide pioneer exam for A/L students. It proves to be incredibly helpful before entering the final exams, providing access to past papers and model papers.",
		nav__timetable: "Timetable",
		nav__exam_centres: "Exam Centres",
		nav__past_papers: "Past Papers",
		nav__about: "About Us",
		hero__title: "Sri Lanka's biggest pioneer exams for G.C.E. (A/L) students",
		find_your_examination_centres__tile: "Find your examination centres",
		find_your_examination_centres__description:
			"We have 67 examination centre networks covering almost the whole island. Choose your district to view the examination centres available.",
		looking_for_past_papers__title: "Looking for Mora Exam Past Papers?",
		timetable__title: "Timetable",
		committee__title: "Mora Exam - 2023 | Committee",
		committee__president_name: "Sarujan",
		committee__president_post: "President",
		committee__secretary_name: "Harikrishna",
		committee__secretary_post: "Secretary",
		committee__treasurer_name: "Mayoorathan",
		committee__treasurer_post: "Treasurer",
		committee__vice_president_name: "Thabendra",
		committee__vice_president_post: "Vice President",
		committee__president_faculty: "Civil Engineering",
		committee__secretary_faculty: "Computer Sciecne and Engineering",
		committee__treasurer_faculty: "Material Science And Engineering",
		committee__vice_president_faculty: "Computer Sciecne and Engineering",
		committee__university: "University of Moratuwa",
		looking_for_past_papers__description:
			"Now It is even easier to find the paper you need. We have advanced filtering options. And we divided all the questions for each year based on the sub-sections of each subject. Now you can practice our past papers section-wise.",
		footer_title_1: "Mora Exams",
		footer_title_1_description_p1:
			"We, engineers, are very much concerned about society and its betterment, and we believe that the betterment of society will bring a more prosperous and hybrid future generation than irrelevant mutations.",
		footer_title_1_description_p2:
			"It is very obvious how the engineering students in our society bring themselves up and plan out schemes to assist our community in many ways. We too, the Tamil people of the University of Moratuwa, brought ourselves together under the banner of Mora E-Tamils.",
		footer_title_1_description_p1: "We, engineers, are very much concerned about society and its betterment, and we believe that the betterment of society will bring a more prosperous and hybrid future generation than irrelevant mutations.",
		footer_title_1_description_p2: "It is very obvious how the engineering students in our society bring themselves up and plan out schemes to assist our community in many ways. We too, the Tamil people of the University of Moratuwa, brought ourselves together under the banner of Mora E-Tamils.",
		footer_title_2: "Contact Us :",
		footer_title_3: "Follow Us :",
		footer_title_4: "Our Services",
		footer_title_4_s1: "Mora Exam",
		footer_title_4_s2: "Practice Papers",
		footer_title_4_s3: "E-learning Videos",
		footer_title_4_s4: "E-learning Site",
		footer_title_4_s5: "Doubts Forms",
		elearning_videos_title: "E-Learning videos",
		elearning_videos_p:
			"We have done video explanations regarding important topics in each subject on our YouTube channel. Click on any of the subjects listed below and view the respective videos.",
		elearning_videos_sub1: "maths",
		elearning_videos_sub2: "physics",
		elearning_videos_sub3: "chemistry",
		pathway__title: "Pathway of the Mora Exam",
		pathway__card1_title: "START ",
		pathway__card2_title: "RESTART ",
		pathway__card3_title: "TECHNOLOGY STREAM ",
		pathway__card4_title: "NOW ",
		pathway__card1_para:
			"A need for a common model test was felt in order to prepare students for the final exam. A common model test was held for students of the mathematics and biology departments in 2007. This test laid the foundation for the Mora exam.",
		pathway__card2_para:
			"The need for the pilot examination is felt. An exam was held for physical science and biological science students. This exam transformed into the Mora Exam in 2010.",
		pathway__card3_para:
			"We too, have included the technology stream due to the kind request of the students and also the Provincial Director of Education in 2016. But now, because of the demands, we have handed over the responsibilities of the technology stream to the very own faculty of technology students, the University of Jaffna, and we just guide them for their own betterment.",
		pathway__card4_para:
			"In the 14th year of the Mora Exam, we are proud to serve the students. Last year, we expanded our service to 22 districts, conducted the examinations in more than 69 examination centres, and accommodated more than 6,000 candidates.",
		feedback_iroshan:
			"It has gone through a variety of dimensions, and now it has reached national recognition and standards. Simply put, it's just another level.",
<<<<<<< HEAD
		feedback_darukeesan:
			"It is a common notion in society that students who are in universities focus only on their studies and have no care or concern for society. Our students have proved that to be wrong.",
		feedback_abarna:
			"Since the exam papers are prepared by well-experienced teachers, this team is important in our preparations for the final exam. It is better to practice two or three years of Mora exam past papers to face the final examination successfully!",
		feedback_sankavi:
			"Mora exams become part of the A/L examination. It gave me more practice and confidence. I am very glad about it. I saw the reflection of mora exams in my final examination.",
		feedback_jathurshan:
			"The MORA exam provided a chance to improve my time management,the most important aspect of an examination. This examination creates an environment similar to that of the final examination, which helps to develop our mental stamina.",
		feedback_sundarbavan:
			"Due to the COVID-19 pandamic, we hadn't faced any Model exams for nearly five months. In that respect, Mora exams helped me develop the ability to approach the questions and answer them properly.",
		feedback_suriya:
			"Mora exams are very similar to our A/L final examination. It helps students find their strengths and weaknesses beforehand.",
=======
		statistics__years: "Years",
		statistics__districts: "Districts",
		statistics__centers: "Centres",
		statistics__candidates: "Candidates",
		pathway__card1_para: "A need for a common model test was felt in order to prepare students for the final exam. A common model test was held for students of the mathematics and biology departments in 2007. This test laid the foundation for the Mora exam.",
		pathway__card2_para: "The need for the pilot examination is felt. An exam was held for physical science and biological science students. This exam transformed into the Mora Exam in 2010.",
		pathway__card3_para: "We too, have included the technology stream due to the kind request of the students and also the Provincial Director of Education in 2016. But now, because of the demands, we have handed over the responsibilities of the technology stream to the very own faculty of technology students, the University of Jaffna, and we just guide them for their own betterment.",
		pathway__card4_para: "In the 14th year of the Mora Exam, we are proud to serve the students. Last year, we expanded our service to 22 districts, conducted the examinations in more than 69 examination centres, and accommodated more than 6,000 candidates.",
		timetable__start: "START",
		timetable__date25_sub1: "Combined Mathematics-I",
		timetable__date25_sub2: "Biology-I",
		timetable__date26_sub1: "Combined Mathematics-I",
		timetable__date26_sub2: "Biology-II",
		timetable__date30_sub1: "Physics-I",
		timetable__date03_sub1: "Physics-II",
		timtable__date09_sub1: "Chemistry-I",
		timtable__date09_sub2: "ICT-I",
		timtable__date10_sub1: "Chemistry-II",
		timtable__date10_sub2: "ICT-II",
>>>>>>> 62fe1fb40c90132cadfca55c0b133b125d8ef724
	},
	ta: {
		meta__description:
			"Mora Exams என்பது க.பொ.த (A/L) மாணவர்களுக்கான மிகப்பெரிய, நாடளாவிய பரீட்சையாகும். இறுதித் தேர்வுகளில் நுழைய போகும் மாணவர்களுக்கு இது நம்பமுடியாத அளவிற்கு உதவியாக இருக்கின்றது.",
		nav__timetable: "பரீட்சை அட்டவணை",
		nav__exam_centres: "பரீட்சை நிலையங்கள்",
		nav__past_papers: "கடந்த கால வினாத்தாள்கள்",
		nav__about: "எம்மைப் பற்றி",
		hero__title:
			"க. பொ. த. (உ/த) மாணவர்களுக்கான இலங்கையின்  மிகப்பெரிய முன்னோடி பரீட்ச்சை",
		find_your_examination_centres__tile:
			"உங்களது பரீட்சை நிலையத்தை கண்டறியுங்கள்",
		find_your_examination_centres__description:
			"எங்களிடம் 67 பரீட்சை மைய வலையமைப்புகள் கிட்டத்தட்ட முழு தீவையும் உள்ளடக்கி உள்ளன. தேர்வு மையங்களைப் பார்க்க உங்கள் மாவட்டத்தைத் தேர்வு செய்யவும்.",
		looking_for_past_papers__title: "கடந்த கால வினாத்தாள்களை தேடுகின்றீர்களா?",
		timetable__title: "நேர அட்டவணை",
		committee__title: "Mora Exam - 2023 | செயற்குழு",
		committee__president_name: "சாருஜன்",
		committee__secretary_name: "ஹரிகிரிஷ்ணா",
		committee__treasurer_name: "மயூரதன்",
		committee__vice_president_name: "தபேந்திரா",
		committee__president_post: "தலைவர்",
		committee__secretary_post: "செயலாளர்",
		committee__treasurer_post: "பொருளாளர்",
		committee__vice_president_post: "துணைத்தலைவர்",
		committee__president_faculty: "குடிசார் பொறியியல்",
		committee__secretary_faculty: "கணினி விஞ்ஞானம் மற்றும் பொறியியல்",
		committee__treasurer_faculty: "பொருள் விஞ்ஞானம் மற்றும் பொறியியல்",
		committee__vice_president_faculty: "கணினி விஞ்ஞானம் மற்றும் பொறியியல்",
		committee__university: "மொறட்டுவைப் பல்கலைக்கழகம்",
		looking_for_past_papers__description:
			"இப்போது உங்களுக்குத் தேவையான கடந்தகால வினாத்தாள்களை கண்டுபிடிப்பது இன்னும் எளிதாகிவிட்டது. எங்களிடம் மேம்பட்ட வடிகட்டுதல் தெரிவுகள் உள்ளன. மேலும் ஒவ்வொரு பாடத்தின் அடிப்படையில் ஒவ்வொரு ஆண்டுக்கான அனைத்து கேள்விகளையும் பிரித்துள்ளோம். இப்போது நீங்கள் எங்கள் கடந்தகால வினாத்தாள்களை பிரிவு வாரியாக பயிற்சி செய்யலாம்.",
		footer_title_1: "மொறா தேர்வுகள்",
		footer_title_1_description_p1:
			"பொறியியலாளர்களாகிய நாம், சமூகம் மற்றும் அதன் மேம்பாடு குறித்து மிகவும் அக்கறை கொண்டுள்ளோம், மேலும் சமூகத்தின் மேம்பாடு பொருத்தமற்ற பிறழ்வுகளை விட மிகவும் வளமான மற்றும் கலப்பின எதிர்கால தலைமுறையைக் கொண்டுவரும் என்று நாங்கள் நம்புகிறோம்.",
		footer_title_1_description_p2:
			"நமது சமூகத்தில் உள்ள பொறியியல் மாணவர்கள் எவ்வாறு தங்களை வளர்த்துக்கொள்கிறார்கள் மற்றும் எங்கள் சமூகத்திற்கு பல வழிகளில் உதவுவதற்கான திட்டங்களைத் திட்டமிடுகிறார்கள் என்பது மிகவும் தெளிவாகத் தெரிகிறது. மொறட்டுவை பல்கலைக்கழக தமிழ் மக்களாகிய நாமும் மொறா இ-தமிழர் என்ற பதாகையின் கீழ் ஒன்றிணைந்தோம்.",
		footer_title_2: "தொடர்பு கொள்க :",
		footer_title_3: "எங்களைப் பின்பற்றவும் :",
		footer_title_4: "எங்கள் சேவைகள்",
		footer_title_4_s1: "மொறா தேர்வு",
		footer_title_4_s2: "பயிற்சி வினாத்தாள்கள் ",
		footer_title_4_s3: "மின் கற்றல் வீடியோக்கள்",
		footer_title_4_s4: "மின் கற்றல் தளம்",
		footer_title_4_s5: "சந்தேக படிவங்கள்",
		elearning_videos_title: "மின் கற்றல் வீடியோக்கள்",
		elearning_videos_p:
			"எங்கள் யூடியூப் சேனலில் ஒவ்வொரு பாடத்திலும் முக்கியமான தலைப்புகள் குறித்து வீடியோ விளக்கங்கள் செய்துள்ளோம். கீழே பட்டியலிடப்பட்டுள்ள ஏதேனும் ஒன்றைத் தெரிவுசெய்து அந்தந்த வீடியோக்களைப் பார்க்கவும்.",
		elearning_videos_sub1: "இணைந்த கணிதம்",
		elearning_videos_sub2: "பௌதிகவியல்",
		elearning_videos_sub3: "இரசாயனவியல்",
		pathway__title: "மொறா பரீட்சை கடந்து வந்த பாதை",
		pathway__card1_title: "ஆரம்பம்",
		pathway__card2_title: "மீள் ஆரம்பம்",
		pathway__card3_title: "தொழில்நுட்பப் பிரிவு",
		pathway__card4_title: "தற்போது",
		pathway__card1_para:
			"இறுதிப் பரீட்சைக்கு முன்பு மாணவர்களை தயார்ப்படுத்தும் நோக்கில் ஒரு பொதுவான மாதிரிப் பரீட்சைக்கான தேவை உணரப்பட்டது. 2007 ஆம் ஆண்டு கணித மற்றும் உயிரியல் பிரிவு மாணவர்களுக்கு பொதுவான மாதிரிப் பரீட்சை ஒன்று இடம்பெற்றது. இப் பரீட்சையானது மொறா பரீட்சைக்கான அடித்தளமாக அமைந்தது.",
		pathway__card2_para:
			"நாட்டில் நிலவிய அசாதாரண சூழ்நிலைகளின் காரணமாக அடுத்த இரு வருடங்களும் பரீட்சை இடம்பெறவில்லை. 2010 ஆம் ஆண்டு பரீட்சை முறைமை புதிதாக கட்டமைக்கப்பட்டு முதலாவது மொறா பரீட்சை 5 மாவட்டங்களில் 500 மாணவர்களுடன் நடைபெற்றது.",
		pathway__card3_para:
			"மாணவர்களினதும் மாகாணக் கல்விப் பணிப்பாளரின் தொடர்ச்சியான வேண்டுகோளின் நிமித்தம் 2016 ஆம் ஆண்டு தொழில்நுட்பப் பிரிவு மாணவர்களுக்கும் எமது பரீட்சையை விஸ்தரித்திரிந்தோம். ஆனால் சில வருடங்களின் பின்பு யாழ் பல்கைலைக்கழக தொழில்நுட்பப் பீட மாணவர்களிடம் அக் கடமையை ஒப்படைத்து அவர்களுக்குரிய ஆலோசனைகளை வழங்கி வருகின்றோம்.",
		pathway__card4_para:
			"	14 ஆவது மொறா பரீட்சையை வெற்றிகரமாக நடாத்துவதை எண்ணி பெருமையடைகின்றோம். கடந்த வருடம் 22 மாவட்டங்களில் 69 பரீட்சை நிலையங்களில் 5000 இற்கு மேற்பட்ட மாணவர்களை உள்ளடக்கி எமது பரீட்சையை நடாத்தி இருந்தோம்.",
		feedback_iroshan:
			"இத்தேர்வு பல்வேறு படிநிலைகளை தாண்டி தேசிய அங்கீகாரம் பெற்று காணப்படுகின்றது சுருக்கமாக சொல்லப்போனால் இது பரீட்சையின் அடுத்த நிலை ஆகும்",
		feedback_darukeesan:
			"பல்கலைக்கழகங்களில் படிக்கும் மாணவர்கள் படிப்பில் மட்டுமே கவனம் செலுத்துகிறார்கள், சமூகத்தின் மீது அக்கறையோ அக்கறையோ இல்லை என்பது சமூகத்தில் பொதுவான கருத்து. அது தவறு என்று எங்கள் மாணவர்கள் நிரூபித்துள்ளனர்.",
		feedback_abarna:
			"தேர்வுத் தாள்கள் நன்கு அனுபவம் வாய்ந்த ஆசிரியர்களால் தயாரிக்கப்படுவதால், இறுதித் தேர்வுக்கான எங்கள் தயாரிப்புகளில் இந்தக் குழு முக்கியமானது. இறுதித் தேர்வை வெற்றிகரமாக எதிர்கொள்ள இரண்டு அல்லது மூன்று ஆண்டுகள் மோரா பரீட்சை கடந்த தாள்களை பயிற்சி செய்வது நல்லது!",
		feedback_sankavi:
			"மோரா பரீட்சைகள் A/L பரீட்சையின் ஒரு பகுதியாகும். அது எனக்கு அதிக பயிற்சியையும் நம்பிக்கையையும் கொடுத்தது. அதில் நான் மிகவும் மகிழ்ச்சி அடைகிறேன். எனது இறுதித் தேர்வில் மோரா தேர்வுகளின் பிரதிபலிப்பைக் கண்டேன்.",
		feedback_jathurshan:
			"மோரா தேர்வு எனது நேர நிர்வாகத்தை மேம்படுத்துவதற்கான வாய்ப்பை வழங்கியது, இது ஒரு தேர்வின் மிக முக்கியமான அம்சமாகும். இந்தத் தேர்வு இறுதித் தேர்வைப் போன்ற சூழலை உருவாக்கி, நமது மன உறுதியை வளர்க்க உதவுகிறது.",
		feedback_sundarbavan:
			"கோவிட்-19 தொற்றுநோய் காரணமாக, கிட்டத்தட்ட ஐந்து மாதங்களாக நாங்கள் எந்த மாதிரித் தேர்வுகளையும் எதிர்கொள்ளவில்லை. அந்த வகையில் மோரா பரீட்சைகள் கேள்விகளை அணுகி சரியான முறையில் பதிலளிக்கும் திறனை வளர்க்க எனக்கு உதவியது.",
		feedback_suriya:
			"மோரா பரீட்சைகள் எமது A/L இறுதிப் பரீட்சைக்கு மிகவும் ஒத்தவை. மாணவர்கள் தங்கள் பலம் மற்றும் பலவீனங்களை முன்கூட்டியே கண்டறிய உதவுகிறது.",
	},
});

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
 * @prop {string} nav__timetable
 * @prop {string} nav__exam_centres
 * @prop {string} nav__past_papers
 * @prop {string} nav__about
 * @prop {string} hero__title
 * @prop {string} find_your_examination_centres__tile
 * @prop {string} looking_for_past_papers__title
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
 */

/**
 * @type {Readonly<Record<Language, UiStrings>>}}
 */
export const ui = Object.freeze({
	en: {
		nav__timetable: "Timetable",
		nav__exam_centres: "Exam Centres",
		nav__past_papers: "Past Papers",
		nav__about: "About Us",
		hero__title: "Sri Lanka's biggest pioneer exams for G.C.E. (A/L) students",
		find_your_examination_centres__tile: "Find your examination centres",
		looking_for_past_papers__title: "Looking for Mora Exam Past Papers?",
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
	},
	ta: {
		nav__timetable: "பரீட்சை அட்டவணை",
		nav__exam_centres: "பரீட்சை நிலையங்கள்",
		nav__past_papers: "கடந்த கால வினாத்தாள்கள்",
		nav__about: "எம்மைப் பற்றி",
		hero__title:
			"க. பொ. த. (உ/த) மாணவர்களுக்கான இலங்கையின்  மிகப்பெரிய முன்னோடி பரீட்ச்சை",
		find_your_examination_centres__tile:
			"உங்களது பரீட்சை நிலையத்தை கண்டறியுங்கள்",
		looking_for_past_papers__title: "கடந்த கால வினாத்தாள்களை தேடுகின்றீர்களா?",
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
		committee__university: "மொரட்டுவ பல்கலைக்கழகம்",
	},
});

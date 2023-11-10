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
	},
});

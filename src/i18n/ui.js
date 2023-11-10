export const languages = Object.freeze({
	en: "English",
	ta: "Tamil",
});
/**
 * @typedef {keyof typeof languages} Language
 */

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
	},
	ta: {
		nav__timetable: "பரீட்சை அட்டவணை",
		nav__exam_centres: "பரீட்சை நிலையங்கள்",
		nav__past_papers: "கடந்த கால கேள்வித்தாள்கள்",
		nav__about: "எம்மைப் பற்றி",
	},
});

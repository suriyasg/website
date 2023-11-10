import { ui, defaultLang, languages, LIST_OF_LANGUAGES } from "./ui";

/**
 * @param {string} lang
 * @returns {lang is import("./ui").Language}
 */
function isSupportedLanguage(lang) {
	// @ts-expect-error
	return LIST_OF_LANGUAGES.includes(lang);
}

/**
 * @param {URL} url
 * @returns {import("./ui").Language}
 */
export function getLangFromUrl(url) {
	const lang = url.pathname.split("/")[1];
	if (isSupportedLanguage(lang)) {
		return lang;
	}
	return defaultLang;
}

/**
 * @param {import("./ui").Language} lang
 */
export function useTranslations(lang) {
	/**
	 * @param {keyof import("./ui").UiStrings} key
	 */
	return function t(key) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

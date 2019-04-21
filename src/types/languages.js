const languages = [
  {
    name: 'Spanish',
    code: 'es',
  },
  {
    name: 'English',
    code: 'en',
  },
];

/**
 * @returns {{name: string, code: string}} The Language object for Spanish
 */
export function getSpanishLanguage() {
  return languages[0];
}

/**
 * @returns {{name: string, code: string}} The Language object for English
 */
export function getEnglishLanguage() {
  return languages[1];
}

/**
 * @returns {string} The code string for the Spanish Language
 */
export function getSpanishLanguageValue() {
  return languages[0].code;
}

/**
 * @returns {string} The code string for the English Language
 */
export function getEnglishLanguageValue() {
  return languages[1].code;
}

/**
 * Makes use of the Array.find function to search for a Language with the given code.
 * @param {string} code The language's code to search for
 * @returns {{name: string, code: string}} The language's object found
 */
export function getLanguageByCode(code) {
  if (code == null || code === '') {
    throw new Error("code can't be null or empty");
  }

  return languages.find((language) => Object.is(language.code, code));
}

export default languages;

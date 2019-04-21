import { getEnglishLanguageValue, getSpanishLanguageValue } from './languages';

/**
 * Array of all the CountryContexts available to the App. Use the auxiliary functions available to operate with them.
 * @type {Object[]}
 */
const countries = [
  {
    id: 1,
    isoCode: 'CL',
    name: 'Chile',
    language: getSpanishLanguageValue(),
    currencyIsoCode: 'CLP',
    emoji: '🇨🇱',
  },
  {
    id: 2,
    isoCode: 'MX',
    name: 'Mexico',
    language: getSpanishLanguageValue(),
    currencyIsoCode: 'MXN',
    emoji: '🇲🇽',
  },
  {
    id: 3,
    isoCode: 'US',
    name: 'United States of America',
    language: getEnglishLanguageValue(),
    currencyIsoCode: 'USD',
    emoji: '🇺🇸',
  },
];

/**
 * @returns {Object} The Chile Country object to be used in the App where it's needed.
 */
export const getChileCountry = function() {
  return countries[0];
};

/**
 * @returns {Object} The Mexico Country object to be used in the App where it's needed.
 */
export const getMexicoCountry = function() {
  return countries[1];
};

/**
 * @returns {Object} The US Country object to be used in the App where it's needed.
 */
export const getUSCountry = function() {
  return countries[2];
};

/**
 * @returns {boolean} True if the given object equals the Chile Country object.
 */
export const isChile = function(country) {
  return Object.is(getChileCountry(), country);
};

/**
 * @returns {boolean} True if the given object equals the Mexico Country object.
 */
export const isMexico = function(country) {
  return Object.is(getMexicoCountry(), country);
};

/**
 * @returns {boolean} True if the given object equals the US Country object.
 */
export const isUS = function(country) {
  return Object.is(getUSCountry(), country);
};

/**
 * Attempts to find the Country for the given language string. If the language doesn't provide an exact match
 * with a Country's language, it will return the default Country for the first 2 characters of the language
 * string, found by looking sequentially through the array of Countries and returning the first match.
 *
 * @param {string} language The language string for which to find a Country.
 * @returns {Object | undefined} The Country for the given language or the default for the first
 * 2 characters of it or undefined if nothing is found.
 *
 * @example <caption>Example for finding México Country</caption>
 * // returns { isoCode: "MX", name: "México", language: "es-MX" }
 * findCountryByLanguage("es-MX");
 *
 * @example <caption>Example that returns Chile Country</caption>
 * // returns { isoCode: "CL", name: "Chile", language: "es-CL" }
 * findCountryByLanguage("es");
 */
export const findCountryByLanguage = function(language) {
  if (language == null || language === '') {
    throw new Error("language can't be null or empty");
  }
  let res = countries.find((country) => Object.is(country.language, language));
  if (res == null) {
    res = countries.find((country) => Object.is(country.language.substr(0, 2), language.substr(0, 2)));
  }
  return res;
};

/**
 * Looks up the Country with the given isoCode.
 * @param {string} isoCode The isoCode to find the Country for.
 * @returns {Object | undefined} The Country object for the given isoCode or undefined if not found.
 *
 * @example <caption>Find the Chile Country</caption>
 * // returns { isoCode: "CL", name: "Chile", language: "es-CL" }
 * findCountryByISOCode("CL")
 */
export const findCountryByISOCode = function(isoCode) {
  if (isoCode == null || isoCode === '') {
    throw new Error("isoCode can't be null or empty");
  }
  return countries.find((country) => Object.is(country.isoCode, isoCode));
};

/**
 * Looks up the Country with the given isoCode.
 * @param {number} countryCode The isoCode to find the Country for.
 * @returns {Object | undefined} The Country object for the given isoCode or undefined if not found.
 *
 * @example <caption>Find the Chile Country</caption>
 * // returns { isoCode: "CL", name: "Chile", language: "es-CL" }
 * findCountryByCountryCode(1)
 */
export const findCountryByCountryCode = function(countryCode) {
  if (countryCode == null || countryCode === '') {
    throw new Error("countryCode can't be null or empty");
  }
  return countries.find((country) => Object.is(country.id, countryCode));
};

export default countries;

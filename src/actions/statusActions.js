import * as ActionTypes from './types';

/**
 * Creates the action for changing the current state of the App.
 */
export const changeState = (state) => ({
  type: ActionTypes.CHANGE_STATE,
  payload: { context: 'status', state },
});

/**
 * Creates the action for changing the response from the API of one of the contexts.
 * @param {String} form pass the name of the specific form.
 * @param {String} response pass the response of api request according to the forms.
 */
export const changeResponse = (form, response) => ({
  type: ActionTypes.CHANGE_RESPONSE,
  payload: { context: 'status', form, response },
});

/**
 * Creates the action of changing the country provided as a React Context to the App.
 */
export const changeCountry = (countryIsoCode) => ({
  type: ActionTypes.CHANGE_COUNTRY,
  payload: { context: 'status', countryIsoCode },
});

/**
 * Creates the action for changing the language for the i18n urls.
 */
export const changeLanguage = (languageCode) => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  payload: { context: 'status', languageCode },
});

/**
 * Creates the action of setting the i18n instance into the redux store. This action should only be called
 * once in the lifecycle of the App.
 */
export const setI18n = (i18n) => ({
  type: ActionTypes.SET_I18N,
  payload: { context: 'status', i18n },
});

/**
 * Action for setting the enqueueSnackbar function into the redux store. This action should only be called
 * once in the lifecycle of the App.
 */
export const setSnackbarEnqueuer = (enqueueSnackbar) => ({
  type: ActionTypes.SET_SNACKBAR_ENQUEUER,
  payload: { context: 'status', enqueueSnackbar },
});

/**
 * Action for showing a notification. Check the documentation for Notistack: https://iamhosseindhv.com/notistack.
 * The message will be translated before being feed to the Snackbar that will display it. It's not necessary to
 * pass a translated message to this function.
 */
export const enqueueNotification = (message, variant) => ({
  type: ActionTypes.ENQUEUE_NOTIFICATION,
  payload: { context: 'status', message, variant },
});

/**
 * Action for open the Account Menu in the corner of App bar.
 * @param {string} target
 */
export const handleMenu = (target) => ({
  type: ActionTypes.HANDLE_MENU,
  payload: { context: 'status', target },
});

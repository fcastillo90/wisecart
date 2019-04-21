import Model from "../model";
import { fromJS } from "immutable";

const IGNORED_CONTEXT_VALUE = "__IGNORE__";

/**
 * Builds the main root reducer for the Redux store.
 */
export default (state = fromJS(Model()), action = {}) => {
  const context =
    action.payload != null ? action.payload.context : IGNORED_CONTEXT_VALUE;
  switch (context) {
    default:
      console.warn(`Unknown context in root reducer: ${context}`);
      return state;
  }
};

import React from 'react';
import { getChileCountry } from './types/countries';

/**
 * React Context for Countries with the default value of Chile as CountryContext
 */
export default React.createContext(getChileCountry());

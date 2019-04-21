/* Dependencies */
import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { mainTheme } from "../MuiTheme";

const theme = createMuiTheme(mainTheme);

/* Redux Connection */
const mapStateToProps = state => ({});

function App({}) {
  return <h1>prueba</h1>;
}

export default connect(mapStateToProps)(withStyles()(App));

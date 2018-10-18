import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
	palette: {
		primary: { main: "#3f51b5" },
		secondary: { main: "#ff1744" },
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MuiThemeProvider>,
	document.getElementById("root")
);
serviceWorker.unregister();

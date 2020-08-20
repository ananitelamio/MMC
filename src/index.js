import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import {AppContextProvider} from "./providers/context";

Modal.setAppElement("#root");

ReactDOM.render(
  <AppContextProvider>
		<App />
	</AppContextProvider>, document.getElementById('root')
);

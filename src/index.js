import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import {AppContextProvider} from "./providers/context";
import serviceWorker from './serviceWorker';

Modal.setAppElement("#root");

ReactDOM.render(
  	<AppContextProvider>
		<App />
	</AppContextProvider>, document.getElementById('root')
);

serviceWorker();

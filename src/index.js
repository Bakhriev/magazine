import { StrictMode } from "react"
import ReactDOM from "react-dom/client"

import { store } from "./store/store"
import { Provider } from "react-redux"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<StrictMode>
		<App />
	</StrictMode>
)

//<Provider store={store}>		</Provider>

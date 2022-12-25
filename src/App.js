import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"

import "./app.scss"

function Layout() {
	return (
		<div className="app">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/products/:id",
				element: <Products />
			},
			{
				path: "/product/:id",
				element: <Product />
			}
		]
	}
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App

import React from "react"
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom"
import App from "./App"
import Login from "./Login"


const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </Router>
)
export default Root

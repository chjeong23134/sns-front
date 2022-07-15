import "./App.scss";

import {Route, Routes} from "react-router-dom";

import Nav from "./components/nav/Nav";
import SignUp from "./pages/auth/signUp/SignUp";
import SignIn from "./pages/auth/signIn/SignIn";

function App() {
    return (
        <div className="app">
			<Nav />
            <div className="page">
				<Routes>
					<Route path={"sign-up"} element={<SignUp />} />
					<Route path={"sign-in"} element={<SignIn />} />
				</Routes>
			</div>
        </div>
    );
}

export default App;

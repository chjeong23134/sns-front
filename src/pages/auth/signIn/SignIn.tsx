import "./SignIn.scss";

import {useState} from "react";
import {signIn} from "../../../apis/authApi";

export default function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function signInHandler(): void {
        signIn(email, password);
    }

    return (
        <div className="sign-in">
            <div className="board">
                <div className="label-wrapper">
                    <label className="title">Sign In</label>
                </div>

                <div className="label-wrapper">
                    <label className="email">Eamil</label>
                    <input onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="label-wrapper">
                    <label className="password">Password</label>
                    <input
                        type={"password"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="button-wrapper">
                    <button className="sign-in-button" onClick={signInHandler}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

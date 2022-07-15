import "./SignUp.scss";

import {useState} from "react";
import { signUp } from "../../../apis/userApi";

export default function SignUp() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function signUpHandler(): void {
        signUp(name, email, password);
    }

    return (
        <div className="sign-up">
            <div className="board">
                <div className="label-wrapper">
                    <label className="title">Sign Up</label>
                </div>

                <div className="label-wrapper">
                    <label className="name">Name</label>
                    <input onChange={(e) => setName(e.target.value)} />
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
                    <button className="sign-up-button" onClick={signUpHandler}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

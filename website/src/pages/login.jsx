import { useRef, useState } from "react";
import { FaUser, FaLock, FaUnlock } from "react-icons/fa";
import "../assets/scss/login.scss";
import { useNavigate } from "react-router-dom";
import { cookies, login } from "../services/entry";
import logo from "../assets/images/hatakonLogo.png";

export default function Login() {
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const [userIdentifier, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await login({ userIdentifier, password });
            if (response.message === "success") {
                cookies.set("authorization", response.accessToken);
                cookies.set("userType", response.userType);
                cookies.set("userFullName", response.userFullName);
                cookies.set("username", response.username);

                navigate("/");
                window.location.reload();
            } else {
                setShowError(response.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="wrapper">
                <form>
                    <div className="logo-container">
                        <img src={logo} alt="phinmapulselogo" className="logo-img" />
                    </div>
                    <h1>DUMM PUSH</h1>
                    {showError && <p></p>}
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Student ID number"
                            required
                            value={userIdentifier}
                            onChange={(e) => setUsername(e.target.value)}
                            ref={emailRef}
                        />

                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {showPassword ? (
                            <FaUnlock
                                className="icon-lock"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        ) : (
                            <FaLock
                                className="icon-lock"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        )}
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember me?
                        </label>
                        <a href="#"> Forgot password?</a>
                    </div>
                    <button
                        className="login"
                        type="button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

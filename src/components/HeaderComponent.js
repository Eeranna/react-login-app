
import React, { useState } from "react";
import withNavigateHook from "./withNavigateHook";

const HeaderComponent = (props) => {

    const [showlogin, setShowlogin] = useState(true);
    const [showlogout, setShowlogout] = useState(false);

    const goLogin = () => {
        setShowlogin(false);
        setShowlogout(true);
        props.navigation("/login-page");
    }
    const goLogout = () => {
        setShowlogin(true);
        setShowlogout(false);
        props.navigation("/");
    }
        return (
            <div>
                <hreader>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="https://javaguides.net" className="navbar-brand">
                                Employee Management App
                            </a>
                            {showlogin && <button style={{marginLeft: "1100px"}}
                                onClick={goLogin}
                                className="btn btn-info"
                                >Login{" "}
                            </button>}
                            {showlogout && <button style={{marginLeft: "1100px"}}
                                onClick={goLogout}
                                className="btn btn-info"
                                >Logout{" "}
                            </button>}
                        </div>
                    </nav>
                </hreader>
            </div>
        )
    }

export default withNavigateHook(HeaderComponent);
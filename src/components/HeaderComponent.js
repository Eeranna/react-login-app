
import React from "react";
import withNavigateHook from "./withNavigateHook";

const HeaderComponent = (props) => {

    const goLogin = () => {
        props.navigation("/login-page");
    }
        return (
            <div>
                <hreader>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="https://javaguides.net" className="navbar-brand">
                                Employee Management App
                            </a>
                            <button style={{marginLeft: "1100px"}}
                                onClick={goLogin}
                                className="btn btn-info"
                                >Login{" "}
                            </button>
                        </div>
                    </nav>
                </hreader>
            </div>
        )
    }

export default withNavigateHook(HeaderComponent);
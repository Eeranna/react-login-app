import React from "react";
import withNavigateHook from "../withNavigateHook";

const LoginButton = (props) => {

    const goLogin = () => {
        props.navigation("/login-page");
    }
    return (
        <div>
            <button style={{marginLeft: "1100px"}}
                    onClick={goLogin}
                    className="btn btn-info"
            >Login{" "}</button>
        </div>
    )
} 

export default withNavigateHook(LoginButton);
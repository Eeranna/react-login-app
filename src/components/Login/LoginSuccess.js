import React from "react";
import Button from "../UI/Button";
import withNavigateHook from "../withNavigateHook";

const LoginSuccess = (props) => {
    const goBack = () => {
        props.navigation("/login-page");
    }

    return (
        <div>
            <h2>You have logged with username and password</h2>
            <Button onClick={goBack}>GoBack</Button>
        </div>
    )
}

export default withNavigateHook(LoginSuccess);
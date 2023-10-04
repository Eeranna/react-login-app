import React, { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import classes from './LoginPage.module.css';
import Button from "../UI/Button";
import withNavigateHook from "../withNavigateHook";

const LoginPage = (props) => {
    const nameInputRef = useRef();
    const passwordInputRef = useRef();
    const requiredUname = "abc";
    const requiredPwd = "123";

    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const goBack = () => {
        props.navigation("/");
    }

    const loginHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredPassword.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and password (non-empty values).",
            });
            return;
        }
        if(enteredName !== requiredUname || enteredPassword !== requiredPwd) {
            setError({
                title: "Invalid Username and Password",
                message: "Please enter a valid credentials.",
            });
            return;
        }
        nameInputRef.current.value = ' ';
        passwordInputRef.current.value = ' ';
        props.navigation("/list-employees");
        //props.onLoginDetails(enteredName, enteredPassword);
    }

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}/>
            )}
            <Card className={classes.input}>
                <form onSubmit={loginHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    ></input>
                     <label htmlFor="username">Password</label>
                    <input
                        id="password"
                        type="password"
                        ref={passwordInputRef}
                    ></input>
                    <Button type="submit">Login</Button>&nbsp;&nbsp;
                    <Button onClick={goBack}>Cancel</Button>
                    {/* <button
                        className="btn btn-primary"
                        onClick={goBack}
                        style={{marginLeft: '10px'}}
                        >GoBack</button> */}
                </form>
            </Card>
        </Wrapper>
    )
} 

export default withNavigateHook(LoginPage);
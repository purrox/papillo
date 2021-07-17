import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './index.css';
import { useHistory } from "react-router-dom";

const Login = props => {
    const { control, handleSubmit } = useForm();
    let history = useHistory();
    const onSubmit = data => {
        history.push("/dashboard");
    }

    return (
        <div className={'login-container'}>
            <h1>Login</h1>
            <AccountCircleIcon style={{ fontSize: 100 }}/>
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} />}
                />
                <label>Password</label>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input type={'password'} {...field} />}
                />
                <input type="submit" value={'Entrar'} />
            </form>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;

import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './index.css';

const Login = props => {
    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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
                {/*<Controller*/}
                {/*    name="iceCreamType"*/}
                {/*    control={control}*/}
                {/*    render={({ field }) => <Select*/}
                {/*        {...field}*/}
                {/*        options={[*/}
                {/*            { value: "chocolate", label: "Chocolate" },*/}
                {/*            { value: "strawberry", label: "Strawberry" },*/}
                {/*            { value: "vanilla", label: "Vanilla" }*/}
                {/*        ]}*/}
                {/*    />}*/}
                {/*/>*/}
                <input type="submit" value={'Entrar'} />
            </form>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;

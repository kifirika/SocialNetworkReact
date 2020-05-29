import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validator';
import { Input } from '../FormsControl/FormsControl';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from './LoginPage.module.css';

const afterSubmit = (result, dispatch) => {
    dispatch(reset('login'));
};

const maxLength = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLength]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
            </div>
            {props.error &&
            <div className={s.loginizationError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login',
    onSubmitSuccess: afterSubmit
  })(LoginForm)
const Login = (props) => {

    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Пожалуйста, залогиньтесь</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login} )(Login);
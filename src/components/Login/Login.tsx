import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

import { authLogin } from '../../Redux/authReducer';
import { StateType } from '../../Redux/redux-store';
import { Input } from '../common/FormControls/FormFields';
import { isEmail, Required } from '../common/formValidators';
import er from './../common/FormControls/FormFields.module.css';


const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='login' component={Input} placeholder='login' validate={[Required, isEmail]} />
      </div>
      <div>
        <Field name='password' component={Input} placeholder='Password' validate={[Required]} />
      </div>
      <div>
        <Field name='remember' component='input' type={'checkbox'} />
        <label>remember me</label>
      </div>
      {error && <div className={er.errorForm}>{error}</div>}
      <button >login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({ form: 'login' })(LoginForm);

type LoginFormDataType = {
  login: string
  password: string
  remember: boolean
}

const Login: React.FC = () => {
  const isAuth = useSelector<StateType, boolean>((state) => {
    return state.auth.isAuth
  });
  const dispatch = useDispatch()

  let onSubmit = (formData: LoginFormDataType) => {
    dispatch(authLogin(formData.login, formData.password, formData.remember))
  };

  if (isAuth) return <Redirect to="/profile" />
  return <LoginReduxForm onSubmit={onSubmit} />
};

export default Login;
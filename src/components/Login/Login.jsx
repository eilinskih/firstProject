import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { authLogin  } from '../../Redux/authReducer';
import { Input } from '../common/FormControls/FormFields';
import { isEmail, Required } from '../common/formValidators';
import er from './../common/FormControls/FormFields.module.css'


function LoginForm(props) {
return (
<form onSubmit={props.handleSubmit}>
  <div>
    <Field name='login' component={Input} placeholder='login' validate={[Required, isEmail]}/>
  </div>

  <div>
    <Field name='password' component={Input} placeholder='Password' validate={[Required]}/>
  </div>

  <div>
    <Field name='remember' component='input' type={'checkbox'}/>
      <label>remember me</label>
  </div>
  {props.error && <div className={er.errorForm}>{props.error}</div>}

  <button >login</button>
</form>
  )
  }

  const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
 
function Login(props) {

  let onSubmit = (formData) => {
    props.authLogin(formData.login, formData.password, formData.remember)
  }
if (props.isAuth) return <Redirect to="/profile"/>
    return <LoginReduxForm onSubmit={onSubmit}/> 
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {authLogin})(Login);
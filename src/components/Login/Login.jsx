import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { loginTC } from "../../redux/auth-reducer"
import { maxLengthCreator, required } from "../../validators/Validators"
import { createField, Element } from "../common/preloader/FormsControl/FormControl"
import style from "../common/preloader/FormsControl/FormControl.module.css"


const maxLength = maxLengthCreator(25)
const Inputarea = Element('input')


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField([required, maxLength], 'login', Inputarea, 'email', 'email')}
            {/* <div>
                <Field validate={[required, maxLength]} placeholder="login" component={Inputarea} name={'email'} type='email'/>
            </div> */}
            {createField([required, maxLength], 'pasword', Inputarea, 'password', 'password')}
            {/* <div>
                <Field validate={[required, maxLength]} placeholder="pasword" component={Inputarea} name={'password'} type='password' />
            </div> */}
            {createField(null, null, 'input', 'remeberMe', 'checkBox', 'remember me')}
            {/* <div>
                <Field type="checkBox" component='input' name={'remeberMe'} />remeber me
            </div> */}
            {props.error && <div className={style.commandError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}
// error приходит из reduxForm

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Navigate to={"/profile"} />

    return <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {loginTC})(Login)
import React from "react"
import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" component='input' name={'login'} />
            </div>
            <div>
                <Field placeholder="pasword" component='input' name={'password'} />
            </div>
            <div>
                <Field type="checkBox" component='input' name={'remeberMe'} />remeber me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            {/* <input type="text" placeholder="login"/>
            <input type="text" placeholder="pasword"/>
            <input type="checkBox"/>Remeber me */}
        </div>
}

export default Login
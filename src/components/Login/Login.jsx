import React from "react"
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../validators/Validators"
import { Element } from "../common/preloader/FormsControl/FormControl"


const maxLength = maxLengthCreator(10)
const Inputarea = Element('input')


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength]} placeholder="login" component={Inputarea} name={'login'} />
            </div>
            <div>
                <Field validate={[required, maxLength]} placeholder="pasword" component={Inputarea} name={'password'} />
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
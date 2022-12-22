import Header from "./Header"
import React from "react"
import { connect } from "react-redux"
import axios from "axios"
import { setAuthUserData } from "../../redux/auth-reducer"
import { authAPI } from "../../api/api"

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let id = data.data.id
                let login = data.data.login
                let email = data.data.email
                this.props.setAuthUserData(id, login, email)
            }
        })

    }
    render() {
        return <Header {...this.props}/>
    }
}



const mapStateToProps = (state) => ({
    auth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer)





        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}) // withCredentials получаем с cooke 
        //     .then(respons => {
        //         if (respons.data.resultCode === 0) {
        //             let id = respons.data.data.id
        //             let login = respons.data.data.login
        //             let email = respons.data.data.email
        //             this.props.setAuthUserData(id, login, email)
        //         }
        //     })
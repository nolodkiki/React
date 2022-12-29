import Header from "./Header"
import React from "react"
import { connect } from "react-redux"
import { setAuthUserData, getAuthTC, logoutTC } from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}



const mapStateToProps = (state) => ({
    auth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {setAuthUserData, getAuthTC, logoutTC})(HeaderContainer)





        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}) // withCredentials получаем с cooke 
        //     .then(respons => {
        //         if (respons.data.resultCode === 0) {
        //             let id = respons.data.data.id
        //             let login = respons.data.data.login
        //             let email = respons.data.data.email
        //             this.props.setAuthUserData(id, login, email)
        //         }
        //     })
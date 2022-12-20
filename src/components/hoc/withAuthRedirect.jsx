import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'} />
        return <Component  {...props} />
    }
    const ConectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConectedAuthRedirectComponent
}


export default withAuthRedirect



// Обарачиваем connect, чтобы не брать из стэйта isAuth в настоящей компоненте
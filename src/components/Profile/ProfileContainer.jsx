// import MyPosts from './MyPosts/MyPost'
import { connect } from 'react-redux'
import Profile from './Profile'
import React from 'react'
import { getProfileThunkCreator } from '../../redux/profile-reducer'
import { Navigate, useParams } from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileThunkCreator(userId)
        // profileAPI.getProfile(userId).then(data => this.props.setUserProfile(data))
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(respons => {
        //         this.props.setUserProfile(respons.data)
        //     })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        // isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getProfileThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const WithUrlDataConatinerComponent = withRouter(AuthRedirectComponent)


// export default connect(mapStateToProps, { getProfileThunkCreator })(WithUrlDataConatinerComponent)
// import MyPosts from './MyPosts/MyPost'
import { connect } from 'react-redux'
import Profile from './Profile'
import React from 'react'
import { getProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { useEffect } from 'react';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}



// class ProfileContainer extends React.Component {
//     componentDidMount() {
//         let userId = this.props.match.params.userId
//         if (!userId) {
//             userId = 27155
//         }
//         this.props.getProfileThunkCreator(userId)
//         this.props.getUserStatusThunkCreator(userId)
//     }

//     render() {
//         return (
//             <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator} />
//         )
//     }
// }

const ProfileContainer = (props) => {
    let userId = props.match.params.userId
    const getProfileThunkCreator = () => props.getProfileThunkCreator(userId)
    const getUserStatusThunkCreator = () => props.getUserStatusThunkCreator(userId)
    useEffect(() => {
            if (!userId) {
                userId = 27155
            }
            getProfileThunkCreator()
            getUserStatusThunkCreator()
    }, [])


        return (
            <Profile {...props} profile={props.profile} status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} />
        )
    }

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
        // isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const WithUrlDataConatinerComponent = withRouter(AuthRedirectComponent)


// export default connect(mapStateToProps, { getProfileThunkCreator })(WithUrlDataConatinerComponent)
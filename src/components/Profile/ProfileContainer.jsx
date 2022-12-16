// import MyPosts from './MyPosts/MyPost'
import axios from 'axios'
import { connect } from 'react-redux'
import Profile from './Profile'
import React from 'react'
import { setUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(respons => {
                this.props.setUserProfile(respons.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}


let WithUrlDataConatinerComponent = withRouter(ProfileContainer)



export default connect(mapStateToProps, { setUserProfile })(WithUrlDataConatinerComponent)
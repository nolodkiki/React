import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../redux/dialog-reducer'
import withAuthRedirect from '../hoc/withAuthRedirect'
import Dialogs from './Dialogs'

// const DialogsContainer = () => {
// debugger

// return (
//     <MyContext.Consumer>{
//         (store) => {
//             let state = store.getState()

//             let addPost = () => {
//                 store.dispatch(addMessageActionCreator())
//             }

//             let onMessageChange = (body) => {
//                 store.dispatch(UpdateNewMessageTextActionCreator(body))
//             }
//             return (<Dialogs messageText={state.dialogPage.messageText} dialogPage={state.dialogPage} addPost={addPost} onMessageChange={onMessageChange} />)
//         }
//     }

//     </MyContext.Consumer>
// )


// }



let mapStateToProps = (state) => {
    return {
        messageText: state.dialogPage.messageText,
        dialogPage: state.dialogPage,
        // isAuth: state.auth.isAuth

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addMessageActionCreator()) },
        onMessageChange: (body) => { dispatch(UpdateNewMessageTextActionCreator(body)) }
    }
}



export default 
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs)



// <MyContext.Consumer>
// {value => {}}
// </MyContext.Consumer>


// const AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
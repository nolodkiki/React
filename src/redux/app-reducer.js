import { getAuthTC } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, acttion) => {
    switch(acttion.type) {
        case INITIALIZED_SUCCESS: return {
            ...state,
            initialized: true
            
        }
        default: return state
    }
}

export const inintialazedSuccess = () => ({type: INITIALIZED_SUCCESS})


export const inintialazeAppTC = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthTC())
        Promise.all([promise]).then(() => {
            dispatch(inintialazedSuccess())
        })
        // promise.then(() => {
        //     dispatch(inintialazedSuccess())
        // })
        
    }
}

export default appReducer
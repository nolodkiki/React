import profileReducer, { addPostActionCreator } from "./profile-reducer";


let state = {
    postData: [
        { message: 'BTS', id: '1', likes: '893K' },
        { message: 'Army', id: '2', likes: '1.2M' },
    ]
}

test('length posts', () => {
    let action = addPostActionCreator('BTS')


    let newState = profileReducer(state, action)

    
    expect(newState.postData.length).toBe(3)
    expect(newState.postData[2].message).toBe('BTS')
});
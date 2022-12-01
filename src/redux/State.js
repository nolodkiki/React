const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let store = {
    _state: {
        profilePage: {
            postData: [
                { message: 'BTS', id: '1', likes: '893K Likes' },
                { message: 'Army', id: '2', likes: '1.2M Likes' },
            ],
            newPostText: 'хуй'
        },

        dialogPage: {
            dialogsData: [
                { name: 'Jungkook', id: '1' },
                { name: 'Namjoon', id: '2' },
                { name: 'Taehyung', id: '3' },
                { name: 'Yoon-gi', id: '4' },
                { name: 'Jimin', id: '5' },
                { name: 'Hosok', id: '6' },
                { name: 'Jin', id: '7' }
            ],

            messageData: [
                { message: 'Party Party yeah', id: '1' },
                { message: 'RRRRRRRRRRAP MONSTA', id: '2' }
            ],
            messageText: ''
        },

        friendPhotos: {
            photos: [
                { name: 'Jungkook', id: '1', photo: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/08/Jungkook-meme-worthy-expressions-pics1.png' },
                { name: 'Namjoon', id: '2', photo: 'https://p.favim.com/orig/2019/02/03/rap-monster-namjoon-rm-Favim.com-6883383.jpg' },
                { name: 'Taehyung', id: '3', photo: 'https://www.meme-arsenal.com/memes/0a592df85bcc97721ae7fbf4741d60a0.jpg' },
                { name: 'Yoon-gi', id: '4', photo: 'https://p.favim.com/orig/2018/09/09/meme-suga-min-yoongi-Favim.com-6299323.jpg' },
                { name: 'Jimin', id: '5', photo: 'https://i.pinimg.com/736x/87/0d/5f/870d5f5cb31b8c9620a262f27b9e7966.jpg' },
                { name: 'Hosok', id: '6', photo: 'https://i.pinimg.com/736x/e7/2b/bf/e72bbf8a269bb9776c5bca6afee998fc.jpg' },
                { name: 'Jin', id: '7', photo: 'https://www.meme-arsenal.com/memes/704cf45c010f4671566deac3bd6404f4.jpg' },
            ]
        },

        music: {
            kpop: [
                { title: 'Red Velvet - IRENE & SEULGI', link: 'https://www.youtube.com/watch?v=Ujb-gvqsoi0&list=RDUjb-gvqsoi0&start_radio=1&ab_channel=SMTOWN' },
                { title: 'NCT U 엔시티 유', link: 'https://www.youtube.com/watch?v=tyrVtwE8Gv0&list=RDUjb-gvqsoi0&index=5&ab_channel=SMTOWN' },
                { title: 'Agust D 대취타', link: 'https://www.youtube.com/watch?v=qGjAWJ2zWWI&list=RDUjb-gvqsoi0&index=10&ab_channel=HYBELABELS' },
                { title: 'Jackson Wang - Blow', link: 'https://www.youtube.com/watch?v=qCZHarOQvc4&ab_channel=JacksonWang' },
                { title: 'BTS - RUN', link: 'https://www.youtube.com/watch?v=aqW4xXUgmno&ab_channel=BANGTANTV' },
            ]
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    _callSubscriber() {
        console.log('change')
    },

    getCallSubscriber() {
        return this._callSubscriber
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newPostText,
                id: 3,
                likes: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._callSubscriber(this._state)
            this._state.profilePage.newPostText = ''
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === "ADD_MESSAGE") {
            let newMessage = {
                message: this._state.dialogPage.messageText,
                id: 3
            }
            this._state.dialogPage.messageData.push(newMessage)
            this._callSubscriber(this._state)
            this._state.dialogPage.messageText = ''
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.dialogPage.messageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


export const addMessageActionCreator = () => ({type: "ADD_MESSAGE"})
export const UpdateNewMessageTextActionCreator = (text) => ({type: 'UPDATE_NEW_MESSAGE_TEXT', newText: text})

export const addPostActionCreator = () => ({type: ADD_POST})

export const UpdateNewPosttextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text})



export default store
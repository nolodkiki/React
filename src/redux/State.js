let rerenderEntireTree = () => {
    console.log('change')
}
let state = {
    profilePage: {
        postData: [
            { message: 'BTS', id: '1', likes: '893K Likes' },
            { message: 'Army', id: '2', likes: '1.2M Likes' },
        ],
        newPostText: 'lalala'
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
            {title: 'Red Velvet - IRENE & SEULGI', link: 'https://www.youtube.com/watch?v=Ujb-gvqsoi0&list=RDUjb-gvqsoi0&start_radio=1&ab_channel=SMTOWN'},
            {title: 'NCT U 엔시티 유', link: 'https://www.youtube.com/watch?v=tyrVtwE8Gv0&list=RDUjb-gvqsoi0&index=5&ab_channel=SMTOWN'},
            {title: 'Agust D 대취타', link: 'https://www.youtube.com/watch?v=qGjAWJ2zWWI&list=RDUjb-gvqsoi0&index=10&ab_channel=HYBELABELS'},
            {title: 'Jackson Wang - Blow', link: 'https://www.youtube.com/watch?v=qCZHarOQvc4&ab_channel=JacksonWang'},
            {title: 'BTS - RUN', link: 'https://www.youtube.com/watch?v=aqW4xXUgmno&ab_channel=BANGTANTV'},
        ]
    }
}
window.state = state
export const addPost = () => {
    let newPost = {
        message: state.profilePage.newPostText,
        id: 3,
        likes: 0
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)   
    state.profilePage.newPostText = ''
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}


export default state
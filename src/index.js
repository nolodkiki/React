import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState())    
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals();

// store.subscribe(rerenderEntireTree) это функция колбэк, она вызывается из state с аргументом изменившегося state, т.е. когда мы нажимаем addPost, this._callSubscriber(this._state) <App /> перезаписывется здесь, т.к. здесь уже будет вызвана функция rerenderEntireTree(state), с помошью колбэка



// bind(store). так как мы передаем, допустим addPost в MyPost, через пропсы, а в стэйте он имеет "message: this._state.profilePage.newPostText", то этот this будет иметь контекст пропсов в MyPost, а не конетекст store, поэтому мы биндим addPost 
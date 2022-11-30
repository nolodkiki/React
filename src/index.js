import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState())    
store.subscribe(rerenderEntireTree)

reportWebVitals();



// bind(store). так как мы передаем, допустим addPost в MyPost, через пропсы, а в стэйте он имеет "message: this._state.profilePage.newPostText", то этот this будет иметь контекст пропсов в MyPost, а не конетекст store, поэтому мы биндим addPost 
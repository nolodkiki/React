import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost, subscribe, updateNewPostText } from './redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(state)    

subscribe(rerenderEntireTree)

reportWebVitals();
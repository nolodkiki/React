import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import state from './redux/State';


rerenderEntireTree(state)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost} />
//   </React.StrictMode>
// );
reportWebVitals();

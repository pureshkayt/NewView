import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore"
import ArticleStore from "./store/ArticleStore";
import SliderStore from "./store/SliderStore";

export const Context = createContext(null)


ReactDOM.render(

    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
        blog: new ArticleStore(),
        slider: new SliderStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);




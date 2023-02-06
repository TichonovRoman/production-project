import React, {Suspense} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import './index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to={'/about'}>О сайте</Link>
            <Link to={'/'}>Главная</Link>
            <Suspense fallback={<div>Загрузка ...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
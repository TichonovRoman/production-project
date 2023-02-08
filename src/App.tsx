import React, {Suspense, useContext, useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "./styles/index.scss";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    console.log(classNames("remove-btn", {hovered: false, selectable: true, red: true}, ["pdg"]))

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={"/about"}>О сайте</Link>
            <Link to={"/"}>Главная</Link>
            <Suspense fallback={<div>Загрузка ...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
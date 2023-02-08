import React, {Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={"/about"}>О сайте</Link>
            <Link to={"/"}>Главная</Link>
            <Suspense fallback={<div>Загрузка ...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/"} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
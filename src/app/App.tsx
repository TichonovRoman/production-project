import React, {Suspense, useEffect} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "@/widgets/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {getUserInited, userActions} from "@/entities/User";
import {Sidebar} from "@/widgets/SideBar";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";

function App() {
    const {theme} = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    { inited && <AppRouter/> }
                </div>
            </Suspense>
        </div>
    );
}

export default App;

import { FC } from "react";
import { MainPage } from "./pages/MainPage";
import { Header } from "antd/es/layout/layout";
import { Navbar } from "./widgets/Navbar";
import { Route, Routes } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage";

interface AppProps {
    children?: JSX.Element;
}

export const App: FC<AppProps> = () => {

    return (
        <div className={`app`}>
            <Header>
                <Navbar />
            </Header>
            
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/catalog' element={<CatalogPage />} />
            </Routes>
        </div>
    );
};

import { FC } from "react";
import { MainPage } from "./pages/MainPage";
import { Header } from "antd/es/layout/layout";
import { Navbar } from "./widgets/Navbar";

interface AppProps {
    children?: JSX.Element;
}

export const App: FC<AppProps> = () => {

    return (
        <div className={`app`}>
            <Header>
                <Navbar />
            </Header>
            <MainPage />
        </div>
    );
};

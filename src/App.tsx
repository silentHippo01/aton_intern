import { FC } from "react";
import { MainPage } from "./pages/MainPage";
import { Loader } from "./shared/ui/Loader/Loader";

interface AppProps {
    children?: JSX.Element;
}

export const App: FC<AppProps> = () => {

    return (
        <div className={`app`}>
            <MainPage />
        </div>
    );
};

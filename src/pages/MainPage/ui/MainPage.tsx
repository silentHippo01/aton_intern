import { UserTable } from "../../../entities/UserTable";
import cls from './MainPage.module.scss';

export const MainPage = () => {
    return (
        <div className={cls.mainPage}>
            <UserTable />
        </div>
    );
};

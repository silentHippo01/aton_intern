import cls from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={cls.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};

import style from './Background.module.scss';

export const Background=({children}) => {
  return <div className={style.background}> {children} </div>;
};

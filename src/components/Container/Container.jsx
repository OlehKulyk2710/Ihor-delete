import style from './Container.module.scss';
const Container = ({ children }) => (
  <div className={style.container}>
    <div className={style.img}></div>
    {children}
  </div>
);
export default Container;

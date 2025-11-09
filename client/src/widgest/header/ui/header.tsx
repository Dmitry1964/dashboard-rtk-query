import cls from "./header.module.scss";

type HeaderProps = {
  title: string;
}
const Header = ({title} : HeaderProps) => {
  return (
    <div className={cls.header}>
      <p className={cls.header__title}>{title}</p>
      <button className={cls.header__btn}>Date</button>
    </div>
  );
};

export default Header;

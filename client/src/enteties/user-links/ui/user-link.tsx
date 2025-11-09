import { NavLink } from "react-router-dom";
import cls from "./user-link.module.scss";

const UserLink = () => {
  return (
    <div className={cls.user_link}>
      <img
        className={cls.user_link__img}
        src="content/svg/icon-users.svg"
        width={14}
        height={14}
        alt="Иконка users"
      />
      <h2 className={cls.user_link__title}>Пользователь</h2>
      <button className={cls.user_link__btn}></button>
      <ul className={cls.user_link__list}>
        <li className={cls.user_link__item}>
          <NavLink to={"#"}>Регистраwия</NavLink>
        </li>
        <li className={cls.user_link__item}>
          <NavLink to={"#"}>Войти</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserLink;

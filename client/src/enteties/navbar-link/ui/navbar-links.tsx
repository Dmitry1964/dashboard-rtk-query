import { NavLink } from "react-router-dom";
import cls from "./navbar-links.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";

type NavbarLinksProps = {
  name: string;
  pageHref: string;
  links?: { title: string; href: string }[];
  icon: React.ReactNode;
};

const NavbarLinks = ({ name, links, icon, pageHref }: NavbarLinksProps) => {

  const location = useSelector((state : RootState) => state.location.pathName);
  const isOpen = location.toUpperCase().includes(pageHref.toUpperCase())
  
  return (
    <div className={cls.navbar_links}> 
      <NavLink to={pageHref} className={({isActive}) => [cls.navbar_links__head, isActive ? cls.active : " "].join(' ')}>
        {icon}
        <h2 className={cls.navbar_links__title}>{name}</h2>
      </NavLink>
      <NavLink to={pageHref} className={({isActive}) => [cls.navbar_links__btn, isActive ? cls.active_link : " "].join(' ')}></NavLink>
      {links?.length ? (
        <ul className={[cls.navbar_links__list, isOpen ? cls.open_list : " "].join(' ')}>
          {links.map((link) => (
            <li className={cls.navbar_links__item} key={link.title}>
              <NavLink className={({isActive}) => [cls.navbar_links__link, isActive ? cls.active_link__item : " "].join(' ')} to={link.href}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default NavbarLinks;

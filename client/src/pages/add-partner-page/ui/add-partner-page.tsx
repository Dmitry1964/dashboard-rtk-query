import { ButtonNext } from 'src/enteties/button-next';
import cls from './add-partner.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import { MenuLinks } from 'src/app/app-constans';
import ActionButton from 'src/enteties/action-button/ui/action-button';
import { PartnerInfo } from 'src/features/partner-info';

const AddPartnerPage = () => {


  const menuModes = {
    general: true,
    contacts: false,
    bankDetails: false,
  }

  const [menuMod, setMenuMod] = useState(menuModes);

  const handleMenuLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const linkText = e.currentTarget.textContent;
    switch (linkText) {
      case MenuLinks.General:
        setMenuMod({ ...menuModes, general: true, contacts: false, bankDetails: false });
        break;
      case MenuLinks.Contacts:
        setMenuMod({ ...menuModes, contacts: true, general: false, bankDetails: false });
        break;
      case MenuLinks.BankDetails:
        setMenuMod({ ...menuModes, bankDetails: true, general: false, contacts: false });
        break;
      default:
        break;
    }
  }


  return (
    <section className={cls.add_partner}>
      <header className={cls.add_partner__header}>
        <div className={cls.add_partner__buttons}>
          <ButtonNext modePrev />
          <ButtonNext />
        </div>
        <h2 className={cls.add_partner__title}>Новый партнер</h2>
      </header>
      <div className={cls.add_partner__wrapper}>
        <ul className={cls.add_partner__menu}>
          <li className={cls.add_partner__item}>
            <a onClick={(e) => handleMenuLink(e)} href="#" className={cn(cls.add_partner__link, menuMod.general ? cls.isActive : '')}>{MenuLinks.General}</a>
          </li>
          <li className={cls.add_partner__item}>
            <a onClick={(e) => handleMenuLink(e)} href="#" className={cn(cls.add_partner__link, menuMod.contacts ? cls.isActive : '')}>{MenuLinks.Contacts}</a>
          </li>
          <li className={cls.add_partner__item}>
            <a onClick={(e) => handleMenuLink(e)} href="#" className={cn(cls.add_partner__link, menuMod.bankDetails ? cls.isActive : '')}>{MenuLinks.BankDetails}</a>
          </li>
        </ul>
        <div className={cls.add_partner__buttons}>
          <ActionButton modeTransparent={false}>
            <span>Сохранить</span>
          </ActionButton>
          <ActionButton modeTransparent>
            <span>Закрыть</span>
          </ActionButton>
        </div>
        <PartnerInfo />
      </div>

    </section>
  );
}

export default AddPartnerPage;
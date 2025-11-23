import { PartnerRoles } from 'src/app/app-constans';
import cls from './partners-list.module.scss';
import { IPartners } from 'src/app/app-types';
import { Link, useNavigate } from 'react-router-dom';
import { AppRouter } from 'src/app/app-routes';
import { useCallback } from 'react';

type PartnersListProps = {
  fetchStatusList?: boolean;
  partnersList: IPartners[];
}

const PartnersList = ({ fetchStatusList, partnersList }: PartnersListProps) => {

  const navigate = useNavigate();

  const handleEditButton = useCallback((e: React.MouseEvent<HTMLAnchorElement>, item: IPartners) => {
    e.preventDefault();
    const href = `${AppRouter.PartnerUpdate}/${item.inn}`;
    navigate(href);
  }, [navigate])

  const handleDeleteButton = ( e: React.MouseEvent<HTMLAnchorElement>, item: IPartners) => {
    e.preventDefault();
    console.log(item['id']);
  }

  return (
    <div className={cls.partners}>
      <ul className={cls.partners__header}>
        <li>
          <img className={cls.partners__header_icon} src="/content/svg/icon-total-partners.svg" alt="Партнеры" />
        </li>
        <li>Наименование</li>
        <li>ИНН</li>
        <li>Телефон</li>
        <li>Контактное лицо</li>
      </ul>

      <ul className={cls.partners__list}>
        { fetchStatusList  &&
          partnersList.map((item) => (
            <li key={item.inn} className={cls.partners__item}>
              {item.roles === PartnerRoles.Bayers && (
                <img className={cls.partners__header_icon} src="/content/svg/icon-bayers.svg" alt="Покупатели" />
              )}
              {item.roles === PartnerRoles.Suppliers && (
                <img className={cls.partners__header_icon} src="/content/svg/icon-suppliers.svg" alt="Поставщики" />
              )}
              <span>{item.shortName}</span>
              <span>{item.inn}</span>
              <span>{item.phone ?? '-'}</span>
              <span>{item.contacts ?? '-'}</span>
              <Link onClick={(e) => handleEditButton(e, item)} className={cls.partners__item_button} to='#'>
                <img src="/content/svg/icon-edit.svg" alt="Редактировать" />
              </Link>
              <Link onClick={(e) => handleDeleteButton(e, item)} className={cls.partners__item_button} to='#'>
                <img src="/content/svg/icon-delete.svg" alt="Удалить" />
              </Link>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default PartnersList;
import cls from './partners-page.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { useEffect } from 'react';
import { changeLocation } from 'src/slicies/location-slice/location-slice';
import PartnersList from 'src/features/partners-list/ui/partners-list';

// Моковые данные для демонстрации списка партнеров
import { useGetPartnersListQuery } from 'src/api-query/api-partners';
import { PartnerRoles } from 'src/app/app-constans';
import { Link } from 'react-router-dom';
import { AppRouter } from 'src/app/app-routes';
import { Button } from 'src/enteties/button';


const PartnersPage = () => {
  // const status = FetchStatus.Succeeded; 
  const {data, isLoading, isSuccess} = useGetPartnersListQuery(PartnerRoles.All);

  console.log(data, isSuccess);
  

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const pathName = window.location.pathname;
    dispatch(changeLocation(pathName));
  }, [dispatch]);

  return (
    <section className={cls.partners_page}>
      <Button href={AppRouter.AddPartner}>
        <span>Новый партнер</span>
        <img src="content/svg/icon-arrow-right.svg" width={16} height={16} alt="Стрелка вправо" />
      </Button>
      <ul className={cls.partners_page__header}>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Partners}>
            <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-total-partners.svg" alt="Все партнеры" />
            <div className={cls.partners_page__header_item_content}>
              <h3>Все партнеры</h3>
              {/* <span>{partnersList.length}</span> */}
            </div>
          </Link>
        </li>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Bayers}>  
          <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-bayers.svg" alt="Все покупатели" />
          <div className={cls.partners_page__header_item_content}>
              <h3>Все покупатели</h3>
              {/* <span>{bayersList.length}</span> */}
            </div>
          </Link>
        </li>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Bayers}>
          <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-suppliers.svg" alt="Все поставщики" />
          <div className={cls.partners_page__header_item_content}>
            <h3>Все поставщики</h3>
            {/* <span>{suppliersList.length}</span> */}
          </div>
          </Link>
        </li>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Bayers}>
          <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-top.svg" alt="Топ партнеры" />
          <div className={cls.partners_page__header_item_content}>
            <h3>Топ партнеры</h3>
            <span>0</span>
          </div>
          </Link>
        </li>
      </ul>
      {isLoading && <div>Загрузка партнеров...</div>}
      {data && <PartnersList partnersList={data} fetchStatusList={isSuccess} />
}
    </section>
  )
}

export default PartnersPage;

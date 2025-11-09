import { useEffect, useState } from 'react';
import cls from './partners-page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { changeLocation } from 'src/slicies/location-slice/location-slice';
import { AppRouter } from 'src/app/app-routes';
import { Link} from 'react-router-dom';
import { fetchPartnersList} from 'src/slicies/partners-list-slice/partners-list-slice';
import { RootState } from  'src/store/store';
import { IPartners } from 'src/app/app-types';
import { FetchStatus, PartnerRoles } from 'src/app/app-constans';
import { addPartnerClose, fetchNewPartners } from 'src/slicies/new-partners-slice/new-partners-slice';
import { AddPartner } from 'src/features/add-partner';
import PartnersList from 'src/features/partners-list/ui/partners-list';
import { ModalPage } from 'src/enteties/modal-page';
import { Pagination } from 'src/enteties/pagination';


const PartnersPage = () => {

  const [code, setCode] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const fetchStatusPartner = useSelector((state : RootState) => state.newPartner.fetchStatus);
  const fetchMessage = useSelector((state : RootState) => state.newPartner.message);
  const partner = useSelector((state : RootState) => state.newPartner.partners);
  const partnersList: IPartners[] = useSelector((state: RootState) => state.partnersList.partners);
  const fetchStatusList = useSelector((state: RootState) => state.partnersList.fetchStatus);
  const bayersList = partnersList.filter((partner : IPartners) => partner.roles === PartnerRoles.Bayers);
  const suppliersList = partnersList.filter((partner : IPartners) => partner.roles === PartnerRoles.Suppliers);

  const handleAddButton = () => {
    dispatch(fetchNewPartners(code));
    setCode('');
  };

  const handleButtonClose = () => {
    dispatch(addPartnerClose());
    
  }

  useEffect(() => {
    const pathhName = window.location.pathname;
    dispatch(changeLocation(pathhName));
    if (fetchStatusList === FetchStatus.Idle) { 
      dispatch(fetchPartnersList());
      }
  }, [dispatch, fetchStatusList])

  return (
    <section className={cls.partners_page}>
      <ul className={cls.partners_page__header}>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Partners}>
            <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-total-partners.svg" alt="Все партнеры" />
            <div className={cls.partners_page__header_item_content}>
              <h3>Все партнеры</h3>
              <span>{partnersList.length}</span>
            </div>
          </Link>
        </li>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Bayers}>  
          <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-bayers.svg" alt="Все покупатели" />
          <div className={cls.partners_page__header_item_content}>
              <h3>Все покупатели</h3>
              <span>{bayersList.length}</span>
            </div>
          </Link>
        </li>
        <li className={cls.partners_page__header_item}>
          <Link className={cls.partners_page__header_item_link} to={AppRouter.Bayers}>
          <img className={cls.partners_page__header_item_icon} src="/content/svg/icon-suppliers.svg" alt="Все поставщики" />
          <div className={cls.partners_page__header_item_content}>
            <h3>Все поставщики</h3>
            <span>{suppliersList.length}</span>
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
      <fieldset className={cls.partners_page__add}>
          <label htmlFor="inn-field">Добавить партнера</label>
          <input value={code} onChange={(e) => setCode(e.target.value)} id="inn-field" type="text" placeholder="ИНН" />
          <button
          onClick={() => handleAddButton()}
            className={cls.partners_page__add_button} 
           >
            <img src="/content/svg/icon-search.svg" alt="Кнопка найти" />
          </button>
          <button
            onClick={() => dispatch(fetchPartnersList())}
            className={cls.partners_page__add_button}
          >
            <img src="/content/img/icon-ref.png" alt="Кнопка найти" width={20} height={20} />
          </button>
        </fieldset>
      <PartnersList fetchStatusList={fetchStatusList} partnersList={partnersList} />
      {fetchStatusPartner === FetchStatus.Succeeded && 
        <AddPartner newPartner={partner}/>
      }
      {fetchStatusPartner === FetchStatus.Failed &&
      <ModalPage description = {fetchMessage} handleButtonClose={handleButtonClose}/>  
      }
      <Pagination />
    </section>
  )
}

export default PartnersPage;

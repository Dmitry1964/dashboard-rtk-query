import cls from './partners-page.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { useEffect } from 'react';
import { changeLocation } from 'src/slicies/location-slice/location-slice';
import PartnersList from 'src/features/partners-list/ui/partners-list';

// Моковые данные для демонстрации списка партнеров
import { partnersListMock } from 'src/shared/mocks';
import { FetchStatus } from 'src/app/app-constans';


const PartnersPage = () => {
  const status = FetchStatus.Succeeded; 

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const pathName = window.location.pathname;
    dispatch(changeLocation(pathName));
  }, [dispatch]);

  return (
    <section className={cls.partners_page}>
      Это страница партнеров
      <PartnersList partnersList={partnersListMock} fetchStatusList={status} />
    </section>
  )
}

export default PartnersPage;

import cls from './partners-page.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { useEffect } from 'react';
import { changeLocation } from 'src/slicies/location-slice/location-slice';
import PartnersList from 'src/features/partners-list/ui/partners-list';

// Моковые данные для демонстрации списка партнеров
import { useGetPartnersListQuery } from 'src/api-query/api-partners';


const PartnersPage = () => {
  // const status = FetchStatus.Succeeded; 
  const {data, isLoading, isSuccess} = useGetPartnersListQuery();

  console.log(data, isSuccess);
  

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const pathName = window.location.pathname;
    dispatch(changeLocation(pathName));
  }, [dispatch]);

  return (
    <section className={cls.partners_page}>
      Это страница партнеров
      {isLoading && <div>Загрузка партнеров...</div>}
      {data && <PartnersList partnersList={data} fetchStatusList={isSuccess} />
}
    </section>
  )
}

export default PartnersPage;

import cls from './partners-page.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';
import { useEffect } from 'react';
import { changeLocation } from 'src/slicies/location-slice/location-slice';


const PartnersPage = () => {

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const pathName = window.location.pathname;
    dispatch(changeLocation(pathName));
  }, [dispatch]);

  return (
    <section className={cls.partners_page}>
      Это страница партнеров
    </section>
  )
}

export default PartnersPage;

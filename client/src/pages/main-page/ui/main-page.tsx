import { useEffect } from 'react';
import cls from './main-page.module.scss';
import { useDispatch } from 'react-redux';
import { changeLocation } from 'src/slicies/location-slice/location-slice';

const MainPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const pathhName = window.location.pathname;
    dispatch(changeLocation(pathhName));

  },[dispatch]);

  return (
    <section className={cls.main_page}>
      Это главная страница
    </section>
  )
}

export default MainPage;
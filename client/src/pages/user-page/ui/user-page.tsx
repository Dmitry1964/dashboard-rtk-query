import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cls from './user-page.module.scss';
import { changeLocation } from 'src/slicies/location-slice/location-slice';
import { AppDispatch } from 'src/store/store';
const UserPage = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const pathhName = window.location.pathname;
    dispatch(changeLocation(pathhName));

  },[dispatch]);
  
  return (
    <section className={cls.user_page}>

      <h2 className={cls.user_page__title}>Это юзер зфпу</h2>
    </section>
  )
}

export default UserPage;
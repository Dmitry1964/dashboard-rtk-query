import { AddUser } from 'src/features/add-user';
import cls from './user-register.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeLocation } from 'src/slicies/location-slice/location-slice';

const UserRegisterPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const pathhName = window.location.pathname;
    dispatch(changeLocation(pathhName));

  },[dispatch]);

  return (
    <section className={cls.user_register_page}>
      <AddUser />
    </section>
  )
}

export default UserRegisterPage
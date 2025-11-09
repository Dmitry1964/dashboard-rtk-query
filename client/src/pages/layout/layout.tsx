import cls from './layout.module.scss';
import { Navbar } from 'src/widgest/navbar';
import { Outlet} from 'react-router-dom';
import { Header } from 'src/widgest/header';
import { RootState } from 'src/store/store';
import { useSelector } from 'react-redux';
import { getHeaderTitle } from 'src/shared/service';
// import { ModalPage } from 'src/enteties/modal-page';

const Layout = () => {

  const  path = useSelector((state : RootState) => state.location.pathName);

  const title =  getHeaderTitle(path)
  

  return (
    <div className={cls.layout}>
      <Navbar />
      <main className={cls.layout__main}>
        <section className={cls.layout__wrapper}>
          {/* <ModalPage description="Вы успешно зарегистрировались" /> */}
          <Header title={title} />
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Layout;


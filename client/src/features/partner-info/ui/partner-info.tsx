import ActionButton from 'src/enteties/action-button/ui/action-button';
import cls from '../ui/partner-info.module.scss';
import { useState } from 'react';
import { AppDispatch } from 'src/store/store';
import { useDispatch } from 'react-redux';
import { fetchAddPartner } from 'src/slicies/add-partner-slice/add-partner-slice';



const PartnerInfo = () => {

  const [innCode, setInnCode] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleInnCodeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnCode(e.target.value);
  }
  const handleButtonInnCode = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(fetchAddPartner(innCode));
    
  }

  return (
    <article className={cls.partner_info}>
      <form action="">
        <div className={cls.partner_info__list}>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="formOwnership">Вид</label>
            <input className={cls.partner_info__input} type="text" id="formOwnership" name="formOwnership" />
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="shortName">Краткое наименование</label>
            <input className={cls.partner_info__input} type="text" id="shortName" name="shortName" />
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="fullName">Полное наименование</label>
            <input className={cls.partner_info__input} type="text" id="fullName" name="fullName" />
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="innCode">ИНН</label>
            <input className={cls.partner_info__input} value={innCode} onChange={handleInnCodeField} type="text" id="innCode" name="innCode" />
            <ActionButton modeTransparent={false} handleClick={handleButtonInnCode}>
              <img src="/content/svg/icon-search.svg" width={16} height={16} alt="Значок поиска" />
              <span>Заполнить реквизиты по ИНН</span>
            </ActionButton>
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="kppCode">КПП</label>
            <input className={cls.partner_info__input} type="text" id="kppCode" name="kppCode" />
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="ogrnCode">ОГРН</label>
            <input className={cls.partner_info__input} type="text" id="ogrnCode" name="ogrnCode" />
          </div>
        </div>
      </form>
    </article>
  );
}

export default PartnerInfo;


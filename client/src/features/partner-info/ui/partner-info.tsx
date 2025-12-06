import ActionButton from 'src/enteties/action-button/ui/action-button';
import cls from '../ui/partner-info.module.scss';



const PartnerInfo = () => {
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
            <input className={cls.partner_info__input} type="text" id="innCode" name="innCode" />
            <ActionButton modeTransparent={false} >
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
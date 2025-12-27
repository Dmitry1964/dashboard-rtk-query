import ActionButton from 'src/enteties/action-button/ui/action-button';
import cls from '../ui/partner-info.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { AppDispatch, RootState } from 'src/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddPartner } from 'src/slicies/add-partner-slice/add-partner-slice';
import { IPartnerFormData } from 'src/app/app-types';
import { PartnerRoles } from 'src/app/app-constans';



const PartnerInfo = () => {

  const [formData, setFormData] = useState<IPartnerFormData>({
    inn: '',
    kpp: '',
    ogrn: '',
    opf: '',
    shortName: '',
    fullName: '',
    reversedShortName: '',
    managers: {
      fio: '',
      position: ''
    },
    address: {
      lineAddress: '',
      zipCode: ''
    },
    contacts: {
      phone: '',
      email: '',
      webpage: ''
    },
    roles: PartnerRoles.All
  });

  const dispatch = useDispatch<AppDispatch>();
  const partnerData = useSelector((state: RootState) => state.addPartner.partnerInfo);

  const handleInnCodeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, inn: value });
  }
  const handleButtonInnCode = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(fetchAddPartner(formData.inn));
  }

  const handleRolesBtn = (e : ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === PartnerRoles.Bayers) {
      setFormData({...formData, roles: PartnerRoles.Bayers})
    } else {
      setFormData({...formData, roles: PartnerRoles.Suppliers})
    }
    console.log(value);
    
  }

  console.log(formData);
  
  useEffect(() => {
    if (partnerData) {
      setFormData({
        ...formData,
        inn: partnerData.inn,
        kpp: partnerData.company.kpp,
        ogrn: partnerData.ogrn,
        opf: partnerData.company.opf,
        shortName: partnerData.company.company_names.short_name,
        fullName: partnerData.company.company_names.full_name,
        reversedShortName: partnerData.company.company_names.reversed_short_name,
        managers: {
          fio: partnerData.company.managers.length > 0 ? partnerData.company.managers[0].fio : '',
          position: partnerData.company.managers.length > 0 ? partnerData.company.managers[0].position : ''
        },
        address: {
          lineAddress: partnerData.company.address.line_address,
          zipCode: partnerData.company.address.zip_code
        }
      });
    }
    console.log(formData);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partnerData]);

  return (
    <article className={cls.partner_info}>
      <form action="">
        <div className={cls.partner_info__list}>
          <div id='radioButtons' className={cls.partner_info__item}>
            <div className={cls.partner_info__radio_btn}>
              <label className={cls.partner_info__label} htmlFor={PartnerRoles.Bayers}>Покупатель</label>
              <input onChange={handleRolesBtn} value={PartnerRoles.Bayers} type="radio" id={PartnerRoles.Bayers} name='partnerRoles' />
            </div>
            <div className={cls.partner_info__radio_btn}>
              <label className={cls.partner_info__label} htmlFor={PartnerRoles.Suppliers}>Поставщик</label>
              <input onChange={handleRolesBtn} value={PartnerRoles.Suppliers}  type="radio" id={PartnerRoles.Suppliers} name='partnerRoles' />
            </div>
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="formOwnership">Вид</label>
            <input defaultValue={formData.opf} className={cls.partner_info__input} type="text" id="formOwnership" name="formOwnership" />
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="shortName">Краткое наименование</label>
            <input defaultValue={formData.shortName} className={cls.partner_info__input} type="text" id="shortName" name="shortName" />
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="fullName">Полное наименование</label>
            <input defaultValue={formData.fullName} className={cls.partner_info__input} type="text" id="fullName" name="fullName" />
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="innCode">ИНН</label>
            <input className={cls.partner_info__input} value={formData.inn} onChange={handleInnCodeField} type="text" id="innCode" name="innCode" />
            <ActionButton modeTransparent={false} handleClick={handleButtonInnCode}>
              <img src="/content/svg/icon-search.svg" width={16} height={16} alt="Значок поиска" />
              <span>Заполнить реквизиты по ИНН</span>
            </ActionButton>
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="kppCode">КПП</label>
            <input defaultValue={formData.kpp} className={cls.partner_info__input} type="text" id="kppCode" name="kppCode" />
          </div>
          <div className={cls.partner_info__item}>
            <label className={cls.partner_info__label} htmlFor="ogrnCode">ОГРН</label>
            <input defaultValue={formData.ogrn} className={cls.partner_info__input} type="text" id="ogrnCode" name="ogrnCode" />
          </div>
        </div>
      </form>
    </article>
  );
}

export default PartnerInfo;


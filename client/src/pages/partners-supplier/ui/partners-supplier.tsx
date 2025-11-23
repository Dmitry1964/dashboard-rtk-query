import cls from "./partners-suppliers.module.scss";
// import {  useSelector } from "react-redux";
// import { RootState } from "src/store/store";


const PartnersSupplier = () => {

  // const partnersList: IPartners[] = useSelector((state: RootState) => state.partnersList.partners.filter((partner: IPartners) => partner.roles === PartnerRoles.Suppliers));
  // const fetchStatusList = useSelector((state: RootState) => state.partnersList.fetchStatus);

  

  return (
    <section className={cls.partners_supplier}>
      <div className={cls.partners_supplier__header}>
        <h2 className={cls.partners_supplier__title}>Поставщики</h2>
        {/* <PartnersList fetchStatusList={fetchStatusList} partnersList={partnersList} /> */}
      </div>
    </section>
  )
}

export default PartnersSupplier;
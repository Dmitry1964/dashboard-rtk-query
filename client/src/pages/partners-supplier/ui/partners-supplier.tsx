import cls from "./partners-suppliers.module.scss";
import { PartnerRoles } from "src/app/app-constans";
import PartnersList from "src/features/partners-list/ui/partners-list";
import { useGetPartnersListQuery } from "src/api-query/api-partners"; 


const PartnersSupplier = () => {

const {data, isLoading, isSuccess} = useGetPartnersListQuery(PartnerRoles.Suppliers);
  

  return (
    <section className={cls.partners_supplier}>
      <div className={cls.partners_supplier__header}>
        <h2 className={cls.partners_supplier__title}>Поставщики</h2>
        {isLoading && <div>Загрузка поставщиков...</div> }
        {data && <PartnersList fetchStatusList={isSuccess} partnersList={data} />
}
      </div>
    </section>
  )
}

export default PartnersSupplier;
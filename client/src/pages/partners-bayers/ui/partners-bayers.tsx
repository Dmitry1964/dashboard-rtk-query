import cls from "./partners-bayers.module.scss";
import { PartnerRoles } from "src/app/app-constans";
import PartnersList from "src/features/partners-list/ui/partners-list";
import { useGetPartnersListQuery } from "src/api-query/api-partners";

const PartnersBayers = () => {

  const {data, isLoading, isSuccess} = useGetPartnersListQuery(PartnerRoles.Bayers);

  return (
    <section className={cls.partners_bayers}>
      <div className={cls.partners_bayers__header}>
        <h2 className={cls.partners_bayers__title}>Покупатели</h2>
        {isLoading && <div>Загрузка покупателей...</div>}
        {data && <PartnersList fetchStatusList={isSuccess} partnersList={data} />
}
      </div>
    </section>
  )
}

export default PartnersBayers;
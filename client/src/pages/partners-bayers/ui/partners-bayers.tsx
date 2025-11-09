import cls from "./partners-bayers.module.scss";
import {  useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { PartnerRoles } from "src/app/app-constans";
import PartnersList from "src/features/partners-list/ui/partners-list";
import { IPartners } from "src/app/app-types";

const PartnersBayers = () => {

  const partnersList: IPartners[] = useSelector((state: RootState) => state.partnersList.partners.filter((partner: IPartners) => partner.roles === PartnerRoles.Bayers));
  const fetchStatusList = useSelector((state: RootState) => state.partnersList.fetchStatus);

  return (
    <section className={cls.partners_bayers}>
      <div className={cls.partners_bayers__header}>
        <h2 className={cls.partners_bayers__title}>Покупатели</h2>
        <PartnersList fetchStatusList={fetchStatusList} partnersList={partnersList} />
      </div>
    </section>
  )
}

export default PartnersBayers;
import cls from './user-info.module.scss';

export interface UserInfoProps {
  firstName: string;
  lastName: string;
  position: string;
}

const UserInfo = ({ firstName, lastName, position }: UserInfoProps) => {
  return (
    <div className={cls.user_info}>
      <img className={cls.user_info__photo} src="/content/img/user-photo.jpg" width={48} height={48} alt="Пользователь" />
      <div className={cls.user_info__wrapper}>
        <h2 className={cls.user_info__title}>{`${firstName} ${lastName}`}</h2>
        <p className={cls.user_info__position}>{position}</p>
      </div>
    </div>
  )
}

export default UserInfo;
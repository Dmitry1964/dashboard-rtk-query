import { AppRouter } from "./app-routes";
import { NavbarLinksType } from "./app-types";

export enum NavbarLinks {
  Users = 'Пользователи',
  Main = 'Главная',
  UserRegister = 'Регистрация нового пользователя',
  Partners = 'Партнеры'
}

export enum FetchStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum AuthStatus {
  Auth = 'auth',
  NoAuth = 'no_auth',
  Unkhown = 'unkhown',
  Loading = 'loading',
}

export enum PartnerObjectKeys {
  LongName = 'НаимПолнЮЛ',
  ShortName = 'НаимСокрЮЛ',
  INN = 'ИНН',
  KPP = 'КПП',
  OGRN = 'ОГРН',
  DIFINITION ='ЮЛ'
}

export const userLinks: NavbarLinksType = {
  name: "Пользователь",
  links: [
    {
      title: "Регистрация",
      href: AppRouter.Register,
    },
    {
      title: "Войти",
      href: AppRouter.Login,
    },
  ],
};

export const partnersLink: NavbarLinksType = {
  name: "Партнеры",
  links: [
    {
      title: "Покупатели",
      href: AppRouter.Bayers
    },
    {
      title: "Поставщики",
      href: AppRouter.Suppliers
    }
  ],
};

export enum PartnerRoles {
  Bayers = 'Покупатели',
  Suppliers = 'Поставщики'
}
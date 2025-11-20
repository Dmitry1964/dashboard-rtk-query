import { PartnerRoles } from "./app-constans";

export type NavbarLinksType = {
  name: string;
  links?: { title: string; href: string }[];
}

export type User = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  position: string;
  // role: 'user' | 'admin';
}

export interface IPartners {
  id: string;
  inn: string;
  shortName: string;
  fullName?: string;
  phone?: string;
  contacts?: string;
  roles: PartnerRoles | string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface IPartnerFormData {
  inn: string;
  shortName: string;
  fullName?: string;
  phone?: string;
  contacts?: string;
  roles: PartnerRoles;
}

export interface IPartnerNew {
  inn: string;
  shortName: string;
}

export type IPartnersList = IPartners[];
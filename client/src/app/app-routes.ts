export enum AppRouter {
  Main = '/',
  Auth = '/auth',
  Login = '/auth/login',
  Register = '/auth/register',
  userInfo = '/user-info',
  Partners = '/partners',
  Bayers = '/partners/bayers',
  Suppliers = '/partners/suppliers',
  PartnerUpdate = '/partners/update',
  DeletePartner = '/partners/delete',
}

export enum FetchRoutes {
  Register = '/auth/register',
  Login = '/auth/login',
  UserInfo = '/auth/me',
  Bayers = '/partners/bayers',
  Partners = '/partners',
}
export interface RootCompany {
  inn: string
  ogrn: string
  company: Company
  available_count: number
}

export interface Company {
  kpp: string
  opf: string
  company_names: CompanyNames
  address: Address
  registration_date: string
  years_from_registration: number
  okveds: string[]
  managers: Manager[]
  management_company: null | string
  status: Status
  dissolved_date: null | string
  ros_stat_codes: null | string
  owners: Owners
  charter_capital: string
  negative_lists: null | string
  workers_count: null | string
  contacts: null | string
  tax_mode_info: TaxModeInfo
  predecessors: string[]
  successors: string[]
}

export interface CompanyNames {
  short_name: string
  full_name: string
  reversed_short_name: string
}

export interface Address {
  line_address: string
  is_inaccuracy: boolean
  zip_code: string
  region_code: string
}

export interface Manager {
  fio: string
  innfl: string
  position: string
  is_inaccuracy: boolean
  date: string
}

export interface Status {
  code_egr: string
  status_eng_short: string
  status_rus_short: string
  status_egr: string
  active_status: boolean
  date_end: string
}

export type Owners = Record<string, Manager>;

export interface TaxModeInfo {
  publication_date: string
  eshn_sign: boolean
  usn_sign: boolean
  envd_sign: boolean
  srp_sign: boolean
  ausn_sign: boolean
  psn_sign: boolean
  npd_sign: boolean
  common_mode: boolean
}

export interface ErrorCompany {
  code: number
  message: string
  source : {
    "getCompanyData.inn": string
  }
}

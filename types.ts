export interface Lead {
  companyName: string;
  email: string;
  interest: 'Logistics' | 'Manufacturing' | 'Services' | 'Other';
  timestamp: number;
}

export enum InterestType {
  Logistics = 'Logistics',
  Manufacturing = 'Manufacturing',
  Services = 'Services',
  Other = 'Other'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceResponse {
  success: boolean;
  message: string;
}
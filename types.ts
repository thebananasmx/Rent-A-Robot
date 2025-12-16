export interface Lead {
  companyName: string;
  email: string;
  interest: 'Development' | 'Research' | 'Education' | 'Enterprise';
  timestamp: number;
}

export enum InterestType {
  Development = 'Development',
  Research = 'Research',
  Education = 'Education',
  Enterprise = 'Enterprise'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceResponse {
  success: boolean;
  message: string;
}
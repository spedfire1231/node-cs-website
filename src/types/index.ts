export interface Server {
  id: number;
  name: string;
  ip: string;
  port: string;
  gameMode: string;
  status: 'online' | 'offline';
}

export interface NavigationItem {
  path: string;
  label: string;
  icon?: string;
}

export interface PrivilegePeriod {
  days: number;
  price: number;
  label: string;
}

export interface Privilege {
  name: string;
  color: string;
  icon: string;
  periods: PrivilegePeriod[];
  features: string[];
}

export type PrivilegeType = 'vip' | 'admin' | 'boss';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  image?: string;
  published: boolean;
}
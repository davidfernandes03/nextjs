// app/lib/placeholder-data.ts
import { v4 as uuid } from 'uuid';
import type { User, Customer, Invoice, Revenue } from './definitions';

export const users: User[] = [
  { id: uuid(), name: 'User One', email: 'user@nextmail.com', password: '123456' },
];

export const customers: Customer[] = [
  { id: uuid(), name: 'Customer One', email: 'customer1@nextmail.com', image_url: '/placeholder.png' },
];

export const invoices: Invoice[] = [
  { id: uuid(), customer_id: customers[0].id, amount: 5000, status: 'paid', date: new Date().toISOString() },
];

export const revenue: Revenue[] = [
  { month: '2023-01', revenue: 5000 },
];

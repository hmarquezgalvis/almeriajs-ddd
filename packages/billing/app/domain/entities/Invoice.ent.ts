import uuid from 'uuid';
import { Email } from '../value-objects/Email.vo';

type WannabeInvoice = {
  id?: string;
  tax: number;
  paid?: boolean;
  charged?: boolean;
  address: string;
  price: number;
  orderId: string;
  email: Email;
};

export class Invoice {
  get orderId() {
    return this.invoice.orderId;
  }

  get charged() {
    return this.invoice.charged as boolean;
  }
  get email() {
    return this.invoice.email.value;
  }

  get totalPrice() {
    return (this.invoice.tax / 100) * this.invoice.price;
  }

  get price() {
    return this.invoice.price;
  }

  get id() {
    return this.invoice.id as string;
  }

  get tax() {
    return this.invoice.tax;
  }

  get paid() {
    return this.invoice.paid as boolean;
  }

  get address() {
    return this.invoice.address;
  }

  constructor(private invoice: WannabeInvoice) {
    if (!invoice.id) invoice.id = uuid.v1();
    this.invoice.paid = false;
    this.invoice = invoice;
  }

  setPaid() {
    this.invoice.paid = true;
    return this;
  }

  setUnpaid() {
    this.invoice.paid = false;
    return this;
  }
}

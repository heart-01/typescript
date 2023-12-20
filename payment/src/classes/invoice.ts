import { Formatter } from "../interfaces/IFormatter";

export class Invoice implements Formatter {
  constructor(readonly client: string, private details: string, public amount: number) {}

  format() {
    return `${this.client} buy ${this.details} for ${this.amount}`;
  }
}

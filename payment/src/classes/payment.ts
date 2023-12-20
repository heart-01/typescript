import { Formatter } from "../interfaces/IFormatter";

export class Payment implements Formatter {
  constructor(readonly recipient: string, private details: string, public amount: number) {}

  format() {
    return `${this.recipient} buy ${this.details} for ${this.amount}`;
  }
}

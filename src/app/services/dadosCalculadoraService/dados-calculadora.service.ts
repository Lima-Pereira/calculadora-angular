import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosCalculadoraService {
  constructor() {}

  private value: string = '';

  private operators: Array<string> = ['+', '-', '*', '/'];

  getValue(): string {
    return this.value;
  }

  setValue(digit: string) {
    const lastChar = this.value.slice(-1);

    if (
      (digit == '+' || digit == '*' || digit == '/') &&
      this.value.length == 0
    )
      return;

    if (this.operators.includes(lastChar) && this.operators.includes(digit)) {
      this.value = this.value.slice(0, -1) + digit;
    } else {
      if (lastChar == '0' && digit != '0' && this.value.length <= 1) {
        this.value = this.value.substring(1);
      }
      if (lastChar == '0' && digit == '0' && this.value.length <= 1) {
        return;
      }

      this.value += digit;
    }
  }

  clear() {
    this.value = '';
  }

  calculate() {
    try {
      this.value = eval(this.value).toString();
    } catch (error) {
      alert('Algo deu errado');
      this.value = '';
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  title = 'calculette';
  display = '0';
  firstValue: number = 0;
  action: string | null = null;

  numClick(val:number) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action:string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    debugger;
    const a = this.firstValue;
    const b = parseFloat(this.display);

    let result = 0;
    if (this.action === 'm') {
      result = a * b;
    }
    else if (this.action === 'd') {
      result = a / b;
    }
    else if (this.action === 'a') {
      result = a + b;
    }
    else if (this.action === 's') {
      result = a - b;
    }

    this.firstValue = result;
    this.display = result.toString();
  }
}

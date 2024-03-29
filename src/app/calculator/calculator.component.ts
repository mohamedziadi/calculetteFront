import { Component } from '@angular/core';
import {CalculatorServiceService} from "../services/calculator.service.service";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  constructor(private calculatorServiceService:CalculatorServiceService) {
  }
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

  operation(action:string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    const a = this.firstValue;
    const b = parseFloat(this.display);

    let result = 0;
    if (this.action === 'addition') {
      this.calculatorServiceService.addOpration({number1:a,number2:b}).subscribe(value => {
        if (value){
          this.display = value.toString();
        }
      })
    }
    else if (this.action === 'substract') {
      this.calculatorServiceService.substructOpration({number1:a,number2:b}).subscribe(value => {
        if (value){
          this.display = value.toString();
        }
      })
    }
    else if (this.action === 'multiply') {
      this.calculatorServiceService.multiplyOpration({number1:a,number2:b}).subscribe(value => {
        if (value){
          this.display = value.toString();
        }
      })
    }
    else if (this.action === 'divide') {
      this.calculatorServiceService.divideOpration({number1:a,number2:b}).subscribe(value => {
        if (value){
          this.display = value.toString();
        }
      })
    }

  }
}

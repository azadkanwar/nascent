import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberValue: number[] = [];
  numberValue2: number[] = [];
  numberValueArrLength: number;

  onNumberChange(number: number = 100) {
    let inputArray = [];
    for (let i = 1; i <= number; i++) {
      inputArray.push(i);
    }
    this.numberValue = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 10)
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }
      resultArray[chunkIndex].push(item)
      return resultArray
    }, []);
    let arr = [];
    for (let i = 0; i < this.numberValue.length; i++) {
      arr.push(Object.assign({}, this.numberValue[i])); //array to object
    }
    this.numberValue2 = arr;
  }
  getSum(data) {
    return data.reduce((a, b) => a + b, 0);
  }
  getColumnSum(index: number) {
    if (index < 10) {
      let sum = 0;
      for (let j = 0; j < this.numberValue2.length; j++) {
        sum += this.numberValue2[j][index];
      }
      return sum;
    }
  }
}

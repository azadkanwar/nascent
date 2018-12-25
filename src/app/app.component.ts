import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberValue: any[] = [];
  numberValue2: number[] = [];


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
    this.getColumnSum();
  }
  getSum(data) {
    return data.reduce((a, b) => a + b, 0);
  }
  getColumnSum() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let sum2 = 0;
      for (let j = 0; j < this.numberValue.length; j++) {
        if (this.numberValue[j][i]) {
          sum2 += this.numberValue[j][i];
        }
      }
      arr.push(sum2);
    }
    this.numberValue2 = arr;
  }
}

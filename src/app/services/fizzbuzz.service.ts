import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FizzBuzzService {
  private numberSubject = new Subject<string>();
  public number$ = this.numberSubject.asObservable();
  private isStopped = false;

  constructor() {}

  // Function to start the FizzBuzz iteration
  startFizzBuzz() {
    let currentNumber = 1;

    const interval = setInterval(() => {
      if (this.isStopped || currentNumber > 100) {
        clearInterval(interval);
        return;
      }

      this.numberSubject.next(this.getFizzBuzzRepresentation(currentNumber));
      currentNumber++;
    }, 500); // Space the outputs 500ms apart
  }

  // Function to stop the output
  stopFizzBuzz() {
    this.isStopped = true;
  }

  // Function to determine the FizzBuzz value representation
  getFizzBuzzRepresentation(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    } else {
      return num.toString();
    }
  }
}

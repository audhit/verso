import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from 'src/app/services/fizzbuzz.service';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css'],
})
export class FizzBuzzComponent implements OnInit {
  numbers: string[] = [];
  stopText = 'stop';
  stopButtonActivated = false;
  inputValue: string = '';
  stopButtonCheckInterval: any;

  constructor(private fizzBuzzService: FizzBuzzService) {}

  ngOnInit(): void {
    this.fizzBuzzService.number$.subscribe((value) => {
      this.numbers.push(value);
    });
    this.startFizzBuzz();
    this.stopButtonCheckInterval = setInterval(() => {
      this.stopButtonContoller();
    }, 200);
  }

  startFizzBuzz() {
    this.fizzBuzzService.startFizzBuzz();
  }

  onStopClicked() {
    this.fizzBuzzService.stopFizzBuzz();
    clearInterval(this.stopButtonCheckInterval);
  }

  getBackground(index: number): string {
    return index % 2 === 1 ? 'lightgray' : 'transparent';
  }
  stopButtonContoller() {
    if (this.inputValue.toLowerCase() === this.stopText) {
      this.stopButtonActivated = true;
    } else {
      this.stopButtonActivated = false;
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FizzBuzzComponent } from './fizzbuzz.component';

import { of } from 'rxjs';
import { FizzBuzzService } from 'src/app/services/fizzbuzz.service';

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;
  let fizzBuzzServiceMock: any;

  beforeEach(() => {
    fizzBuzzServiceMock = {
      number$: of(['10', '11', '12']),
      startFizzBuzz: jasmine.createSpy('startFizzBuzz'),
      stopFizzBuzz: jasmine.createSpy('stopFizzBuzz'),
    };

    TestBed.configureTestingModule({
      declarations: [FizzBuzzComponent],
      providers: [{ provide: FizzBuzzService, useValue: fizzBuzzServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call startFizzBuzz when component loads', () => {
    component.startFizzBuzz();
    expect(fizzBuzzServiceMock.startFizzBuzz).toHaveBeenCalled();
  });

  it('should call stopFizzBuzz when stop button is clicked', () => {
    component.onStopClicked();
    expect(fizzBuzzServiceMock.stopFizzBuzz).toHaveBeenCalled();
  });

  it('should display numbers correctly', () => {
    component.numbers = ['10', '11', '12'];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.outputDIV').length).toBe(3);
  });
});

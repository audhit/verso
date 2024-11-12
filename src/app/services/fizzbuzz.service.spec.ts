import { TestBed } from '@angular/core/testing';
import { FizzBuzzService } from './fizzbuzz.service';

describe('FizzBuzzService', () => {
  let fizzBuzzservice: FizzBuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fizzBuzzservice = TestBed.inject(FizzBuzzService);
  });

  it('should return FizzBuzz for numbers divisible by 3 and 5', () => {
    expect(fizzBuzzservice.getFizzBuzzRepresentation(15)).toBe('FizzBuzz');
  });

  it('should return Fizz for numbers divisible by 3', () => {
    expect(fizzBuzzservice.getFizzBuzzRepresentation(6)).toBe('Fizz');
  });

  it('should return Buzz for numbers divisible by 5', () => {
    expect(fizzBuzzservice.getFizzBuzzRepresentation(20)).toBe('Buzz');
  });

  it('should return the number itself for others', () => {
    expect(fizzBuzzservice.getFizzBuzzRepresentation(8)).toBe('8');
  });
});

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FizzBuzzComponent } from './components/fizzbuzz/fizzbuzz.component';
import { FizzBuzzService } from './services/fizzbuzz.service';

@NgModule({
  declarations: [AppComponent, FizzBuzzComponent],
  imports: [BrowserModule, FormsModule],
  providers: [FizzBuzzService],
  bootstrap: [AppComponent],
})
export class AppModule {}

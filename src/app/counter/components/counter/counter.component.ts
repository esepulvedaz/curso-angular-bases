import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
  <h2> Contador: {{ counter }}</h2>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="descreaseBy(1)">-1</button>`
})

export class CounterComponent implements OnInit {
  constructor() { }

  public counter: number = 10;

  increaseBy( value: number): void{
    this.counter += value;
  }

  descreaseBy( value: number): void{
    this.counter -= value;
  }

  reset(): void{
    this.counter = 10;
  }

  ngOnInit() { }
}

import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Carol');
  public lastName = signal('Monteiro');

  public fullName = computed( () => {
    return this.firstName() + this.lastName();
  });

  public array = signal([1]);

  constructor() {

  }

  public updateName() {
    return this.firstName.set("André");
  }

  public updateArray() {
    this.firstName.update(() => {
      return "Célia"
    })

    this.array.update((oldValue: Array<number>) => {
      console.log(oldValue);
      
      return [...oldValue, oldValue.length + 1];
      
    })
  }
}

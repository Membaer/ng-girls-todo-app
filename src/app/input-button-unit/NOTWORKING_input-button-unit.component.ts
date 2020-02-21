import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <!--is value overwritten with the keyup event?-->
    <input [value]="title"
          (keyup.enter)="changeTitle($event)">

          <!--by adding square brackets you make it a variable -->
    <button (click)="changeTitle('Button Clicked!')">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit() {
  }

  /* changeTitle(newTitle: string) {
    this.title = newTitle;
  } */

  changeTitle(event): void {
    console.log(event);
    this.title = event.target.value; // the original functionality still works
  }
}

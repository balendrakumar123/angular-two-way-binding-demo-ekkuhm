import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  num = 5;

  increment() {
    this.num++;
    console.log('increment from parent!');
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  private numValue: number;
  @Output() numChange = new EventEmitter<number>();
  @Input()
  get num(): number {
    console.log(`get num triggered! ${this.numValue}`);
    return this.numValue;
  }

  set num(val: number) {
    if (val !== this.numValue) {
      console.log(`set num triggered! ${val}`);
      this.numValue = val;
      this.numChange.emit(this.numValue);
    }
  }

  increment() {
    this.num++;
    console.log('increment from child!');
  }
}

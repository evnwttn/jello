import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() buttonClick = new EventEmitter();

  constructor() {}

  onClick() {
    this.buttonClick.emit();
  }
}

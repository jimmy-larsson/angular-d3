import { Component } from '@angular/core';

@Component({
  selector: '[lineExample]',
  template: `<svg:line x1="0" y1="0" x2="100" y2="100"  stroke="black" stroke-width="20" stroke-linecap="butt"></svg:line>`
})
export class LineExampleComponent {
  constructor() {
  }
}

import { Component, Input } from '@angular/core';
import { Node } from '../../../models';

@Component({
  selector: '[nodeVisual]',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.scss']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}

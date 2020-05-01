import { Component, Input } from '@angular/core';
import { Node } from '../../../models/node';
import { ExtraProperties } from '../../../models/extra-properties';


@Component({
  selector: '[nodeVisualSankeyDiagram]',
  templateUrl: './node-visual-sankey-diagram.component.html',
  styleUrls: ['./node-visual-sankey-diagram.component.scss']
})
export class NodeVisualSankeyDiagramComponent {
  @Input('nodeVisualSankeyDiagram') node: Node<ExtraProperties, ExtraProperties>;
}

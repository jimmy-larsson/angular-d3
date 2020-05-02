import { Component, Input } from '@angular/core';
import { Node } from '../../models/node';
import { ExtraProperties } from '../../models/extra-properties';
import * as d3 from 'd3';


@Component({
  selector: '[nodeVisualSankeyDiagram]',
  templateUrl: './node-visual-sankey-diagram.component.html',
  styleUrls: ['./node-visual-sankey-diagram.component.scss']
})
export class NodeVisualSankeyDiagramComponent {
  @Input('nodeVisualSankeyDiagram') node: Node<ExtraProperties, ExtraProperties>;
  @Input('colorGenerator') colorGenerator;

  textAnchorPosition() {
    return this.node.x0 < window.innerWidth / 2 ? 'start' : 'end';
  }

  textAnchorXPosition() {
    return this.node.x0 < window.innerWidth / 2 ? this.node.x1 + 10 : this.node.x0 - 10;
  }
}

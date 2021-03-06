import { Component } from '@angular/core';
import { Node, Link } from './d3/force-directed-graph/models';

@Component({
  selector: 'd3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-d3';

  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = 10,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      const node = new Node(i);
      node.fontColor = '#2DD9CF';
      node.color = '#360F08';

      this.nodes.push(node);
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        const link = new Link(i, i * m);
        link.strokeWidth = '3px';
        link. strokeColor = 'gray';
        this.links.push(link);
      }
    }
  }
}

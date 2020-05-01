import { Component } from '@angular/core';
import { Link as ForceDirectedLink, Node as ForceDirectedNode } from './d3/force-directed-graph/models';
import { ExtraProperties, Link as SankeyLink, Node as SankeyNode } from './d3/sankey-diagram/models';
import { Data } from './d3/sankey-diagram/models/data';

@Component({
  selector: 'd3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-d3';

  forceDirectedNodes: ForceDirectedNode[] = [];
  forceDirectedLinks: ForceDirectedLink[] = [];

  sankeyDiagramNodes: SankeyNode<ExtraProperties, ExtraProperties>[] = [];
  sankeyDiagramLinks: SankeyLink<ExtraProperties, ExtraProperties>[] = [];

  constructor() {
    this.populateForceDirectedGraphData();
    this.populateSankeyDiagramData();
  }

  private populateForceDirectedGraphData() {
    const N = 10,
      getIndex = number => number - 1;

    /** constructing the forceDirectedNodes array */
    for (let i = 1; i <= N; i++) {
      const node = new ForceDirectedNode(i);
      node.fontColor = '#2DD9CF';
      node.color = '#360F08';

      this.forceDirectedNodes.push(node);
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting forceDirectedNodes */
        this.forceDirectedNodes[getIndex(i)].linkCount++;
        this.forceDirectedNodes[getIndex(i * m)].linkCount++;

        /** connecting the forceDirectedNodes before starting the simulation */
        const link = new ForceDirectedLink(i, i * m);
        link.strokeWidth = '3px';
        link. strokeColor = 'gray';
        this.forceDirectedLinks.push(link);
      }
    }
  }

  private populateSankeyDiagramData() {
    const sankeyData: Data = {
      nodes: [{
        nodeId: 0,
        name: 'node0',
        description: 'some description0'
      }, {
        nodeId: 1,
        name: 'node1',
        description: 'some description1'
      }, {
        nodeId: 2,
        name: 'node2',
        description: 'some description2'
      }, {
        nodeId: 3,
        name: 'node3',
        description: 'some description3'
      }, {
        nodeId: 4,
        name: 'node4',
        description: 'some description4'
      }],
      links: [{
        source: 0,
        target: 2,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 1,
        target: 2,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 1,
        target: 3,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 0,
        target: 4,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 2,
        target: 3,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 2,
        target: 4,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 3,
        target: 4,
        value: 4,
        uom: 'Widget(s)',
      }]
    };

    this.sankeyDiagramNodes = sankeyData.nodes;
    this.sankeyDiagramLinks = sankeyData.links;
  }
}

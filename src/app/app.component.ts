import { Component } from '@angular/core';
import { Link as ForceDirectedLink, Node as ForceDirectedNode } from './d3/force-directed-graph/models';
import { ExtraProperties, Link as SankeyLink, Node as SankeyNode, Options } from './d3/sankey-diagram/models';
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
  sankeyDiagramOptions: Options;

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
        link.strokeColor = 'gray';
        this.forceDirectedLinks.push(link);
      }
    }
  }

  private populateSankeyDiagramData() {
    const sankeyData: Data = {
      nodes: [{
        name: 'Work income',
        description: 'some description0'
      }, {
        name: 'Stock dividends',
        description: 'some description1'
      }, {
        name: 'Monthly budget',
        description: 'some description2'
      }, {
        name: 'Bills',
        description: 'some description3'
      }, {
        name: 'Electricity',
        description: 'some description4'
      }, {
        name: 'Water',
        description: 'some description4'
      }, {
        name: 'Gas',
        description: 'some description4'
      }, {
        name: 'Internet',
        description: 'some description4'
      }],
      links: [{
        source: 0,
        target: 2,
        value: 450000,
        uom: 'USD'
      }, {
        source: 1,
        target: 2,
        value: 1000,
        uom: 'USD'
      }, {
        source: 2,
        target: 3,
        value: 86500,
        uom: 'USD'
      }, {
        source: 3,
        target: 4,
        value: 5500,
        uom: 'USD'
      }, {
        source: 3,
        target: 5,
        value: 5000,
        uom: 'USD'
      }, {
        source: 3,
        target: 6,
        value: 3500,
        uom: 'USD'
      }, {
        source: 3,
        target: 7,
        value: 5200,
        uom: 'USD'
      }
      ]
    };
    const sankeyDataBig: Data = {
      nodes: [{
        nodeId: 0,
        name: 'Monthly gross salary',
        description: 'some description0',
        uom: 'USD'
      }, {
        nodeId: 1,
        name: 'Monthly gross dividend',
        description: 'some description1',
        uom: 'USD'
      }, {
        nodeId: 2,
        name: 'Income',
        description: 'some description2',
        uom: 'USD'
      }, {
        nodeId: 3,
        name: 'Bills',
        description: 'some description3',
        uom: 'USD'
      }, {
        nodeId: 4,
        name: 'Electricity',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 5,
        name: 'Water',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 6,
        name: 'Gas',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 7,
        name: 'Internet',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 8,
        name: 'Telephone',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 9,
        name: 'Hobbies',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 10,
        name: 'Food',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 11,
        name: 'Games',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 12,
        name: 'Clothes',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 13,
        name: 'Apps',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 14,
        name: 'Monthly subscriptions',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 15,
        name: 'Netflix',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 16,
        name: 'Amazon Prime',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 18,
        name: 'Credit card fees',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 19,
        name: 'Investments',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 20,
        name: 'Rent',
        description: 'some description4',
        uom: 'USD'
      }, {
        nodeId: 17,
        name: 'Other',
        description: 'some description4',
        uom: 'USD'
      }],
      links: [{
        source: 0,
        target: 2,
        value: 1150,
        uom: 'USD'
      }, {
        source: 1,
        target: 2,
        value: 100,
        uom: 'USD'
      }, {
        source: 2,
        target: 3,
        value: 500,
        uom: 'USD'
      }, {
        source: 3,
        target: 4,
        value: 50,
        uom: 'USD'
      }, {
        source: 3,
        target: 5,
        value: 30,
        uom: 'USD'
      }, {
        source: 3,
        target: 6,
        value: 40,
        uom: 'USD'
      }, {
        source: 3,
        target: 7,
        value: 20,
        uom: 'USD'
      }, {
        source: 3,
        target: 8,
        value: 5,
        uom: 'USD'
      }, {
        source: 2,
        target: 9,
        value: 210,
        uom: 'USD'
      }, {
        source: 2,
        target: 10,
        value: 350,
        uom: 'USD'
      }, {
        source: 9,
        target: 11,
        value: 8,
        uom: 'USD'
      }, {
        source: 2,
        target: 12,
        value: 100,
        uom: 'USD'
      }, {
        source: 9,
        target: 13,
        value: 2,
        uom: 'USD'
      }, {
        source: 9,
        target: 14,
        value: 200,
        uom: 'USD'
      }, {
        source: 14,
        target: 15,
        value: 100,
        uom: 'USD'
      }, {
        source: 14,
        target: 16,
        value: 100,
        uom: 'USD'
      }, {
        source: 2,
        target: 17,
        value: 5,
        uom: 'USD'
      }, {
        source: 17,
        target: 18,
        value: 5,
        uom: 'USD'
      }, {
        source: 2,
        target: 19,
        value: 85,
        uom: 'USD'
      }, {
        source: 3,
        target: 20,
        value: 355,
        uom: 'USD'
      }
      ]
    };

    this.sankeyDiagramNodes = sankeyDataBig.nodes;
    this.sankeyDiagramLinks = sankeyDataBig.links;

    this.sankeyDiagramOptions = {nodeId: node => node.nodeId};
  }
}

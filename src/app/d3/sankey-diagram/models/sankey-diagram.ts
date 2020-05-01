import * as d3Sankey from 'd3-sankey';

import { Node } from './node';
import { Link } from './link';
import { ExtraProperties } from './extra-properties';
import { Data } from './data';


export class SankeyDiagram {
  //public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  public sankey: d3Sankey.SankeyLayout<any, any, any>;

  public nodes: Node<ExtraProperties, ExtraProperties>[] = [];
  public links: Link<ExtraProperties, ExtraProperties>[] = [];

  constructor(nodes: Node<ExtraProperties, ExtraProperties>[], links: Link<ExtraProperties, ExtraProperties>[]) {
    this.nodes = nodes;
    this.links = links;
  }

  initSankey(options) {
    if (!options || !options.width || !options.height) {
      throw new Error('missing options when initializing simulation');
    }

    if (!this.sankey) {
      //const ticker = this.ticker;

      this.sankey = d3Sankey.sankey()
        .nodeWidth(36)
        .nodePadding(290)
        .extent([[1, 1], [options.width - 1, options.height - 6]]);

      // Connecting the d3 ticker to an angular event emitter
      //this.simulation.on('tick', function() {
      //  ticker.emit(this);
      //});

      const data: Data = {
        nodes: this.nodes,
        links: this.links
      };

      this.sankey(data);
    }
  }

}

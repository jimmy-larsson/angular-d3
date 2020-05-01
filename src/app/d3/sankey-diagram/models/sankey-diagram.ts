import * as d3Sankey from 'd3-sankey';

import { Node } from './node';
import { Link } from './link';
import { ExtraProperties } from './extra-properties';


export class SankeyDiagram {
  //public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  public sankey: d3Sankey.SankeyLayout<any, any, any>;

  public nodes: Node<ExtraProperties, ExtraProperties>[] = [];
  public links: Link<ExtraProperties, ExtraProperties>[] = [];

  constructor(nodes: Node<ExtraProperties, ExtraProperties>[], links: Link<ExtraProperties, ExtraProperties>[], options: { width: number, height: number }) {
    this.nodes = nodes;
    this.links = links;

    this.initSankey(options);
  }

  initNodes() {
    if (!this.sankey) {
      throw new Error('Simulation has not yet been initialized.');
    }

    this.sankey.nodes(this.nodes);
  }

  initLinks() {
    if (!this.sankey) {
      throw new Error('Simulation has not yet been initialized.');
    }

    this.sankey.links(this.links);
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
        .size([400, 400]);

      // Connecting the d3 ticker to an angular event emitter
      //this.simulation.on('tick', function() {
      //  ticker.emit(this);
      //});

      this.initNodes();
      this.initLinks();
    }
  }

}

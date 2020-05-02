import { Node } from './node';
import { Link } from './link';
import { ExtraProperties } from './extra-properties';

import * as d3Sankey from 'd3-sankey';
import { Data } from './data';


export class SankeyDiagram {
  public sankey: d3Sankey.SankeyLayout<any, any, any>;

  public nodes: Node<ExtraProperties, ExtraProperties>[] = [];
  public links: Link<ExtraProperties, ExtraProperties>[] = [];

  constructor(nodes: Node<ExtraProperties, ExtraProperties>[], links: Link<ExtraProperties, ExtraProperties>[]) {
    this.nodes = nodes;
    links[0].this.links = links;
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
      throw new Error('Missing options when initializing simulation');
    }

    this.sankey = d3Sankey.sankey()
      .nodeWidth(36)
      .nodePadding(25)
      .nodeAlign(d3Sankey.sankeyJustify)
      .iterations(6)
      .extent([[1, 1], [options.width - 1, options.height - 6]]);

    this.initNodes();
    this.initLinks();

    // @ts-ignore
    this.sankey();
  }

  updateSankey(nodes: Node<ExtraProperties, ExtraProperties>[], links: Link<ExtraProperties, ExtraProperties>[]) {
    this.nodes = nodes;
    this.links = links;

    const data: Data = {
      nodes,
      links
    };

    this.sankey(data);
  }

}

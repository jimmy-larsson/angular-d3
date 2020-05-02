import { Node } from './node';
import { Link } from './link';
import { Data } from './data';
import { ExtraProperties } from './extra-properties';

import * as d3Sankey from 'd3-sankey';
import { NodeAlignment, Options } from './options';


export class SankeyDiagram {
  public sankey: d3Sankey.SankeyLayout<any, any, any>;

  public nodes: Node<ExtraProperties, ExtraProperties>[] = [];
  public links: Link<ExtraProperties, ExtraProperties>[] = [];

  public options: Options;

  constructor(nodes: Node<ExtraProperties, ExtraProperties>[], links: Link<ExtraProperties, ExtraProperties>[], options?: Options) {
    this.setOption(options);
    this.nodes = nodes;
    this.links = links;
  }

  private setOption(options) {
    if (this.options == null) {
      this.options = new Options();
    }
    if (options == null) {
      return;
    }

    this.options.nodeAlign = options.nodeAlign != null ? options.nodeAlign : this.options.getNodeAlign();
    this.options.nodeWidth = options.nodeWidth != null ? options.nodeWidth : this.options.getNodeWidth();
    this.options.nodePadding = options.nodePadding != null ? options.nodePadding : this.options.getNodePadding();
    this.options.layoutExtent = options.layoutExtent != null ? options.layoutExtent : this.options.getLayoutExtent();
    this.options.layoutIterations = options.layoutIterations != null ? options.layoutIterations : this.options.getLayoutIterations();
    this.options.layoutWidth = options.layoutWidth != null ? options.layoutWidth : this.options.getLayoutWidth();
    this.options.layoutHeight = options.layoutHeight != null ? options.layoutHeight : this.options.getLayoutHeight();
    this.options.diagramColoringMethod = options.diagramColoringMethod != null ? options.diagramColoringMethod : this.options.getDiagramColoringMethod();
    this.options.diagramColorSchemeOrInterpolation = options.diagramColorSchemeOrInterpolation != null ? options.diagramColorSchemeOrInterpolation : this.options.getDiagramColorSchemeOrInterpolation();
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

  initSankey(options?) {
    this.setOption(options);

    this.sankey = d3Sankey.sankey()
      .nodeWidth(this.options.getNodeWidth())
      .nodePadding(this.options.getNodePadding())
      .iterations(this.options.getLayoutIterations())
      .extent(this.options.getLayoutExtent());

    switch (this.options.getNodeAlign()) {
      case NodeAlignment.LEFT:
        this.sankey.nodeAlign(d3Sankey.sankeyLeft);
        break;
      case NodeAlignment.CENTER:
        this.sankey.nodeAlign(d3Sankey.sankeyCenter);
        break;
      case NodeAlignment.RIGHT:
        this.sankey.nodeAlign(d3Sankey.sankeyRight);
        break;
      case NodeAlignment.JUSTIFY:
        this.sankey.nodeAlign(d3Sankey.sankeyJustify);
        break;
      default:
        this.sankey.nodeAlign(d3Sankey.sankeyJustify); // JUSTIFY has its own case in case other sort orders are added in the future.
    }

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

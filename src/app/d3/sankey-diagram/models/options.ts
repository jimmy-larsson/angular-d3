/**
 * Class used to specify the options which can be passed on to the generator, nodes and links.
 */
export class Options {


  constructor(nodeAlign?: NodeAlignment, nodeWidth?: number, nodePadding?: number, layoutExtent?: [[number, number], [number, number]], layoutIterations?: number, layoutWidth?: number, layoutHeight?: number) {
    this.nodeAlign = nodeAlign;
    this.nodeWidth = nodeWidth;
    this.nodePadding = nodePadding;
    this.layoutExtent = layoutExtent;
    this.layoutIterations = layoutIterations;
    this.layoutWidth = layoutWidth;
    this.layoutHeight = layoutHeight;
  }

  /**
   * Specify how the nodes should be aligned. Defaults to JUSTIFY.
   */
  nodeAlign?: NodeAlignment;

  /**
   * Specify the node width. Defaults to 24px.
   */
  nodeWidth?: number;

  /**
   * Specify the node padding. Defaults to 8px.
   */
  nodePadding?: number;

  /**
   * Specify the extent of the Sankey layout. Defaults to [[0, 0], [window.innerWidth - nodeWidth, window.innerHeight]]
   *
   * NOTE: This is different from official Sankey which defaults to [[0, 0], [1, 1]]
   */
  layoutExtent?: [[number, number], [number, number]];

  /**
   * Specify the number of relaxation iterations to use when generating the layout. Defaults to 6.
   */
  layoutIterations?: number;

  /**
   * Specify the width to be used by the layout. Defaults to window.innerWidth.
   */
  layoutWidth?: number;

  /**
   * Specify the height to be used by the layout. Defaults to window.innerHeight.
   */
  layoutHeight?: number;

  getNodeAlign?(): NodeAlignment {
    return this.nodeAlign != null ? this.nodeAlign : NodeAlignment.JUSTIFY;
  }

  getNodeWidth?(): number {
    return this.nodeWidth != null ? this.nodeWidth : 24;
  }

  getNodePadding?(): number {
    return this.nodePadding != null ? this.nodePadding : 8;
  }

  getLayoutExtent?(): [[number, number], [number, number]] {
    return this.layoutExtent != null ? this.layoutExtent : [[0, 0], [this.getLayoutWidth() - this.getNodeWidth(), this.getLayoutHeight()]];
  }

  getLayoutIterations?(): number {
    return this.layoutIterations != null ? this.layoutIterations : 6;
  }

  getLayoutWidth?(): number {
    return this.layoutWidth != null ? this.layoutWidth : window.innerWidth;
  }

  getLayoutHeight?(): number {
    return this.layoutHeight != null ? this.layoutHeight : window.innerHeight;
  }
}

export enum NodeAlignment {
  LEFT,
  CENTER,
  RIGHT,
  JUSTIFY
}

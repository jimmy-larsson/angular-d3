/**
 * Class used to specify the options which can be passed on to the generator, nodes and links.
 */
export class Options {

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

  /**
   *
   */
  diagramColoringMethod?: ColoringMethod;

  /**
   *
   */
  diagramColorSchemeOrInterpolation?: ColorSchemeInterpolation;


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

  getDiagramColoringMethod?(): ColoringMethod {
    return this.diagramColoringMethod != null ? this.diagramColoringMethod : ColoringMethod.SEQUENTIAL;
  }

  getDiagramColorSchemeOrInterpolation?(): ColorSchemeInterpolation {
    return this.diagramColorSchemeOrInterpolation != null ?
      this.diagramColorSchemeOrInterpolation : ColorSchemeInterpolation.INTERPOLATE_RAINBOW;
  }
}

export enum NodeAlignment {
  LEFT,
  CENTER,
  RIGHT,
  JUSTIFY,
}

export enum ColoringMethod {
  SEQUENTIAL,
  DIVERGING,
  ORDINAL,
}

export enum ColorSchemeInterpolation {
  SCHEME_CATEGORY_10,
  SCHEME_ACCENT,
  SCHEME_DARK2,
  SCHEME_PAIRED,
  SCHEME_PASTEL1,
  SCHEME_PASTEL2,
  SCHEME_SET1,
  SCHEME_SET2,
  SCHEME_SET3,
  INTERPOLATE_PRGN,
  INTERPOLATE_PIYG,
  INTERPOLATE_PUOR,
  INTERPOLATE_RDGY,
  INTERPOLATE_RDYLBU,
  INTERPOLATE_RDYLGN,
  INTERPOLATE_SPECTRAL,
  INTERPOLATE_BLUES,
  INTERPOLATE_GREENS,
  INTERPOLATE_GREYS,
  INTERPOLATE_ORANGES,
  INTERPOLATE_PURPLES,
  INTERPOLATE_REDS,
  INTERPOLATE_VIRIDIS,
  INTERPOLATE_INFERNO,
  INTERPOLATE_MAGMA,
  INTERPOLATE_PLASMA,
  INTERPOLATE_WARM,
  INTERPOLATE_COOL,
  INTERPOLATE_CUBE_HELIX_DEFAULT,
  INTERPOLATE_BUGN,
  INTERPOLATE_BUPU,
  INTERPOLATE_GNBU,
  INTERPOLATE_ORRD,
  INTERPOLATE_PUBUGN,
  INTERPOLATE_PUBU,
  INTERPOLATE_PURD,
  INTERPOLATE_RDPU,
  INTERPOLATE_YLGNBU,
  INTERPOLATE_YLGN,
  INTERPOLATE_YLORBR,
  INTERPOLATE_YLORRD,
  INTERPOLATE_RAINBOW,
  INTERPOLATE_SINEBOW
}

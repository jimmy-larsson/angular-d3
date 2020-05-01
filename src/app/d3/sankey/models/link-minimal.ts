import * as d3Sankey from 'd3-sankey';
import { Node } from './node';
import { ExtraProperties } from './extra-properties';

export class LinkMinimal implements d3Sankey.SankeyLinkMinimal<ExtraProperties, ExtraProperties> {
  // Optional - defining optional implementation properties - required for relevant typing assistance
  /**
   * Link's source node. For convenience, when initializing a Sankey layout using the default node id accessor,
   * source may be the zero-based index of the corresponding node in the nodes array
   * returned by the nodes accessor of the Sankey layout generator rather than object references. Alternatively,
   * the Sankey layout can be configured with a custom node ID accessor to resolve the source node of the link upon initialization.
   *
   * Once the Sankey generator is invoked to return the Sankey graph object,
   * the numeric index will be replaced with the corresponding source node object.
   */
  source: number | string | Node<ExtraProperties, ExtraProperties>;
  /**
   * Link's target node. For convenience, when initializing a Sankey layout using the default node id accessor,
   * target may be the zero-based index of the corresponding node in the nodes array
   * returned by the nodes accessor of the Sankey layout generator rather than object references. Alternatively,
   * the Sankey layout can be configured with a custom node ID accessor to resolve the target node of the link upon initialization.
   *
   * Once the Sankey generator is invoked to return the Sankey graph object,
   * the numeric index will be replaced with the corresponding target node object.
   */
  target: number | string | Node<ExtraProperties, ExtraProperties>;
  /**
   * Link's numeric value
   */
  value: number;
  /**
   * Link's vertical starting position (at source node) calculated by Sankey layout generator.
   */
  y0?: number;
  /**
   * Link's vertical end position (at target node) calculated by Sankey layout generator.
   */
  y1?: number;
  /**
   * Link's width (proportional to its value) calculated by Sankey layout generator.
   */
  width?: number;
  /**
   * Link's zero-based index within the array of links calculated by Sankey layout generator.
   */
  index?: number;
}

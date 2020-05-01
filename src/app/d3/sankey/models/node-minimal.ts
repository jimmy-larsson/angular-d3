import * as d3Sankey from 'd3-sankey';
import { Link } from './link';
import { ExtraProperties } from './extra-properties';

export class NodeMinimal implements d3Sankey.SankeyNodeMinimal<ExtraProperties, ExtraProperties> {
  // Optional - defining optional implementation properties - required for relevant typing assistance
  /**
   * Array of outgoing links which have this node as their source.
   * This property is calculated internally by the Sankey layout generator.
   */
  sourceLinks?: Array<Link<ExtraProperties, ExtraProperties>>;
  /**
   * Array of incoming links which have this node as their target.
   * This property is calculated internally by the Sankey layout generator.
   */
  targetLinks?: Array<Link<ExtraProperties, ExtraProperties>>;
  /**
   * Node's value calculated by Sankey layout Generator;
   * the sum of link.value for the node’s incoming links.
   */
  value?: number;
  /**
   * Node’s zero-based index within the array of nodes calculated by Sankey layout generator.
   */
  index?: number;
  /**
   * Node’s zero-based graph depth, derived from the graph topology calculated by Sankey layout generator.
   */
  depth?: number;
  /**
   * Node’s zero-based graph height, derived from the graph topology calculated by Sankey layout generator.
   */
  height?: number;
  /**
   * Node's minimum horizontal position (derived from the node.depth) calculated by Sankey layout generator.
   */
  x0?: number;
  /**
   * Node’s maximum horizontal position (node.x0 + sankey.nodeWidth) calculated by Sankey layout generator.
   */
  x1?: number;
  /**
   * Node's minimum vertical position calculated by Sankey layout generator.
   */
  y0?: number;
  /**
   * Node's maximum vertical position (node.y1 - node.y0 is proportional to node.value) calculated by Sankey layout generator.
   */
  y1?: number;
}

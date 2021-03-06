import { Node } from './index';

// Implementing the d3 SimulationLinkDatum interface
export class Link implements d3.SimulationLinkDatum<Node> {
  // Must - defining enforced implementation properties - required for relevant typing assistance
  /**
   * Link’s source node.
   * For convenience, a link’s source and target properties may be initialized using numeric or string identifiers rather than object references; see link.id.
   * When the link force is initialized (or re-initialized, as when the nodes or links change), any link.source or link.target property which is not an object
   * is replaced by an object reference to the corresponding node with the given identifier.
   * After initialization, the source property represents the source node object.
   */
  source: Node | string | number;
  /**
   * Link’s source link
   * For convenience, a link’s source and target properties may be initialized using numeric or string identifiers rather than object references; see link.id.
   * When the link force is initialized (or re-initialized, as when the nodes or links change), any link.source or link.target property which is not an object
   * is replaced by an object reference to the corresponding node with the given identifier.
   * After initialization, the target property represents the target node object.
   */
  target: Node | string | number;

  // Optional - defining optional implementation properties - required for relevant typing assistance
  /**
   * The zero-based index into the links array. Internally generated when calling ForceLink.links(...)
   */
  index?: number;

  // Custom - Fields, functions and getters not included in the original interface

  constructor(source, target) {
    this.source = source;
    this.target = target;
  }

  /**
   * Link's stroke width
   */
  private _strokeWidth: string;

  /**
   * Getter for generating the stroke width of the line
   */
  get strokeWidth() {
    return this._strokeWidth != null ? this._strokeWidth : '1px';
  }

  /**
   * Setter for overriding the default stroke width
   * @param value - A value specifying the stroke width, defaults to 1px
   */
  set strokeWidth(value) {
    this._strokeWidth = value;
  }

  private _strokeColor: string;

  /**
   * Getter for generating the stroke color of the line
   */
  get strokeColor() {
    return this._strokeColor != null ? this._strokeColor : '#aaaaaa';
  }

  /**
   * Setter for overriding the default stroke color
   * @param value - A value specifying the stroke color, defaults to #aaaaaa
   */
  set strokeColor(value) {
    this._strokeColor = value;
  }
}

export class Node implements d3.SimulationNodeDatum {
  // Optional - defining enforced implementation properties
  /**
   * Node’s zero-based index into nodes array. This property is set during the initialization process of a simulation.
   */
  index?: number;
  /**
   * Node’s current x-position
   */
  x?: number;
  /**
   * Node’s current y-position
   */
  y?: number;
  /**
   * Node’s current x-velocity
   */
  vx?: number;
  /**
   * Node’s current y-velocity
   */
  vy?: number;
  /**
   * Node’s fixed x-position (if position was fixed)
   */
  fx?: number | null;
  /**
   * Node’s fixed y-position (if position was fixed)
   */
  fy?: number | null;

  // Custom - Fields, functions and getters not included in the original interface
  id: string;
  linkCount = 0;

  constructor(id) {
    this.id = id;
  }

  /**
   * Function for normalizing node values such as color, radius, font size and so on.
   */
  normalize = () => {
    return Math.sqrt(this.linkCount / 10);
  };

  /**
   * Getter for generating the visual node radius.
   */
  get radius() {
    return 50 * this.normalize() + 10;
  }

  /**
   * Node's color
   */
  private _color: string;

  /**
   * Getter for the node color.
   */
  get color() {
    return this._color != null ? this._color : '#000';
  }

  /**
   * Setter for overriding the default node color.
   * @param value - A string specifying the color, defaults to #000.
   */
  set color(value) {
    this._color = value;
  }

  /**
   * Getter for the node font size.
   */
  get fontSize() {
    return (30 * this.normalize() + 10) + 'px';
  }

  /**
   * Node's text color
   */
  private _fontColor: string;

  /**
   * Getter for the node font color.
   */
  get fontColor() {
    return this._fontColor != null ? this._fontColor : '#fff';
  }

  /**
   * Setter for overriding the default font color.
   * @param value - A string specifying the font color, defaults to #fff.
   */
  set fontColor(value) {
    this._fontColor = value;
  }
}

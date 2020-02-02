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
  }

  /**
   * Getter for generating the visual node radius.
   */
  get radius() {
    return 50 * this.normalize() + 10;
  }

  /**
   * Getter for generating the node color. Return value can be overridden using the override parameter.
   */
  get nodeColor() {
    return '#000';
  }

  /**
   * Getter for generating the node font size. Return value can be overridden using the override parameter.
   */
  get fontSize() {
    return (30 * this.normalize() + 10) + 'px';
  }

  /**
   * Getter for generating the node font color. Return value can be overridden using the override parameter.
   */
  get fontColor() {
    return '#fff';
  }
}

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

  // Custom - Fields not included in the original interface
  /**
   * Node id as an example for now //TODO: Remove or think of something more interesting
   */
  id: string;

  constructor(id) {
    this.id = id;
  }
}

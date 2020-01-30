import { Injectable } from '@angular/core';
import { Node, Link, ForceDirectedGraph } from './models';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class D3Service {

  /**
   * The purpose of this service is to provide the user with methods allowing for interaction of elements through the d3 library.
   */
  constructor() {
  }

  /**
   * A method used to bind a zoomable behaviour to an svg element.
   */
  applyZoomableBehaviour(svgElement, containerElement) {
    let svg, container, zoomed, zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    }

    zoom = d3.zoom().on('zoom', zoomed);
    svg.call(zoom);
  }

  /**
   * A method used to bind a draggable behaviour to an svg element.
   */
  applyDraggableBehaviour() {
  }

  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width: number, height: number }) {
    const graph = new ForceDirectedGraph(nodes, links, options);
    return graph;
  }

}

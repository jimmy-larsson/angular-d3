import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { D3Service } from '../../d3.service';
import { SankeyDiagram } from '../models/sankey-diagram';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'd3-sankey-diagram',
  templateUrl: './sankey.component.html',
  styleUrls: ['./sankey.component.scss']
})
export class SankeyDiagramComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes;
  @Input('links') links;

  sankeyDiagram: SankeyDiagram;
  sankeyNodes = [];
  sankeyLinks = [];

  private _options: { width, height } = {width: 800, height: 600};
  private colorScheme; // TODO: Move the actual scheme colors into options? Maybe have options such as: { scaleSequential: {interpolateRainbow, ...], scaleOrdinal {...} }? Also allow to pass an interpolator?

  constructor(private d3Service: D3Service) {
    /**
     * Allow for the Sankey diagram to be redrawn when the user resize the window
     */
    fromEvent(window, 'resize')
      .pipe(debounceTime(150))
      .subscribe(() => {
        this.sankeyDiagram.initSankey(this.options);
      });
  }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.sankeyDiagram = this.d3Service.getSankeyDiagram(this.nodes, this.links, this.options);

    /**
     * Setting the color scheme
     */
    this.colorScheme = d3.scaleSequential(d3.interpolateRainbow).domain([0, this.nodes.length]);

    /**
     * Setting the generated sankey nodes and links up for rendering
     */
    this.sankeyNodes = this.sankeyDiagram.nodes;
    this.sankeyLinks = this.sankeyDiagram.links;
  }

  ngAfterViewInit() {

  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}


import { AfterViewInit, ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Sankey from 'd3-sankey';
import { Data } from '../models/data';
import { D3Service } from '../../d3.service';
import { SankeyDiagram } from '../models/sankey-diagram';

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

  private _options: { width, height } = { width: 800, height: 600 };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sankeyDiagram.initSankey(this.options);
  }

  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.sankeyDiagram = this.d3Service.getSankeyDiagram(this.nodes, this.links, this.options);
    this.sankeyNodes = this.sankeyDiagram.nodes;
    this.sankeyLinks = this.sankeyDiagram.links;
    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    /*this.sankeyDiagram.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });*/
  }

  ngAfterViewInit() {
    this.DrawChart();
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  private DrawChart() {

    let svg = d3.select('#sankeyDiagramOld'),
      width = +svg.attr('width'),
      height = +svg.attr('height');

    let formatNumber = d3.format(',.0f'),
      format = function(d: any) {
        return formatNumber(d) + ' TWh';
      },
      color = d3.scaleOrdinal(d3.schemeCategory10);

    let sankey = d3Sankey.sankey()
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 1], [width - 1, height - 6]]);

    let link = svg.append('g')
      .attr('class', 'links')
      .attr('fill', 'none')
      .attr('stroke', '#000')
      .attr('stroke-opacity', 0.2)
      .selectAll('path');

    let node = svg.append('g')
      .attr('class', 'nodes')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .selectAll('g');

    // d3.json("./energy.json", function (error, energy: any) {
    // if (error) throw error;

    const energy: Data = {
      nodes: [{
        nodeId: 0,
        name: 'node0',
        description: 'some description0'
      }, {
        nodeId: 1,
        name: 'node1',
        description: 'some description1'
      }, {
        nodeId: 2,
        name: 'node2',
        description: 'some description2'
      }, {
        nodeId: 3,
        name: 'node3',
        description: 'some description3'
      }, {
        nodeId: 4,
        name: 'node4',
        description: 'some description4'
      }],
      links: [{
        source: 0,
        target: 2,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 1,
        target: 2,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 1,
        target: 3,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 0,
        target: 4,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 2,
        target: 3,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 2,
        target: 4,
        value: 2,
        uom: 'Widget(s)'
      }, {
        source: 3,
        target: 4,
        value: 4,
        uom: 'Widget(s)',
      }]
    };


    sankey(energy);

    link = link
      .data(energy.links)
      .enter().append('path')
      .attr('d', d3Sankey.sankeyLinkHorizontal())
      .attr('stroke-width', function(d: any) {
        return Math.max(1, d.width);
      });

    link.append('title')
      .text(function(d: any) {
        return d.source.name + ' → ' + d.target.name + '\n' + format(d.value);
      });

    node = node
      .data(energy.nodes)
      .enter().append('g');

    node.append('rect')
      .attr('x', function(d: any) {
        return d.x0;
      })
      .attr('y', function(d: any) {
        return d.y0;
      })
      .attr('height', function(d: any) {
        return d.y1 - d.y0;
      })
      .attr('width', function(d: any) {
        return d.x1 - d.x0;
      })
      .attr('fill', function(d: any) {
        return color(d.name.replace(/ .*/, ''));
      })
      .attr('stroke', '#000');

    node.append('text')
      .attr('x', function(d: any) {
        return d.x0 - 6;
      })
      .attr('y', function(d: any) {
        return (d.y1 + d.y0) / 2;
      })
      .attr('dy', '0.35em')
      .attr('text-anchor', 'end')
      .text(function(d: any) {
        return d.name;
      })
      .filter(function(d: any) {
        return d.x0 < width / 2;
      })
      .attr('x', function(d: any) {
        return d.x1 + 6;
      })
      .attr('text-anchor', 'start');

    node.append('title')
      .text(function(d: any) {
        return d.name + ' - ' + d.description + '\n' + format(d.value);
      });
    // });
  }

}


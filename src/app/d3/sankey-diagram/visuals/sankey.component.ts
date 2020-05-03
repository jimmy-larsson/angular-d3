import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { D3Service } from '../../d3.service';
import { SankeyDiagram } from '../models/sankey-diagram';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ColoringMethod, ColorSchemeInterpolation, ExtraProperties, Link, Node, Options } from '../models';

@Component({
  selector: 'd3-sankey-diagram',
  templateUrl: './sankey.component.html',
  styleUrls: ['./sankey.component.scss']
})
export class SankeyDiagramComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes: Node<ExtraProperties, ExtraProperties>;
  @Input('links') links: Link<ExtraProperties, ExtraProperties>;
  @Input('options') options: Options;

  sankeyDiagram: SankeyDiagram;
  sankeyNodes = [];
  sankeyLinks = [];

  /**
   * The color generator is a function which, given a node_id (number) will generate a color code.
   *
   * Overriding this allows for custom coloring of the Sankey diagram.
   *
   * Defaults to d3.scaleSequential(d3.interpolateRainbow);
   */
  colorGenerator;

  constructor(private d3Service: D3Service) {
    /**
     * Allow for the Sankey diagram to be redrawn when the user resize the window
     */
    fromEvent(window, 'resize')
      .pipe(debounceTime(150))
      .subscribe(() => {
        this.sankeyDiagram.initSankey();
      });
  }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.sankeyDiagram = this.d3Service.getSankeyDiagram(this.nodes, this.links, this.options);

    /**
     * Setting the color scheme
     */
    this.colorGenerator = this.setColorScheme();

    /**
     * Setting the generated sankey nodes and links up for rendering
     */
    this.sankeyNodes = this.sankeyDiagram.nodes;
    this.sankeyLinks = this.sankeyDiagram.links;
  }

  ngAfterViewInit() {

  }

  private setColorScheme() {
    let schemeOrInterpolator;
    let coloringMethod;

    switch (this.sankeyDiagram.options.getDiagramColorSchemeOrInterpolation()) {
      case ColorSchemeInterpolation.INTERPOLATE_BLUES:
        schemeOrInterpolator = d3.interpolateBlues;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_BUGN:
        schemeOrInterpolator = d3.interpolateBuGn;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_BUPU:
        schemeOrInterpolator = d3.interpolateBuPu;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_COOL:
        schemeOrInterpolator = d3.interpolateCool;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_CUBE_HELIX_DEFAULT:
        schemeOrInterpolator = d3.interpolateCubehelixDefault;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_GNBU:
        schemeOrInterpolator = d3.interpolateGnBu;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_GREENS:
        schemeOrInterpolator = d3.interpolateGreens;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_GREYS:
        schemeOrInterpolator = d3.interpolateGreys;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_INFERNO:
        schemeOrInterpolator = d3.interpolateInferno;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_MAGMA:
        schemeOrInterpolator = d3.interpolateMagma;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_ORANGES:
        schemeOrInterpolator = d3.interpolateOranges;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_ORRD:
        schemeOrInterpolator = d3.interpolateOrRd;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_PIYG:
        schemeOrInterpolator = d3.interpolatePiYG;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_PLASMA:
        schemeOrInterpolator = d3.interpolatePlasma;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_PRGN:
        schemeOrInterpolator = d3.interpolatePRGn;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_PUBU:
        schemeOrInterpolator = d3.interpolatePuBu;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_PUBUGN:
        schemeOrInterpolator = d3.interpolatePuBuGn;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_PUOR:
        schemeOrInterpolator = d3.interpolatePuOr;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_PURD:
        schemeOrInterpolator = d3.interpolatePuRd;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_RAINBOW:
        schemeOrInterpolator = d3.interpolateRainbow;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_PURPLES:
        schemeOrInterpolator = d3.interpolatePurples;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_RDGY:
        schemeOrInterpolator = d3.interpolateRdGy;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_RDPU:
        schemeOrInterpolator = d3.interpolateRdPu;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_RDYLBU:
        schemeOrInterpolator = d3.interpolateRdYlBu;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_RDYLGN:
        schemeOrInterpolator = d3.interpolateRdYlGn;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_REDS:
        schemeOrInterpolator = d3.interpolateReds;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_SINEBOW:
        schemeOrInterpolator = d3.interpolateSinebow;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_SPECTRAL:
        schemeOrInterpolator = d3.interpolateSpectral;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_VIRIDIS:
        schemeOrInterpolator = d3.interpolateViridis;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_WARM:
        schemeOrInterpolator = d3.interpolateWarm;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_YLGN:
        schemeOrInterpolator = d3.interpolateYlGn;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_YLGNBU:
        schemeOrInterpolator = d3.interpolateYlGnBu;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_YLORBR:
        schemeOrInterpolator = d3.interpolateYlOrBr;
        break;
      case ColorSchemeInterpolation.INTERPOLATE_YLORRD:
        schemeOrInterpolator = d3.interpolateYlOrRd;
        break;
      case ColorSchemeInterpolation.SCHEME_ACCENT:
        schemeOrInterpolator = d3.schemeAccent;
        break;
      case ColorSchemeInterpolation.SCHEME_CATEGORY_10:
        schemeOrInterpolator = d3.schemeCategory10;
        break;
      case ColorSchemeInterpolation.SCHEME_DARK2:
        schemeOrInterpolator = d3.schemeDark2;
        break;
      case ColorSchemeInterpolation.SCHEME_PAIRED:
        schemeOrInterpolator = d3.schemePaired;
        break;
      case ColorSchemeInterpolation.SCHEME_PASTEL1:
        schemeOrInterpolator = d3.schemePastel1;
        break;
      case ColorSchemeInterpolation.SCHEME_PASTEL2:
        schemeOrInterpolator = d3.schemePastel2;
        break;
      case ColorSchemeInterpolation.SCHEME_SET1:
        schemeOrInterpolator = d3.schemeSet1;
        break;
      case ColorSchemeInterpolation.SCHEME_SET2:
        schemeOrInterpolator = d3.schemeSet2;
        break;
      case ColorSchemeInterpolation.SCHEME_SET3:
        schemeOrInterpolator = d3.schemeSet3;
        break;
      default:
        schemeOrInterpolator = d3.interpolateRainbow;
    }

    switch (this.sankeyDiagram.options.getDiagramColoringMethod()) {
      case ColoringMethod.DIVERGING:
        coloringMethod = d3.scaleDiverging(schemeOrInterpolator);
        break;
      case ColoringMethod.SEQUENTIAL:
        coloringMethod = d3.scaleSequential(schemeOrInterpolator);
        break;
      case ColoringMethod.ORDINAL:
        coloringMethod = d3.scaleOrdinal(schemeOrInterpolator);
        break;
      default:
        d3.scaleSequential(schemeOrInterpolator);
    }

    return coloringMethod.domain([0, this.nodes.length]);
  }
}


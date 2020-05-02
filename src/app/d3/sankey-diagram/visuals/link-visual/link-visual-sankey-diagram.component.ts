import { Component, Input } from '@angular/core';
import { ExtraProperties } from '../../models/extra-properties';
import { Link } from '../../models';
import * as d3Sankey from 'd3-sankey';
import { max } from 'rxjs/operators';

@Component({
  selector: '[linkVisualSankeyDiagram]',
  templateUrl: './link-visual-sankey-diagram.component.html',
  styleUrls: ['./link-visual-sankey-diagram.component.scss']
})
export class LinkVisualSankeyDiagramComponent {
  @Input('linkVisualSankeyDiagram') link: Link<ExtraProperties, ExtraProperties>;
  @Input('colorGenerator') colorGenerator;

  linkHorizontal() {
    return d3Sankey.sankeyLinkHorizontal()(this.link);
  }

  getStrokeWidth() {
    return Math.max(1, this.link.width);
  }

  generateLinkId() {
    return `link_${this.link.index}`;
  }
}

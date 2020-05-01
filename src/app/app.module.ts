import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForceDirectedGraphComponent } from './d3/force-directed-graph/visuals/force-directed-graph/force-directed-graph.component';
import { NodeVisualComponent } from './d3/force-directed-graph/visuals/shared/node-visual/node-visual.component';
import { LinkVisualComponent } from './d3/force-directed-graph/visuals/shared/link-visual/link-visual.component';
import { ZoomableDirective } from './d3/force-directed-graph/directives/zoomable.directive';
import { D3Service } from './d3/d3.service';
import { DraggableDirective } from './d3/force-directed-graph/directives/draggable.directive';
import { SankeyDiagramComponent } from './d3/sankey-diagram/visuals/sankey.component';
import { NodeVisualSankeyDiagramComponent } from './d3/sankey-diagram/visuals/shared/node-visual/node-visual-sankey-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    ForceDirectedGraphComponent,
    SankeyDiagramComponent,
    NodeVisualComponent,
    NodeVisualSankeyDiagramComponent,
    LinkVisualComponent,
    ZoomableDirective,
    DraggableDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

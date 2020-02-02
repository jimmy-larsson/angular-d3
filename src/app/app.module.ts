import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './d3/force-directed-graph/visuals/graph/graph.component';
import { NodeVisualComponent } from './d3/force-directed-graph/visuals/shared/node-visual/node-visual.component';
import { LinkVisualComponent } from './d3/force-directed-graph/visuals/shared/link-visual/link-visual.component';
import { ZoomableDirective } from './d3/force-directed-graph/directives/zoomable.directive';
import { D3Service } from './d3/d3.service';
import { DraggableDirective } from './d3/force-directed-graph/directives/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    NodeVisualComponent,
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

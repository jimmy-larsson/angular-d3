import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineExampleComponent } from './d3/visuals/line-example.component';
import { GraphComponent } from './d3/visuals/graph/graph.component';
import { NodeVisualComponent } from './d3/visuals/shared/node-visual/node-visual.component';
import { LinkVisualComponent } from './d3/visuals/shared/link-visual/link-visual.component';

@NgModule({
  declarations: [
    AppComponent,
    LineExampleComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

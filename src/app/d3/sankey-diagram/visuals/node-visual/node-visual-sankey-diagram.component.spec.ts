import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeVisualSankeyDiagramComponent } from './node-visual-sankey-diagram.component';

describe('NodeVisualSankeyDiagramComponent', () => {
  let component: NodeVisualSankeyDiagramComponent;
  let fixture: ComponentFixture<NodeVisualSankeyDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeVisualSankeyDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeVisualSankeyDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

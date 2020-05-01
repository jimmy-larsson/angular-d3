import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkVisualSankeyDiagramComponent } from './link-visual-sankey-diagram.component';

describe('LinkVisualSankeyDiagramComponent', () => {
  let component: LinkVisualSankeyDiagramComponent;
  let fixture: ComponentFixture<LinkVisualSankeyDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkVisualSankeyDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkVisualSankeyDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

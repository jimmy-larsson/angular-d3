import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sankey } from './sankey.component';

describe('SankeyComponent', () => {
  let component: Sankey;
  let fixture: ComponentFixture<Sankey>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Sankey]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sankey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

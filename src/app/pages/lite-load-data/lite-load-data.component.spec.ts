import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteLoadDataComponent } from './lite-load-data.component';

describe('LiteLoadDataComponent', () => {
  let component: LiteLoadDataComponent;
  let fixture: ComponentFixture<LiteLoadDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiteLoadDataComponent]
    });
    fixture = TestBed.createComponent(LiteLoadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

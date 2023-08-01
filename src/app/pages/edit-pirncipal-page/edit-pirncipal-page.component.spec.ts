import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPirncipalPageComponent } from './edit-pirncipal-page.component';

describe('EditPirncipalPageComponent', () => {
  let component: EditPirncipalPageComponent;
  let fixture: ComponentFixture<EditPirncipalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPirncipalPageComponent]
    });
    fixture = TestBed.createComponent(EditPirncipalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

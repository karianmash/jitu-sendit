import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParcelComponent } from './create-parcel.component';

describe('CreateParcelComponent', () => {
  let component: CreateParcelComponent;
  let fixture: ComponentFixture<CreateParcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtComponent } from './dt.component';

describe('DtComponent', () => {
  let component: DtComponent;
  let fixture: ComponentFixture<DtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DtComponent]
    });
    fixture = TestBed.createComponent(DtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

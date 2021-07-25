import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnavbarComponent } from './connavbar.component';

describe('ConnavbarComponent', () => {
  let component: ConnavbarComponent;
  let fixture: ComponentFixture<ConnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

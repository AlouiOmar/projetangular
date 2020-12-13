import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheDetailComponent } from './affiche-detail.component';

describe('AfficheDetailComponent', () => {
  let component: AfficheDetailComponent;
  let fixture: ComponentFixture<AfficheDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

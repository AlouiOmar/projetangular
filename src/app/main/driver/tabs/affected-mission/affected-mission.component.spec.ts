import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectedMissionComponent } from './affected-mission.component';

describe('AffectedMissionComponent', () => {
  let component: AffectedMissionComponent;
  let fixture: ComponentFixture<AffectedMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectedMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectedMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

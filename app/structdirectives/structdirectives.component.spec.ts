import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructdirectivesComponent } from './structdirectives.component';

describe('StructdirectivesComponent', () => {
  let component: StructdirectivesComponent;
  let fixture: ComponentFixture<StructdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructdirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

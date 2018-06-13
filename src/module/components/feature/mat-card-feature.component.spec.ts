import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatCardFeatureComponent } from './mat-card-feature.component';

describe('MatCardTeamMemberComponent', function () {
  let de: DebugElement;
  let comp: MatCardFeatureComponent;
  let fixture: ComponentFixture<MatCardFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatCardFeatureComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardFeatureComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create components', () => expect(comp).toBeDefined());
});

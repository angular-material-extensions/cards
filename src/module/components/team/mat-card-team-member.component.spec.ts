import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatCardTeamMemberComponent } from './mat-card-team-member.component';

describe('MatCardTeamMemberComponent', function () {
  let de: DebugElement;
  let comp: MatCardTeamMemberComponent;
  let fixture: ComponentFixture<MatCardTeamMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatCardTeamMemberComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardTeamMemberComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create components', () => expect(comp).toBeDefined());

});

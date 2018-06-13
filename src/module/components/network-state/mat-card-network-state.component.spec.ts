import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatCardNetworkStateComponent } from './mat-card-network-state.component';

describe('MatCardTeamMemberComponent', function () {
  let de: DebugElement;
  let comp: MatCardNetworkStateComponent;
  let fixture: ComponentFixture<MatCardNetworkStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatCardNetworkStateComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardNetworkStateComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create components', () => expect(comp).toBeDefined());

});

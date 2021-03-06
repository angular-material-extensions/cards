import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LibComponent } from './lib.component';

describe('MatCardTeamMemberComponent', function () {
  let de: DebugElement;
  let comp: LibComponent;
  let fixture: ComponentFixture<LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LibComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create components', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    const p = de.nativeElement;
    const description = 'Set of reusable cards templates built with angular material deisgn';
    expect(p.textContent).toEqual(description);
  });
});

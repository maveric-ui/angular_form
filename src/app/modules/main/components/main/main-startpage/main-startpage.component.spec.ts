import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStartpageComponent } from './main-startpage.component';

describe('MainStartpageComponent', () => {
  let component: MainStartpageComponent;
  let fixture: ComponentFixture<MainStartpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStartpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

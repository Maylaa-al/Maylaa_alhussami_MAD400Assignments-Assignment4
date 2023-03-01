import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLazyModuleComponent } from './my-lazy-module.component';

describe('MyLazyModuleComponent', () => {
  let component: MyLazyModuleComponent;
  let fixture: ComponentFixture<MyLazyModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLazyModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLazyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

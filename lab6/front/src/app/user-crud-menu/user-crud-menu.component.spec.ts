import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrudMenuComponent } from './user-crud-menu.component';

describe('UserCrudMenuComponent', () => {
  let component: UserCrudMenuComponent;
  let fixture: ComponentFixture<UserCrudMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCrudMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCrudMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

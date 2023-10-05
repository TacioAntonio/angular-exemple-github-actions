import { TestBed } from '@angular/core/testing';
import { CreateUserComponent } from './create-user.component';
import { HomeComponent } from '../home/home.component';
import { USERS } from 'src/app/shared/fake-db';

describe('CreateUserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserComponent, HomeComponent]
    });

    while (USERS.length > 0) {
      USERS.pop();
    }
  });

  it('should the component to have instantiated', () => {
    const fixture = TestBed.createComponent(CreateUserComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should change "name" to John', () => {
    const fixture = TestBed.createComponent(CreateUserComponent);
    const component = fixture.componentInstance;
    component.name = 'John';
    expect(component.name).toBe('John');
  });

  it('should store the name John in USERS', () => {
    const fixture = TestBed.createComponent(CreateUserComponent);
    const component = fixture.componentInstance;
    component.name = 'John';
    component.submit();
    expect(USERS).toContain('John');
  });

  it('should that no value is stored', () => {
    const fixture = TestBed.createComponent(CreateUserComponent);
    const component = fixture.componentInstance;
    component.submit();
    expect(USERS).toEqual([]);
  });

  it('should that the store for the "name" John is in the HomeComponent listing', () => {
    const fixtureCreateUser = TestBed.createComponent(CreateUserComponent);
    const componentCreateUser = fixtureCreateUser.componentInstance;
    componentCreateUser.name = 'John';
    componentCreateUser.submit();

    const fixtureHome = TestBed.createComponent(HomeComponent);
    const componentHome = fixtureHome.componentInstance;
    expect(componentHome.getUsers).toContain('John');
  });
});


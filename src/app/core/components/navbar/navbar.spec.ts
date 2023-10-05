import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateUserComponent } from 'src/app/pages/create-user/create-user.component';

describe('NavbarComponent', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule.withRoutes([
        { path: 'create-user', component: CreateUserComponent },
      ])]
    });

    router = TestBed.inject(Router);
  });

  it('should the component to have instantiated', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should navigate to HomeComponent', fakeAsync(() => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const linkElement = compiled.querySelectorAll('.link')[0] as HTMLElement;

    // Use fakeAsync e tick() para lidar com operações assíncronas
    linkElement.click();
    tick();

    // Aguarde até que a navegação esteja completa
    fixture.whenStable().then(() => {
      expect(router.url).toBe('/');
    });
  }));

  it('should navigate to CreateUserComponent', fakeAsync(() => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const linkElement = compiled.querySelectorAll('.link')[1] as HTMLElement;

    // Use fakeAsync e tick() para lidar com operações assíncronas
    linkElement.click();
    tick();

    // Aguarde até que a navegação esteja completa
    fixture.whenStable().then(() => {
      expect(router.url).toBe('/create-user');
    });
  }));
});

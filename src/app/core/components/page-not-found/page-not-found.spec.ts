import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { CreateUserComponent } from 'src/app/pages/create-user/create-user.component';

describe('PageNotFoundComponent', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      imports: [RouterTestingModule.withRoutes([
        { path: 'create-user', component: CreateUserComponent },
        { path: 'page-not-exist', component: class {} },
      ])]
    });

    router = TestBed.inject(Router);
  });

  it('should the component to have instantiated', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should navigate to HomeComponent', () => {
    router.navigate(['/']).then(() => {
      expect(router.url).toBe('/');
    });
  });

  it('should navigate to CreateUserComponent', () => {
    router.navigate(['/create-user']).then(() => {
      expect(router.url).toBe('/create-user');
    });
  });

  it('should navigate to page not exist', () => {
    router.navigate(['/page-not-exist']).then(() => {
      expect(router.url).toBe('/page-not-exist');
    });
  });
});

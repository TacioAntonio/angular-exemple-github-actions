import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
  });

  it('should the component to have instantiated', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should the component h1.title to be User list', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.title')?.textContent).toBe('User list');
  });
});

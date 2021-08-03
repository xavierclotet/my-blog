import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, scheduled, asyncScheduler } from 'rxjs';

import { ROUTEPARAM_ID, TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {

    TestBed.overrideComponent(TestComponent, {
      set: {
        providers: [{
          provide: ROUTEPARAM_ID,
          useValue: scheduled(of('1234'), asyncScheduler)
        }]
      }
    });

    await TestBed.configureTestingModule({
      declarations: [TestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get :id from route param', done => {
    component.id$.subscribe(id => {
      expect(id).toBe('1234');
      done();
    });
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterestingPage } from './interesting.page';

describe('InterestingPage', () => {
  let component: InterestingPage;
  let fixture: ComponentFixture<InterestingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

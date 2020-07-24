import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeOfDayPage } from './recipe-of-day.page';

describe('RecipeOfDayPage', () => {
  let component: RecipeOfDayPage;
  let fixture: ComponentFixture<RecipeOfDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeOfDayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeOfDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

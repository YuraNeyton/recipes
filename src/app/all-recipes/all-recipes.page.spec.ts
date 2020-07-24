import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllRecipesPage } from './all-recipes.page';

describe('AllRecipesPage', () => {
  let component: AllRecipesPage;
  let fixture: ComponentFixture<AllRecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

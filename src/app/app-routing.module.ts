import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: '',
        redirectTo: 'tabs/recipes',
        pathMatch: 'full'
    },
    {
        path: 'all-recipes',
        loadChildren: () => import('./all-recipes/all-recipes.module').then(m => m.AllRecipesPageModule)
    },
  {
    path: 'recipe-of-day',
    loadChildren: () => import('./recipe-of-day/recipe-of-day.module').then( m => m.RecipeOfDayPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

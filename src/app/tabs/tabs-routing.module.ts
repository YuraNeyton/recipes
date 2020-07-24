import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'recipes',
                loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)
            },
            {
                path: 'categories',
                loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule)
            },
            {
                path: 'diets',
                loadChildren: () => import('./diets/diets.module').then(m => m.DietsPageModule)
            },
            {
                path: 'interesting',
                loadChildren: () => import('./interesting/interesting.module').then(m => m.InterestingPageModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {
}

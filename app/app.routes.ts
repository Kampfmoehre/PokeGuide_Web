import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail.component';

const routes: RouterConfig = [
    {
        path: 'pokemon',
        component: PokemonListComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: PokemonDetailComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];

import { Routes, RouterModule }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PokemonListComponent } from './pokemon/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail.component';
import { ExperienceCalculatorComponent } from './calculator/experience-calculator.component';

const appRoutes: Routes = [
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
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'pokemon/:id',
        component: PokemonDetailComponent
    },
    {
        path: 'experience',
        component: ExperienceCalculatorComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);

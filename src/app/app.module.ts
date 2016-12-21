import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import './rxjs-extensions';

import { PokemonService} from './service/pokemon.service';
import { ExperienceCalculatorService } from './service/experience-calculator.service';

import { DashboardComponent } from './dashboard.component';
import { PokemonListComponent} from './pokemon/pokemon-list.component';
import { PokemonDetailComponent} from './pokemon/pokemon-detail.component';
import { PokemonSearchComponent} from './pokemon/pokemon-search.component';
import { ExperienceCalculatorComponent } from './calculator/experience-calculator.component';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [
        AppComponent,
        DashboardComponent,
        ExperienceCalculatorComponent,
        PokemonListComponent,
        PokemonDetailComponent,
        PokemonSearchComponent
    ],
    providers: [PokemonService, ExperienceCalculatorService],
    bootstrap: [AppComponent]
})
export class AppModule {}

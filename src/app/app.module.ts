import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import './rxjs-extensions';

import { DashboardComponent } from './dashboard.component';
import { PokemonListComponent} from './pokemon-list.component';
import { PokemonService} from './pokemon.service';
import { PokemonDetailComponent} from './pokemon-detail.component';
import { PokemonSearchComponent} from './pokemon-search.component';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, PokemonListComponent, PokemonDetailComponent, DashboardComponent, PokemonSearchComponent],
    providers: [PokemonService],
    bootstrap: [AppComponent]
})
export class AppModule {}

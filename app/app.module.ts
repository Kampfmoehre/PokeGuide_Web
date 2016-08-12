import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { DashboardComponent } from './dashboard.component';
import { PokemonListComponent} from './pokemon-list.component';
import { PokemonService} from './pokemon.service';
import { PokemonDetailComponent} from './pokemon-detail.component';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, PokemonListComponent, PokemonDetailComponent, DashboardComponent],
    providers: [PokemonService],
    bootstrap: [AppComponent]
})
export class AppModule {}

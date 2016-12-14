import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from './model/pokemon';
import { POKEMONLIST } from './model/mock-pokemon';

class Model
{
    id: number;
    name: string;
}
class TeamMember
{
    id: number;
    name: string;
    active: boolean;
    isReal: boolean;
    exp: number;
}

@Component({
    selector: 'experience-calculator',
    templateUrl: './experience-calculator.component.html',
    styleUrls: ['./experience-calculator.component.css']
})
export class ExperienceCalculatorComponent implements OnInit {
    title = 'Erfahrungs-Rechner';
    generations: Model[];
    selectedGeneration: Model;
    @Input() selectedEnemy: Pokemon;
    pokemonList: Pokemon[];
    useExpAll: boolean;
    pokemonTeam: TeamMember[] = [];

    ngOnInit() {
        this.generations = [{
            id: 1,
            name: 'Generation 1'
        }, {
            id: 2,
            name: 'Generation 2'
        }, {
            id: 3,
            name: 'Generation 3'
        }, {
            id: 4,
            name: 'Generation 4'
        }, {
            id: 5,
            name: 'Generation 5'
        }, {
            id: 6,
            name: 'Generation 6'
        }];
        this.selectedGeneration = this.generations[0];

        this.pokemonList = POKEMONLIST;
        this.selectedEnemy = this.pokemonList[2];
        for (let i = 1; i < 7; i++) {
            this.pokemonTeam.push({
                id: i,
                name: 'Pokémon ' + i,
                active: i == 1,
                isReal: i == 1,
                exp: 0
            });
        }

    }
    onChange(): void {
        console.log('something changed');
    }
}

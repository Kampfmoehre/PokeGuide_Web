import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Generation } from './../model/generation';
import { Pokemon } from './../model/pokemon';
import { POKEMONLIST } from './../model/mock-pokemon';

import { ExperienceCalculatorService } from './../service/experience-calculator.service';
import { PokemonService } from './../service/pokemon.service';

class TeamMember {
    id: number;
    name: string;
    participated: boolean;
    isinTeam: boolean;
    exp: number;
    isTraded: boolean;
    holdsExpShare: boolean;
}

@Component({
    selector: 'experience-calculator',
    templateUrl: './experience-calculator.component.html',
    styleUrls: ['./experience-calculator.component.css']
})
export class ExperienceCalculatorComponent implements OnInit {
    title = 'Erfahrungs-Rechner';
    generations: Generation[] = [];
    selectedGeneration: Generation;
    @Input() selectedEnemy: Pokemon;
    pokemonList: Observable<Pokemon[]>;
    useExpAll: boolean;
    pokemonTeam: TeamMember[] = [];
    isWild: boolean;
    level: number;
    private searchTerms = new Subject<string>();

    constructor(private pokemonService: PokemonService, private expCalcService: ExperienceCalculatorService) {
    }

    ngOnInit() {
        let that = this;
        this.pokemonService.getGenerations()
            .then((generations) => {
                that.generations = generations;
                that.selectedGeneration = that.generations[0];
            });

        this.pokemonList = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? that.pokemonService.search(term, that.selectedGeneration.id) : Observable.of<Pokemon[]>([]))
            .catch(error => {
                console.error(error);
                return Observable.of<Pokemon[]>([])
            });
        // this.selectedEnemy = this.pokemonList[2];
        for (let i = 1; i < 7; i++) {
            this.pokemonTeam.push({
                id: i,
                name: 'Pokémon ' + i,
                participated: i == 1,
                isinTeam: i == 1,
                exp: 0,
                isTraded: false,
                holdsExpShare: false
            });
        }
        this.isWild = true;
    }
    search(term: string): void {
        this.searchTerms.next(term);
    }
    selectEnemy(pokemon: Pokemon): void {
        this.selectedEnemy = pokemon;
    }
    onChange(): void {
        if (!this.selectedEnemy || !this.selectedGeneration || !this.level || !this.pokemonTeam)
            return;

        let actualTeam = this.pokemonTeam.filter((member) => {
            return member.isinTeam;
        });
        let teamCount = actualTeam.length;
        if (teamCount < 0 || teamCount > 6)
            return;

        let participated = actualTeam.filter((member) => {
            return member.participated;
        }).length;
        if (participated < 1 || participated > 6)
            return;

        console.log('all is valid');
        actualTeam.forEach((member) => {
            switch (this.selectedGeneration.id) {
                case 1:
                    member.exp = 0;
                    // Direct battle xp
                    if (member.participated) {
                        member.exp += this.expCalcService.calculateFirstGenExperience(this.selectedEnemy.baseExp, this.level, participated,
                            this.isWild, member.isTraded, this.useExpAll, 0);
                    }
                    // Exp from ExpAll
                    if (this.useExpAll) {
                        member.exp += this.expCalcService.calculateFirstGenExperience(this.selectedEnemy.baseExp, this.level, participated,
                            this.isWild, member.isTraded, this.useExpAll, teamCount);
                    }

                    break;
            }
        });
    }
}

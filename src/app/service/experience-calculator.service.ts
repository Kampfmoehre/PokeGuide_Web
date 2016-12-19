import { Injectable } from '@angular/core';

@Injectable()
export class ExperienceCalculatorService {
    constructor() {

    }

    /**
     * Calculates battle experience for a Pokémon game of the first generation
     * @param  {number}  baseExp      The base experience of the defeated Pokémon
     * @param  {number}  level        The level of the defeated Pokémon
     * @param  {number}  participated The number of Pokémon that have actively participated in the fight
     * @param  {boolean} isWild       True, if the defeated Pokémon was a wild Pokémon
     * @param  {boolean} isTraded     True, if the Pokémon for which exp is calculated has a different OT
     * @param  {boolean} useExpAll    True, when the Player has ExpAll in his bag
     * @param  {number}  teamCount    0, when calculating direct battle exp, else the amount of Pokémon in the player team
     * @return {number}               The calculated experience
     */
    calculateFirstGenExperience(baseExp: number, level: number, participated: number, isWild: boolean,
                                isTraded: boolean, useExpAll: boolean, teamCount: number): number {
        let experience = participated;
        // When ExpAll is active, Exp for battling Pokémon is halved
        if (useExpAll)
            experience = experience * 2;

        experience = Math.floor(baseExp / experience);
        // When calculating exp from Exp All, divide by Pokémon that are in the players team
        if (teamCount > 0)
            experience = Math.floor(experience / teamCount);

        experience = Math.floor(experience * level);
        experience = Math.floor(experience / 7);

        if (!isWild) // Modifier for trainer battle
            experience = Math.floor(experience * 1.5);

        if (isTraded) // Modifier for traded Pokémon
            experience = Math.floor(experience * 1.5);

        return experience;
    }
}

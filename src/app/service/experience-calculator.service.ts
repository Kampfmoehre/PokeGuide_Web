import { Injectable } from '@angular/core';

@Injectable()
export class ExperienceCalculatorService {
    constructor() {

    }

    calculateFirstGenExperience(baseExp: number, level: number, participated: number, isWild: boolean,
                                isTraded: boolean, useExpAll: boolean, teamCount: number): number {
        let experience = participated;
        if (useExpAll)
            experience = experience * 2;

        experience = Math.floor(baseExp / experience);
        if (teamCount > 0)
            experience = Math.floor(experience / teamCount);

        experience = Math.floor(experience * level);
        experience = Math.floor(experience / 7);

        if (!isWild)
            experience = Math.floor(experience * 1.5);

        if (isTraded)
            experience = Math.floor(experience * 1.5);

        return experience;
    }
}

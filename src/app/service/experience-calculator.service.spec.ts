import { ExperienceCalculatorService } from './experience-calculator.service';

describe('experience calculator generation 1 tests', () => {
    let service: ExperienceCalculatorService;

    beforeEach(() => { service = new ExperienceCalculatorService(); });

    it('should calculate 70 exp for trainer Tortoise at level 5', () => {
        expect(service.calculateFirstGenExperience(66, 5, 1, false, false, false, 0)).toBe(70);
    });
    it('should calculate 12 exp for 2 Pokeḿon that defeated a wild Nidoran M at level 3', () => {
        expect(service.calculateFirstGenExperience(60, 3, 2, true, false, false, 0)).toBe(12);
    });
    it('should calculate 970 exp for a traded Pokémon that defeated a wild Weepinbell at level 30', () => {
        expect(service.calculateFirstGenExperience(151, 30, 1, true, true, false, 0)).toBe(970);
    });
    it('should calculate 3457 exp for a traded Pokémon defeating a trainer Cloyster at level 53', () => {
        expect(service.calculateFirstGenExperience(203, 53, 1, false, true, false, 0)).toBe(3457);
    });
    it('should calculate 1422 exp for 2 traded Pokémon defeating a trainer Slowbro at level 54', () => {
        expect(service.calculateFirstGenExperience(164, 54, 2, false, true, false, 0)).toBe(1422);
    });
    it('should calculate 810 exp for 3 traded Pokémon defeating a trainer Jynx at level 56', () => {
        expect(service.calculateFirstGenExperience(137, 56, 3, false, true, false, 0)).toBe(810);
    });
    it('should calculate 648 exp for 4 Pokémon defeating a trainer Lapras at level 56', () => {
        expect(service.calculateFirstGenExperience(216, 56, 4, false, false, false, 0)).toBe(648);
    });
    it('should calculate 481 exp for 1 traded Pokémon defeating a wild Weepinbell at level 56 with ExpAll active', () => {
        expect(service.calculateFirstGenExperience(151, 30, 1, true, true, true, 0)).toBe(481);
    });
})

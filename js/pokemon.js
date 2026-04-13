export class Pokemon {
    #id;
    
    constructor(pokemonData) {
        this.#id = pokemonData.id;
        this.name = pokemonData.name
        this.hp = pokemonData.stats[0].base_stat;
        this.sprites = pokemonData.sprites;
        this.attack = pokemonData.stats[1].base_stat;
    }

    get id() {
        return this.#id;
    }
                static fromApi(data) {
            return new Pokemon(data);
        }
}

class CapturedPokemon extends (Pokemon) {
    constructor(pokemonData, level) {
        super(pokemonData);
        this.level = level;
    }
}
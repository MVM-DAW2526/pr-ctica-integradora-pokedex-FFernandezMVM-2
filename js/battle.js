import { fetchPokemon } from './api.js';
import { Pokemon } from './pokemon.js';

async function battle() {

    const pSalvaje = JSON.parse(sessionStorage.getItem("pokemonSalvaje"));
    const pPlayer = await fetchPokemon(1)

    const pokemonSalvaje = Pokemon.fromApi(pSalvaje);
    const pokemonPlayer = Pokemon.fromApi(pPlayer);

    document.getElementById('pkmnSalvaje').setAttribute("src", pokemonSalvaje.sprites.front_default);
    document.getElementById('enemy-name').textContent = pokemonSalvaje.name;

    const enemyName = document.getElementById('enemy-name');
    enemyName.textContent = pokemonSalvaje.name;
    
    document.getElementById('pkmn-player').setAttribute("src", pokemonPlayer.sprites.back_default);
    document.getElementById('player-name').textContent = pokemonPlayer.name;

    const playerName = document.getElementById('player-name');
    playerName.textContent = pokemonPlayer.name;

    let enemylife = pokemonSalvaje.hp;
    let playerlife = pokemonPlayer.hp;
    const enemyAttack = pokemonSalvaje.attack;
    const playerAttack = pokemonPlayer.attack;

    
    const btnAttack = document.getElementById('btn-attack');
    const btnCatch = document.getElementById('btn-catch');
    const btnRun = document.getElementById('btn-run');
    const logs = document.getElementById('alert-msg');

    btnCatch.addEventListener('click', function() {
        const misPokemons = JSON.parse(localStorage.getItem("misPokemons")) || [];

        let captura = Math.random();
        if (enemylife < (pokemonSalvaje.hp * 0.3)) {
            captura += 0.3;
        }
        if (captura > 0.5) {
            logs.textContent = '¡Has capturado al pokemon!';
        misPokemons.push(pokemonSalvaje);
        localStorage.setItem("misPokemons", JSON.stringify(misPokemons));
        setTimeout(() => { window.location.href = "my_pokemons.html"; } ,2000);
        
        } else {
            alert("No has capturado al pokemon. ¡Sigue luchando!");
        }
    });

    btnRun.addEventListener('click', function() {
        window.location.href = "hunt.html";
    });



    btnAttack.addEventListener('click', function() {
            enemylife -= playerAttack;
            if (enemylife <= 0) enemylife = 0;
        const hpEnemyText = document.getElementById('hp-enemy').textContent = enemylife;
                        logs.textContent = '¡Tu pokemon está atacando!';
                        setTimeout(() => { logs.textContent = 'El pokemon rival se ha debilitado.'; }, 1000); 
                        setTimeout(() => { logs.textContent = '¡Has ganado la batalla!'; }, 1000); 
                

            setTimeout(function() {
            if (enemylife > 0) {
                playerlife -= enemyAttack;

            if (playerlife <= 0)  {
                playerlife = 0;
                logs.textContent = 'El pokemon rival está atacando';
                setTimeout(() => { logs.textContent = '¡Tu pokemon se ha debilitado!'; }, 1000);
                setTimeout(() => {  window.location.href = "hunt.html";} ,2000);
            }
        document.getElementById('hp-player').textContent = playerlife;
            }    
        }, 1000);


    });


}
battle();
  
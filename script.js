
// Initialisations
const fr_butt = document.getElementById('fr');
const eng_butt = document.getElementById('eng');
const newG_butt = document.getElementById('new_game');
const setDiff_butt = document.getElementById('set_diff');
const viewSco_butt = document.getElementById('view_scores');
const header = document.getElementsByTagName('header');
const game_win = document.getElementsByClassName('game');
let current_lang = 'fr';
let current_diff = 1;
let current_card = null;
let try_count = 0;
let lore = document.createElement('p');
lore.setAttribute('id', 'lore');
fr_butt.style.backgroundColor = 'yellow';
newGame();
let lore_list = new Array();
lore_list.push("La rare carte skoda Mauve, recherchée de tous.");
lore_list.push("La carte de l'école en hommage à notre ami greg.");
lore_list.push("La carte fusée qui pète, prochain AAA de DenisCorp.");
lore_list.push("La carte Babar circonspect (Nabil on a toujours pas compris).");
lore_list.push("Le Forgerêve, colossal représentant de la force de la forma .NET.");
lore_list.push("La carte Temps de midi, rien de tel pour décompresser.");
lore_list.push("La carte Javascript... parce qu'il faut bien passer par là.");
lore_list.push("La carte C#, celui là faut le comprendre, apparemment c'est important.");
lore_list.push("La carte .NET car on ne serait pas là sans Lui.");
lore_list.push("La carte HTML/CSS, aller hop là vous me faites un site blinquant avec ça.");
lore_list.push("La carte Legends of Idleon, petit vice caché de certains d'entre nous.");
lore_list.push("La carte Kaamelott, parce que le gras, c'est la vie.");
lore_list.push("La carte Benja ronpiches, un peu fatigué Benja?");
lore_list.push("La carte café gratuit, Merci au trakk pour cette bénédiction.");
lore_list.push("La carte retard, si tu te reconnais sur la carte, désolé pour toi.");
lore_list.push("La carte apéro, après les heures de formation et avec modération bien évidemment.");
lore_list.push("La carte Discord, ce qui est sur le Discord, reste sur le Discord.");
lore_list.push("La carte Confusion, Sylvain se blesse dans sa confusion et se retrouve dans un mauvais batiment.");
lore_list.push("La carte Question, Oli garde son objectif en tête.");
lore_list.push("La carte contrat BStorm, en moyenne +10kilos la première année (source: Khun).");
lore_list.push("La carte Jdr pour les représentants de ce noble art de la formation.");
lore_list.push("La carte Gaming, pas besoin d'explications je crois.");
let scores_list = new Array();

// Evenements bouttons langues
eng_butt.onmouseover = () => {
    if (current_lang == 'fr') eng_butt.style.backgroundColor = 'yellow';
};
eng_butt.onmouseleave = () => {
    if (current_lang == 'fr') eng_butt.style.backgroundColor = 'rgb(106, 224, 240)';
};

fr_butt.addEventListener('click', () =>{
    eng_butt.style.backgroundColor = 'rgb(106, 224, 240)';
    fr_butt.style.backgroundColor = 'yellow';
    current_lang = 'fr';
    newG_butt.innerText = 'Partie';
    diffButtn_back();
    viewSco_butt.innerText = 'Scores';
    header[0].innerText = 'Deux par deux';
    lore.innerText = 'En complétant les paires, tu découvriras ici le lore des cartes !';
});

fr_butt.onmouseover = () => {
    if (current_lang == 'eng') fr_butt.style.backgroundColor = 'yellow';
};
fr_butt.onmouseleave = () => {
    if (current_lang == 'eng') fr_butt.style.backgroundColor = 'rgb(106, 224, 240)';
};

eng_butt.addEventListener('click', () =>{
    fr_butt.style.backgroundColor = 'rgb(106, 224, 240)';
    eng_butt.style.backgroundColor = 'yellow';
    current_lang = 'eng';
    newG_butt.innerText = 'New game';
    diffButtn_back();
    viewSco_butt.innerText = 'Scores';
    header[0].innerText = 'Two by two';
    lore.innerText = 'Translation in progress !';
});

// Evenements boutton changement de difficulté
setDiff_butt.addEventListener('click', () => {
    let ul_diff = document.querySelector('#set_diff ul');
    while(ul_diff.firstChild) ul_diff.removeChild(ul_diff.firstChild);
    let li_diff1 = document.createElement('li');
    li_diff1.innerText = '1';
    li_diff1.addEventListener('click', () =>{
        current_diff = 1;
        newGame();
        setTimeout(()=>{
            diffButtn_back();
        }, 100);
    });
    let li_diff2 = document.createElement('li');
    li_diff2.innerText = '2';
    li_diff2.addEventListener('click', () =>{
        current_diff = 2;
        newGame();
        setTimeout(()=>{
            diffButtn_back();
        }, 100);
    });
    let li_diff3 = document.createElement('li');
    li_diff3.innerText = '3';
    li_diff3.addEventListener('click', () =>{
        current_diff = 3;
        newGame();
        setTimeout(()=>{
            diffButtn_back();
        }, 100);
    });
    ul_diff.append(li_diff1, li_diff2, li_diff3);

});
function diffButtn_back(){
    let ul_diff = document.querySelector('#set_diff ul');
    while(ul_diff.firstChild) ul_diff.removeChild(ul_diff.firstChild);
    let li_diff = document.createElement('li');
    if (current_lang == 'fr') li_diff.innerText = 'Difficulté';
    else li_diff.innerText = 'Difficulty';
    ul_diff.append(li_diff);
    console.log('test');
}

// Evenement boutton nouvelle partie
newG_butt.addEventListener('click', newGame);

function newGame(){
    while(game_win[0].firstChild) game_win[0].removeChild(game_win[0].firstChild);
    let card_nbr = 0;
    let card_list = new Array();
    //On fixe le nombre de cartes en fonction de la difficulté sélectionnée
    switch(current_diff){
        case 1:
            card_nbr = 8;
            break;
        case 2:
            card_nbr = 14;
            break;
        case 3:
            card_nbr = 22;
            break;
    }
    let rand = 0;
    let already_rand = new Array();
    //Itération permettant de créer le nombre cartes requis
    for (let i = 0; i < card_nbr; i ++){
        let card_div = document.createElement('div');
        //Une carte sur deux, une nouvelle valeur est randomisée
        if (i % 2 == 0){
            do rand = Math.floor(Math.random() * 22); while(already_rand.includes(rand)) ;
            already_rand.push(rand);
            rand += 1;
        }
        //Définition des attributs de la carte
        card_div.setAttribute('dava-value', rand);
        card_div.classList.add('card');
        card_div.classList.add('hidden');
        //Ajout d'un Listener chargé d'écouter les clicks et d'agir en conséquence
        card_div.addEventListener('click', () =>{
            if (card_div.classList.contains('hidden')){
                try_count ++;
                card_div.classList.remove('hidden');
                card_div.classList.add('revealed');
                if (current_card != null){
                    disableCards();
                    setTimeout(()=>{
                        enableCards();
                    }, 1500);
                    if (current_card.getAttribute('dava-value') == card_div.getAttribute('dava-value')){
                        revealCard(card_div);
                        current_card.style.borderColor = 'green';
                        card_div.style.borderColor = 'green';
                        lore.innerText = lore_list[parseInt(card_div.getAttribute('dava-value')) -1];
                        current_card = null;
                    }
                    else{
                        current_card.style.borderColor = 'red';
                        card_div.style.borderColor = 'red';
                        revealCard(card_div);
                        setTimeout(()=>{
                            current_card.style.borderColor = 'black';
                            card_div.style.borderColor = 'black';
                            current_card.classList.remove('revealed');
                            current_card.classList.add('hidden');
                            card_div.classList.remove('revealed');
                            card_div.classList.add('hidden');
                            hideCard(card_div);
                            hideCard(current_card);
                            current_card = null;
                        }, 1500);
                    }
                }
                else{
                    revealCard(card_div);
                    current_card = card_div;
                    card_div.style.borderColor = 'green';
                }
                if (isWin()){
                    setTimeout(()=>{
                        while(game_win[0].firstChild) game_win[0].removeChild(game_win[0].firstChild);
                        let count = try_count;
                        let points = Math.floor(100 / count) * current_diff * current_diff;
                        let record_div = document.createElement('div');
                        record_div.setAttribute('id', 'record_div');
                        let h2 = document.createElement('h2');
                        if (current_lang == 'fr') h2.innerText = 'Félicitations !';
                        else h2.innerText = 'Congratulations !';
                        record_div.append(h2);
                        let p = document.createElement('p');
                        if (current_lang == 'fr') p.innerHTML = '<br>Tu as remporté la partie en ' + count + ' coups !' + '<br>(' + points + ' points)'
                                                + '<br><br>Veux-tu enregistrer ton score ?';
                        else p.innerHTML = '<br>You won the game in ' +    count + ' turns !' + '<br><br>Do you want to save the record ?';
                        record_div.append(p);
                        let p2 = document.createElement('p');
                        let name_inpt = document.createElement('input');
                        let save_bttn = document.createElement('button');
                        p2.append(name_inpt);
                        let p3 = document.createElement('p');
                        save_bttn.addEventListener('click', () => {
                            if (name_inpt.value.length > 2){
                                let val = name_inpt.value;
                                let record = {
                                    name: val, 
                                    score: points
                                };
                                scores_list.push(record);
                                viewScores();
                            }
                        });
                        save_bttn.innerHTML = 'Sauver';
                        p3.append(save_bttn);
                        let p1 = document.createElement('p');
                        p1.innerHTML = '<br>';
                        record_div.append(p1);
                        record_div.append(p2);
                        record_div.append(p3);
                        game_win[0].append(record_div);
                        try_count = 0;
                    }, 2000);
                }                 
            }

        });
        card_list.push(card_div);
    }
    array_rand = arrayShuffle(card_list)
    for (let card of array_rand){
        game_win[0].append(card);
    }
    if (current_lang == "fr") lore.innerHTML = 'En complétant les paires, tu découvriras ici le lore des cartes !';
    else lore.innerText = 'Translation in progress !';
    game_win[0].append(lore);
}

//Fonction de mélange du tableau de cartes
function arrayShuffle(card_array){
    array_rand = new Array();
    while (card_array.length > 0){
        let rand = Math.floor(Math.random() * card_array.length);
        array_rand.push(card_array[rand]);
        card_array.splice(rand, 1);
    }
    return array_rand;
}
//Fonction de désactivation des cartes pendant que deux cartes sont comparées
function disableCards(){
    let game_childs = game_win[0].children;
    for (let child of game_childs){
        child.style['pointer-events'] = 'none';
    }
}
//Fonction de réactivation des cartes
function enableCards(){
    let game_childs = game_win[0].children;
    for (let child of game_childs){
        child.style['pointer-events'] = 'auto';
    }  
}
//Fonction de révélation d'une carte, appelant l'image correspondant à sa valeur 
function revealCard(card_div){
    card_div.style.backgroundImage = "url('Images/Cartes/carte" + card_div.getAttribute('dava-value') + ".png')";
    card_div.style.backgroundPosition = 'center';
    card_div.style.backgroundSize = 'cover';
}
//Fonction de dissimulation d'une carte
function hideCard(card_div){
    card_div.style.backgroundImage = "none";
}
//Fonction permettant de savoir si toutes les cartes ont été trouvées
function isWin(){
    let game_childs = game_win[0].children;
    for (let child of game_childs){
        if (child.classList.contains('hidden')) return false;
    }
    return true;
}

//Evenement boutton Scores
viewSco_butt.addEventListener('click', viewScores);
function viewScores(){
    while(game_win[0].firstChild) game_win[0].removeChild(game_win[0].firstChild);
    let scores_div = document.createElement('div');
    scores_div.setAttribute('id', 'record_div');
    let h2 = document.createElement('h2');
    if (current_lang == 'fr') h2.innerText = 'Tableau des scores :';
    else h2.innerText = 'Records :';
    scores_div.append(h2);
    let ps_scores = new Array();
    let scores_list_copy = [...scores_list];
    if (scores_list_copy == 0){
        let p = document.createElement('p');
        p.innerText = '- Aucun scores pour le moment!';
        ps_scores.push(p);
    }
    else{
        while(scores_list_copy.length > 0){
            let cpt =0, comp = 0, ind = 0;
            while(cpt < scores_list_copy.length){
                if (scores_list_copy[cpt].score > comp){
                    comp = scores_list_copy[cpt].score;
                    ind = cpt;
                }
                cpt ++;
            }
            let p = document.createElement('p');
            p.innerText = '- ' + scores_list_copy[ind].score + ' points >>> ' + scores_list_copy[ind].name;
            ps_scores.push(p);
            scores_list_copy.splice(ind, 1);       
        }
    }
    let p = document.createElement('p');
    p.innerHTML = '<br>';
    scores_div.append(p);
    for(let p of ps_scores){
        scores_div.append(p);
    }
    game_win[0].append(scores_div);
}

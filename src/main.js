// ## Exo 2

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.



let perso1 = {
    nom: "François",
    panierFrancois : ["huile", "chauve-souris","yeux"],

    derober(){
       this.panierFrancois.push(perso2.panierSergio[0],perso2.panierSergio[1]);
       console.log(perso1.panierFrancois);
    }

}





let perso2 = {
    nom: "Sergio",
    panierSergio : ["shampooing sec", "sauce de grenouille", "foie séché"],

   
}

perso1.derober();


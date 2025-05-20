fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data=>{
    //ici et uniquement ici j'ai acces a mon tablea de données

  afficher(data)

}));

function afficher(tableauProduits){

  //une boucle pour recuperer les objets du tableau un par un

  tableauProduits.forEach(produit => {

    let title =produit.title
    let description =produit.description
    let prix =produit.price
    let srcimg =produit.image

    //cible l'endroit ou je veux injecter mes cartes

    document.getElementById("cardContainer").innerHTML +=`
    <div class="flex spaceBetween top50 alignItems" >
            <div class="card top20  flex spaceBetween " id="cardContainer>
                <div class="w50">
                    <a href="" class="btn">
                    <img src="${srcimg}" alt="" class="img"></a>
                </div>
                <div class="w40 top20">
                    <h2>${title}</h2>
                    <p class="genre">Men</p>
                    <p> ${description}</p>

                    <p>4,2/5 avis</p>
                    <p>${prix}</p>
                    <div class="top20">
                        <a href=""><img src="asset/shopping_cart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt=""
                                class="panier">
                        </a>

                    </div>


                </div>

            </div>

        </div>

    `
    
  });

  }







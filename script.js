
var motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6];
var etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0]; 

function start(){
    shuffle(motifsCartes);
    var imgs = document.querySelectorAll("img");
    imgs.forEach(function(el,i){
        console.log(i,el);
        el.addEventListener("click",afficher)
    })

    for(var i=0;i<imgs.length;i++){
        imgs[i].noCarte=i; //Ajout de la propriété noCarte à l'objet img
        imgs[i].onclick=function(){
            controleJeu(this.num);
        }                      
    }
}

function shuffle(array) {
    var j, x, i;
    for ( i = array.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * (i+1));
        x=array[i];
        array[i]=array[j];
        array[j]=x;
        
    }
    return array;
  }

function afficher(event){
    console.log(event);
    var num = this.getAttribute("data-num");
    console.log("num",num);

    switch(etatsCartes[num]){
		case 0:
            imgs[num].src="Genshin characters\hiddencardprimo.png";
			break;
		case 1:
            imgs[num].src="carte"+motifsCartes[num]+".png";
			break;
		case -1:
            imgs[num].style.visibility="hidden";
			break;
	}
}

  start();
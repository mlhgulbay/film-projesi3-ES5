function Storage(){
    
}
Storage.prototype.addFilmToStorage = function(newFilm){
  // console.log(newFilm);
  let films = this.getFilmsFromStorage();

  films.push(newFilm);//film arrayine objemizi attık
  /*[
    {title:"sadsasasd",director:"sadsadsad",url:"324323443342"}
    {title:"sadsasasd",director:"sadsadsad",url:"324323443342"}
  ] */
  //Arraylere obje atıyoruz
  localStorage.setItem("films",JSON.stringify(films))//arrayi tekrar local storage a yazıyoruz
   
}

Storage.prototype.getFilmsFromStorage = function (){
    let films;
    if(localStorage.getItem("films")=== null){
        films = [];

    }
    else{
        films = JSON.parse(localStorage.getItem("films"));

    }
    return films;
}
Storage.prototype.deleteFilmFromStorage = function (filmTitle){
    let films = this.getFilmsFromStorage();

    films.forEach(function(film,index){//objemizi ve hangi indekste olduğu bilgisini aldık
        if(film.title === filmTitle){
//şu anki bulunduğumuz objenin title özelliği gönderdiğimiz film title a eşitse sil
                films.splice(index,1);//array içinden objeyi sildik
        }

    
        
    });
    localStorage.setItem("films",JSON.stringify(films));

}
Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}



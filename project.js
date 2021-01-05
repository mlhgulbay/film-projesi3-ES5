const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody2 = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//UI Objesini Başlatma
const ui =new UI();
//Storage Objesi Üret
const storage = new Storage();

//Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody2.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){//input alanlarına girilen değerleri aldık
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" ||url ==="" ){
        //HATA
        ui.displayMessages("Tüm alanları doldurunuz..","info")
    }
    else{
        //Yeni film oluşturduk
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm);//Arayüze film ekleme
        storage.addFilmToStorage(newFilm);//Storage'a film ekleme
        ui.displayMessages("Film başarıyla eklendi...","success")

    }
    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}
function deleteFilm(e){
    //console.log(e.target);
    //click eventi nerede oluştu bilgisi
    if (e.target.id === "delete-film"){ 
        ui.deleteFilmFromUI (e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme işlemi başarılı...","dark")
    }   

}
function clearAllFilms(){
    if(confirm("Emin misiniz?")){
            ui.clearAllFilmsFromUI();
            storage.clearAllFilmsFromStorage();
        }
    

}
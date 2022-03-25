//*Tarayıcada bilgi saklama yöntemleri

//* Local Storage ()
//Burada localStorage.setItem() bu yöntem ile bir varlık oluşturalım
//!setItem() yeni bir eleman tanımlarken bu methodu kullanırız.
let val;
const firstName = localStorage.setItem('firstName', 'Haşim');
const lastName = localStorage.setItem('lastName', 'Kılıç')
const hobies = ['sinema', 'spor', 'yazılım']


//!getItem() bir elemanı almak istediğimiz zaman bu methodu kullanırız.

val = localStorage.getItem('firstName') // Haşim
val = localStorage.getItem('lastName') // Kılıç

//!removeItem() oluşturduumuz bir elemanı silmek istiyorsak bu methodu kullanırız.

//val = localStorage.removeItem('firstName'); //undefined

//!clear() bu method ile oluşturduğumuz tüm elemanları sileriz.

localStorage.clear() // {length:0}

//!set array to storage (storage içerisine array kullanım)
//!JSON.stringfy() methodu ile arrayi bir obje şeklinde yazdırırız.
localStorage.setItem('hobies', hobies) //bu şekilde bize array i string bir ifade olarak döndürür 
    //"sinema,spor,yazılım"
localStorage.setItem('hobies', JSON.stringify(hobies)) //"[\"sinema\",\"spor\",\"yazılım\"]"

val = JSON.parse(localStorage.getItem('hobies'))

//bu şekilde JSON.parse() bu methodu kullanarak storage içerisindeki Json objesini alıyoruz.
//(3) ['sinema', 'spor', 'yazılım']
console.log(val)
console.log(localStorage)

//*Session Storage ()

// const city = sessionStorage.setItem('city', 'Trabzon');
// const age = sessionStorage.setItem('Age', 20)


// console.log(sessionStorage)

//*İkisinin arasındaki fark

/*
localStorage tarayıcı kapansa bile tekrardan url den girdiğimiz
zaman o bilgileri tekrar bize gösterir.
Ama sessionStorage da tuttuğumuz bilgiler tarayıcı kapanıp
url den girildiği zaman tarayıcı üzerinde görülmez.
*/
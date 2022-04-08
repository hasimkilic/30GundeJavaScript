//*Callback Functions ()
//İster isim verip parametreye değer gönderip kullanabiliriz.
//İstersek fonksiyonu çağırdığımız yerde tek kullanımlıkarrow ya da normal function() yazarakta kullanabiliriz.

let val;

function MultipyleByTwo(a, b, c, Callback) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = Callback(arguments[i] * 2) // Burada arguments özelliği ile yukarıda verdiğimiz parametleri kastetmiş olduk yani (a,b,c)
    } //Burada callback parametresine bir fonksiyon atarak bu şekilde aşağıda oluşturduğumuz fonksiyonu çağırıp fonksiyonumuz içerisinde kullandık. 
    return arr;
}

function addOne(a) {
    return a + 1;
} //çıktısı bu şekilde olur //[11, 21, 41]
function addTwo(a) {
    return a + 2;
} //çıktısı bu şekilde olur //[12, 22, 42]


//val = MultipyleByTwo(5, 10, 20, addTwo)//Fonsksiyonun ismini göndererek bu şekilde alırız.

//val = addOne(10); //11

val = MultipyleByTwo(5, 10, 20, (a) => { //Bu şekilde tek kullanımlık arrow function ya da normal function() şeklinde fonksiyon yazarakta kullanabiliriz.
    return a + 4;
})

//[14, 24, 44]

//console.log(val) // [10,20,40]

// for (let i = 0; i < val.length; i++) {
//     val[i] = addOne(val[i])
// }

//console.log(val);// [11, 21, 41]

console.log(val);

//!Callback yazmadan parametreye istediğimiz ismi vererek istediğimiz isimle fonksiyon atayabiliriz.

let kel;

function deneme(f, b, z) {
    let arr = [];
    for (let i = 0; i < 2; i++) {
        arr[i] = z(arguments[i] * 4)
    }
    return arr;
}

kel = deneme(3, 5, (a) => { //Bu şekilde z parametresine arrow function gönderdik ve istedğimiz gibi çalıştırdık.
    return a - 1;
})

function d(k) { //bu şekilde d fonksiyonu z ye gönderdik çalıştırdık.
    return k + 1;
}
kel = deneme(3, 5, d)

console.log(kel) //[13, 21]

//Yani fonksiyon içinde fonkiyon kullanamada istedğimiz parametre ismi vererek istedğimiz fonkiyonu ister tek kullanımlık ister dışarıdan 
//bir fonksiyon çağırarak kullanabiliriz.


//*İmmediate Fonksiyonlar (Tek seferlik çağırdığımız ve kullandığımız fonksiyonlar)
//Sadece bir seferlik uygulama başında çağırdığımız fonksiyonlar

//Bu şekilde de kullanabilirz ya da aşağıdaki şekildeki gibi parametre alacağı yeri değişiyor sadece.
// (function(){

// })();


; //Bunu koymazsak console da yazdırız ama hata alırız almamak için başına noktalı virgül koymalıyız.
(function(a) {

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let today = new Date();

    let msg = 'Welcome.' + 'name ' + 'Today is ' + days[today.getDay()];

    console.log(msg);
}()); //Verdiğimiz  parametreleri buraya giriyoruz.

//console.log(welcome()); //Welcome. Today is Friday

//*Functions that Return Functions
//Yazdığımız fonksiyomnun geriye bir fonskiyon döndürmesi

function Questions(hobby) {

    switch (hobby) {
        case 'car':
            return function(name) {
                console.log(name + ', Do you have car?')
            }

            break;

        case 'books':
            return function(name) {
                console.log(name + ', What is your favorite book?')
            }
            break;

        case 'Software':
            return function(name, type) {
                console.log(name + ', Are you interested ' + type + '?')
            }
            break;

        default:
            return function(name) {
                console.log(name + ', How are you?')
            }
            break;
    }

}

carQuestion = Questions('car');
bookQuestions = Questions('books')

carQuestion('Haşim') //Haşim, Do you have car?
bookQuestions('Kılıç') //Kılıç, What is your favorite book?

let softQuestions = Questions('Software')

softQuestions('Anıl', 'Javascript') //Anıl, Are you interested Javascript?

//* Getter ve Setters (Get ve set methodu)
//Obje içerisindeki değişkenleri istediğimiz gibi yönetme
//!1.şekilde kullanımı bu şekilde 
const person0 = {
    firstName: 'Haşim',
    lastName: 'Kılıç',
    get fullName() { //Burada function kullanmadan full name döndürmesini istediğimiz belirttik
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) { //Ve yukarıda belirttiğimiz get methodunu burada istediğimiz şekilde set ederek kullandık.
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1]
    }

}
person0.fullName = 'Anıl Türkmen' //burada 'Haşim Kılıç' bu değer ile güncelledik
person0.firstName = 'Haşim' //Burada 'Anıl'ı Haşim ile güncelledik 

console.log(person0.fullName) //Haşim Türkmen

//!2. kullanım şeklide bu şekilde yapılıyor.

const person = {
    firstName: 'Haşim',
    lastName: 'Kılıç',
    fullName: 'Haşim Kılıç'
}

Object.defineProperty(person, 'fullName', {

    get function() { //burada setten sonra funciton() yazıp dışarıda bir obje içerisine atarak kullandık
        return `${this.firstName} ${this.lastName}`
    },

    set function(value) { //burada setten sonra funciton() yazıp dışarıda bir obje içerisine atarak kullandık
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1]
    }

})
person.fullName = 'Anıl Türkmen'
console.log(person.fullName) //Anıl Türkmen

Object.defineProperty(person, 'age', {
    value: 50,
    writable: true

})
person.age = 55; //Eğer 55 değeri gelmesini istiyorsak yani değer değişsin diyorsak yukarıdaki 
//writable varsayılan false geldiği için onu true yaparsak değiştirebiliriz.
console.log(person) //{firstName: 'Haşim', lastName: 'Kılıç', fullName: 'Anıl Türkmen', age: 55}


//* Call,Apply & Bind methodları

//!call()
let welcome = function() {
    console.log('Welcome ' + this.name + ' ' + this.lastName)
}

let hasim = { name: 'Haşim', lastName: 'Kılıç' }
let anıl = { name: 'Anıl', lastName: 'Türkmen' }


welcome.call(hasim) //Welcome Haşim Kılıç
welcome.call(anıl) //Welcome Anıl Türkmen

//Eğer fonksiyon parametre almıyor ise call apply fonskiyonu aynı işi yapar
//!apply()
welcome.apply(hasim) //Welcome Haşim Kılıç
welcome.apply(anıl) //Welcome Anıl Türkmen

//!bind()
//çağıırdığımız fonksiyondan yola çıkarak yeni fonksiyon oluşturur ve bize geri fonksiyon döndürür.
welcomeHasim = welcome.bind(hasim)

welcomeHasim(); //Welcome Haşim Kılıç

//! call() ve apply() farkı

let welcome1 = function(a, b) {
    console.log('Welcome ' + this.name + ' ' + this.lastName + ' Are you intersted in ' + a + ' ' + b)
}

// bu şekilde call methodu ile virgülden sonra yazarak ulaşıyoruz parametrelere
welcome1.call(hasim, 'Javascript', 'React') //Welcome Haşim Kılıç Are you intersted in Javascript React

// call dan tek farkı gönderdiğimiz parametreleri array içerisine yazarak gönderiyoruz tek farkı bu 
welcome1.apply(hasim, ['Javascript', 'React']) //Welcome Haşim Kılıç Are you intersted in Javascript React

//!parametreli fonksiyonda bind methodu kullanımı
//Bu şekilde ise parametreleri göndererek kullanırız bu methodu.
welcomeHasim = welcome1.bind(hasim)

welcomeHasim('Javascript', 'React'); //Welcome Haşim Kılıç Are you intersted in Javascript React

//!Örnek kullanım
//numeric range ( sayı aralıkları belirtip olup olmadığını kontrol edelim.)

let num = {
    min: 0,
    max: 100,
    checkNumericRange: function(value) {
        if (typeof value !== 'number') {
            return false;
        } else {
            return value >= this.min && value <= this.max;
        }
    }
}
console.log(num.checkNumericRange(45)) //true
console.log(num.checkNumericRange(101)) //false

let num1 = { min: 50, max: 75 }

//call
let kontrol = num.checkNumericRange.call(num1, 49)
console.log(kontrol) //false çünkü 50 ile 75 arasında değil bu değer

//apply
let kontrolApply = num.checkNumericRange.apply(num1, [49])

console.log(kontrolApply) //false bu şekildede apply methodunu kullanırız.

//bind 
//bu şekildede bind methodunu kullanrız.
let bind = num.checkNumericRange.bind(num1);

kontrolBind = bind(49)

console.log(kontrolBind); //false değeri döner 


//
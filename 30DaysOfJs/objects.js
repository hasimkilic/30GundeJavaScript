//*Scope (Kapsam)
//! Window,Global,Local

//!Window Scope(sayfa üzerinden ulaştığımız değişkenler)
// a = 'JavaScript' // window scope
// b = 10 // window scope
// function letsLearnScope() {
//     console.log(a, b)
//     if (true) {
//         console.log(a, b)
//     }
// }
// console.log(a, b) // Eişilebilir.

//!Global Scope (her yerden ulaşabildiğimiz değişkenler)
// let c = 'Javascript' // bu bir global scope
// let d = 10 // bu da bir global scope

// function letsLearnScope() {
//     console.log(c, d) //Javascript 10 
//     if (true) { //Blok kapsamında erişilebilir.// Block scope
//         let c = 'Python'
//         let d = '100'
//         console.log(c, d) //Python 100
//     }
//     console.log(c, d) //Javascript 10
// }

// letsLearnScope()
// console.log(c, d) //Javascript 10

//!Local Scope 
//belli bir blok,kapsam içinde erişebildiğimiz değişkenler

// let a = 'JavaScript' //global scope
// let b = 10 // Global scope
//     // Function scope
// function letsLearnScope() {
//     console.log(a, b) // JavaScript 10 
//     let value = false
//         // block scope
//     if (true) {
//         let a = 'Python'
//         let b = 20
//         let c = 30
//         let d = 40
//         value = !value
//         console.log(a, b, c, value) // Python 20 30 true
//     }
//     console.log(a, b, value) // JavaScript 10 true
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10

// //Block scope (kapsam dışında yazdıramayız çünkü blok içinde tanımlı sadece blok içinde tanımlanır ve kullanılır.
// function letsLearnScope() {
//     const gravity = 9.81
//     console.log(gravity) //9.81
// }
// // console.log(gravity), Uncaught ReferenceError: gravity is not defined

// if (true) {
//     const gravity = 9.81
//     console.log(gravity) // 9.81
// }
// // console.log(gravity), Uncaught ReferenceError: gravity is not defined

// for (let i = 0; i < 3; i++) {
//     console.log(i) // 0, 1, 2
// }
// console.log(i), Uncaught ReferenceError: i is not defined

/*
Genel bir kural olarak, değişen herhangi bir değer için let, 
herhangi bir sabit değer için const ve bir array , object, 
arrow function ve function ifadesi için kullanabilirsiniz.
*/


//* Objects (Nesneler)
//Genellikle const ile tanımlanır.
const person_ = {} // Bu bir nesne. Object

//!Creating an objecting values (değerleri tanımlanan objeler oluşturularım.)

const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
    firstName: 'Haşim',
    lastName: 'Kılıç',
    age: 20,
    country: 'Türkiye',
    city: 'Trabzon',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    isMarried: false
}
console.log(person)
    //{firstName: 'Asabeneh', lastName: 'Yetayeh', age: 250, country: 'Finland', city: 'Helsinki', …}

//!Getting values from an object (objenin değerleri ulaşmak erişmek)

const person1 = {
    firstName: 'Haşim',
    lastName: 'Kılıç',
    age: 20,
    country: 'Türkiye',
    city: 'Trabzon',
    friend: {
        name: 'Anıl',
        surname: 'Türkmen'
    },
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    isMarried: false,
    'phone number': '05445993333'
}
console.log(person1)
console.log(person1.firstName) //Haşim
console.log(person1.lastName) //Kılıç
console.log(person1.age) //20
console.log(person1.skills) //array i verir //['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js']
console.log(person1.skills[0]) //Html // Bu şekilde objenin içersindeki array e ulaşırız.
console.log(person1.friend.name) //Anıl //Bu şekilde objenin içindeki objeye ulaşırız.
console.log(person1.friend.surname) // Türkmen
console.log(person1['phone number']) //05445993333
console.log(person1['age']) //20 //Bu şekildede istediğimiz ögeyi çağırabiliriz.

//!Creating Object Methods
// this objesini arrow functionlarında object method olarak kullanamayız. 
//Çünkü arrow function içinde this window referans aldığıdan dolayı bunu methodu kullanamyız.

const person2 = {
    firstName: 'Haşim',
    lastName: 'Kılıç',
    age: 20,
    country: 'Türkiye',
    city: 'Trabzon',
    friend: {
        name: 'Anıl',
        surname: 'Türkmen'
    },
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function() { // object method
            return `${this.firstName} ${this.lastName}`
        }
        // this komutunu objenin içindeki herhangi bir değere ulaşmak için kulanıyoruz.
}

console.log(person2.getFullName()) //Haşim Kılıç

//!Setting new key for an object 
//Objemiz içinde yeni key tanımlama

const person3 = {
    firstName: 'Haşim',
    lastName: 'Kılıç',
    age: 20,
    country: 'Türkiye',
    city: 'Trabzon',
    friend: {
        name: 'Anıl',
        surname: 'Türkmen'
    },
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function() { // object method
            return `${this.firstName} ${this.lastName}`
        }
        // this komutunu objenin içindeki herhangi bir değere ulaşmak için kulanıyoruz.
}
person3.country = 'Kayseri' //bu şekilde değeri istediğimiz şekilde değiştirebiliriz.
person3.skills.push('WordPress') // bu şekilde objenin içerisindeki değeri değiştirebiliriz.
person3.skills.push('SasS')
person3.title = 'Student'

person3.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}

console.log(person3.skills) //(10) ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js', 'Meteor', 'SasS']
console.log(person3.getFullName())
console.log(person3.getPersonInfo())

//Haşim Kılıç is a undefined.
//He lives in Kayseri.
//He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, WordPress, and SasS.

//!Object Methods (Nesne Methodları)

//!Object.assign()
//Orjinal objeyi bozmadan kopyalar.

const person4 = {
    firstName: 'Haşim',
    lastName: 'Kılıç',
    age: 20,
    country: 'Türkiye',
    city: 'Trabzon',
    friend: {
        name: 'Anıl',
        surname: 'Türkmen'
    },
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function() { // object method
        return `${this.firstName} ${this.lastName}`

    }
}

//Object methods: Object.assign, Object.keys,
// Object.values, Object.entries
//hasOwnProperty}

const copyPerson = Object.assign({}, person4) //Bu şekilde kullanılır.
console.log(copyPerson)

//!Object.keys()
// obejedeki key leri almak için kullanılır.
//Aşağıdaki method ile alınır.

const keys = Object.keys(copyPerson)
console.log(keys) //(8) ['firstName', 'lastName', 'age', 'country', 'city', 'friend', 'skills', 'getFullName']

//!Object.values()
//Objedeki değerleri döndürür.
//Aşağıdaki method kullanılır.

const values = Object.values(copyPerson)
console.log(values) //['Haşim', 'Kılıç', 20, 'Türkiye', 'Trabzon', {…}, Array(8), ƒ]


//!Object.entries()
//Bu method ile hem key leri hem değerleri döndürürüz.
//Aşağıdaki method ile kullanılır.
//Aşağıda değerler ve keyler bize bir array olarak döner.

const entries = Object.entries(copyPerson)
console.log(entries)
    //Bu şekilde for döngüsü kullanarak key ve value değerlerini yazdırarak string olarak alabiliriz

for (let [key, val] of Object.entries(person4)) {
    console.log(key, val)
} //firstName Haşim
// lastName Kılıç

//!Object.freeze() // bir nevi dondurmak
//Bu method ile objenin değiştirilemez olmasını sağlıyoruz.
//Bir daha içindeki özellik değişmez ve sabit kalır.

Object.freeze(person4) // Burada bu methodu yazarak objeyi dondurduk ve ekleme çıkarma değiştirme işlemleri çalışmaz hale geldi.
console.log(person4)

//!Obejct.seal()
//Bu method yeni bir key ekleyemiyoruz. ama halihazırda olan 
//keylerden bir ekleme çıkarma değişim yapabiliyoruz. 

Object.seal(person4)
    //console.log(person4)

//!hasOwnProperty()
//Bu method ile Objenin içiden hangi key olup olmadığına ulaşırız.
//Boolean değer döner
console.log(copyPerson.hasOwnProperty('name')) //false
console.log(copyPerson.hasOwnProperty('score')) //false
console.log(copyPerson.hasOwnProperty('firstName')) //true
console.log(copyPerson.hasOwnProperty('getFullName')) //true
console.log(copyPerson.hasOwnProperty('Haşim')) //false


















































//*
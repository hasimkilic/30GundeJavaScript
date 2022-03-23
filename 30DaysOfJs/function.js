//*Functions (Fonksiyonlar)
//Fonksiyonlar temiz ve okunaklı kod yazabiliyoz ,yeniden kullanılabilir, test etmesi kolay oluyor.
//parantez içerisine parametreler yazabiliyoruz.

//4 şeilde fonskiyon yazabiliyoruz.
//Declaration function
//Expression function
//Anonymous function
//Arrow function

//Temel kullanım şablonu //Declaration function bu şekilde
function functionName() {
    // kod satırını buraya yazıyoruz.
}
functionName() // fonksiyonu burada ismi ile çağırıyoruz
    //Örnek 1
function sayHello() {
    console.log("hello")
}
sayHello()

//Parametre göndermeden geriye döndürmeden bi fonskiyon yazalım.
function kare() {
    let num = 2
    let kr = num * num
    console.log(kr)
}

kare() // 4
    // Örnek 2
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log(sum)
}

addTwoNumbers() // fonksiyonu ismi ile çağırıyoruz.

//*Function returning value (fonksiyonda geriye dönen değerli fonksiyon)
//geriye bir şey döndürmediğimiz zaman undefined değer döner
//değeri ekrana yazdırmak yerine geriye döndüreceğiz
function printFullName() {
    let firstName = 'Haşim'
    let lastName = 'Kılıç'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

//*Function with a parameter (parametrelerle fonksiyon oluşturalım.)
//fonksiyon içerisinde farklı veri türlerinde parametlere gönderebiliyoruz.

// parantez içeerisine parametre gönderiyoruz.
//function functionName(parm1) {
//kodlarımızı buraya yazıyoruz.
//}
//functionName(parm1) // fonskiyonu çağırıken parantez içerisine veerdiğimiz parametrenin adını yazıyoruz.
//Örnek 1
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area //geriye döndürmek istediğimiz değeri yazdık
}

console.log(areaOfCircle(10)) // parametre verdiğimiz fonksiyonu çağırıken değeri içine yazarak çağırdık.

//Örnek 2
//Tek parametreli fonksiyon
function square(number) {
    return number * number
}

console.log(square(10))

//Örnek 3
//İki parametreli fonksiyon
function tpl(num1, num2) {
    let nums = num1 * num2
    return nums
}
let yaz = tpl(2, 4)
console.log("yaz", yaz)

//Örnek 4
// bu örnekte paramtre ismi farklı fonksiyonda çağırdığımız deerin ismi farklı ama parametre gönderdiğimiz için onu çağırmış oluyoruz.
function sumArrayValues(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}
let dizi = [2, 4, 6, 12, 20]
let has = sumArrayValues(dizi)
console.log(has)

//*Function with unlimited number of parameters (limitsiz sayıda argüman alan fonksiyon kullanımı)
//temel kullanım
//parametre sayımızı bilmiyorsak bunu kullanıyoruz.
// parametre yazmayıp arguments kullanarak özel bir obje yazdırırız.
function sumAllNums() {
    console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
    // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Declaration function biçiminde limitsiz parametreli fonskiyon yazımı

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10)) // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) // 173

//*Unlimited number of parametres arrow function (limitsiz sayıda parametreli arrow fonksşyon yazımı)
// objeyle arguments kullanalım 
// rest operatörü > (...) parametreye vereceğimiz ismin başına bunu koyarak dışarıdan limitsiz sayıda parametre tutabiliyoruz,çağırabiliyoruz. 
const sumAllNums1 = (...args) => {
    // console.log(arguments), ok ile yaptığımız fonksiyonda bu işlem işe yaramadı.
    // parametreleri (...) ile çekiyoruz.
    console.log(args)
}
sumAllNums1(1, 2, 3, 4)
    // [1, 2, 3, 4]

//Örnek
const sumAllNums2 = (num1, ...num2) => {
    console.log(num1, num2)
}
sumAllNums2(1, 2, 3, 4)

//  num1 =1 ,num2 = [2,3,4] şeklinde çıktı alırız.

//*Anonymus Function (isimsiz fonksiyon)
//Temel kullanım ekli
//Bir değişkene atanan fonksiyon
const anonymousFun = function(name) {
    return `Hello ${name}`
}

let haso = anonymousFun('HaşimK')
console.log(haso)


//*Expression function
//İsimsiz fonskiyon aynısıdır 


//*Self Invoking Functions(kendi kendini çağıran fonksiyon)
;
(function(n) {
    console.log(n * n)
})(2)

let squaredNum = (function(n) {
    return n * n
})(10)

console.log(squaredNum)

//*Arrow Function
//Fonksiyon yazmanın bir alternatifi
// Declaration funciton oklarla yazılmış halidir.
//Anonymus funtion sayılabilir.
function square(n) {
    return n * n
}

console.log(square(2)) // 4

// okları kullanıyoruz.

const square1 = k => {
    return k * k
}

console.log(square1(2)) // -> 4

// kod bloğunda sadece bir satırımız varsa, aşağıdaki gibi yazılabilir
const square2 = n => n * n // -> 4

//Örnek
//Arrow function (ok fonksiyonu)
//Tek satırlı kullanacağımız zaman bu şekilde kullanabiliriz.
const toplam = (name) => {
    return `Hello ${name}`

}
console.log(toplam("haşim"))

//Örnek
//Dışarıdan bir arrayi alarak onu for ile farklı arraye çekip onuda elemanlarını büyük harfe çevirerek farklı array içine atarak en sonda yeni bir array oluşturulan bir fonskiyon yazımı bu şekilde.
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


//*Function with default parameters(varsayılan parametrelerle fonskiyon tanımlama)
//Bir fonksiyonun parametresi varsayalın olarak belirleyerek fonskiyon yazma 
//Yani parametreye tanımlarken değer veriyoruz.Default parametre oluyor.
//Örnek 1
function greetings(name = 'Haşim') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}

console.log(greetings())
console.log(greetings('Anıl'))

//Örnek 2
//
function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
}

console.log('Age: ', calculateAge(1819)) // 2019-1819 = 200 şeklinde çıkar.

//Örnek 3
//fonksiyonun parametrelerini değerilerini belirlediğimiz halde çağırdığımız zaman değer verip tekrar değiştirebiliyoruz.
const generateFullName = (firstName = 'Haşim', lastName = 'Kılıç') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(generateFullName()) // Haşim Kılıç
console.log(generateFullName('Anıl', 'Türkmen')) // Anıl Türkmen
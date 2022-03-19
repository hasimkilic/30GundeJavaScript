//!**Data Types(Veri tipleri)**//

//primitive(ilkel) veri tipleri
//String, Number, Boolean, undefined, Null, and Symbol
//primitive olmayan veri tipleri
//Objects-,Functions,Arrays


//!Numbers (sayılar)
// İntegers > -3, -2, -1, 0, 1, 2, 3 ...
// Floats > -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

//!Strings (harfler kelimeler)
//'a'
// 'Asabeneh'
// "Asabeneh"
// 'Finland'
// 'JavaScript is a beautiful programming language'
// 'I love teaching'
// 'I hope you are enjoying the first day'
// `We can also create a string using a backtick`
// 'A string could be just as small as one character or as big as many pages'
// 'Any data type under a single quote, double quote or backtick is a string'


//! Boolean (doğru ,yanlış)
//true // if the light is on, the value is true (eğer ışıklar açıksa doğru)
//false// if the light is off, the value is false (eğer ışıklar kapalıysa yanlış)


//!Undefined (tanımlanmamış)
//let firstName
//console.log(firstName) // undefined, çünkü değer tanımsız oluyor.

//!Null

//let emptyValue= null // jsde boş değer anlamına gelir. 

//Checking data types(veri tiplerinin kontrolü)
//veri tiplerini (typeof operatörü ile kontrol ediyoruz.)

/*
console.log(typeof 'Haşim') // string değer alırız
console.log(typeof 20) // number integer sayı değerini alırız
console.log(typeof true) // boolean değerini alırız
console.log(typeof null) // object type obje tipinde bir değer alırız
console.log(typeof undefined) // undefined tanımsız değer alır
*/

/*Variables (Değişkenler)
//Bir değişken tanımlarken "var,let,const" anahtar kelimeleri kullanırız.
//Farklı zamanalarda değişebileceğini düşündüğünüz değer varsa bunu let ile tanımlarız.
//Eğer değişmeyeceğini ve hep aynı kalacağını düşündüğünüz değer varsa bunu const ile oluşturuyoruz.
//Değişken adları sayı ile başlamamalı.
//Değişken adları alt çizgi ve dolar işareti hariç özel karakterlere izin vermez.
//Değişkende kelimeler arası boşluk olmamalı.
//Aşağıdaki şekilde değişkenler oluşturulabilir. 

firstName //!camelCase bu şekilde kullanılır en yaygını bu kullanımdır.
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020

//!Bu şekilde değişkenler oluşturulamaz.


first-name
1_num
num_#_1

//!değişken tanımlayalım

let firstName = "Haşim"
let lastName = "Kılıç"
let age = 20
let country = "Türkiye"
let city = "Trabzon/Kayseri"
let isMarried = false

console.log(firstName, lastName, age, country, city, isMarried)

//!Değişmeyecek olan değişken tanımlayalım
const PI = 3.14
const gravity = 9.81
console.log(PI,gravity)

//!her seferinde let yazmadan sadece tek let kullanarak değişkenler tanımlayalım

let firsName = "Haşim",
    lastName = "Kılıç",
    job = "student",
    age = 20,
    live = "Türkiye"

console.log(firsName, lastName, age, live)
 
//primitive(ilkel) veri tipleri değiştirilemez.

let word = "Javascript"

word[0]="Y" // tanımlandı ama değişrilmedi

console.log(word) //JavaScript çıktısını alırız.

//!primitive olan değişkenler değerine göre karşılaştırılır.
//!non-primitive olan değişkenler referansına göre karşılaştırılır.

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)     // ikisideaynı değere sahip olduğu için doğru

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false ikisi farklı değerler aldığı için yanlıştır

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

//!non-primitive data types
//dizi değerleri indexlerine göre referans alınır.
//Aşağıda bir değişkenin birden fazla değer tutmasına bakalım buna "Array" diyoruz.
//Javascript diziler 0 dan başlar.
let nums = [1, 2, 3]
nums[0]  //1
nums[1]  //2
nums[0] =10

console.log(nums)  // [10, 2, 3]

//non primitive değerlerine göre karşılaştırma yapamayız.
//referanslarına göre karşılaştırma yapmalıyız. 
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false değerleri aynı olsa bile kesin olarak eşit değillerdir. 

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false değerleri aynı olsa bile kesin olarak eşit değillerdir.

//referans türleri olarak karşılatıralım
//iki obje ancak referansları aynı olması durumunda kesin eşit olur.

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true referansları eşit olduğu için doğru

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true referansları eşit olduğu için doğru

//!Numbers MATH OBJECT (Matematik methodları)

const PI = Math.PI

console.log(PI) // 3.141592653589793

// Rounding to the closest number


console.log(Math.round(PI)) //round en yakın sayıya yuvarlar (.5 ten baz alır.)

console.log(Math.round(9.81)) // 10

console.log(Math.floor(PI)) //floor taban sayıya yuvarlar

console.log(Math.ceil(PI)) //ceil tavan sayıya yuvalar.

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // min değerlerin arasındaki en küçük sayıyı verir

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // max değerlerin arasındaki en büyük sayıyı verir

const randNum = Math.random() //random 0-0.9 arasında rastgele bir sayı oluşturur.
console.log(randNum)

// 0-10 arasında sayı üretelim

const num = Math.floor(Math.random() * 11) // 0-10 arasında rastgele sayı üretmek istersen 11 ile çarp

//Absolute value
console.log(Math.abs(-10)) // abs sayının mutlak değerini alır.

//Square root
console.log(Math.sqrt(100)) // sqrt sayının karekökünü alır.

console.log(Math.sqrt(2)) // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)) // pow sayının üssünü alır.//  "**" kullanarakta sayının üssü alınabilir.

console.log(Math.E) // 2.718

// Logarithm
// logaritma bulmayı sağlar
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(10)) // 2.302585092994046

// 2 ve 10 nun doğal logaritmasını döndürür.
console.log(Math.LN2) // 0.6931471805599453
console.log(Math.LN10) // 2.302585092994046

// trigonometri
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

//!Strings 
//!"+" ile birleştirme yöntemi eski bir yöntemdir.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250

let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
//!Kaçış operatörü > \ back slash
//!ES6 ile gelen bu yöntem en iyi yöntemdir.
Back Tik karakteri `` alt + noktalı virgül tuşu ile yapılır.
console.log(`The sum of 2 and 3 is 5`)              // değeri statik bir şekilde yazdık
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // değeri dinamik bir şekilde yazdık
//!BACK TİK KULLANIMA BİR ÖRNEK DAHA
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
//Çıktılar
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.

//!Strings Methods (String methodları)

//!lenght() methodu 
// değerin karakter uzunluğunu verir.Boşluklar dahil

let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8

//!string() methodu 
// dizideki methodun index numarasını yazarak onu bulabiliriz.
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

//!toUpperCase()
// değerin tüm harflerini büyük harfe çevirir.

let name = "Haşim"

console.log(name.toUpperCase()) //HAŞİM

//!toLowerCase()
//değerin tüm harfelerini küçük harfe çevirir.
let name = "Haşim"

console.log(name.toUpperCase()) //haşim

//!substring()
//index numaralarını kullanarak karakterleri bölmek için kullanılır.
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java //4.sü hariç alır
console.log(string.substring(4,10))    // Script //4.sü dahil kullanılır.
console.log(string.substring(4))       // Script

let country = 'Finland'

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land

//!split() Methodu
//Bölme,parçalama için kullanılan methoddur.

let string = '30 Days Of JavaScript'

console.log(string.split())     // aynı veriyi döndürür ["30 Days Of JavaScript"]
console.log(string.split(' '))  // boşlukları alarak parçalar ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    //  aynısı yazar  ["Asabeneh"]
console.log(firstName.split(''))  //  tek kelimeyi harflere parçalar ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // virgüllerden parçalama ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) // virgül ve yanında 1 boşluktan parçalama["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//!trim() Methodu
//Başlangıçtaki ve sondaki boşlukları kaldırır.

let name= "   Haşim Kılıç   "
console.log(name.trim()) //"Haşim Kılıç"

//!icludes()
//yazdığınız aradığınız bir şeyi değerin içinde içerip içermediğine bakar.
let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // bu değere Days içeriyor mu evet //true
console.log(string.includes('days'))     // içermiyor çünkü js büyük küçük harf hassastır.
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false

//!replace() 
//değeri değiştirmek için kullanılır.
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland

let name = 'Haşim'

console.log(name.replace('Haşim', 'Ahmet')) // Ahmet

let surName = 'Kılıç'

console.log(surName.replace('Kıl', 'Zel')) // Zelıç

//!charAt()
// verilen değerin içinde index numarası ile bulur

let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3
//Değerin uzunluğundan 1 çıakrırsak sonuncu indexe ulaşırız.
let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t

//!indexOf()
//değerin içinde aradığın metini yazarak sana ilk index değerini verir
//yoksa -1 değerini döndürür.

let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3. indexte bulunduğu için 3
console.log(string.indexOf('Days'))       // 33. indexten itibaren verdiği için 3 
console.log(string.indexOf('days'))       // -1 içermediği için 
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1

//!lastİndexOf()
//Sonuncu index değerini döndürür.

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       //67 en sondaki love değerini larak onu bize döndüdür.

//!startsWith()
//verilen değer belirttiğim değer ile başlıyor mu true false döndürür.

let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

//!endsWith()
//Verilen değer belirttiğim değer ile mi bitiyor true ya da false döndürür.

let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

//!repeat()
//verilen string değerine yazılan n kaçkere tekrarlanacağı. string.repeat(n)
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove


//!search()
//!match() 


//!Changing Data Type(Veritipleri çevirme)

//!String to Int > string ifadeyi İnteger bir ifadeye çevirme


//!parseInt() kullanarak
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
//!Başına number yazarak
let num = '10'
let numInt = Number(num)
console.log(numInt) // 10
//!Başına "+" operetörü koyarak çevirebiliriz
let num = '10'
let numInt = +num

console.log(numInt) // 10

//!String to float

//!parseFloat() kullanarak
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81

//!Float To Int

//!parseInt() kullanarak 

let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9


//!Exercises
//0 - 100 arasındaki sayıları verir.

// const randomNumber = Math.floor(Math.random() * 101)
// console.log(randomNumber)



*/
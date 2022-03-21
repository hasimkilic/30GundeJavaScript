//!Arrays(Diziler)
//Arraylar indexlere sahiptir indexler 0 dan başlar sonuncusu dizinin uzunluğu -1 ile bulunabilir.
//Array yapısını bakalım 
//Boş içinde elemanı olmayan bi array oluşturalım

const arr = Array()
    // or
    // let arr = new Array()
console.log(arr) // []

//boş bi array kullanımı genelde bu şekilde oluşturulur.

const names = []
console.log(names)

//Hemen bi örnekle array kullanıma bakalım
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // numaraları dizisi arrayi
const fruits = ['banana', 'orange', 'mango', 'lemon'] // string arrays,meyveler
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings,sebzeler 
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, ürünler
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'] // array of web teknolojileri
const ulkeler = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, ülkeler
const family = ['Ben', 'Babam', 'Annem', 'Kardeşim'] // string to arrays,ailem
    // arraylarin uzunluğuna lenght ile bakalım

console.log('Numbers:', numbers)
console.log('Sayıların toplam sayısı:', numbers.length)

console.log('Fruits:', fruits)
console.log('Meyvelerin sayısı:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Sebzelerin sayısı:', vegetables.length)

console.log('Ürünler:', animalProducts)
console.log('Ürünlerin sayısı:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Web Teknolojilerini sayısı:', webTechs.length)

console.log('Ülkeler:', ulkeler)
console.log('Ülkelerin sayısı:', ulkeler.length)

console.log('Ailem;', family)
console.log('Ailemdeki toplam kişi sayısı:', family.length)

//farklı veri tipleri içeren bir array
//Arraylarin içerisinde objede tutabiliriz halen obje öğrenmedik ama değinelim burada
const hasimK = [
    'Haşim',
    20,
    true,
    {
        Ülke: 'Türkiye',
        Şehir: 'Trabzon'
    },
    {
        skills: [
            'HTML',
            'CSS',
            'JS',
            'React',
            'Python'
        ]
    }
]
console.log(hasimK)

//!Split kullanarak array oluşturma
//Tanıladığımız değere split metodu ile boşluk,virgül tırnak ile bölerek array değişkenimi bir array dönüştürebiliriz
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

//!Modifying array element (Dizi elemanlarını düzenleme)


const sayılar = [1, 2, 3, 4, 5]
sayılar[0] = 10 // 0.elemanın değeri 10 ile değiştirdik.
sayılar[1] = 20 // 1.elemanın değerini 20 ile değiştirdik.

console.log(sayılar) // [10, 20, 3, 4, 5]

const ulkeler0 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

ulkeler0[0] = 'Afghanistan' // Albania yerine Afghanistan ile değiştirdik
let lastIndex = ulkeler0.length - 1 //burada son elemanı seçtik
ulkeler0[lastIndex] = 'Korea' // Kenya yerine Korea yazarak arrayimizi değiştirdik.

console.log(ulkeler0)

//!Methods to manipulate array(Diziyi manipüle etmek,oynamak için metodlar)
//:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
//En çok kullanılan methodlar


//*Array() methodu
const eightEmptyValues = Array(8) // array yazdıktan sonra parantez içine kaç değer alacağını belirtiyoruz.
console.log(eightEmptyValues) //bu oluşturduğumuz array 8 uzunluğuna sahip array oldu. 5 tane //bu şekilde çıktı alınır.[empty x 8]

//*fill() methodu
//değişmeyen aynı değerden fazla sayıda doldurmak istersek bunu kullanamalıyız.

const arr1 = Array() // creates an an empty array
console.log(arr1)

const eightXvalues = Array(8).fill('X') // fill içerisine hangi değeri vermek istediğmizi yazarak bu array içini dolduruyoruz.
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // fill içerisine hangi değeri vermek istediğmizi yazarak bu array içini dolduruyoruz.
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // fill içerisine hangi değeri vermek istediğmizi yazarak bu array içini dolduruyoruz.
console.log(four4values) // [4, 4, 4, 4]


//*concat() methodu
//arraylari birleştirmek için bu methodu kullanırız.
//sadece 2 array değil bu şekilde 3 arrayide birleştirebiliriz.ve ek olarak içine kendimizde array yazabiliriz.
let array1 = [10, 11, 12]
let array2 = [2, 5, 8, 0]
let array4 = [1, 2, 3, 5]

const array3 = array1.concat(array2, array4, [1907, 1903]) //bu şekilde kendimizde içine array oluşturarak kullanabiliriz.
console.log(array3)

//*indexOf() methodu 
// bir elemanın dizide bulunup bulunmadığını kontrol etmek için bu methodu kullanıyoruz.

const numbers3 = [1, 2, 3, 4, 5]

console.log(numbers3.indexOf(5)) // -> 4 //burada parantez içine aradğımız değeri yazarak varsa bize olduğu index numarasını verir.
console.log(numbers3.indexOf(0)) // -> -1 //eğer içerisinde aradığımız değeer yoksa consoleda bize -1 değeri döner.
console.log(numbers3.indexOf(1)) // -> 0
console.log(numbers3.indexOf(6)) // -> -1 // 6 değeri olmadığı için -1 değeri döndü.

//*lastIndexOf() methodu
//array içerisindeki son elemanı almak için bu method kullanılır.
//dizi içerisinde birden fazla aynı eleman olduğunda en son elemanı almak için kullanılır.
const numbers4 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers4.lastIndexOf(2)) // 7
console.log(numbers4.lastIndexOf(0)) // -1
console.log(numbers4.lastIndexOf(1)) //  6
console.log(numbers4.lastIndexOf(4)) //  3
console.log(numbers4.lastIndexOf(6)) // -1

//*includes()
//Dizinin içerisinde bir eleman olup olmadığını kontrol ediyor tıpkı indexOf metodu gibi yalnız bu method bize true ya da false bir değer döndürüyor.

const numbers5 = [1, 2, 3, 4, 5]

console.log(numbers5.includes(5)) // true // burada dizide 5 değri olduğu için true değeri döndü
console.log(numbers5.includes(0)) // false //burada dizide 0 elemanı olmadığı için bize false değeri dönüyor.
console.log(numbers5.includes(1)) // true
console.log(numbers5.includes(6)) // false

//*Checking array (array tipini sorgulama)
//*Array.isArray() bu metodu kullanırız.

const numbers6 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers6)) // true bu bir array olduğu için bize true değeri döndü

const number7 = 100
console.log(Array.isArray(number7)) // false bu bir array olduğu için bize false değeri döndü

//*toString()
//Bir diziyi string e çevirmek için kullandığımız method
// bu metodu kullanarak array olarak oluşturduğumuz diziyi stringe dönderiyoruz..
const numbers8 = [1, 2, 3, 4, 5]
console.log(numbers8.toString()) // 1,2,3,4,5

const names2 = ['Haşim', 'Anıl', 'Enes', 'Ömür']
console.log(names2.toString()) // Haşim,Anıl,Enes,Ömür

//*join()
//diziyi stringe istedğimiz şekilde döndürmek için kullandığımız metod

const names3 = ['Haşim', 'Anıl', 'Enes', 'Ömür']
console.log(names3.join(' ')) // Haşim Anıl Enes Ömür // bu şekilde console basılmış şekilde çıkar.
console.log(names3.join(',')) // Haşim,Anıl,Enes,Ömür //bu şekilde çıkar


//*slice() methods
//belli bir aralıkta diziyi kesmek,bölmek istediğimiz dizi için bu methodu kullanırız.
// start ve end değeri vererek istediğimiz yeri yazdırırız. start elemanı dahil end elemanı dahil olmadan yazılır.
const numbers9 = [1, 2, 3, 4, 5]

console.log(numbers9.slice()) // ->tüm değeri yazdırır.
console.log(numbers9.slice(0)) // -> tüm değeri yazdırır.
console.log(numbers9.slice(0, numbers.length)) // tüm değeri yazdırır.
console.log(numbers9.slice(1, 4)) // -> [2,3,4] // 1. elemandan başlayıp 1.eleman dahil 4.elemana kadar yazdırır 4.eleman dahil olmadan yazar.

//*splice() method
//

const numbers10 = [1, 2, 3, 4, 5]

console.log(numbers10.splice(0, 2)) // -> remove all items
console.log(numbers10.splice(1, 3)) // -> remove all items

//*push() methodu
// bir dizinin sonuna ekleme yapar. sadece değer ekleyebildiğimiz gibi objede ekleyebiliyoruz.
const array22 = ['item1', 'item2', 'item3']
arr.push('new item')

console.log(array22) // ['item1', 'item2','item3','new item']

const arkadaslar = ['Enes', 'Anıl', 'Ömür']
arkadaslar.push('Bigboss', { name: 'Haşim', surname: 'Kılıç' })
console.log(arkadaslar) // '[Enes', 'Anıl', 'Ömür', 'Bigboss',{...}]


//*pop() methodu
//bu method dizinin sonundaki elemanı kaldırmak için kullanılır.

const numbers11 = [1, 2, 3, 4, 5]
numbers11.pop() // -> sondaki eleman siliniyor.

console.log(numbers11) // -> [1,2,3,4]
    //2.örnek
const arkadaslar1 = ['Enes', 'Anıl', 'Ömür', 'Hafız']
arkadaslar1.pop()
console.log(arkadaslar1) // '[Enes', 'Anıl', 'Ömür']

//*shift() methodu
//bu method dizinin ilk elemanını kaldırmak için kullanılır.

const numbers12 = [1, 2, 3, 4, 5]
numbers12.shift() // -> ilk elemanını siler.

console.log(numbers12) // -> [2,3,4,5]


//*unShift() methodu 
//push() methodu ile dizinin sonuna ekleme yapıyorduk unShift() methodu ile dizinin başına ekleme yapıyoruz.

const numbers13 = [1, 2, 3, 4, 5]
numbers13.unshift(0) // -> dizinin başına 0 elemanını ekledik.

console.log(numbers13) // -> [0,1,2,3,4,5]


//*reverse() methodu
// dizinin elemanlarını tersine çevirir.tersine sıralama yapar.


const numbers14 = [1, 2, 3, 4, 5]
numbers14.reverse() // -> diziyi ters çevirir.

console.log(numbers14) // [5, 4, 3, 2, 1]

numbers14.reverse()
console.log(numbers14) // [1, 2, 3, 4, 5]

numbers14.reverse()
console.log(numbers14) // [5, 4, 3, 2, 1]

//*sort() methodu
//Diziyi sıralamak için kullandığımız method.
//alfabetik,büyükten küçüğe doğru bir sıralama yapar.

const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

webTechs1.sort()
console.log(webTechs1) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs1.reverse() // yukarıdaki gibi yaptıktan sonra tersine çevirip sıralama yapar.
console.log(webTechs1) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

//2.örnek
const numbers15 = [1, 3, 2, 4, 5]

numbers15.sort()
console.log(numbers15) //[1, 2, 3, 4, 5]

//*Array of arrays
//Array dizisinin içersinde array bir değer tutulabilir (objede dee tutulabilir yukarıda değinmiştik.Ek olarak arrayide belirtelim)ve bu o array elemanı olarak gözükür.
const numbers16 = [1, 2, 3, 4, 5, [1, 2, 3]]

console.log(numbers16) // [1, 2, 3, 4, 5, Array(3)]
console.log(numbers16[5]) // [1, 2, 3]
console.log(numbers16[5][1]) // 2 // burada 5.indexteki elemanın 1.indexini bulabiliyoruz.
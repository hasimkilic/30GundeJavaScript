//*Nesne Oluşturma (Constructor)
//!Fonksiyon olarak constructor tanımlama
// function Person(name, year, job, tarih) {
//     this.name = name;
//     this.year = year;
//     this.job = job;
//     this.tarih = tarih;
//     this.calculateAge = () => { //arrow function yada normal function oluşturabiliriz.
//         return new Date().getFullYear() - this.year //Bulunduğumuz yıldan doğduğu yılı çıkartıp bize yaşı verir.
//     };
// }

// let hasim = new Person('Haşim', 2002, 'Student', 2022)
// let anıl = new Person('Anıl', 1999, 'Student', 2022)

// console.log(hasim) //Object {'Haşim',2002,'Student'}
// console.log(typeof hasim.year) //Number // 2002
// console.log(hasim.job) //Student
// console.log(hasim.calculateAge()) //20
// console.log(anıl)
// console.log(anıl.calculateAge())

//!Değişken adı vererek constructor tanımlama
//Yukarıdaki ile aynı sonuçları alırız.
// let Person = function(name, year, job, tarih) {
//     this.name = name;
//     this.year = year;
//     this.job = job;
//     this.tarih = tarih;
//     this.calculateAge = () => { //arrow function yada normal function oluşturabiliriz.
//         return new Date().getFullYear() - this.year //Bulunduğumuz yıldan doğduğu yılı çıkartıp bize yaşı verir.
//     };
// }

// let hasim = new Person('Haşim', 2002, 'Student', 2022) //Instance oluşturuyoruz bu şekilde.
// let anıl = new Person('Anıl', 1999, 'Student', 2022)

// console.log(hasim) //Object {'Haşim',2002,'Student'}
// console.log(typeof hasim.year) //Number // 2002
// console.log(hasim.job) //Student
// console.log(hasim.calculateAge()) //20
// console.log(anıl) //Person {name: 'Anıl', year: 1999, job: 'Student', tarih: 2022, calculateAge: ƒ} //Object
// console.log(anıl.calculateAge()) //23

//*Prototype
//Kalıtım oluşturma iki constructor birbirine bağlama(Inheritance)
// let Person = function(name, year, job, tarih) {
//     this.name = name;
//     this.year = year;
//     this.job = job;
//     this.tarih = tarih;
// };
// Person.prototype.calculateAge = function() { //Bu şekilde person constructor içinde değilde dışarıda fonksiyonu tanımlayıp prototype komutu ile birbirie bağladık.
//     return new Date().getFullYear() - this.year //Bulunduğumuz yıldan doğduğu yılı çıkartıp bize yaşı verir.
// };
// Person.prototype.getName = function() {
//     return this.name;
// };
// Person.prototype.lastName = 'Kılıç';

// let hasim = new Person('Haşim', 2002, 'Student', 2022)
// let anıl = new Person('Anıl', 1999, 'Student', 2022)

// console.log(hasim) //Object {'Haşim',2002,'Student'}
// console.log(typeof hasim.year) //Number // 2002
// console.log(hasim.job) //Student
// console.log(hasim.calculateAge()) //20
// console.log(anıl) //Person {name: 'Anıl', year: 1999, job: 'Student', tarih: 2022} //Object
// console.log(anıl.calculateAge()); //23
// console.log(hasim.getName()); //Haşim protot komutundan geliyor
// console.log(hasim.name) //constructor içerisinden geliyor.
// console.log(hasim.hasOwnProperty('name')) //constructor içerisinden gelip gelmediğine bu komut ile bakarız ve name constructor içerisnden geldiğinden true değeri bize döner.//true
// console.log(hasim.hasOwnProperty('calculateAge')) //constructor içerisinden gelemdiği içinb bize false değer döner //false
// console.log(hasim.hasOwnProperty('job')) // constructor içerisidne olduğu için true döner.//true
// console.log(hasim.hasOwnProperty('lastName')) //proto içerisinden döndüğü için falsedöner //false

//!Prototype ile bağladığımız zaman bu şekilde object içerisinde değilde proto içerisine aktarılarak kullanabilriz.
/*
Person {name: 'Anıl', year: 1999, job: 'Student', tarih: 2022}
job: "Student"
name: "Anıl"
tarih: 2022
year: 1999
[[Prototype]]: Object
calculateAge: ƒ ()
constructor: ƒ (name, year, job, tarih)
[[Prototype]]: Object

*/
//!Örnek
//*Creating Objects(Obje oluşturalım)

// function Employee(name, salary) {
//     if (!(this instanceof Employee)) {
//         return new Employee(name, salary);
//     }
//     this.name = name; //isim bilgisi
//     this.salary = salary; //aylık maaş bilgisi
// };

// Employee.prototype.calculateSalary = function() {
//     let month = 12
//     let tax = 0;
//     let toplamMaas = this.salary * month
//     if (toplamMaas <= 20000) {
//         tax = toplamMaas * 0.2;
//     } else if (toplamMaas >= 20000 && toplamMaas <= 30000) {
//         tax = toplamMaas * 0.25;
//     } else if (toplamMaas > 30000) {
//         tax = toplamMaas * 0.3;
//     }
//     return {
//         tax: tax, //vergi oranını yazdırır.
//         toplam: toplamMaas - tax //vergi sonrası toplam maas yazdırır.
//     }

// };

// let insan = new Employee('Haşim', 5500)

// console.log(insan.calculateSalary()) //{tax: 19800, toplam: 46200}

// let insan1 = new Employee('Anıl', 5000)

// console.log(insan1.calculateSalary()) //{tax: 18000, toplam: 42000}

//*Object.create() methodu
//Person objesini teacher objesine aktarma

// let personProto = {
//     calculateAge: function() {
//         return new Date().getFullYear() - this.yearOfBirth;
//     }
// }

// let hasim = Object.create(personProto); //personProto objesinin içine atarak proto kısmına erişim sağladık.
// let anne = Object.create(personProto, {
//     name: { value: 'Şaziye' },
//     yearOfBirth: { value: 1981 },
//     job: { value: 'Housewife' }
// });

// hasim.name = 'Haşim';
// hasim.yearOfBirth = 2002;
// hasim.job = 'Student';

//!{name: 'Haşim', yearOfBirth: 2002, job: 'Student'}
//!Bu şekilde bi çıktı alırız.

// console.log(hasim.calculateAge()) //Yaşımızı yazdırırız. //20
// console.log(hasim)
// console.log(anne) //{name: 'Şaziye', yearOfBirth: 1981, job: 'Housewife'}//Bu şekilde çıktı alırız.
// console.log(anne.calculateAge()) //41
// console.log(anne.name) //Şaziye

//*Prototype İnheritance
//İki bağımsız objenin birbiri ile bağlanması kalıtı sağlanması
//call()methodu

// let Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

// }
// Person.prototype.calculateAge = function() {
//     return new Date().getFullYear() - this.yearOfBirth;
// }

// let Teacher = function(name, yearOfBirth, job, subject) {
//     Person.call(this, name, yearOfBirth, job); //Bu şekilde yukarıdaki tanımladığımız objeyi buraya çağırarak o objeyi burada kullanıyoruz.
//     this.subject = subject;

// }

// //!İnherit the person prototype methods 
// //(teacher objesini person objesiyle bağladık.)

// Teacher.prototype = Object.create(Person.prototype);

// //! set Teachert constructor
// //Burada Teacher objesini person objesine set ettik.
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function() {
//     return 'hello my name is ' + this.name;
// }

// //Teacher i Person objesinden inherit ettiğimiz için protoype teacher tanımlanmaz Person objesinin proto kısmına gelir.

/*En son bu şekilde bir görüntü çıkar.
Teacher {name: 'Haşim', yearOfBirth: 2002, job: 'Teacher', subject: 'Software'}
job: "Teacher"
name: "Haşim"
subject: "Software"
yearOfBirth: 2002
[[Prototype]]: Person
constructor: ƒ (name, yearOfBirth, job, subject)
greeting: ƒ () 
[[Prototype]]: Object
*/
// let hasim = new Teacher('Haşim', 2002, 'Teacher', 'Software')

// console.log(hasim) //Teacher {name: 'Haşim', yearOfBirth: 2002, job: 'Teacher', subject: 'Software'} //burada calculateAge() fonksiyonu gelmez onu yukarıda bağlamaız lazım
// console.log(hasim.yearOfBirth) //2002
// console.log(hasim.subject) //Software
// console.log(hasim.calculateAge()) //20 //bu prototype Person objesindenn inherit etmiş olduk.

//*Built-in Constructor
//Bu methodları methodları kullanmak için constructor çeviririz.
// //!String

// let str1 = 'Haşim';
// let str2 = new String('Haşim');

// console.log(str1); //Haşim
// console.log(typeof str1); //String
// console.log(str2); // String {'Haşim'}
// console.log(typeof str2); //Object

// //!Number

// let num1 = 10;
// let num2 = new Number(12)

// num3 = num2.toString(12, '10') //Bu şekilde string e çevirme işlemi yapılır.

// console.log(num1) //10
// console.log(typeof num1) //number
// console.log(num2) //Number {12}
// console.log(typeof num2) //Object

// //!Boolean

// let bool1 = true;
// let bool2 = new Boolean(true);

// console.log(bool2) //Boolean {true} //Object

// //!Object 

// let obj1 = {
//     name: 'Haşim',
//     age: 20
// }

// //Object
// let anıl = {
//     name: 'Anıl',
//     age: 23
// }

// //Object
// //!Array

// let arr1 = ['Haşim', 'Kılıç', 20] //Array
// let arr2 = new Array('Anıl', 'Türkmen', 23) //Object

// console.log(typeof arr2) //Object

// //Burada array üzerinden remove methodu oluşturarak kullanmamızı sağladık.

// Array.prototype.remove = function(member) {
//     let index = this.indexOf(member);

//     if (index > -1) {
//         this.splice(index, 1);
//     }
//     return this;
// }

// console.log(arr2.remove('Kılıç')) //['Haşim', 20] //Bu şekilde çıktı alırız.


//*Uygulama Kalıtım

//Person constructor

function Person(name) {
    this.name = name;
}

Person.prototype.Introduce = function() {
    console.log('Hello my name is ' + this.name)
}

//Teacher constructor

function Teacher(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function() {
    console.log('I teach ' + this.branch + '.')
}

//Student constructor

function Student(name, number) {
    Person.call(this, name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
    console.log('My student number is ' + this.number + '.' + 'I already studied hard.')
}

//HeadMaster constructor

function HeadMaster(name, branch) {
    Teacher.call(this, name, branch);
}
HeadMaster.prototype = Object.create(Teacher.prototype);
HeadMaster.prototype.constructor = HeadMaster;

HeadMaster.prototype.shareTask = function() {
    console.log('I\'ve already shared all the work')
}

let person1 = new Person('Haşim');
person1.Introduce(); //'Hello my name is Haşim'

let teacher1 = new Teacher('Selman', 'Yazılım')
teacher1.Introduce(); //Hello my name is Haşim
teacher1.teach(); //I teach Yazılım.

let student1 = new Student('Kılıç', 100)
student1.Introduce(); //Hello my name is Kılıç
//student1.teach(); //Bu çalışmaz çünkü bağlamadık
student1.study(); //My student number is 100.I already studied hard.

let head = new HeadMaster('Haşim', 'Pyschical')
head.Introduce(); //Hello my name is math
head.teach(); //I teach Pyschical.
head.shareTask(); //I've already shared all the work

/*
    Bu uygulamada Person ,Student,teacher,Headmaster objeleri oluşturduk.
    Person objesi ile student ve teacher objesini birleştirdik sonra Headmaster objesini Teacher ile bağlayarak
    teacher objesini protolarını ve değerlerini set eder hale getirdik.Bu uygulamada Objelerin birbileri ile bağlantısını ve kalıtımı öğrendik
*/


//*Primitive && Objects
//Stak te tutuluyor

let a = 10;
let b = a;
a = 12 //a üzerinde yaptığımız için a değişti b aynı ilk verdiğimiz değer kaldı.

console.log(a) //12
console.log(b) //10

//heap bölgsinde tutuluyor //adresleri eşitliyor.

let obj1 = {
    name: 'Haşim',
    age: 20
}
let obj2 = obj1

console.log(obj1) //{name: 'Haşim', age: 20}
obj1.age = 12
console.log(obj1.age) //12
console.log(obj2.age) //12

//!Örnek

let num = 50;
let account = {
    name: 'Haşim',
    accountNumber: 123456
}

// num = a num neyse onu yazar.yani a yı num değişkenine atadık.
// b değerini ise account a atadık ve obje olduğu için referans aldığından update() fonskiyonu ile içeriğini değiştirebildik.

function update(a, b) {
    a = 100;
    b.accountNumber = '2222222'
}

update(num, account);

console.log(num) //50
console.log(account) // {name: 'Haşim', accountNumber: '2222222'}
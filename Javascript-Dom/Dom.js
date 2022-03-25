//document metodları ile ulaşabileceğimiz verilere bakalım
//*Documents & Events
let val;

val = window.document; //Document sayfasını ekrana getirir.
val = document.all; //Tüm document çağırır.
val = document.all.length //document tüm uzunluğunu verir.
val = document.all[5] //istediğimiz indexe gidebiliriz
val = document.head; //head etiketine bu şekilde gidebiliriz. 
val = document.body; //aynı şekilde body etiketine gidebiliriz.
val = document.images; //sayfadaki imageleri çağırabiliriz.
val = document.domain; //sayfanın domain bilgisine bakabiliriz.
val = document.URL; //sayfanın urlsine bakabiliriz.
val = document.forms; //sayfanın içerisindeki form lara bakabiliriz.
val = document.forms[0] //formların indexlerine ulaşabiliriz.
val = document.scripts //sayfadaki scriptleri çağırabiliriz.
val = document.scripts[0].getAttribute('src') // bu şekilde script tagının içerisindeki src dosyasının adına ulaşabiliriz.
val = document.getElementById('') // sayfadaki bulmak istediğimiz id yi bu şekilde bakarız.

console.log(val)


//*Selecting Elements
//Sayfadaki elemanların seçimi

//!Single elements ( Tek bir eleman seçimi)
//document.getElementById('') tek elementlerde id si ile çağırmak için bunu kullanırız.
let hasim;

hasim = document.getElementById("hasim") //sayfadaki hasim isimli id ye sahip elementi çağırır.
hasim = document.getElementById("hasim").id //buradan id bilgisine ulaşabiliriz.
hasim = document.getElementById("hasim").className // bu şekilde elementin clasName ine ulaşırız.
hasim = document.getElementById("hasim").textContent //elementin içerisinde yazan metine ulaşırız.
hasim = document.getElementById("hasim").tagName // elementin tag ının ne olduğuna ulaşırız.
hasim = document.getElementById("hasim").innerText //elementin içerisindeki yazan metni bize verir.
hasim = document.getElementById("hasim").innerHTML //elementin içerisine yeni bir html etiketi yazmak istiyorsak bunu kullanırız.
hasim = document.getElementById("hasim")

//her seferinde uzun uzun yazmamıza gerek yok bu şekilde yazarakta bulabiliriz. 
//hasim = hasim.id;
//hasim = hasim.className;

//!style değiştirme
// elementi burada style değerleri vererek burada style yazabiliriz ya da varolan bir style i istediğimiz şekilde değiştirebiliriz.

hasim.style.fontSize = '32px' // bu şekilde css dosyasında verilen style işlemini burada değiştirebiliriz.
hasim.style.color = "green"; //bu şekilde css dosyasında color verilmemesine rağmen burada color özelliği ekledik.
hasim.innerText = "Hello World!"; // elementin içerisinde olan metni bu şekilde değiştirebiliyoruz.
hasim.innerHTML = "<h2>Hello World</h2>" //elementin html tagını değiştirmek isitoyrsak bu şekilde kullanırız.

console.log(hasim)

//!Bu aşağıdaki kullanım daha esnek bir kullanımdır istediğimiz veriye daha rahat bir şekilde ulaşırız.
// document.querySelector() bunu kullanırız.

console.log(document.querySelector('#hasim')) // bu şekilde id ye ulaşırız # bu etiketi aynı html de kullandığımız gibi burada kullanmalıyız.
console.log(document.querySelector('.hello')) // bu şekilde class a ulaşırız.
console.log(document.querySelector('div')) // bu şekilde sayfadaki ilk div etiketine ulaşırız.
document.querySelector('h1').style.color = "blue"; // bu şekilde style verebiliyoruz.
document.querySelector('h1').textContent = "HaşimK" // Bu şekilde elementin içerisindeki metni değiştirebiliriz.
document.querySelector('h1').classList.add('haso'); // elemente yeni bir sınıf eklemek istersek bu şekilde kullanım yapıyoruz.

//*Multiple elements (Çoklu eleman seçimi)
// Aynı anda birden fazla eleman seçme işlemi
//!Sınıf ismi ile birden çok elemente ulaşma
let a;

a = document.getElementsByClassName("hello") // bu şekilde hello sınıfına sahip tüm elementleri bize verir.
    //a = document.getElementsByClassName("hello")[1]; // bu şekilde hello sınıfına sahip istediğimiz elemente index numarası üzerinden ulaşabiliriz.

// bu şekilde hello sınıfına sahip belirttiğimiz indexteki elementin styleni,içeriğini değiştirebiliriz.
a[0].style.color = 'green'
a[0].style.fontSize = '40px'
a[0].textContent = 'Hello'
a[0].style.color = 'black'

// tüm elemanları kontrol edebileceğimiz fonksiyon yazalım ve istediğimiz değerleri vererek kontrol edelim
const fonk = () => {
    for (let i = 0; i < a.length; i++) {
        style1 = a[i].style.color = 'black'
        style2 = a[i].textContent = 'Kral'
        style3 = a[i].style.fontSize = '45px'
    }
    return 'Fonksiyonumuz burada'
}
console.log(fonk())

console.log('a', a)

//!TagName(etiket adı) ismi ile birden çok elemente ulaşma
//document.getElementByTagName('')
//bu method ile tag ismni girerek birden çok element üzerinde değişkiklik yapabiliriz.

let b;

b = document.getElementsByTagName('h1') //Bu şekilde tag ismini yazarak tüm h1 etiketlerine ulaştık.
b[0].style.fontSize = "75px" // değiştirmek istediğimiz elementin index numarasını girerek style değerleri verdik.
b[0].style.color = "green"

//document.querySelectorAll() bu methodu kullanarakta esnek bir şekilde istediğimiz elemmentlere ulaşırız.
// bize burada nodelist şeklinde gelir. ve forEach kullanarak rahat bir şekilde istediğimiz değişiklikleri yapabiliriz.

b = document.querySelectorAll('div')

console.log(b)

//*Traversing the DOM(Dom üzerinde gezinme)
//ulaştığımız nesne üzerinden diğer etiketlere nasıl geçiş yapılır

let c;

let list = document.querySelector('.hello1') // bu şekilde hello sınıfına sahip ilk elemente ulaşıyoruz.

c = list;
c = list.childNodes; // bu kullanımda nodeList şeklinde geri döner.
c = list.children; // bu kullanımda HtmlCollection şeklinde geri döner.Sadece etiketler gelir.
c = list.childNodes[0]; // bu kullanımda index numarsını girerek ulaşabiliriz.
c = list.childNodes[0].nodeValue // bu kullanımda ulaştığımız elementin belirttiğimiz indexteki değerine bu şekildee ulaşabiliyoruz.
c = list.childNodes[0].nodeType; //hangi tip nodea sahip olduğuna bu şekilde bakabiliriz.
//nodeType komutunda bize geri dönen ;
//1 ise element
//2 dönüyorsa attribute
//3 dönüyorsa text
//8 dönüyorsa yorum satırı ,şeklinde bakabiliriz.


c = list.children; // htmlcollection geriye döndürür. 
c = list.children[0]; // belirttiğimiz indexteki elementi verir.
c = list.children[1].textContent; // bu kullanımda belirttiğimiz index numarasının içeriğini değiştirebiliriz.
c = list.children[1].children; // belirttiğimiz elemanın altındaki elemana ulaşmamızı sağlar.

//!Elementlerde gezinme
c = list.firstChild; // ilk nodeList karşımıza gelir.
c = list.lastChild; // son nodeList karşımıza gelir.
c = list.firstElementChild; // ilk etiket karşımıza gelir.
c = list.lastElementChild; //son etiket karşımıza gelir.
c = list.childElementCount; // list elemanın kaç tane elementi olduğunu verir.
//nav > ul > li >.hello şeklinde bir ağaca sahip
c = list.parentNode; // olduğumuz elementin bir üst elementine çıkar aynı sınıfa değil bir üst sınıfa çıkar. yani ul
// olduğumuz element li olduğu için bir üst sınıfa çıkarak o elementi bize verir.
c = list.parentElement; // hemen kendi sınıfında bir üst elemente ulaşmak için kulanırız.  yani ul
c = list.parentElement.parentElement; // elementin üstüne çıkar sonra çıktığı elementin bir üstüne çıkar yani nav

c = list.children[0].nextSibling; //bir sonraki aynı sınıfındaki li elemana geçiş yapar.
c = list.children[0].nextElementSibling; //aynı sınıftaki bir sonraki li elemana geçiş yapar.

c = list.children[1].previousSibling; // bir önceki li elemana geçiş yapar
c = list.children[1].previousElementSibling; //aynı sınıftaki bir önceki li elemana geçiş yapar.

//elementlerin nodeListlerinde gezen bir döngü oluşturalım
for (let z = 0; z < list.children.length; z++) {
    console.log('for', list.childNodes[z]);

}

console.log(c);

//*Creatings elements (Yeni bir element oluşturma)
//Sayfa üzerinde yeni bir element oluşturalım.

const li = document.createElement('li');

//!sınıf ekleme
li.className = 'hello1'; // bu kullanımda oluşturduğumuz etikete sınıf veriyoruz.
//attribute ekleme
li.setAttribute('title', 'Hasim'); // bu kullanımda setAttribute() komutunu kullanarak title ya da istediğimiz bir değer daha verebiliriz.
li.setAttribute('data-number', '5')

// bu şekilde bir görüntü elde ederiz
//<li class="hello1" title="HAŞİM" data-number="5"></li>
//! textNode methodu (etiket içine text oluşturalım)

const text = document.createTextNode('Sonradan eklendi:Sançar'); // li etiketimiz için bir text oluşturalım.

li.appendChild(text); // appendChild() komutu ile oluşturduğumuz texti etiket içerisine bu şekilde yazdırıyoruz.
//<li class="hello1" title="Hasim" data-number="5">Haşim</li>

const y = document.createElement('a'); //etiketimizi oluşturuyoruz.
y.setAttribute('href', '#'); //etiketimizin almasını istedğimiz değeri yazıyoruz.
y.className = 'hello1'; //etiketimize bir sınıf adı veriyoruz.
y.innerHTML = '<a href="#">HaşimK</a>'; //burada oluşturduğumuz etiket içine html sayfasından bir etiket ekliyoruz.
const text1 = document.createTextNode('Sançar'); //etiketimizin içine bir metin eklemek için bu şekilde kullanıyoruz. 
y.appendChild(text1) // oluşturduğumuz metini etiketimizin içine bu şekilde gönderiyoruz.

console.log(y)

//<a href="#" class="hello1">
//<a href="#">HaşimK</a>
//Sançar
//</a>
//En son bu şekilde  bi çıktı alırız

//!append li to ul (li etiketimizi ul etiketi içine ekleyelim)

document.querySelector('#sınıf').appendChild(li)

// Bu şekilde seçtiğimiz id nin içersine oluşturduğumuz etiketi entegre ediyoruz.

console.log(li)

//*Creatings element yaptıklarımızın Özeti madde madde
//1)Özet olarak createElement() methodu ile yeni bir etiket oluşturduk.
//2)Oluşturduğumuz etiketi className = '' methodu ile class ismi atadık.
//3)Oluşturduğumuz etiketi içerisine setAttribute('','') methodu ile vermek istediğimiz değerleri verdik.(href,src,title vb.)
//4)Oluşturduğumuz etiket içine html sayfasından bir etiket koymak istiyorsak innerHTML=''methodunu kullandık.
//5)Oluşturduğumuz etiketi içerisne metin eklemek için bir const değişkeni ile birlikte  createTextNode() methodunu kullanarak textimizi tanımladık.
//6)Oluşturduğumuz text metnini etiketimize eklemek için appendChild('const değişkenine verilen ad') methodunu kullnarak etiketimize metni ekledik.
//7)Metinimizi ekledikten sonra oluştuduğumuz etiketi hangi id ya da class ın içine koymak istiyorsak document.querySelector() methodu ile id veya class 
//seçip appendChild('')Methodu ile etiketimizin adını yazarak eklemiş oluyoruz.

//*Removing & Changing Nodes (Element Silme ve güncelleme)
//Ulaştığımız etiketin içeriğini silme,değiştirme işlemleri yapacağız.

const taskList = document.querySelector('#sınıf')

//!removing element (silme işlemi)

taskList.remove() //seçtiğimiz ıd ye ait her şeyi siler.
taskList.childNodes[3].remove() // seçtiğimiz indexteki elemanı bu şekilde silebiliriz.
taskList.children[0].remove(); // seçtiğimiz indexteki ilk elementi siler.textnode larla uğraşmadığımız için daha kolay bi çözüm.
taskList.removeChild(taskList.children[0]); // ulaştığımız nesnenin alt elementini bu şekilde silebiliriz bir üstteki ile yağtığımız aynı şey.
//Yukarıdakinde istediğimizi remove() methodu ile direk sildik removeChild() methodu ile ulaşmak istediğimiz elementi sildik.

//!removing attribute (attribute silme)

taskList.children[2].removeAttribute('class') // bu şekilde seçtiğimiz elementin attribute nu bu şekilde silebiliriz.
    //Ulaştığımız tüm etiketlerin class larını silmek için for döngüsü kuralım.
for (let w = 0; taskList.children.length; w++) {
    taskList.children[w].removeAttribute('class');
}

console.log('TaskListten geliyor:', taskList)

//!Replacing element (elementi değiştirme)

const li1 = document.querySelector('.hello10')

//create element
const li2 = document.createElement('li') // oluşturmak istediğimiz elementi yazdık.
li2.setAttribute('id', 'hasimk') // elemente istediğimiz attribute dğerlerini atadık.
li2.className = 'hello3' //elemente istediğimiz class ı atadık.
li2.appendChild(document.createTextNode('HasimmK')) // bu şekilde elementin metni oluşturduk. 

const parent = document.querySelector('.hello1')
parent.replaceChild(li2, li1) // Oluşturduğumuz elementi ilk yazarak sonra yerine koymak istediğimiz elementi yazarak bu işlemi gerçekleştirdik.

console.log('li1 den geliyor(yeni element):', li1)


//!classes (class a özel attributelar)

let cal;

cal = taskList.children[0] //Hasimmk yazan elementi verir.
cal = taskList.children[1] //Anıl yazan elementi verir.
cal = taskList.children[0].firstChild //ilk elemanı verir. //text


link = taskList.children[0].firstChild //Hasimmk yazan elementi verir.
cal = link.className; //sınıfın ismini verir.
cal = link.classList; //classların bulunduğu listeyi getirir.
cal = link.classList[0]; // istediğimiz class ı bu şekilde seçebiliriz.
cal = link.classList.add('hello4') //bu şekilde class ekleyebiliriz.
cal = link.classList.remove('hello4') // bu şekilde class ı silebiliriz.

//!Attributes

cal = link.hasAttirbute('href') // bu method ile istediğimiz attribute var mı yok mu sorgularız ve bize true ya da false şeklinde geri döner.
cal = link.getAttribute('class') // bu şekilde istediğimiz elementin attribute'larına bakabiliriz.
cal = link.getAttribute('href') // #

cal = link.setAttribute('href', 'http://google.com') // bu methodu kullanarak istediğimiz elemente attribute ekleyebiliriz.


console.log(cal)
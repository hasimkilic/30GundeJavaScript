//* Events Listeners (Etkinlikler)
//Kullanıcının sayfa üzerindeki etkinlikleri etkileşimlerine bakalım.

const btn = document.querySelector('#Hasim')

const btn2 = document.querySelector('.hello1')

btn.addEventListener('click', function(e) {

        let val;

        val = e;

        val = e.target; //html sayfasında hangi elemente tıklandığını bize verir.
        val = e.target.id; // bu şekilde tıkladığımız butonun id sini alabiliriz.
        val = e.target.classList; // bu şekilde tıkladığımız elementin listeni alabiliriz.
        val = e.type; // click olduğumuzu bize söyler tipini verir.

        console.log(val);

        console.log('btn clicked');
        e.preventDefault(); // bu şekilde linke gitmesini engelledik.
    })
    //bu şekilde kullanıcı seçtiğimiz elemente tıkladığında bir cevap veren fonskiyon yazdık.

btn.addEventListener('click', btnClick);
btn.addEventListener('click', btnClick2);
btn2.addEventListener('click', btnClick);

function btnClick() {
    console.log('Üzerine tıkladın.')
}

function btnClick2() {
    console.log('Üzerine 2.yi tıkladın.')
}

//*Mouse Events (Mouse ile ilgili etkileşimler)
//Mouse ile tıklama yapalım
//'click' methodu ile yapılır.
const btn3 = document.querySelector('.btn');
const ul = document.querySelector('#sınıf');
const li = document.querySelector('.hello11')


btn3.addEventListener('click', eventHandler); // burada seçtiğimiz buton elementine click olayı verdik ve dışarıdan bir fonksiyonla bunu aktifleştirdik.
ul.addEventListener('click', eventHandler); // burada seçtiğimiz ul elementinin kapsamına(ul nin kapsadığı her yerde bu komut çalışır.) click olayı verdik ve dışarıdan bir fonksiyonla bunu aktifleştirdik.

//!Double click olayı (çift tıklama olayı)
//'dblclick' methodu ile yapılır.
btn3.addEventListener('dblclick', eventHandler); // üzerine çift tıklandığı zaman bize geri döner.
ul.addEventListener('dblclick', eventHandler);

//!mouse down olayı (tıkladığımız zaman gerçekleşir click ile benzer)
btn3.addEventListener('mousedown', eventHandler);
ul.addEventListener('mousedown', eventHandler);

//!mouse up olayı (tıklayıp buton çekilince çalışır.)
//tıkladığımız da mousedown çalışır elimizi butondan çektiğimiz zaman ise mouseup olayı gerçekleşir.
btn3.addEventListener('mouseup', eventHandler);
ul.addEventListener('mouseup', eventHandler);

//!mouseenter olayı (üzerine gelmesiyle)
//butonun üzerine gelip tıklayıp tıklamasakta o kapsam içine işaretci girdiyese çalışır.mousedown a benzer.
btn3.addEventListener('mouseenter', eventHandler);
ul.addEventListener('mouseenter', eventHandler);

//!mouseleave olayı (üzerine geldikten sonra dışına çıkınca)
//butonun üzerinden çektiğimiz yani kapsam dışına çıktığı zaman çalışır mouseup a benzer şekilde çalışır. 
btn3.addEventListener('mouseleave', eventHandler);
ul.addEventListener('mouseleave', eventHandler);

//!mouseover olayı (farklı etiket geldiği zamandada çalışır mouseenter gibi üzerinden gelinsin yeter.)
// kapsama girdiği anda çalışır (mouseenter a benzer)
btn3.addEventListener('mouseover', eventHandler);
ul.addEventListener('mouseover', eventHandler);

//!mouseout olayı (farklı etiket geldiği zamandada çalışır mouseleave gibi üzerinden çıkılsın yeter.)
//kapsam dışına çıktığı zaman çalışır (mouseleave benzer)
btn3.addEventListener('mouseout', eventHandler);
ul.addEventListener('mouseout', eventHandler);

// (mouse enter ,mouseleave) ile (mouseover,mouseout) olayı farkı
// mouse enter kapsam içinde gezdiğinde çalışır fakat kapsam içinde farklı bir etiket varsa tepki vermez.
// mouseover ve mouse out ise farklı bir etiket olduğu zamanda çalışır.

//!mouse move olayı (kapsam içinde üzerinde gezindikçe çalışır.)
//mouse oynadığı sürece çalışır
btn3.addEventListener('mousemove', eventHandler)
ul.addEventListener('mousemove', eventHandler)

// mouse ile click olduğunda geri dönen bir fonksiyon yazalım.
function eventHandler(event) {
    console.log(`event type: ${event.type}`)
        //bu şekilde mousemove ile gezindiğimiz yerlerin koordinatını alıp yazdırabiliriz.
    li.textContent = `Mouse X:${event.offsetX}
    Mouse Y:${event.offsetY}`
        //offsetX ile yatay koordinatlarını offsetY komutu ile dikey koordinatları alıyoruz.
}
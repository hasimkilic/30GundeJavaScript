//*Keyboard Events (klavye tuş ile etkileşimler)
// Belirttiğimiz elementin üzerine klavye tuşları ile etkileşime geçirelim.
const input = document.querySelector('#btn1')

const form = document.querySelector('.form')

const select = document.querySelector('#select')

//!keydown ( tuşa basıldığı anda )
//!keyup   (tuştan elimizi çektiğimiz anda )
//!keypress (tuşa basıldığı zaman )
//!focus (üzerine mouse tıklandığı zaman)
//!blur (üzerinden içinden çıkıldığı zaman )
//!cut (ctrl+x yapıldığında)
//!paste (ctrl+v yapıldığında)
//!submit (button tıkladığın zaman bu komut seni farklı bir adrese götürüyor.)
//!select (input içerisinde yazılan metnin seçildiği zaman çalışır.)
//!change (sectionda option değerleri seçildiğinde çalışır.)
//Bu üç satırı yorumlarından kaldırarak nasıl çalıştığına bakabilirsin.
//input.addEventListener('keydown', eventHandler); //buton elementine tuşa basıldığı zaman çalışır.
//input.addEventListener('keyup', eventHandler); // buton elementinde basılan tuştan elimizi çekince çalışır.
//input.addEventListener('keypress', eventHandler); // tıklandığı zaman çalışır.
input.addEventListener('focus', eventHandler); //mouse ile input içersine girdiğimiz anda çalışır.herhangi bir tuşa basmadan
input.addEventListener('blur', eventHandler); //mouse ile input içersine girdikten sonra çıkınca bu komut çalışır.
input.addEventListener('cut', eventHandler); // klavye ile ctrl+x yaptığımız zman çalışır.
input.addEventListener('paste', eventHandler); // klavye ile ctrl+v yapınca çalışır.

form.addEventListener('submit', eventHandler); // butona tıklanıldığında bu komut çalışlır ve farklı bir adrese götürür.

input.addEventListener('select', eventHandler); // input içerisine yazılan metinden seçilen metin olduğu anda çalışır.

select.addEventListener('change', eventHandler); // bu şekilde  section bölümünde olan seçenekleri seçtiğimiz anda çalışır.

function eventHandler(e) {
    console.log('event type:', e.type); //burada çalışan kodun tipine bakarız.
    //console.log('key code:', e.keyCode); // burada kullanıcının hangi tuşa bastığı kod bilgisini alırız.
    console.log('value:', e.target.value); // burada kullanıcının hangi tuşa bastığını önce elementi bularak sonra value değerini alarak sonra metin kısmından alabiliriz.
    e.target.style.backgroundColor = 'yellow' // bu şekilde seçtiğimiz elementin içerisine girerek focus olduğunda background değeri verebiliriz.

    e.preventDefault(); //sayfanın yenilenmesi bu şekilde engelliyoruz.
}
### Timing : setTimeout ve setInterval
#### Kaynak : ***https://tr.javascript.info/settimeout-setinterval***

Bir fonksiyon hemen çalıştırılmak istenmeyebilir, belirli bir zaman sonra çalışması istenebilir. Buna “schedule the call” denir.
Bunun için iki metod var:

- setTimeout fonksiyonu belirli bir zaman sonra çalıştırmaya yarar.
- setInterval fonksiyonun belirli aralıklar ile sürekli çalışmasını sağlar.

Bu metodlar JavaScript’in tanımları arasında yer almaz. Fakat çoğu ortam bu metodları sunar. Daha özele inecek olursak tüm tarayıcılar ve NodeJS bu metodları sağlar.

- Aşağıdaki fonksiyon olan selamVer 1 saniye sonra çalışacaktır.
>function selamVer() {
>  alert('Selam');
>}
>
>setTimeout(selamVer, 1000);

-Karakter dizisi olarak fonksiyon göndermek aslında pek önerilmez, bunun yerine aşağıdaki gibi fonksiyon kullanılması daha doğrudur:
>setTimeout(() => alert('Merhaba'), 1000);

-Yeni başlayan arkadaşlar bazen yanlışlıkla fonksiyonun sonuna () ekleyebilir:
>// yanlış!
>setTimeout(selamVer(), 1000);


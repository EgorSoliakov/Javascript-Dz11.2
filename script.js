/*
Задание 1 (тайминг 125 минут)
1. Создание медиа плеера
2. Создать файл index.html
3. Создать папку img в которую загрузить изображение
кнопок play, pause
4. Скачать произвольное видео из интернета
5. Добавить Тег видео в html
6. Продумать внешний вид progress и volume
7. Продумать время проигрывателя
8. Реализовать функционал своего собственного видеоплеера
мини тайминги
1. Скачать все картинки (найти макет по желанию)
2. Добавляете html добавляете все элементы для
управления видео
3. Реализуем кнопки play, pause
4. время и ползунки
5. Собираем внешний вид
*/
const videoEl = document.createElement('video');
videoEl.setAttribute('src','/Users/egor/Documents/Учеба/JavaScript/Семинар_11.2/img/media/media/rabbit320.mp4');
const contanerEl = document.querySelector('.contanerVideo')
contanerEl.appendChild(videoEl);

const playEl = document.createElement('div');
const pauseEl = document.createElement('div');
//добавил кнопку стоп
const stopEl = document.createElement('div');
playEl.classList.add("play");
pauseEl.classList.add("pause");
stopEl.classList.add('stop');

stopEl.addEventListener('click',function (e){
    videoEl.currentTime = 0;
    videoEl.pause();
});

playEl.addEventListener('click', function(e){
    
    videoEl.play();
    console.log(videoEl.duration, videoEl.currentTime);
});

pauseEl.addEventListener('click', function(e){
    videoEl.pause();
    console.log(videoEl.duration, videoEl.currentTime);
});

const rangeEl = document.createElement('input');
rangeEl.setAttribute('type', 'range');
rangeEl.setAttribute('min', '0');
rangeEl.setAttribute('max', '100');
rangeEl.setAttribute('value','0');
rangeEl.addEventListener('change', function (e) {
    console.log(e.target.value);
    videoEl.currentTime = e.target.value/100*videoEl.duration;
});
videoEl.addEventListener('timeupdate', function (e) {
    rangeEl.setAttribute('value', Math.round(videoEl.currentTime/videoEl.duration*100));
});


const volumeEl = document.createElement('input');
volumeEl.setAttribute('type','range');
volumeEl.setAttribute('min','0');
volumeEl.setAttribute('max','100');
volumeEl.setAttribute('value','0');
videoEl.addEventListener('loadeddata',(event) =>{
    volumeEl.setAttribute('value', videoEl.volume*100)
});
volumeEl.addEventListener('change', function (e){
    videoEl.volume = e.target.value / 100;
});
//Добавил Фильтр
const filterEl = document.createElement('input');
filterEl.setAttribute('type', 'range');
filterEl.setAttribute('min', '10');
filterEl.setAttribute('max', '100');
filterEl.setAttribute('value', '100');
filterEl.addEventListener('change', function (e) {
    videoEl.style.filter = "brightness(" + filterEl.value + "%)";
});

contanerEl.appendChild(playEl);
contanerEl.appendChild(pauseEl);
contanerEl.appendChild(stopEl);
contanerEl.appendChild(rangeEl);
contanerEl.appendChild(volumeEl);
contanerEl.appendChild(filterEl);

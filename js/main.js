
// Открытие мобильного меню

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

const toggleMenu = (isOpen) => {
    document.body.classList.toggle('menu-open', isOpen);
};

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu(true);
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu(false);
});


// Анимация мобильного меню

function toggleButtons(showMenu) {
    if (showMenu) {
        // Показываем "Меню", скрываем "Закрыть"
        menuBtn.classList.add('animate__slideInDown')
        menuBtn.classList.remove('animate__slideOutUp');
        closeBtn.classList.add('animate__slideOutDown')
    } else {
        // Скрываем "Меню", показываем "Закрыть"
        closeBtn.style.display = 'block';
        menuBtn.classList.add('animate__slideOutUp');
        closeBtn.classList.remove('animate__slideOutDown')
        closeBtn.classList.add('animate__slideInUp')

    }
}

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    toggleButtons(false);
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    toggleButtons(true);
});


// Время

function updateKrasnoyarskTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Krasnoyarsk',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat('ru-RU', options);
    const timeString = formatter.format(now);

    document.getElementById('time').textContent = timeString;
}

updateKrasnoyarskTime();

setInterval(updateKrasnoyarskTime, 60000);


// Слайдер

new Swiper('.hero__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    rewind: true,

    speed: 300,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'slide',

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

// Анимация для кнопки в меню

function startTextSlider() {
    const texts = [
        document.getElementById('slider-button-1'),
        document.getElementById('slider-button-2'),
        document.getElementById('slider-button-3')
    ];
    let index = 0;

    function showNext() {
        if (texts.length === 0) return;

        const current = texts[index];
        const nextIndex = (index + 1) % texts.length;

        current.classList.add('animate__animated', 'animate__slideInUp');

        setTimeout(() => {
            current.classList.remove('animate__slideInUp');
            current.classList.add('animate__slideOutUp');

            setTimeout(() => {
                current.classList.remove('animate__slideOutUp');
                index = nextIndex;
                showNext();
            }, 500);

        }, 4000);
    }

    showNext();
}

document.addEventListener("DOMContentLoaded", () => {
    startTextSlider();
});
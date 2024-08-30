//переменные из документа
let start_button = document.querySelector('start-button')
let ans_button1 = document.querySelector('.answer-1')
let ans_button2 = document.querySelector('.answer-2')
let ans_button3 = document.querySelector('.answer-3')
let doc_picture = document.querySelector('.picture')
let doc_question = document.querySelector('.question')
let bool = true
let counter = 0

//функции
function changeImage(src) {
    picture.src = src
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString(); // Вычисляем дату истечения
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/'; // Устанавливаем куку
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('='); // Разделяем куки на имя и значение
        return parts[0] === name ? decodeURIComponent(parts[1]) : r; // Возвращаем значение, если имя совпадает
    }, '');
}

function deleteCookie(name) {
    setCookie(name, '', -1); // Устанавливаем куку с отрицательным временем жизни
}

// Массив диванов
let sofas = [
    {
        id: 1,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: ['В гостинную', 'В спальню'],
        price: 350
    },
    {
        id: 2,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Кожа',
        place_for: ['В гостинную', 'На кухню'],
        price: 400
    },
    {
        id: 3,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: ['В гостинную', 'В спальню'],
        price: 350
    },   
    {
        id: 4,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: ['В гостинную', 'В спальню'],
        price: 350
    },  
    {
        id: 5,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Латекс',
        place_for: ['В гостинную'],
        price: 350
    }, 
    {
        id: 6,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: ['В гостинную', 'В спальню'],
        price: 350
    },
    {
        id: 7,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Ткань',
        place_for: ['В гостинную', 'В спальню'],
        price: 300
    }, 
    {
        id: 8,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Кожа',
        place_for: ['В гостинную'],
        price: 400
    },   
];


//анимации и обработка событий

start_button.addEventListener('mouseenter', function() {
    anime({
        target: start_button,
        duration: 500,
        scale: 1.2
    })
})

start_button.addEventListener('mouseleave', function() {
    anime({
        target: start_button,
        duration: 500,
        scale: 1
    })
})

if (window.location.href == 'index.html') {
    let question1_cookie = getCookie('question1')
    let question2_cookie = getCookie('question2')
    let question3_cookie = getCookie('question3')
    let question4_cookie = getCookie('question4')
    let sofas_ = sofas
    while(bool) {
        if (sofas_.length >= 1) {
            //Убираем Неправильные

            // Первый вопрос
            if (question1_cookie == 1) {
                if (sofas_[0]['place_for']) {

                }
            }
            if (question1_cookie == 2) {
                if (sofas_[0]['place_for']) {

                }
            }
            if (question1_cookie == 3) {
                if (sofas_[0]['place_for']) {

                }
            }
            //Второй вопрос
            if (question2_cookie == 1) {
                if (sofas[0]['size'] != 'Маленький') {
                    sofas.splice(counter, 1)
                }
            }
            if (question2_cookie == 2) {
                if (sofas[0]['size'] != 'Средний') {
                    sofas.splice(counter, 1)
                }
            }
            if (question2_cookie == 3) {
                if (sofas[0]['size'] != 'Большой') {
                    sofas.splice(counter, 1)
                }
            }
            //Третий вопрос
            if (question3_cookie == 1) {
                if (sofas[0]['material'] != 'Кожа') {
                    sofas.splice(counter, 1)
                }
            }
            if (question3_cookie == 2) {
                if (sofas[0]['material'] != 'Ткань') {
                    sofas.splice(counter, 1)
                }
            }
            if (question3_cookie == 3) {
                if (sofas[0]['material'] != 'Латекс') {
                    sofas.splice(counter, 1)
                }
            }
            //Четвёртый вопрос
            if (question2_cookie == 1) {
                if (sofas[0]['size'] != 'Маленький') {
                    sofas.splice(counter, 1)
                }
            }
            if (question2_cookie == 2) {
                if (sofas[0]['size'] != 'Средний') {
                    sofas.splice(counter, 1)
                }
            }


        }
        else if (sofas_.length == 1){
            bool = false
        }
        else {

        }
    }
}


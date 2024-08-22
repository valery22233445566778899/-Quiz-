//переменные из документа
let start_button = document.querySelector('start-button')
let ans_button1 = document.querySelector('.answer-1')
let ans_button2 = document.querySelector('.answer-2')
let ans_button3 = document.querySelector('.answer-3')
let doc_picture = document.querySelector('.picture')
let doc_question = document.querySelector('.question')

//функции
function changeImage(src) {
    picture.src = src
}

//классы
class Quiz {
    constructor(question, ans_1, ans_2, ans_3, picture) {
        this.question = question
        this.ans_1 = ans_1
        this.ans_2 = ans_2
        this.ans_3 = ans_3
        this.picture = picture
    }
    //методы

}

class Sofa {
    constructor(shape, size, material) {
        this.shape = shape
        this.size = size
        this.material = material
    }
    //методы

}

let quiz = [
    new Quiz('вопрос', 'ответ1', 'ответ2', 'ответ3', 'url(*картинка*)'),
    new Quiz('вопрос', 'ответ1', 'ответ2', 'ответ3', 'url(*картинка*)'),
    new Quiz('вопрос', 'ответ1', 'ответ2', 'ответ3', 'url(*картинка*)')
]

const sofas = new Map()

//Диваны :)
dictionary.set(new Sofa('форма', 'размер', 'материал'), "Название дивана")
dictionary.set(new Sofa('форма', 'размер', 'материал'), "Название дивана")
dictionary.set(new Sofa('форма', 'размер', 'материал'), "Название дивана")
dictionary.set(new Sofa('форма', 'размер', 'материал'), "Название дивана")
dictionary.set(new Sofa('форма', 'размер', 'материал'), "Название дивана")
dictionary.set(new Sofa('форма', 'размер', 'материал'), "Название дивана")

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

start_button.addEventListener('click', function() {
    //скрываем элементы на экране
    start_button.style.display = 'none'

    for (let i = 0; i < quiz.length; i += 1) {
        //Получаем параметры из классов массива
        let answer_1 = quiz[i].ans_1
        let answer_2 = quiz[i].ans_2
        let answer_3 = quiz[i].ans_3
        let picture = quiz[i].picture
        let question = quiz[i].question
        //Применяем полученные параметры к экрану
        ans_button1.innerHTML = answer_1
        ans_button2.innerHTML = answer_2
        ans_button3.innerHTML = answer_3
        doc_picture.innerHTML = picture
        dos_question.innerHTML = question
        
    }
})

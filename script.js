//переменные из документа
let start_button = document.querySelector('start-button')
let ans_button1 = document.querySelector('.answer-1')
let ans_button2 = document.querySelector('.answer-2')
let ans_button3 = document.querySelector('.answer-3')
let doc_picture = document.querySelector('.picture')
let doc_question = document.querySelector('.question')
let opinion = []

//функции
function changeImage(src) {
    picture.src = src
}

//классы
class Quiz {
    constructor(question, ans_1, ans_2, ans_3, picture_1, picture_2, picture_3) {
        this.question = question
        this.ans_1 = ans_1
        this.ans_2 = ans_2
        this.ans_3 = ans_3
        this.picture_1 = picture_1
        this.picture_2 = picture_2
        this.picture_3 = picture_3
        this.answers = [
            this.ans_1,
            this.ans_2,
            this.ans_3
        ]
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
    new Quiz('Куда вы хотите поставить диван?', 
        'На кухню', 
        'В гостинную', 
        'В комнату', 
        'url(*картинка*)', 
        'url(*картинка*)', 
        'url(*картинка*)'),

    new Quiz('Какой формы вы хотите диван?', 
        'Угловой', 
        'Прямой', 
        'Раскладной', 
        'url(*картинка*)', 
        'url(*картинка*)', 
        'url(*картинка*)'),

    new Quiz('Какого размера вы хотите диван?', 
        'Маленький', 
        'Средний', 
        'Большой', 
        'url(*картинка*)',
        'url(*картинка*)',
        'url(*картинка*)'),

    new Quiz('Из кокого материала вы хотите диван?', 
        'Кожа', 
        'Натуральное дерево', 
        'Латекс', 
        'url(*картинка*)',
        'url(*картинка*)',
        'url(*картинка*)')
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

    for (let a = 0; a < quiz.length; a += 1) {
        //Получаем параметры из классов массива
        let answer_1 = quiz[a].ans_1
        let answer_2 = quiz[a].ans_2
        let answer_3 = quiz[a].ans_3
        let picture = quiz[a].picture
        let question = quiz[a].question
        //Применяем полученные параметры к экрану
        ans_button1.innerHTML = answer_1
        ans_button2.innerHTML = answer_2
        ans_button3.innerHTML = answer_3
        doc_picture.innerHTML = picture
        dos_question.innerHTML = question
        for (let i = 0; i < quiz[a].answers.length; i += 1) {
            quiz[a].answers[i].addEventListener('click', function () {
                opinion.push(quiz[a].answers[i])
            })
        }
    }
})

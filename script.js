//переменные из документа
let start_button = document.querySelector('start-button')
// let ans_button1 = document.querySelector('.')
// let ans_button2 = document.querySelector('.')
// let ans_button3 = document.querySelector('.')

//функции


//классы
class Quiz {
    constructor(question, ans_1, ans_2, ans_3) {
        this.question = question
        this.ans_1 = ans_1
        this.ans_2 = ans_2
        this.ans_3 = ans_3
    }
    //методы

}

let Quiz = [
    new Quiz('вопрос', 'ответ1', 'ответ2', 'ответ3'),
    new Quiz('вопрос', 'ответ1', 'ответ2', 'ответ3'),
    new Quiz('вопрос', 'ответ1', 'ответ2', 'ответ3')
]

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
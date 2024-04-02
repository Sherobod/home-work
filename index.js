// программма учитывая время будет говорить доброе утро или вечер или день


let time = new Date('April 02, 2024 20:46:00 +0500');
const hours = new Date().getHours()
let message

if (hours < 12) {
    message = 'Доброе утро'
} else message = 'Добрый день'
if (hours > 16) message = 'Добрый вечер'

alert(message)
console.log(
    message
)





// спрашиваете у пользователя возраст и по возрасту говорите кто он такой

let age = prompt('Сколько вам лет')

if (age >= 0 && age < 3) {
    alert("Ребёнок")
} else if (age >= 3 && age <= 13) {
    alert('Мальчик')
} else if (age >= 14 && age <= 16) {
    alert('Подросток')
} else if (age >= 17 && age <= 19) {
    alert('Юнош')
} else if (age >= 17 && age <= 44) {
    alert('Молодёж')
} else if (age >= 45 && age <= 59) {
    alert('Средный')
} else if (age >= 60 && age <= 74) {
    alert('Пожилой')
} else if (age >= 75 && age <= 90) {
    alert('Старый')
} else if (age >= 90 && age <= 109) {
    alert('Долгожитель')
} else if (age <= 110) {
    alert('Супердолгожитель')
}






// спрашиваете у пользователя какой месяц сейчас он пишет номер месяца по месяцу програма обозначает сезон






let month = +prompt('Введите номер месяца')

if (month === 1 && month === 2 ) {
    alert('Зима')
} else if (month >= 3 && month <= 5) {
    alert('Весна')
} else if (month >= 6 && month <= 8) {
    alert('Лето')
} else if (month >= 9 && month <= 11) {
    alert('Осень')
} if (month === 12) {
    alert('Зима')
} else {
    alert('error')
}



// определение декады

let day = prompt('Число дня')

if (day >= 1 && day <= 10) {
    alert('Первая декада')
} else if (day >= 11 && day <= 20) {
    alert('Вторая декада')
} else if (day >= 21 && day <= 30) {
    alert('Третья декада')
}

'use strict'

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
        time =  prompt('Введите дату в формате YYYY-MM-DD', '');
}

start();    
    
let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };

function chooseExpanses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            while(a == '' || a == null) {
                a = prompt('Введите обязательную статью расходов в этом месяце', '');
            }
        let b = prompt('Во сколько обойдется?', '');
            while(isNaN(b) || b == '' || b == null) {
                b = prompt('Во сколько обойдется?', '');
            }
        console.log ("done");
        appData.expenses[a] = b;
    }   
}

chooseExpanses();
    
function detectDayBudget() {
    appData.moneyPerDay = Math.round(appData.budget / 30);
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}

detectLevel ();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');
        appData.monthInCome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthInCome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt('Статья необязательных расходов?', '');
        while(a == null || a == '') {
            a = prompt('Статья необязательных расходов?', '');
        }
        appData.optionalExpenses[i] = a;
    }
}

chooseOptExpenses();
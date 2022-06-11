'use strict'

let $start = document.getElementById('start'),
    $budgetValue = document.getElementsByClassName('budget-value'),
    $daybudgetValue = document.getElementsByClassName('daybudget-value'),
    $levelValue = document.getElementsByClassName('level-value'),
    $expensesValue = document.getElementsByClassName('expenses-value'),
    $optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    $incomeValue = document.getElementsByClassName('income-value'),
    $monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    $yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    $expensesItem = document.querySelectorAll('.expenses-item'),
    $btnExpensesItem = document.querySelector('.expenses-item-btn'),
    $btnOptionalExpenses = document.querySelector('.optionalexpenses-btn'),
    $btnCountBudget = document.querySelector('.count-budget-btn'),
    $optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    $chooseIncome = document.querySelector('.choose-income'),
    $savings = document.querySelector('#savings'),
    $sum = document.querySelector('#sum'),
    $percent = document.querySelector('#percent'),
    $yearValue = document.querySelector('.year-value'),
    $monthValue = document.querySelector('.month-value'),
    $dayValue = document.querySelector('.day-value');

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
        savings: true,
        chooseExpanses: function() {
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
        },
        detectDayBudget: function () {
            appData.moneyPerDay = Math.round(appData.budget / 30);
            alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
        },
        detectLevel: function  () {
            if (appData.moneyPerDay < 100) {
                console.log ("Это минимальный уровень достатка!");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log ("Это средний уровень достатка!");
            } else if (appData.moneyPerDay > 2000) {
                console.log ("Это высокий уровень достатка!");
            } else {
                console.log ("Произошла ошибка");
            }
        },
        checkSavings: function () {
            if (appData.savings == true) {
                let save = +prompt('Какова сумма накоплений?', ''),
                    percent = +prompt('Под какой процент?', '');
                appData.monthInCome = save/100/12*percent;
                alert('Доход в месяц с вашего депозита: ' + appData.monthInCome);
            }
        },
        chooseOptExpenses: function () {
            for (let i = 1; i < 4; i++) {
                let a = prompt('Статья необязательных расходов?', '');
                while(a == null || a == '') {
                    a = prompt('Статья необязательных расходов?', '');
                }
                appData.optionalExpenses[i] = a;
            }
        },
        chooseIncome: function() {
            let items = prompt("Что принесет доп доход? (Через запятую", "");
            while (items == null || items == '') {
                items = prompt("Что принесет доп доход? (Через запятую", "");
            }
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?", ""));
            appData.income.sort(compare);
            function compare(a, b) {
                return a-b;
            }
            items = '';
            appData.income.forEach(function (item) {
                items = items + "Способы доп. заработка: " + item + "\n";
            });
            items = items.substring(0, items.length -1);
            alert(items);
        }
    };

function prog () {
    let a = '';
    for (let key in appData) {
        a = a + "Наша программа включает в себя данные: " + key + " - " + appData[key] + "\n"
    }
    a = a.substring(0, a.length - 1);
    alert(a);
}
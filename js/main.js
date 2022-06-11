'use strict'

let $startBtn = document.getElementById('start'),
    $btnExpensesItem = document.querySelector('.expenses-item-btn'),
    $btnOptionalExpenses = document.querySelector('.optionalexpenses-btn'),
    $btnCountBudget = document.querySelector('.count-budget-btn'),

    $budgetValue = document.getElementsByClassName('budget-value')[0],
    $daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    $levelValue = document.getElementsByClassName('level-value')[0],
    $expensesValue = document.getElementsByClassName('expenses-value')[0],
    $optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    $incomeValue = document.getElementsByClassName('income-value')[0],
    $monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    $yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    $expensesItem = document.querySelectorAll('.expenses-item'),
    $optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    $chooseIncome = document.querySelector('.choose-income'),
    $savings = document.querySelector('#savings'),
    $sum = document.querySelector('#sum'),
    $percent = document.querySelector('#percent'),
    $yearValue = document.querySelector('.year-value'),
    $monthValue = document.querySelector('.month-value'),
    $dayValue = document.querySelector('.day-value');

let money, time;


$startBtn.addEventListener('click', function() {
    time =  prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    $budgetValue.textContent = money.toFixed();
    $yearValue.value = new Date(Date.parse(time)).getFullYear();
    $monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    $dayValue.value = new Date(Date.parse(time)).getDate();
    $btnExpensesItem.disabled = false;
    $btnExpensesItem.style.cssText = `
    background-image: linear-gradient(336deg, #ffbd75, #ff964b), linear-gradient(#ffffff, #ffffff)
    color: #fff
    cursor: pointer
        `;

    $btnOptionalExpenses.disabled = false;
    $btnOptionalExpenses.style.cssText = `
    background-image: linear-gradient(336deg, #ffbd75, #ff964b), linear-gradient(#ffffff, #ffffff)
    color: #fff
    cursor: pointer
        `;
        
    $btnCountBudget.disabled = false;
    $btnCountBudget.style.cssText = `
    background-image: linear-gradient(336deg, #ffbd75, #ff964b), linear-gradient(#ffffff, #ffffff)
    color: #fff
    cursor: pointer
        `;
});


$btnExpensesItem.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < $expensesItem.length; i++) {
        let a = $expensesItem[i].value;
        let b = $expensesItem[++i].value;
        appData.expenses[a] = b;
        sum += +b;
    }
    $expensesValue.textContent = sum;
});

$btnOptionalExpenses.addEventListener('click', function() {
    for (let i = 0; i < $optionalExpensesItem.length; i++) {
        let opt = $optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        $optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

$btnCountBudget.addEventListener('click', function() {
    appData.moneyPerDay = Math.round((appData.budget - +$expensesValue.textContent) / 30);
    $daybudgetValue.textContent = appData.moneyPerDay; 
    if (appData.moneyPerDay < 100) {
        $levelValue.textContent = "Это минимальный уровень достатка!";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        $levelValue.textContent = "Это средний уровень достатка!";
    } else if (appData.moneyPerDay > 2000) {
        $levelValue.textContent = "Это высокий уровень достатка!";
    } else {
        $levelValue.textContent = "Произошла ошибка";
    }
});

$chooseIncome.addEventListener('input', function() {
    appData.income = $chooseIncome.value.split(', ');
    $incomeValue.textContent = $chooseIncome.value;
});

$savings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

$sum.addEventListener('input', function() {
    if (appData.savings == true) {
    let sum = +$sum.value,
        percent = +$percent.value;
    appData.monthInCome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    $monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
    $yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

$percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +$sum.value,
        percent = +$percent.value;
    appData.monthInCome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    $monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
    $yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

$btnExpensesItem.disabled = true;
$btnExpensesItem.style.cssText = `
    background: gray;
    color: black;
    cursor: default
    `;

$btnOptionalExpenses.disabled = true;
$btnOptionalExpenses.style.cssText = `
    background: gray;
    color: black;
    cursor: default
    `;
    
$btnCountBudget.disabled = true;
$btnCountBudget.style.cssText = `
    background: gray;
    color: black;
    cursor: default
    `;
      


let appData = {
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

//check
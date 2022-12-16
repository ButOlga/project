let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    } 
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpences: {},
    income: [],
    savings: true,
    choseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько это обойдется?", '');
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b !='' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                console.log('bad result');
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Minimum");
        } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("Midle");
        } else if(appData.moneyPerDay >= 2000) {
            console.log("High");
        } else {
            console.log('error');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц по Вашему депозиту: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let questionOptExpenses = prompt("Введите статью необязательных расходов");
            appData.optinalExpences[i] = questionOptExpenses;
            console.log(appData.optinalExpences);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
        if (typeof(items) != "string" || typeof(items) == null || items == '') {
            console.log("Вы ввели некорректные данные или не ввели их!");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
        appData.income.forEach(function(item, i) {
            alert("Способы дополнительного заработка " + (i+1) + ' - ' + item);
        })
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные " + key + " : " + appData[key]);
}

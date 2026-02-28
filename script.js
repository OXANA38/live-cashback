const rates = {
    "5000": 5000,
    "10000": 10000,
    "20000": 20000,
    "40000": 40000,
    "80000": 80000,
    "150000": 150000
};

function updateCalc() {
    const nominal = parseInt(document.getElementById('cardSelect').value);
    const days = parseInt(document.getElementById('daysRange').value);
    
    document.getElementById('daysVal').innerText = days;

    let balance = 0;
    const dailyBonus = nominal * 0.01; // 1% от номинала

    for (let i = 1; i <= days; i++) {
        let percentOnBalance = balance * 0.01; // 1% на остаток
        balance += (dailyBonus + percentOnBalance);
    }

    document.getElementById('finalBalance').innerText = Math.floor(balance).toLocaleString();
}

// Слушатели событий
document.getElementById('cardSelect').addEventListener('change', updateCalc);
document.getElementById('daysRange').addEventListener('input', updateCalc);

// Инициализация при загрузке
updateCalc();

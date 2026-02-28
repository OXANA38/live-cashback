function updateCalc() {
  const nominal = Number(document.getElementById("nominal").value);
  const days    = Number(document.getElementById("days").value);

  document.getElementById("daysValue").textContent = days;

  let balance = 0;
  const dailyFixed = nominal * 0.01;

  for (let i = 0; i < days; i++) {
    const dailyCompound = balance * 0.01;
    balance += dailyFixed + dailyCompound;
  }

  document.getElementById("result").textContent = Math.floor(balance).toLocaleString();
}

// Слушатели
document.getElementById("nominal").addEventListener("change", updateCalc);
document.getElementById("days").addEventListener("input", updateCalc);

// Первый расчёт
updateCalc();

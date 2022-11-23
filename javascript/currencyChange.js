function changeCurrency() {
    let amountBasic = document.getElementById("pricing__amount__Basic");
    let amountProfessional = document.getElementById("pricing__amount__Professional");
    let amountPremium = document.getElementById("pricing__amount__Premium");

    let inputCurrency= document.getElementById("currency");
    let value = inputCurrency.value;

    switch (value) {
        case "1":
          amountBasic.innerHTML = "0 €";
          amountProfessional.innerHTML = "25 €";
          amountPremium.innerHTML = "60 €";
          break;
        case "2":
            fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/gbp.json')
                .then((results) => results.json())
                .then((data) => {
          amountBasic.innerHTML = "0 £";
          amountProfessional.innerHTML = Math.floor(data.gbp * 25)+ " £";
          amountPremium.innerHTML = Math.floor(data.gbp * 80) + " £"; 
        });
          break;
        case "3":
         fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json')
                .then((results) => results.json())
                .then((data) => {
          amountBasic.innerHTML = "0 $";
          amountProfessional.innerHTML = Math.floor(data.usd * 25) + " $";
          amountPremium.innerHTML = Math.floor(data.usd * 80) + " $"; 
        });
          break;
      }
}
window.onload = function () {
    changeCurrency()
};
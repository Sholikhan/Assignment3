const active = document.querySelector("#active");
const newdata = document.querySelector("#new");
const recovered = document.querySelector("#recovered");
const totalCases = document.querySelector("#cases");
const totalDeaths = document.querySelector("#death");
const totalTest = document.querySelector("#tests");

const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", async () => {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1becca8e72mshccfc4f409adfd6dp1ff2e8jsn0b91a7d00bca",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const response = await fetch(BASE_URL, options);
  const data = await response.json();

  if (data.response.length) {
    const dataResponse = data.response[0];

    console.log(dataResponse);
    active.innerHTML = dataResponse.cases.active;
    newdata.innerText = dataResponse.cases.new ? dataResponse.cases.new : 0;
    recovered.innerText = dataResponse.cases.recovered;
    totalCases.innerText = dataResponse.cases.total;
    totalDeaths.innerText = dataResponse.deaths.total;
    totalTest.innerText = dataResponse.tests.total;
  }
});
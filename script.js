var search = document.querySelector(".search")
var city = document.querySelector("#city")
var country = document.querySelector("#country")
var value = document.querySelector(".value")

search.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        changeWeatherUI();
    }
})

async function changeWeatherUI() {
    const inputVal = search.value.trim();
    const apiKey = '687833b84de7c5eba27f7de77f048d9f';

    if(inputVal === ""){
        alert("Vui long nhập tên thành phố.");
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if(data.cod === 200){
            setTimeout(() => {
                city.textContent = data.name;
                country.textContent = data.sys.country;
                value.textContent = Math.round(`${data.main.temp}`);
                console.log(data);
            },500);
        }else{
            alert();
        }
    } catch (error) {
        console.log('Đã xảy ra lỗi',error);
    }
}
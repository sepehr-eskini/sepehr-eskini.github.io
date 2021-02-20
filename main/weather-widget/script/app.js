const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation);
const changeBtn = document.getElementById('w-change-btn');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
changeBtn.addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    weather.changeLocation(city);
    storage.setLocationData(city);
    getWeather();

    $('#locModal').modal('hide');
})


function getWeather() {
    weather.getWeather()
        .then(result => {
            ui.paint(result);
        })
        .catch(err => console.log(err))
}
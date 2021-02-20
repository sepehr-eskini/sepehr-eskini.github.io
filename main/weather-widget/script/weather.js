class Weather {
    constructor(city) {
        this.apiKey = '458bff56ed45e9743b2bcd183d66f153';
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city) {
        this.city = city;
    }
}
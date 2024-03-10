    document.getElementById('searchBtn').addEventListener('click', function() {
        const city = document.getElementById('cityInput').value;
        const apiKEY = 'd95f83b806f6562d6cd12a0239d2731c';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d95f83b806f6562d6cd12a0239d2731c&units=metric`;
    
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.cod !== '404') {
                    displayWeatherData(data);
                } else {
                    throw new Error('City not found');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                document.querySelector('.weatherResult').innerHTML = `<p>Failed to load weather data. Please try again.</p>`;
            });
    });
    
    function displayWeatherData(data) {
        const weatherHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Feels Like: ${data.main.feels_like}°C</p>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
        document.querySelector('.weatherResult').innerHTML = weatherHTML;
    }
    
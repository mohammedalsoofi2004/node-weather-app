import ax from 'axios';
import readline from 'readline-sync';

async function getWeather(){
    const city = readline.question("Enter a city name: ");
    if(!city){
        console.log("Please enter a valid city name."); 
        return;
    } 

    console.log("Fetching data...");

    try {
        const response = await ax.get(`https://wttr.in/${city}?format=j1`);
        const  currentCondition = response.data.current_condition[0];
        const temperature = currentCondition.temp_C;
        const weatherDesc = currentCondition.weatherDesc[0].value;
        const humidity = currentCondition.humidity;

         console.log(`\n Weather in [${city}] today:`);
        console.log(` Temperature: ${temperature}°C`);
        console.log(` Weather condition: ${weatherDesc}`);
        console.log(` Humidity: ${humidity}%`);

    } catch (error) {
        console.error("Error fetching weather data:", error.message);
    }
}

getWeather();
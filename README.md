# Weather-App
This is a basic weather app that pulls data from Open Weather API to return the current temperature, humidity and weather status based on the entered city. 

Running the application:
1. Clone the repository containing the Weater App
2. Naviage to the project directory
3. Open the index.html file in your web browser. This file resides in the project directory alongside index.js and other files.
4. Enter a city name in the search field.
5. Click the "Submit" button or press Enter on your keyboard.

Testing the application:
The application comes with 3 unit tests written in Jest.
1. getWeatherData.test.js: Tests if getWeatherData throws an error for non-200 status codes.
2. displayError.test.js: Tests if displayError sets the error message content correctly.
3.displayWeatherInfo.test.js: Tests if displayWeatherInfo displays the correct information based on provided data.

Coding guidelines and standards:
1. Use consistent indentation (2 spaces) and formatting.
2. Use meaningful variable and function names. Variables should be camel case.
3. Add comments to explain complex logic. 
4. Follow best practices for asynchronous programming (e.g., using async/await syntax).

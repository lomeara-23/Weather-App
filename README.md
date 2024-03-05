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
3.displayWeatherInfo.test.js: Tests if displayWeatherInfo displays the correct information based on the provided data.

Coding guidelines and standards:
1. Naming Conventions:
a. Functions and variables: Use camelCase (e.g., changeUserPassword, userName).
b. Length: Keep function and variable names within reasonable lengths for readability.
c. Clarity: Choose descriptive names that reflect the function's or variable's purpose. Avoid abbreviations unless they are widely understood (e.g., userIdis acceptable, but sDS for sendDataToServer is not).
2. Style and Spacing:
a. Indentation: Use consistent indentation with 2 spaces per level.
b. Comments: Add comments to explain complex logic and the purpose of non-obvious functions and variables. Keep comments concise and informative, avoiding unnecessary details.
c. Spacing: Use appropriate spacing between lines of code for readability. Avoid excessive blank lines or cramped code blocks.
3. Contribution Guidelines:
a. New Functions: When implementing new functions, follow the established naming conventions, style, and commenting practices.
b. Testing: Add unit tests to your code whenever possible. Tests are included in separate .js files and run automatically on every push using deploy.yml.
4. Code Review Process:
a. Version Control: Use feature branches for development and merge changes into the main branch through pull requests. Avoid pushing directly to main.
b. Commit Messages: Craft informative commit messages that describe the nature and extent of the changes you made.
c. Pull Requests:
4.1 Submit pull requests only when a feature is fully implemented or a bug is completely fixed.
4.2 Include a clear description in your pull request:
4.3 Briefly explain the original issue and its cause.
4.4 Describe the methods used to solve the issue.
4.5 Mention any encountered difficulties during the fix.
4.6 Only compare your branch to the main branch for pull requests.
4.7 Run tests before submitting a pull request to ensure the code change functions as expected.
5. Reviewing Pull Requests:
a. Reviewers should assess the code for adherence to these coding standards and overall quality.
b. Provide constructive feedback on the pull request, indicating:
    Whether the issue is fixed and adheres to standards.
    Suggestions for improvement if the merge is not approved.
    Advice on next steps or missing elements to complete the fix.


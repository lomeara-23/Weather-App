// displayError.test.js

test = ("displayError sets the error message content", () => {
    const errorMessage = "Test error message";
    const errorDisplay = document.createElement("p");
  
    displayError(errorMessage, errorDisplay);
  
    expect(errorDisplay.textContent).toBe(errorMessage);
    expect(errorDisplay.classList.contains("errorDisplay")).toBe(true);
  });
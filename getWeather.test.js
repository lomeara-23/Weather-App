/* global test expect */
// getWeatherData.test.js


test  = ("getWeatherData throws error for non-ok status code", async () => {
    // Mock the fetch function to return a response with non-ok status code
    const mockFetch = jest.fn().mockResolvedValueOnce(new Response(null, { status: 404 }));
    global.fetch = mockFetch;
  
    try {
      await getWeatherData("anyCity");
      fail("Expected error to be thrown");
    } catch (error) {
      expect(error.message).toEqual("Could not fetch weather data");
    } finally {
      // Restore original fetch function
      global.fetch = fetch;
    }
  });
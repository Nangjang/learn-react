// Import the timesTwo function from the functions module
import timesTwo from "./functions";

// Define a test suite for the timesTwo function
test("Multiplies by two", () => {
    // Call the timesTwo function with the argument 4 and expect the result to be 8
    expect(timesTwo(4)).toBe(8);
});
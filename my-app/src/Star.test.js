// Import the Star component from the Star module
import { Star } from "./Star";
// Import the render function from the @testing-library/react module
import { render } from "@testing-library/react";

// Define a test suite for the Star component
test("Renders an h1", () => {
    // Render the Star component and destructure the getByText function from the result
    const { getByText } = render(<Star />);
    // Use the getByText function to find an h1 element with the text "Cool Star"
    const h1 = getByText(/Cool Star/);
    // Assert that the h1 element contains the text "Cool Star"
    expect(h1).toHaveTextContent("Cool Star");
});
// Import the Checkbox component from the Checkbox module
import { Checkbox } from './Checkbox';
// Import fireEvent and render functions from @testing-library/react
import { fireEvent, render } from '@testing-library/react';

// Define a test suite for the Checkbox component
test("Checkbox toggles after click", () => {
  // Render the Checkbox component and destructure the getByLabelText function from the result
  const { getByLabelText } = render(<Checkbox />);
  
  // Get the checkbox input element by its label text
  const checkbox = getByLabelText(/Not Checked/);
  
  // Click the checkbox to toggle its state
  fireEvent.click(checkbox);
  
  // Expect the checkbox to be checked after the click
  expect(checkbox.checked).toEqual(true);
});
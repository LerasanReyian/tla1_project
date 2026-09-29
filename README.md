# Finals TLA 1 - React Income Category Ledger

## Project Overview
This project is a React refactor of the Midterm "Vanilla DOM Income Category Ledger." It uses Vite + React and replaces imperative DOM manipulation with declarative state management. 

## AI Implementation & Code Defense
*As required by the assignment, this section documents how AI was used and explains the underlying React logic.*

### How AI Helped
I used AI (specifically ChatGPT) to help translate the Vanilla JavaScript logic from the Midterm into React best practices. 
1. **State Initialization:** AI helped convert the direct DOM reading (`document.getElementById("txtCatName").value`) into React controlled components using `useState`.
2. **Dynamic Rendering:** AI helped refactor the `insertAdjacentHTML` approach into a declarative `.map()` method over a React state array.
3. **Creative Freedom (Delete Feature):** I asked AI to help me implement a "Delete" button for each row, which was not in the original Vanilla app, to demonstrate my understanding of array filtering in React state.

### How the React Code Works (Defense)
- **State Management (`useState`):**
  - `categories`: This array holds all the ledger data. Instead of adding rows to the HTML, we add objects to this array. React automatically re-renders the table whenever this array changes.
  - `catName` & `catDesc`: These strings are tied to the input fields' `value` attributes. This creates a "controlled component," meaning the UI reflects the state, and the state updates when the user types.
  - `error`: Replaces the `alert()` from the Vanilla app. If the user tries to submit an empty field, this state updates to show a Bootstrap danger alert.
- **Event Handling:**
  - `handleAddCategory`: This function intercepts the form submission (`e.preventDefault()`), validates the inputs, creates a new object with a unique ID (`crypto.randomUUID()`), and updates the `categories` state using the spread operator (`[...categories, newCategory]`).
  - `handleDeleteCategory`: This function takes an ID, uses `.filter()` to create a new array excluding that ID, and updates the state.
- **Declarative Rendering:**
  - Inside the `<tbody>`, we use `{categories.map((cat) => ...)}`. This loops through the state array and generates a `<tr>` for each category. This replaces the Vanilla `insertAdjacentHTML("beforeend", ...)` approach entirely.

## Features
- Add income categories with a name and description.
- Client-side validation (no empty fields).
- Delete existing categories.
- Responsive Bootstrap 5 styling.
- Real-time UI updates via React state.
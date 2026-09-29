# Finals TLA 1 - React Income Category Ledger (Gradient UI)

## Project Overview
This project is a modern React refactor of the Midterm "Vanilla DOM Income Category Ledger." It replaces the original imperative DOM manipulation (`document.getElementById`, `insertAdjacentHTML`) with declarative React state management (`useState`). 

To fulfill the "Creative Freedom" requirement, the application has been upgraded with a custom **Gradient UI**, a **Delete functionality**, and a **Dynamic Error Alert** system, all while maintaining the core baseline logic from the midterm.

## Tech Stack
- **Framework:** React (via Vite)
- **Styling:** Bootstrap 5 + Custom CSS (Gradients)
- **Deployment:** Vercel
- **Version Control:** Git / GitHub

## Features
- **Add Categories:** Input a category name and description to add it to the ledger.
- **Delete Categories:** Remove existing categories from the ledger (New feature).
- **Form Validation:** Rejects empty submissions and displays an inline error banner instead of a native `alert()`.
- **Empty State Handling:** Displays a friendly message when no categories are registered.
- **Gradient UI:** Custom CSS gradients applied to the background, card headers, and buttons for a modern, dynamic aesthetic.
- **Responsive Design:** Fully responsive layout using Bootstrap grid and utility classes.

---

## AI Implementation & Code Defense
*As required by the assignment, this section documents how AI was used and explains the underlying React logic.*

### How AI Helped Build This Project
I used AI (specifically ChatGPT) as a pair-programmer to help translate the Vanilla JavaScript logic from the Midterm into React best practices. Specifically, AI assisted with:
1. **Architecture Translation:** Converting the direct DOM reading (`document.getElementById("txtCatName").value`) into React controlled components using `useState`.
2. **Declarative Rendering:** Replacing the `insertAdjacentHTML` approach with a declarative `.map()` method over a React state array.
3. **Creative Freedom (New Features):** Brainstorming and implementing a "Delete" button for each row using array filtering, and replacing the Vanilla `alert()` with a dynamic Bootstrap error alert.
4. **UI Design Upgrade:** Generating the custom CSS `linear-gradient` classes to replace the default flat Bootstrap colors.

### How the React Code Works (Code Defense)

#### 1. State Management (`useState`)
Unlike the Vanilla app which read the DOM directly, this app relies on React state as the single source of truth:
- **`categories`**: An array of objects that holds all the ledger data. React automatically re-renders the table whenever this array changes.
- **`catName` & `catDesc`**: Strings tied to the input fields' `value` attributes. This creates a "controlled component," meaning the UI reflects the state, and the state updates instantly via the `onChange` handler when the user types.
- **`error`**: A string that conditionally renders a Bootstrap danger alert. It replaces the Vanilla `alert()` and provides a smoother user experience.

#### 2. Event Handling & Logic
- **`handleAddCategory`**: This function intercepts the form submission using `e.preventDefault()` (replacing the Vanilla `event.preventDefault()`). It performs a guard clause validation to ensure both fields are filled. If valid, it creates a new object with a unique ID (`crypto.randomUUID()`) and updates the `categories` state using the spread operator (`[...categories, newCategory]`). Finally, it resets the form inputs.
- **`handleDeleteCategory`**: This function takes an ID, uses the `.filter()` array method to create a new array excluding that ID, and updates the state. This demonstrates immutable state updates.

#### 3. Declarative Rendering
- Inside the `<tbody>`, we use `{categories.map((cat) => ...)}`. This loops through the state array and generates a `<tr>` for each category. This replaces the Vanilla `insertAdjacentHTML("beforeend", ...)` approach entirely.
- A conditional render (`categories.length === 0 ? ... : ...`) provides an "Empty State" row, which was not in the original Vanilla app.

#### 4. UI & Styling (Gradient UI)
To achieve the Gradient UI, I created custom CSS classes in `App.css`:
- **`.gradient-bg`**: Uses `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` for the main page background.
- **`.gradient-card-header`**: Applies the same gradient to the top of the form card.
- **`.gradient-btn` & `.gradient-btn-danger`**: Apply gradients to the Save and Delete buttons, respectively. They also feature a hover animation (`transform: translateY(-2px)`) and a soft shadow to make the UI feel interactive and modern.


# Finals TLA 1 - React Income Category Ledger (Gradient UI)

## Project Overview
This project is a modern React refactor of the Midterm "Vanilla DOM Income Category Ledger." It replaces the original imperative DOM manipulation (`document.getElementById`, `insertAdjacentHTML`) with declarative React state management (`useState`). 

To fulfill the "Creative Freedom" requirement, the application has been upgraded with a custom **Gradient UI**, a **Delete functionality**, and a **Dynamic Error Alert** system, all while maintaining the core baseline logic from the midterm.

## Tech Stack
- **Framework:** React (via Vite)
- **Styling:** Bootstrap 5 + Custom CSS (Gradients)
- **Deployment:** Vercel
- **Version Control:** Git / GitHub

## File Directory Structure
Below is the directory structure of the project. The main React application lives inside the `tla1_project` folder:

```text
📁 Root Workspace
├── 📁 node_modules/
├── 📄 .package-lock.json
├── 📁 tla1_project/            <-- Main React Application Folder
│   ├── 📁 node_modules/
│   ├── 📁 public/
│   ├── 📁 src/
│   │   ├── 📁 assets/
│   │   ├── 📄 App.css          # Custom Gradient UI styles
│   │   ├── 📄 App.jsx          # Main React component (State & Logic)
│   │   ├── 📄 index.css        # Global CSS
│   │   └── 📄 main.jsx         # React entry point (Bootstrap import)
│   ├── 📄 .gitignore
│   ├── 📄 eslint.config.js
│   ├── 📄 index.html
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   └── 📄 vite.config.js
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 README.md                <-- You are here
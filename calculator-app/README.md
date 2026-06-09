
<img width="1919" height="1029" alt="image_2026-06-09_21-43-00" src="https://github.com/user-attachments/assets/d74d17e0-989f-4189-83bd-b1feb1e21d43" />
# 🧮 Calculator

A sleek, iPhone-inspired calculator built with React + Vite as part of my frontend development internship at **CodeAlpha**.

---

## ✨ Features

- **Basic arithmetic** — addition, subtraction, multiplication, division
- **Live expression display** — shows the full expression (e.g. `5 + 3`) while you type
- **Keyboard support** — use your keyboard to type numbers and operators
- **Clear button** — reset everything with A/C
- **Dark iPhone-inspired UI** — clean, minimal design with orange accent buttons

### ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Number input |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` | Equals |
| `Escape` | Clear (A/C) |

---

## 🛠️ Tech Stack

- **React** — component-based UI
- **Vite** — fast development server and build tool
- **CSS** — custom styling with dark theme and smooth button effects
- **useState** — managing current input, previous input, and operator state
- **useEffect** — listening for keyboard events globally

---

## 📁 Project Structure

```
src/
  components/
    Display.jsx     # Shows the current expression or result
    ButtonGrid.jsx  # Renders all calculator buttons
  App.jsx           # Root component, holds all state and logic
  main.jsx          # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed

### Installation

```bash
# Clone the repo
git clone https://github.com/Brighto25/CodeAlpha_Calculator.git

# Navigate into the project
cd CodeAlpha_Calculator

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 📸 Screenshots




---

## 🧠 What I Learned

- **useState** — managing multiple related pieces of state (current input, previous input, operator) and how they interact
- **Conditional rendering** — showing the full expression on the display only when an operator is active
- **useEffect** — setting up and cleaning up global event listeners for keyboard input
- **Event handling** — mapping keyboard keys to calculator actions
- **Component separation** — keeping display logic and button logic in their own focused components
- **String to number conversion** — using `parseFloat()` to convert input strings before doing math

---
<img width="1919" height="1029" alt="image_2026-06-09_21-43-00" src="https://github.com/user-attachments/assets/3313382c-87c3-46f9-a381-1f73e5e33ac4" />



## 👨‍💻 Author

**Bright Kwame Addaney**
- GitHub: [@Brighto25](https://github.com/Brighto25)
- LinkedIn: [bright-addaney](https://linkedin.com/in/bright-addaney-83139b358)

---

## 🏢 Internship

Built as part of the **CodeAlpha Frontend Development Internship** — Task 2: Calculator.

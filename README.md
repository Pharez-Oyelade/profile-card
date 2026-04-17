# Profile Card Component

A small, accessible, and responsive profile card built using **semantic HTML, CSS, and vanilla JavaScript**.

This project demonstrates:

- Proper semantic structure
- Accessibility best practices (ARIA, keyboard navigation, focus states)
- Responsive layout
- Dynamic content updates using JavaScript

---

## 🚀 Features

- Semantic HTML structure (`article`, `header`, `nav`, `section`, `figure`)
- Accessible
- Keyboard navigation (Tab through all interactive elements)
- Responsive design (mobile-friendly)
- Live-updating epoch time (milliseconds)

---

## 📁 Project Structure

```
profile-card/
│── index.html
│── styles.css
│── script.js
└── README.md
```

---

## ⚙️ How to Run Locally

### Option 1: Open directly

1. Download or clone the project
2. Open the folder
3. Double-click `index.html`

---

### Option 2: Use a local development server

Running a local server avoids some browser restrictions and is closer to real-world usage.

#### Using VS Code (Live Server)

1. Open the project folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html`
4. Click **"Open with Live Server"**

---

## ⌨️ Accessibility & Keyboard Usage

You can fully navigate the card using your keyboard:

- Press `Tab` to move forward through elements
- Press `Shift + Tab` to move backward
- Press `Enter` on links to activate them

### Accessibility Highlights

- `aria-live="polite"` ensures screen readers announce time updates
- Proper heading structure for screen reader navigation
- Focus styles clearly visible

---

## 🧠 How It Works

### Time Display Logic

The current time (in milliseconds) is displayed on render:

```javascript
function updateTime() {
  const now = Date.now();
  timeElement.textContent = now;
}
```

---

## 🎨 Customization

You can easily modify:

- **Profile name** → `index.html`
- **Bio text** → `index.html`
- **Avatar image** → replace `img src`
- **Social links** → update anchor tags
- **Styles** → `styles.css`

---

## ⚠️ Notes

- No frameworks or libraries are used
- Designed for learning

---

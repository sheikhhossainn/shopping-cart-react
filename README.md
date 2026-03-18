# 🛒 Fresh Picks — React Shopping Cart

A modern shopping cart app built while learning React fundamentals from scratch.

---

## 🚀 Live Features

- Browse a product catalog with images, descriptions, and prices
- Add items to cart with a single click
- Toast notifications when items are added
- Remove items from cart
- Switch between shop and cart views
- Button color changes to confirm selection
- Responsive layout — 4 columns on desktop, 2 on mobile

---

## 🧠 What I Learned Building This

### React Fundamentals
- **Components** — breaking the UI into reusable, self-contained pieces
- **Props** — passing data and functions down from parent to child components
- **useState** — making the UI reactive when data changes
- **Lifting state up** — storing shared state in the closest common parent
- **Conditional rendering** — showing different UI based on state (shop vs cart view)
- **List rendering with .map()** — turning arrays into UI elements

### JavaScript Concepts
- **Array of objects** — structuring product data with id, name, price, image
- **Spread operator `...`** — creating new arrays without mutating the original
- **`.filter()`** — removing specific items from an array
- **`.reduce()`** — calculating totals from an array *(coming soon)*
- **Template literals** — dynamic strings using `${}`
- **Ternary operator** — inline if/else for conditional logic

### Data Flow Pattern
```
App.jsx  (state lives here)
├── Items.jsx       → receives items + addToCart as props
└── CartItems.jsx   → receives cart + removeFromCart as props
```

### Tooling & Libraries
- **Vite** — fast dev server and build tool
- **Tailwind CSS** — utility-first styling with responsive breakpoints
- **react-hot-toast** — toast notifications

---

## 📁 Project Structure

```
src/
├── assets/          # Product images
├── components/
│   ├── Items.jsx    # Product catalog
│   └── CartItems.jsx # Shopping cart
├── data/
│   └── items.js     # Product data array
├── App.jsx          # Root component, holds all state
└── index.css        # Tailwind import
```

---

## 🔮 What's Coming Next

- [ ] Total price calculation with `.reduce()`
- [ ] Empty cart message with conditional rendering
- [ ] `useEffect` — React's side effects hook
- [ ] React Router — proper page navigation
- [ ] Local Storage — persist cart between page refreshes

---

## 🛠️ Run Locally

```bash
npm install --legacy-peer-deps
npm run dev
```

---

## 💡 Key Concepts in One Line Each

| Concept | What it does |
|---|---|
| `useState` | Makes a variable reactive — UI updates when it changes |
| Props | Passes data/functions from parent to child |
| Lifting state up | Moves state to parent so multiple children can access it |
| Spread `...` | Copies array contents into a new array |
| `.filter()` | Returns a new array with some items removed |
| `.map()` | Transforms every item in an array into JSX |
| Ternary `? :` | Inline if/else for conditional rendering |

---

*Built with React + Vite + Tailwind CSS*
# React Router Practice App

This is a practical homework assignment (JSX ПРАКТИЧНА ДЗ 15) demonstrating the use of React Router DOM for client-side routing.

## 📋 Project Requirements (Completed)

✅ Install react-router-dom
✅ Create pages:
- Home
- About
- Contacts

✅ Implement navigation through Link
✅ Create a dynamic route `/product/:id`
✅ Display product ID using useParams
✅ Create a 404 error page

## 🎯 Features

- **React Router DOM**: Client-side routing without page refresh
- **Link Navigation**: Navigate between pages using the `Link` component
- **Dynamic Routes**: `GET /product/:id` to view product details
- **useParams Hook**: Extract URL parameters (product ID)
- **404 Page**: Fallback route for unknown URLs
- **Responsive Design**: Clean, modern UI with gradient background

## 🏗️ Project Structure

```
src/
├── App.jsx              # Main app with routing setup
├── App.css              # Global styles
├── index.js             # React entry point
├── index.css            # Global CSS
└── pages/
    ├── Home.jsx         # Home page
    ├── About.jsx        # About page
    ├── Contacts.jsx     # Contacts page with product links
    ├── Product.jsx      # Product page with useParams
    └── NotFound.jsx     # 404 error page
public/
├── index.html           # HTML template
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Key Concepts Used

### BrowserRouter
Wraps the application to enable routing functionality.

### Routes & Route
Define URL paths and their corresponding components.

### Link Component
Navigate between routes without full page reload.

```jsx
<Link to="/about">About</Link>
```

### useParams Hook
Extract dynamic route parameters:

```jsx
const { id } = useParams();
```

### Dynamic Routes
Create flexible route patterns:

```jsx
<Route path="/product/:id" element={<Product />} />
```

### Fallback Route
Catch all unmatched routes:

```jsx
<Route path="*" element={<NotFound />} />
```

## 🧪 Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/about` | About | About us page |
| `/contacts` | Contacts | Contact information with product links |
| `/product/:id` | Product | Product details (try /product/1, /product/2, /product/3) |
| `*` | NotFound | 404 page for unknown routes |

## 💾 Build & Deploy

Build the application for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📝 Notes

- The application uses React Router v6
- Dynamic products are stored in the Product component's local data
- The 404 page is displayed for any route not explicitly defined
- All navigation uses the `Link` component from react-router-dom

## 👨‍🎓 Educational Purpose

This project demonstrates:
- Component-based architecture
- Client-side routing patterns
- React hooks (useParams)
- Component composition
- Conditional rendering
- CSS styling in React

---

**Made with ❤️ for learning React Router**

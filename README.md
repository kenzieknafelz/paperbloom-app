# 📖 Paperbloom

> _Cultivate the garden of your mind._

Paperbloom is a personal reading companion app that helps you track your reading journey — from wishlisting books to logging reading sessions, writing journal entries, and leaving reviews.

---

## Features

- **Dashboard** — A central hub displaying your current read, latest journal entry, latest reading session, wishlist preview, and reviews at a glance
- **Progress Bar** — Track your reading progress by entering pages read and total pages for your current book
- **Book Wishlist** — Add books you want to read and select one as your current read
- **Reading Timer** — Time your reading sessions with an adjustable slider (10–120 min in 5 min increments). Completed sessions are logged automatically
- **Reading Sessions** — View a log of all completed reading sessions
- **Reviews** — Write and browse reviews for books you have read
- **Journal** — Write journal entries organized by book to capture your thoughts as you read

---

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool and dev server
- [React Router](https://reactrouter.com/) — Client side routing

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kenzieknafelz/paperbloom-app
cd paperbloom-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

---

## Project Structure

```
paperbloom-app/
├── public/
├── src/
│   ├── assets/
│   │   └── open-book.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Reviews.jsx
│   │   ├── ReviewForm.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Timer.jsx
│   │   ├── ReadingSessions.jsx
│   │   ├── JournalForm.jsx
│   │   └── JournalEntries.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── ReviewsPage.jsx
│   │   ├── WishlistPage.jsx
│   │   ├── SessionsPage.jsx
│   │   └── JournalPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## Pages

| Route       | Page             | Description                       |
| ----------- | ---------------- | --------------------------------- |
| `/`         | Dashboard        | Overview of all features          |
| `/reviews`  | Reviews          | All book reviews                  |
| `/wishlist` | Wishlist         | Full book wishlist                |
| `/sessions` | Reading Sessions | Log of completed reading sessions |
| `/journal`  | Journal          | Journal entries organized by book |

---

## Future Features

- User authentication
- Persistent data storage with a database
- Search and filter for reviews and journal entries
- Reading goals and statistics
- Book cover images via a books API

---

## Author

Your Name — [@kenzieknafelz] (https://github.com/kenzieknafelz)

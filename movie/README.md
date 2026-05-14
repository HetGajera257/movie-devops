# 🎬 CineVerse — Movie Search App

A **Netflix-style** movie search app built with **React + Vite + Tailwind CSS**, powered by the **OMDB API**.

![Tech Stack](https://img.shields.io/badge/React-19-61dafb?logo=react) ![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss) ![Docker](https://img.shields.io/badge/Docker-ready-2496ed?logo=docker)

---

## ✨ Features

- 🔍 Search movies by name (OMDB API)
- 🖼 Movie poster, title, release year, IMDB rating, type
- ⚡ Staggered card animations & hover glassmorphism overlay
- 🎯 Trending quick-search tags
- 💀 Loading spinner, error handling, empty states
- 📱 Fully responsive (mobile → 4K)
- 🌙 Dark Netflix-style UI

---

## 🗂 Folder Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   └── Footer.jsx
├── pages/
│   └── Home.jsx
├── services/
│   └── omdbApi.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### 1. Clone
```bash
git clone YOUR_GITHUB_REPO_URL
cd movie
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment
```bash
cp .env.example .env
# Edit .env and add your OMDB API key
# Get a free key at: https://www.omdbapi.com/apikey.aspx
```

### 4. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

---

## 🐳 Docker Deployment

```bash
# Build image
docker build -t movie-search-app .

# Run container
docker run -d -p 3000:3000 --name movie-container movie-search-app

# Open
open http://localhost:3000
```

---

## 🔧 Jenkins CI/CD

1. Replace `YOUR_GITHUB_REPO_URL` in `Jenkinsfile`
2. Add `VITE_OMDB_API_KEY` as a Jenkins credential/env variable
3. Create a Pipeline job pointing to this repo's `Jenkinsfile`

---

## ☁️ AWS EC2 Deployment

```bash
# On EC2 (Amazon Linux 2 / Ubuntu):
sudo yum install docker -y && sudo service docker start
# OR: sudo apt install docker.io -y && sudo systemctl start docker

git clone YOUR_GITHUB_REPO_URL && cd movie
docker build -t movie-search-app .
docker run -d -p 80:3000 --name movie-container movie-search-app
# Open your EC2 public IP in the browser
```

> Make sure port **80** (or 3000) is open in your EC2 Security Group.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS 4 + Custom CSS |
| HTTP | Axios |
| API | OMDB API |
| Container | Docker (multi-stage) |
| CI/CD | Jenkins |
| Hosting | AWS EC2 |

---

## 📄 License

MIT © CineVerse

# 🏨 Housing Search App

A responsive web app for browsing and filtering hotels, built with **React**, **TypeScript**, and **Vite**. Includes amenities filtering, currency switching, image galleries, and pagination. Deployed via GitHub Pages.

## 🔗 Live Demo

👉 [View Live Site](https://EvgeniyaKalinichenko.github.io/Housing_search/)

---

## ✨ Features

- 🔍 **Search Filters**
  - Location
  - Price range
  - Rating
  - Amenities (Wi-Fi, parking, pool, etc.)
- 💱 **Currency Switcher** — USD / CAD
- 🖼️ **Property Gallery** — main + additional images
- 📊 **Pagination** with `react-paginate`
- 🌎 **Images from Pexels API**
- 💡 Custom UI components using SCSS Modules

---

## 🛠️ Tech Stack

- ⚛️ React + TypeScript
- ⚡ Vite
- 🔁 React Router
- 🔢 react-paginate
- 🎨 react-icons
- 🧩 SCSS Modules
- 🚀 gh-pages (deployment)

---

## 📁 Project Structure


src/ <br> ├── assets/ // images and fonts <br> ├── components/ // reusable UI components (Card, Button, Modal, etc.) <br> ├── pages/ // route-based pages (MainPage, SearchPage, etc.) <br> ├── mock_properties.json // mock data for property listings <br> ├── types.ts // shared TypeScript types <br> ├── App.tsx // main app component <br> └── vite.config.ts // Vite config with base path for GitHub Pages

---

## 🙋‍♀️ About the Developer

**Evgeniia Kalinichenko**  
Frontend Developer based in Canada 🇨🇦

- [LinkedIn →](https://www.linkedin.com/in/evgeniia-kalinichenko)  
- [GitHub →](https://github.com/EvgeniyaKalinichenko)


## 🚀 Getting Started

Install dependencies:

```bash

npm install

Start the dev server:

npm run dev

Build and deploy to GitHub Pages:

npm run build

npx gh-pages -d dist -b gh-pages


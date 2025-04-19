# 🏨 Housing Search App

A responsive web app for browsing and filtering hotels, built with **React**, **TypeScript**, and **Vite**. Includes amenities filtering, currency switching, image galleries, and pagination. Deployed via GitHub Pages.

## 🔗 Live Demo

👉 [View Live Site](https://EvgeniyaKalinichenko.github.io/housing_search_project/)

## ✨ Features

- 🔍 **Search Filters**
  - Location
  - Price range
  - Rating
  - Amenities (Wi-Fi, parking, pool, etc.)
- 💱 **Currency Switcher** — USD / CAD
- 🖼️ **Property Gallery** — with main and additional images
- 📊 **Pagination** with `react-paginate`
- 🌎 **Images from Pexels API**
- 💡 Custom UI components with SCSS modules

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Vite**
- **React Router**
- **react-paginate**
- **react-icons**
- **SCSS Modules**
- **gh-pages** for deployment

## 📁 Project Structure


src/ ├── assets/ // images and fonts ├── components/ // reusable UI components (Card, Button, Modal, etc.) ├── pages/ // route-based pages (MainPage, SearchPage, etc.) ├── mock_properties.json // mock data for property listings ├── types.ts // shared TypeScript types ├── App.tsx // main app component └── vite.config.ts // Vite config with base path for GitHub Pages


## 🚀 Getting Started

Install dependencies:

```bash
npm install

Start the dev server:

npm run dev

Build and deploy to GitHub Pages:

npm run build
npx gh-pages -d dist -b gh-pages

## 🙋‍♀️ About the Developer

**Evgeniia Kalinichenko**  
Frontend Developer based in Canada 🇨🇦

- [LinkedIn](https://www.linkedin.com/in/evgeniia-kalinichenko)
- [GitHub](https://github.com/EvgeniyaKalinichenko)

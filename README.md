# Jeju Travel Planner (济州岛玻璃海行程规划)

A personalized travel planner for Jeju Island, designed with a high-fidelity Glassmorphism UI. This tool is crafted to provide a visually stunning and intuitive experience for planning a healing journey.

## Features

- **Glassmorphism UI**: A beautiful, translucent interface with a "Glass Sea" theme that is both modern and calming.
- **Interactive Map**: A fully interactive map (powered by Leaflet) that visualizes your itinerary with markers and routes.
- **Attraction Library**: A curated list of Jeju's finest spots, from natural wonders to cozy cafes, complete with real images and Korean names.
- **Drag & Drop Itinerary**: Easily build your daily schedule by dragging attractions from the library to your timeline.
- **Dynamic Transit Times**: Get real-time driving duration estimates between attractions using the Google Maps Distance Matrix API.
- **Persistent State**: Your itinerary is automatically saved to your browser's LocalStorage, so your plans are safe even after closing the tab.
- **Markdown Export**: Export your final itinerary as a clean, formatted Markdown file for easy sharing and printing.

## Tech Stack

- **Framework**: Next.js (with App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand (with `persist` middleware)
- **Mapping**: React Leaflet & Google Maps API
- **Icons**: Lucide React

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/wwyqianqian/jeju_travel.git
    cd jeju_travel
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project by copying the example file:
    ```bash
    cp .env.example .env.local
    ```
    You **must** add your own Google Maps API Key to the `.env.local` file to enable the real-time driving duration feature.
    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

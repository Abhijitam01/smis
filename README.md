# Safety Information Management System (SIMS)

A digital initiative for enhancing safety in Indian Railways - developed by Centre for Railway Information Systems (CRIS).

## 🚂 Project Overview

This is a modern React-based web application designed to manage and monitor railway safety information with real-time capabilities and comprehensive safety oversight features.

## 🛠 Technology Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3 + Bootstrap 5
- **Icons**: Font Awesome
- **Development Server**: Vite Dev Server

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **pnpm** (recommended)
- **Git**

## 🚀 Getting Started

### Step 1: Clone the Repository
```bash
git clone https://github.com/Abhijitam01/smis.git
cd smis
```

### Step 2: Install Dependencies
```bash
# Using npm
npm install

# OR using pnpm (recommended)
pnpm install
```

### Step 3: Set up Public Assets
```bash
# Create public directory and copy image assets
mkdir -p public
cp *.jpeg *.png public/
```

### Step 4: Start Development Server
```bash
# Using npm
npm run dev

# OR using pnpm
pnpm run dev
```

### Step 5: Open in Browser
- Open your browser and navigate to: `http://localhost:5173/`
- The application should now be running with all features

## 📁 Project Structure

```
pranay-ece/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Main header with government styling
│   │   ├── HeroCarousel.jsx # Image carousel with railway content
│   │   ├── Sidebar.jsx    # Navigation sidebar
│   │   ├── Footer.jsx     # Footer component
│   │   └── ...
│   ├── pages/            # Page components
│   ├── App.jsx           # Main application component
│   ├── App.css          # Global styles
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎯 Features

- **Government-styled Header** with official logos and branding
- **Interactive Hero Carousel** with railway safety content
- **Responsive Design** for all device sizes
- **Smooth Animations** and transitions
- **Partner Logos Section** with government organizations
- **Safety Information Management** dashboard
- **Real-time Monitoring** capabilities

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚨 Troubleshooting

### Images not loading
- Ensure all `.jpeg` and `.png` files are in the `public/` directory
- Check browser console for 404 errors

### Port already in use
- Vite will automatically use the next available port
- Check terminal output for the correct port number

### Dependencies issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is developed by Centre for Railway Information Systems (CRIS), Government of India.

## 📞 Support

For support and queries, contact:
- **Organization**: Centre for Railway Information Systems (CRIS)
- **Project**: Safety Information Management System
- **Government of India**

---

**Note**: This application is part of Digital India initiative for enhancing railway safety management across the Indian Railways network. 
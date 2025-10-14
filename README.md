# My Portfolio

A modern, responsive portfolio website showcasing projects and skills, built with React and deployed on GitHub Pages.

**Live Site:** [https://alan13mathew.github.io/alan-portfolio](https://alan13mathew.github.io/alan-portfolio/)

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Motion** - Animation library
- **React Router DOM** - Client-side routing with HashRouter for GitHub Pages compatibility
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Alan13Mathew/alan-portfolio.git
cd alan-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Build and deploy to GitHub Pages

## 🌐 Deployment

This project uses **GitHub Pages** with `HashRouter` for client-side routing compatibility.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This script will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

### Important Notes

- The app uses `HashRouter` from React Router to ensure proper routing on GitHub Pages (the URL will include `#` for routes)
- The `homepage` field in `package.json` is set to your GitHub Pages URL
- Each deployment updates your live site at `https://Alan13Mathew.github.io/alan-portfolio`


## 🎨 Features

- Responsive design optimized for mobile, tablet, and desktop
- Smooth animations using Motion library
- Fast performance with Vite
- Modern UI with Tailwind CSS
- Easy icon integration with Lucide React
- Code quality maintained with ESLint

## ⚙️ Configuration

### Vite Configuration
The project uses Vite with React plugin for fast development and optimized builds.

### Tailwind CSS
Tailwind CSS is configured with the Vite plugin for optimal integration and performance.

### ESLint
ESLint is configured for React and React Hooks to maintain code quality.

## 🔄 Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and test locally: `npm run dev`
3. Lint your code: `npm run lint`
4. Commit and push your changes
5. Create a pull request to the main branch

## 📝 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in your `App.jsx` using HashRouter
3. Update navigation as needed

### Styling

- Use Tailwind CSS utility classes for styling
- Customize Tailwind config in `tailwind.config.js`
- Global styles can be added to `src/index.css`

### Animations

Use the Motion library to add smooth animations to components. Refer to the [Motion documentation](https://motion.dev) for usage examples.

## 🐛 Troubleshooting

### Routes not working after deployment
- Ensure you're using `HashRouter` from React Router (this is already configured)
- Verify the `homepage` URL in `package.json` matches your GitHub Pages URL

### Styles not loading
- Clear the browser cache
- Rebuild the project: `npm run build`

### Build fails
- Delete `node_modules` and reinstall: `npm install`
- Clear Vite cache: `rm -rf dist`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Alan Mathew**
- GitHub: [@Alan13Mathew](https://github.com/Alan13Mathew)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Alan13Mathew/alan-portfolio/issues).

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [Motion Documentation](https://motion.dev)
- [GitHub Pages Documentation](https://pages.github.com)

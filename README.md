# Elite Cricket Club - Demo Website

A polished, single-page demo/portfolio website for a cricket club featuring a Royal Red (#B30000) and Carbon Black (#252627) color scheme, smooth animations, scroll-driven reveals, and a simulated contact form.

## 🎨 Features

- **Stunning Hero Animation**: Smooth SVG-based cricket ball animation with particle effects and parallax scrolling
- **Scroll Reveal Animations**: Elements fade in and slide up as you scroll through the page
- **Works Gallery**: Showcase of 6 cricket events/matches with detailed modal views
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Contact Form**: Functional form with client-side validation and localStorage persistence
- **Accessibility**: Keyboard navigation, focus management, and reduced-motion support
- **Premium Design**: Modern, sporty aesthetic with smooth transitions and micro-animations

## 🚀 Quick Start

### Option 1: Open Directly in Browser
Simply open `index.html` in your web browser. That's it!

### Option 2: Use a Live Server (Recommended)
For the best experience, use a local development server:

**Using VS Code Live Server:**
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

**Using Node.js:**
```bash
npx serve
```

## 📁 Project Structure

```
JDY/
├── css/
│   ├── styles.css          # Design system and base styles
│   └── components.css      # Component-specific styles
├── js/
│   ├── main.js            # Navigation and initialization
│   ├── hero-animation.js  # Hero SVG animation
│   ├── scroll-reveal.js   # Scroll-based reveal animations
│   ├── data.js            # Mock cricket event data
│   ├── works.js           # Works gallery and modal
│   └── contact.js         # Contact form handler
├── assets/
│   ├── icons.svg          # SVG icon sprite
│   └── images/            # Placeholder for images
├── index.html             # Main HTML file
├── README.md              # This file
└── .gitignore            # Git ignore rules
```

## 🎯 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks or dependencies
- **SVG**: Scalable vector graphics for icons and animations

## 🎨 Customization

### Changing Colors

Edit the CSS custom properties in `css/styles.css`:

```css
:root {
    --color-royal-red: #B30000;
    --color-carbon-black: #252627;
    --color-gold: #D4AF37;
    /* ... more colors */
}
```

### Editing Cricket Events

Modify the `cricketWorks` array in `js/data.js`:

```javascript
const cricketWorks = [
    {
        id: 1,
        title: "Your Event Title",
        date: "2024-12-01",
        category: "tournament", // or "match" or "event"
        description: "Short description...",
        detailedDescription: "Long description...",
        stats: {
            runs: 300,
            wickets: 8,
            overs: 50
        }
    },
    // ... more events
];
```

### Changing Club Name

1. Update the text in `index.html` (search for "Elite Cricket Club")
2. Update the `<title>` tag in the `<head>` section
3. Update the meta description

### Adding Real Images

Replace the SVG placeholders with real images:

1. Add your images to the `assets/images/` folder
2. Update the `thumbnail` property in `js/data.js`
3. Update the image placeholders in `index.html`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management in modals
- Color contrast meets WCAG AA standards
- Reduced motion support for users who prefer less animation

## 🚀 Deployment

This is a static website and can be deployed to any static hosting service:

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and root folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the entire project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your Git repository for continuous deployment

### Vercel
```bash
npx vercel
```

### Other Options
- Firebase Hosting
- AWS S3 + CloudFront
- Any web hosting service with static file support

## 📝 Form Submissions

The contact form currently saves submissions to the browser's localStorage. To view submissions:

1. Open browser Developer Tools (F12)
2. Go to the Console tab
3. Type: `JSON.parse(localStorage.getItem('cricketClubSubmissions'))`

To implement a real backend:
1. Set up a server (Node.js/Express, Python/Flask, etc.)
2. Create an API endpoint to receive form data
3. Update `js/contact.js` to POST to your API instead of localStorage

## 🎓 Learning Resources

This project demonstrates:
- Modern CSS techniques (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript DOM manipulation
- Intersection Observer API for scroll animations
- SVG animations with JavaScript
- Form validation and handling
- Accessibility best practices
- Responsive design patterns

## 📄 License

This is a demo project. Feel free to use it as a template for your own cricket club or sports website.

## 🤝 Contributing

This is a demo/portfolio project, but suggestions and improvements are welcome!

## 📧 Contact

For questions or support, use the contact form on the website (submissions are saved to localStorage for demo purposes).

---

**Built with ❤️ for cricket enthusiasts**

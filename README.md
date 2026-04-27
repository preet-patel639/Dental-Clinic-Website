# White & Bright Dental Clinic Website

A modern, professional dental clinic website built with React.js and Tailwind CSS, featuring an AI-powered chatbot for patient assistance.

## 🌟 Features

- **Modern UI/UX Design**: Clean, professional white background with blue and gold accents
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes
- **6 Complete Pages**:
  - Home (Hero, Services, Statistics, Process, Testimonials)
  - About Us (Doctor profile, Mission & Vision)
  - Services (All dental treatments)
  - Contact (Form, Map, Contact info)
  - Book Appointment (Full booking form with validation)
  - Blog (Dental health articles)
- **AI Chatbot**: Intelligent chatbot powered by OpenRouter API
- **Smooth Animations**: Professional transitions and hover effects
- **SEO Friendly**: Optimized structure and meta tags

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "d:\Dental Clinic Website\Dentist Website"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   ```bash
   copy .env.example .env
   ```
   - Open `.env` and add your OpenRouter API key:
   ```
   VITE_OPENROUTER_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
Dentist Website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Chatbot.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Appointment.jsx
│   │   └── Blog.jsx
│   ├── data/             # Data files
│   │   └── data.json
│   ├── styles/           # CSS files
│   │   └── index.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── .env.example          # Environment variables template
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🤖 AI Chatbot Setup

The chatbot uses OpenRouter API to provide intelligent responses about clinic services, timings, and dental advice.

### Getting OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for a free account
3. Navigate to API Keys section
4. Generate a new API key
5. Add it to your `.env` file

### Chatbot Features

- Natural language understanding
- Context-aware responses using clinic data
- Information about services, timings, and appointments
- Dental health advice
- Smooth animations and modern UI

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { /* Blue shades */ },
  gold: { /* Gold accents */ }
}
```

### Clinic Information

Edit `src/data/data.json` to update:
- Clinic details
- Services
- Working hours
- Testimonials
- Statistics

## 📦 Build for Production

```bash
npm run build
```

The build files will be in the `dist/` directory.

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Add environment variables in Vercel dashboard

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist/` folder to Netlify

3. Add environment variables in Netlify dashboard

## 🛠️ Technologies Used

- **React.js** - UI library
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Vite** - Build tool
- **Lucide React** - Icons
- **OpenRouter API** - AI chatbot

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's dark mode feature. Toggle button is available in the navbar.

## 📞 Support

For any issues or questions, contact:
- **Phone**: 082383 43267
- **Email**: info@whitebright.com

## 📄 License

This project is created for White & Bright Dental Clinic.

---

**Built with ❤️ for White & Bright Dental Clinic**

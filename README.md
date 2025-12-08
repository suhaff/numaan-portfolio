# Numaan Suhaff – Portfolio Website
A modern, 3D interactive personal portfolio built using Next.js, React, and Three.js.  
This website is designed to be visually engaging, fully responsive, and informative, showcasing projects, skills, experience, and a functional contact system powered by a backend email API.

## Overview
This project is a complete redesign of my original portfolio, rebuilt as a dynamic, scroll-driven experience with 3D visuals and smooth animations.  
It highlights my work in AI, backend development, anomaly detection, real-time systems, academic projects, and personal projects.

The website features:
- A 3D animated background using Three.js
- Smooth page transitions and scroll-triggered animations
- Detailed About, Skills, Projects, and Contact sections
- A working email form integrated with Gmail SMTP through a secure backend API
- Clean UI designed to feel modern, minimal, and expressive

## Features

### 1. Three.js Background
A custom-built animated 3D scene that runs behind the content, creating depth without affecting performance.

### 2. Scroll Reveal Animations
Sections animate into view using IntersectionObserver for smooth and efficient transitions.

### 3. Fully Responsive Layout
Optimized for desktop, tablet, and mobile devices.

### 4. Project Showcase
Highlights key projects such as:
- Continual Anomaly Detection using ViT + DNE
- Real-Time Sentiment Analysis API
- Smart Tasks (JavaFX desktop application)
- 2nd of August personal website project

### 5. Backend Email System
A secure contact form that sends messages directly to my Gmail inbox using:
- Next.js API Routes
- Nodemailer
- Gmail App Password authentication
- Environment variables stored in `.env.local`

### 6. Clean Architecture
- Next.js App Router
- Component-based structure
- Separate 3D background component
- Isolated contact API route
- CSS-based styling with utility classes

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- Three.js
- CSS

### Backend
- Nodemailer
- Next.js API Routes
- Google App Password SMTP authentication

### Tools
- VS Code
- Git & GitHub
- Node.js

## Installation and Setup

### 1. Clone the repository
```
git clone https://github.com/suhaff/numaan-portfolio.git
cd numaan-portfolio
```

### 2. Install dependencies
```
npm install
```

### 3. Create environment variables
Create `.env.local`:

```
MAIL_USER=yourgmail@gmail.com
MAIL_PASS=yourgeneratedapppassword
```

### 4. Run development server
```
npm run dev
```

Open:
```
http://localhost:3000
```

## Contact Form Backend
Located at:
```
src/app/api/contact/route.ts
```

Handles POST requests and sends formatted emails via Gmail SMTP.

## Deployment
Recommended host: Vercel.

Add environment variables under Project Settings → Environment Variables, then deploy directly from the GitHub repository.

## Project Structure
```
/src
  /app
    /api
      /contact
        route.ts
    page.tsx
  /components
    ThreeBackground.tsx

/public
  favicon.ico
```

## License
Created by Numaan Suhaff.  
For personal learning and inspiration only.

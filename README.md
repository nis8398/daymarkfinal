# Daymark — Unified Daily Activity System

> **Navigate your day with clarity.** Plan your day. Build your habits. Follow your rituals. Master your time.

**Daymark** is a mobile-first daily productivity and execution platform built with React 19, TypeScript, and Tailwind CSS. It solves the modern fragmentation problem where users juggle separate apps for tasks, habits, routines, and time tracking by unifying all daily actions into a single cohesive **TODAY** workflow.

---

## ⚡ Key Features

- **🧭 Today Command Center:** Consolidated daily progress ring, live stopwatch ticker, priority focus actions, and ritual completion indicators.
- **✅ Priority Tasks Engine:** Rank actions by urgency (Urgent, High, Medium, Low), estimate vs. actual time comparison, and 1-tap timer launch.
- **🔥 Habit Consistency & Streaks:** 7-day visual consistency matrix, streaks tracker, and **Streak Freeze / Rest Day** grace mechanism.
- **⏱️ Live Time Ledger:** Stopwatch, Pomodoro & Deep Work intervals, categorical allocation breakdown, and historical audit ledger.
- **🔁 Interactive Routine Stepper:** Step-by-step runner for Morning, Deep Work, and Evening routines that automatically syncs with linked habits and tasks.
- **✨ End-of-Day Review:** Evening reflection scorecard, 5-star energy rating, and celebratory feedback loop.
- **👥 Role & Delegation Mode:** Seamless switching between Executive (CEO) and Personal Assistant modes with remote delegation and briefing sync.
- **💾 Offline-First Local Storage:** Instant client-side persistence with defensive migrations and automatic multi-tab synchronization.
- **🎨 Dark & Light Mode:** Tailored theme transitions with high-contrast UI and sound feedback toggle.
- **📱 PWA & Mobile Optimized:** Installable to iOS and Android home screens as a native-feeling progressive web app.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/) & [Canvas-Confetti](https://www.kirilv.com/canvas-confetti/)
- **Backend / Proxy:** [Express](https://expressjs.com/) with TypeScript execution (`tsx`)

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or bun

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/daymark-daily-activity-system.git
cd daymark-daily-activity-system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📦 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Express server with Vite middleware on `http://localhost:3000` |
| `npm run build` | Compiles TypeScript and creates optimized production assets in `dist/` |
| `npm run preview` | Previews the production build locally via Vite |
| `npm run lint` | Runs `tsc --noEmit` to validate all TypeScript types |
| `npm start` | Starts the production Node.js server |

---

## 🌐 Deploy to Production

### Deploy on Vercel
1. Import your GitHub repository into [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

### Deploy on Netlify
1. Connect your GitHub repository to [Netlify](https://netlify.com).
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Deploy!

### Deploy on Cloudflare Pages
1. In Cloudflare Dashboard, go to **Workers & Pages** → **Create application** → **Pages**.
2. Connect your GitHub repo.
3. Select **Vite** preset:
   - Build command: `npm run build`
   - Build output: `dist`
4. Save and deploy.

---

## 📁 Repository Structure

```
daymark/
├── public/                  # Static assets, vector icons, manifest
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header & controls
│   │   ├── BottomNav.tsx    # 5-tab mobile navigation bar
│   │   ├── StickyTimerBar.tsx # Global active timer pill
│   │   ├── views/
│   │   │   ├── TodayView.tsx   # Command center & daily overview
│   │   │   ├── TasksView.tsx   # Filterable priority task manager
│   │   │   ├── HabitsView.tsx  # 7-day habit matrix & streaks
│   │   │   ├── TimeView.tsx    # Chronological time ledger & timers
│   │   │   ├── MoreView.tsx    # Data backup, routines & settings
│   │   │   └── AdvisorView.tsx # System diagnostics & architecture
│   │   └── modals/          # Task, habit, routine & review modals
│   ├── context/
│   │   └── DaymarkContext.tsx  # Central state management & storage sync
│   ├── lib/
│   │   ├── seedData.ts      # Default seed templates
│   │   └── sound.ts         # Web Audio API sound triggers
│   ├── types/
│   │   └── index.ts         # TypeScript data contracts & enums
│   ├── App.tsx              # Shell & modal container
│   ├── index.css            # Tailwind CSS imports & theme styling
│   └── main.tsx             # React entry point
├── index.html               # Main HTML entry point
├── server.ts                # Express backend server
├── vite.config.ts           # Vite build configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── LICENSE                  # MIT License
```

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

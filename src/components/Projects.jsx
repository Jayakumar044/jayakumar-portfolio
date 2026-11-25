import { useState, useEffect } from 'react'
import SectionHeader from './SectionHeader'
import appStoreGif from '../assets/images/appstore.gif'
import libraryManagementGif from '../assets/images/librarymanagement.gif'
import ProposalImg from '../assets/images/Proposal.png'
import LibraryBackendImg from '../assets/images/library_backend.png'
import SkywayAIImg from '../assets/images/Skyway_AI.png'
import SellooImg from '../assets/images/selloo.png'
import NammaKarthikeyanImg from '../assets/images/nammakarthikeyan.png'
import ClyyoraImg from '../assets/images/clyyora.jpg'

const projects = [
  {
    number: '01',
    category: 'Frontend',
    title: 'Library Management CCBP',
    tagline: 'A comprehensive book search and management application.',
    description:
      'A responsive library management application that allows users to search for books, view details, and manage their reading list. Integrated with external APIs for real-time book data.',
    image: libraryManagementGif,
    github: 'https://github.com/Jayakumar044/PopularBooks-ccbp',
    live: 'https://librarysearchs.ccbp.tech/',
    highlights: [
      'External API Integration for real-time data',
      'Advanced Search & Category Filtering',
      'Persistent State for user library',
      'Framer Motion smooth scroll animations',
      'Deep linking & dynamic book details',
    ],
    accent: '#4f8bff',
    accent2: '#a855f7',
    tags: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    number: '02',
    category: 'Frontend',
    title: 'App Store CCBP',
    tagline: 'A feature-rich app store clone built with React.',
    description:
      'A responsive App Store application featuring category filtering, search functionality, and a premium UI. Built to demonstrate proficiency in state management and component composition.',
    image: appStoreGif,
    github: 'https://github.com/Jayakumar044/appStore-ccbp',
    live: 'https://appstoreslive.ccbp.tech/',
    highlights: [
      'Dynamic Tab-based app categorization',
      'Real-time Search UI updates',
      'Reusable component-driven architecture',
      'Premium UI Micro-interactions',
      'Optimized Mobile viewport experience',
    ],
    accent: '#a855f7',
    accent2: '#06b6d4',
    tags: ['React', 'JavaScript', 'CSS3'],
  },
  {
    number: '01',
    category: 'Fullstack',
    title: 'Proposal Matrimony',
    tagline: 'Premium Full-Stack Matchmaking & Profile Management Platform',
    description:
      'A premium full-stack matchmaking web application designed with user onboarding, advanced match searching, dynamic client dashboards, and a robust administrator control panel.',
    image: ProposalImg,
    github: 'https://github.com/Jayakumar044/proposal-app',
    live: 'https://proposal-team.vercel.app/',
    highlights: [
      'Secure User Auth (JWT & Bcrypt) & password recovery onboarding.',
      'Advanced Search filters matching location, religion, and occupation.',
      'Comprehensive Admin Dashboard for management, verification, and analytics.',
      'MySQL & TiDB database design with Sequelize ORM relationships.',
      'Dynamic responsive frontend design with Tailwind and Recharts visualization.',
    ],
    accent: '#06b6d4',
    accent2: '#4f8bff',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
  },
  {
    number: '01',
    category: 'Backend',
    title: 'Library Management API',
    tagline: 'Role-Based Access Control RESTful API for Catalog & Member Operations',
    description:
      'A robust backend REST API built with Node.js, Express, and MongoDB. Highlights modular architecture supporting user authentication, librarian-only catalog adjustments, member query limits, and automated transaction logging.',
    image: LibraryBackendImg,
    github: 'https://github.com/Jayakumar044/library-management-system',
    live: 'https://github.com/Jayakumar044/library-management-system#api-documentation',
    highlights: [
      'MongoDB & Mongoose schemas tracking users, catalog, activity & borrows.',
      'Role-Based Access Control (RBAC) protecting librarian vs user routes.',
      'Secure JWT authentication & bcrypt.js password encryption.',
      'Modular MVC architecture separating controllers, routes, and middleware.',
      'Custom input validators and global error handling middleware.',
    ],
    accent: '#a855f7',
    accent2: '#4f8bff',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Mongoose'],
  },
  {
    number: '01',
    category: 'AI Engineer',
    title: 'Skyway AI',
    tagline: 'AI Travel Planner Crafting Personalized Gemini-Powered Itineraries',
    description:
      'A professional, production-ready full-stack application that crafts personalized travel experiences using Google Gemini AI. Features a high-class UI/UX, robust security, and smart itinerary management.',
    image: SkywayAIImg,
    github: 'https://github.com/Jayakumar044/skyway-travel-ai-planner',
    live: 'https://skyway-travel-ai-planner.vercel.app/',
    highlights: [
      'Generates complete day-by-day itineraries, budget breakdowns, and hotel recommendations using Gemini 2.0 Flash.',
      'Dedicated Trip Export & Printing system, transforming interactive dashboards into physical travel-ready prints.',
      'Interactive Explorer Profile supporting identity management, custom travel bios, and stats.',
      'Centralized validation layer utilizing Zod schemas for backend request safety & clean UI forms.',
      'Premium security architecture featuring Helmet secure headers and Express rate limiting middleware.',
    ],
    accent: '#06b6d4',
    accent2: '#4f8bff',
    tags: ['Next.js', 'TypeScript', 'Gemini AI', 'MongoDB', 'Node.js'],
  },
  {
    number: '01',
    category: 'Freelance',
    title: 'Selloo',
    tagline: 'Unified Hyperlocal C2C Marketplace & B2B Wholesale Mobile App',
    description:
      'A production-ready React Native & Expo mobile application unifying hyperlocal C2C classifieds and B2B wholesale industrial trade. Built with Supabase PostgreSQL + PostGIS spatial matching, real-time WebSocket negotiation chat, and a Super Admin control center.',
    image: SellooImg,
    live: 'https://expo.dev/accounts/clyyoras-team/projects/marketplace/builds/bb4728db-f9fc-4210-85ae-722bb50ab1f5',
    liveLabel: 'VIEW BUILD / APK',
    highlights: [
      'Dual C2C & B2B marketplace with PostGIS & Haversine hyperlocal distance matching',
      'Real-time 1-to-1 negotiation chat, price offers & counter-offers via Supabase Realtime',
      'Wholesale B2B supplier KYC/GSTIN verification & tiered volume pricing slabs',
      'Multi-factor hyperlocal ranking & native ad delivery engine with freshness decay',
      'OWASP MASVS Level 2 hardening, input sanitization, Hermes AOT & Super Admin moderation',
    ],
    accent: '#2563eb',
    accent2: '#06b6d4',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostGIS'],
  },
  {
    number: '02',
    category: 'Freelance',
    title: 'CLYYORA — Digital Studio',
    tagline: 'Digital Experiences, Built Better — Freelance Studio Web Platform',
    description:
      'A high-performance React 19 + Vite SSR and prerendered digital studio platform built for CLYYORA (clyyora.in). Engineered with foundation-first technical SEO, automated XML sitemap generation, JSON-LD structured data, and dynamic case-study pages.',
    image: ClyyoraImg,
    github: 'https://github.com/Jayakumar044/Clyyora',
    live: 'https://clyyora.in/',
    highlights: [
      'Static SSR prerendering pipeline (Vite SSR + custom prerender & sitemap scripts)',
      'Full technical SEO with react-helmet-async, Open Graph, Twitter cards & JSON-LD',
      'Dynamic case-study & portfolio architecture driven by centralized data models',
      'Multi-route SPA with React Router v7, service pages, insights & contact flows',
      'Production Vercel redirects/rewrites & fast static first-paint optimization',
    ],
    accent: '#a855f7',
    accent2: '#4f8bff',
    tags: ['React 19', 'Vite', 'React Router', 'Tailwind CSS', 'SSR / SEO'],
  },
  {
    number: '01',
    category: 'Company',
    title: 'Namma Karthikeyan — Civic Portal',
    tagline: 'Bilingual Civic Complaint & Grievance Redressal Portal for Trichy',
    description:
      'A production-ready Next.js 14 full-stack civic grievance portal built for Tiruchirappalli (65 wards). Citizens submit complaints with verified photo uploads and track real-time resolution status in Tamil & English, while staff manage assignments, analytics, and CSV exports from an Admin Panel.',
    image: NammaKarthikeyanImg,
    githubLabel: 'PRIVATE COMPANY REPO',
    live: 'https://nammakarthikeyan.com/',
    highlights: [
      'Bilingual Tamil & English civic portal covering 65 Trichy wards with live status tracking',
      'Full-stack Next.js 14 App Router with Prisma ORM, Zod validation & PostgreSQL/SQLite',
      'Secure photo upload pipeline with file-signature checks, rate limiting & bot honeypot',
      'Role-based Admin Dashboard with analytics, 14-day trends, ward filters & CSV export',
      'JWT httpOnly sessions (jose), bcryptjs hashing, middleware route guards & SEO JSON-LD',
    ],
    accent: '#2563eb',
    accent2: '#10b981',
    tags: ['Next.js 14', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Zod'],
  },
]

function ProjectCard({ project, index, isDark }) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  // ── Bright mode tokens
  const B = !isDark

  // Card backgrounds
  const cardBg = B
    ? hovered
      ? 'linear-gradient(135deg, #2563eb 0%, #6366f1 60%, #4f46e5 100%)'
      : '#ffffff'
    : hovered
      ? `linear-gradient(135deg, rgba(${project.accent === '#4f8bff' ? '79,139,255' : '168,85,247'},0.06), rgba(6,9,18,0.5))`
      : 'rgba(255,255,255,0.03)'

  const cardBorder = B
    ? hovered ? 'transparent' : 'rgba(148,163,184,0.22)'
    : 'rgba(255,255,255,0.06)'

  const cardShadow = B
    ? hovered
      ? '0 20px 60px rgba(37,99,235,0.35), 0 8px 24px rgba(37,99,235,0.2)'
      : '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.07)'
    : 'none'

  // Text colors
  const titleColor = B
    ? hovered ? '#ffffff' : '#0f172a'
    : hovered ? project.accent : '#e8eaf0'

  const titleShadow = B
    ? hovered ? '0 0 30px rgba(255,255,255,0.4)' : 'none'
    : hovered ? `0 0 30px ${project.accent}40` : 'none'

  const descColor = B ? (hovered ? 'rgba(255,255,255,0.85)' : '#475569') : '#9ca3af'

  const tagBg = B
    ? hovered ? 'rgba(255,255,255,0.18)' : `${project.accent}10`
    : `${project.accent}18`

  const tagBorder = B
    ? hovered ? 'rgba(255,255,255,0.3)' : `${project.accent}30`
    : `${project.accent}35`

  const tagColor = B
    ? hovered ? '#ffffff' : project.accent
    : project.accent

  const accentColor = B
    ? hovered ? 'rgba(255,255,255,0.7)' : project.accent
    : project.accent

  const dividerColor = B
    ? hovered ? 'rgba(255,255,255,0.2)' : 'rgba(148,163,184,0.18)'
    : 'rgba(255,255,255,0.06)'

  // Github button (bright mode)
  const githubBg = B ? (hovered ? 'rgba(255,255,255,0.12)' : '#f8fafc') : 'rgba(255,255,255,0.04)'
  const githubBorder = B ? (hovered ? 'rgba(255,255,255,0.3)' : 'rgba(148,163,184,0.25)') : 'rgba(255,255,255,0.1)'
  const githubColor = B ? (hovered ? '#ffffff' : '#475569') : '#9ca3af'

  return (
    <div
      className={`project-card reveal hover-glow`}
      style={{
        animationDelay: `${index * 0.15}s`,
        cursor: 'none',
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        borderRadius: '1.5rem',
        boxShadow: cardShadow,
        transition: 'all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        {project.image && (
          <div className="md:w-2/5 p-4 flex items-center justify-center">
            <div
              className="relative group/img overflow-hidden rounded-xl aspect-[4/3.5] w-full"
              style={{
                border: `1px solid ${B ? (hovered ? 'rgba(255,255,255,0.25)' : 'rgba(148,163,184,0.2)') : 'rgba(255,255,255,0.1)'}`,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bebas tracking-widest">VIEW PREVIEW</span>
              </div>
            </div>
          </div>
        )}
        <div className={`p-7 pb-5 ${project.image ? 'md:w-3/5' : 'w-full'}`}>
          {/* Number & tags */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-px" style={{ background: accentColor }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: accentColor }}
              >
                Project {project.number}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.72rem] px-2 py-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: tagBg,
                    border: `1px solid ${tagBorder}`,
                    color: tagColor,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3
            className="font-bebas text-3xl md:text-5xl tracking-wide mb-3 transition-all duration-300"
            style={{ color: titleColor, textShadow: titleShadow }}
          >
            {project.title}
          </h3>

          {/* Tagline */}
          <p
            className={`font-bebas text-lg tracking-widest mb-4 transition-colors duration-300 ${B && hovered ? '' : 'card-tagline'
              }`}
            style={
              B && hovered
                ? { color: 'rgba(255,255,255,0.9)' }
                : {
                  background: `linear-gradient(135deg, ${project.accent}, ${project.accent2})`,
                }
            }
          >
            {project.tagline}
          </p>

          {/* Description */}
          <p
            className="font-roboto text-[1rem] leading-relaxed mb-6 transition-colors duration-300"
            style={{ color: descColor }}
          >
            {project.description}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between px-7 py-5 gap-4"
        style={{ borderTop: `1px solid ${dividerColor}` }}
      >
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-bebas tracking-widest text-lg px-6 py-2.5 rounded-lg transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              background: githubBg,
              border: `1px solid ${githubBorder}`,
              color: githubColor,
            }}
            onMouseEnter={(e) => {
              if (B) {
                e.currentTarget.style.background = hovered ? 'rgba(255,255,255,0.22)' : 'rgba(37,99,235,0.07)'
                e.currentTarget.style.borderColor = hovered ? 'rgba(255,255,255,0.5)' : '#2563eb'
                e.currentTarget.style.color = hovered ? '#ffffff' : '#2563eb'
              } else {
                e.currentTarget.style.borderColor = project.accent
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.background = 'rgba(79,139,255,0.1)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = githubBg
              e.currentTarget.style.borderColor = githubBorder
              e.currentTarget.style.color = githubColor
            }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GITHUB
          </a>
        ) : (
          <span
            className="flex items-center gap-2 font-bebas tracking-widest text-lg px-6 py-2.5 rounded-lg transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              background: githubBg,
              border: `1px solid ${githubBorder}`,
              color: githubColor,
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            {project.githubLabel || 'PRIVATE CLIENT REPO'}
          </span>
        )}

        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-bebas tracking-widest text-lg px-8 py-2.5 rounded-lg text-white w-full sm:w-auto justify-center"
            style={{
              background: B && hovered
                ? 'rgba(255,255,255,0.22)'
                : `linear-gradient(135deg, ${project.accent}, ${project.accent2})`,
              border: B && hovered ? '1px solid rgba(255,255,255,0.4)' : 'none',
              boxShadow: B && hovered
                ? '0 4px 15px rgba(255,255,255,0.2)'
                : `0 4px 15px ${project.accent}30`,
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = B && hovered
                ? '0 8px 25px rgba(255,255,255,0.3)'
                : `0 8px 25px ${project.accent}50`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = B && hovered
                ? '0 4px 15px rgba(255,255,255,0.2)'
                : `0 4px 15px ${project.accent}30`
            }}
          >
            {project.liveLabel || 'LIVE DEMO'}
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        ) : (
          <span
            className="flex items-center gap-2 font-bebas tracking-widest text-lg px-8 py-2.5 rounded-lg text-white w-full sm:w-auto justify-center"
            style={{
              background: B && hovered
                ? 'rgba(255,255,255,0.22)'
                : `linear-gradient(135deg, ${project.accent}, ${project.accent2})`,
              border: B && hovered ? '1px solid rgba(255,255,255,0.4)' : 'none',
              boxShadow: B && hovered
                ? '0 4px 15px rgba(255,255,255,0.2)'
                : `0 4px 15px ${project.accent}30`,
              transition: 'all 0.3s',
            }}
          >
            MOBILE APP • ANDROID & iOS
          </span>
        )}
      </div>

      {/* Highlights toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors duration-300"
        style={{
          color: open
            ? B && hovered ? '#ffffff' : project.accent
            : B && hovered ? 'rgba(255,255,255,0.7)' : '#6b7280',
          background: 'none',
          border: 'none',
          borderTop: `1px solid ${dividerColor}`,
          cursor: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = B && hovered ? '#ffffff' : project.accent
        }}
        onMouseLeave={(e) => {
          if (!open) e.currentTarget.style.color = B && hovered ? 'rgba(255,255,255,0.7)' : '#6b7280'
        }}
      >
        {open ? 'Hide Highlights' : 'View Project Highlights'}
        <svg
          width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Highlights body */}
      <div className={`highlights-body ${open ? 'open' : ''}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-7 pt-2 pb-6">
          {project.highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm px-3 py-2 rounded-lg transition-all duration-300"
              style={{
                background: B && hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${B && hovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'}`,
                color: B && hovered ? 'rgba(255,255,255,0.85)' : '#9ca3af',
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = B && hovered ? 'rgba(255,255,255,0.4)' : `${project.accent}40`
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = B && hovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'
                e.currentTarget.style.color = B && hovered ? 'rgba(255,255,255,0.85)' : '#6b7280'
              }}
            >
              <span style={{ color: B && hovered ? 'rgba(255,255,255,0.9)' : project.accent, fontSize: '0.8rem' }}>→</span>
              {h}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default function Projects({ isDark }) {
  const [activeTab, setActiveTab] = useState('Frontend')
  const tabs = ['Frontend', 'Backend', 'Fullstack', 'AI Engineer', 'Freelance', 'Company']

  const filteredProjects = projects.filter(p => p.category === activeTab)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in')
            }, i * 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.project-card.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [activeTab])

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Selected Works"
          title="Projects"
          subtitle="Selected works that reflect my frontend expertise."
          isDark={isDark}
        />

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-bebas tracking-widest px-8 py-3 rounded-xl transition-all duration-300 border ${activeTab === tab
                ? isDark
                  ? 'bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                  : 'bg-[#2563eb] border-[#2563eb] text-white shadow-[0_6px_20px_rgba(37,99,235,0.35)]'
                : isDark
                  ? 'bg-transparent border-white/5 text-gray-500 hover:text-gray-300 hover:border-white/10'
                  : 'bg-white border-[rgba(148,163,184,0.25)] text-gray-500 hover:text-[#2563eb] hover:border-[#2563eb]'
                }`}
              style={{ cursor: 'none' }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <ProjectCard key={`${project.category}-${project.number}`} project={project} index={i} isDark={isDark} />
            ))
          ) : (
            <div
              className="text-center py-20 rounded-2xl"
              style={{
                background: isDark ? 'rgba(255,255,255,0.02)' : '#ffffff',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(148,163,184,0.2)'}`,
              }}
            >
              <p
                className="font-bebas tracking-widest text-2xl"
                style={{ color: isDark ? '#6b7280' : '#94a3b8' }}
              >
                More projects coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

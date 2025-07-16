import React, { useState, useEffect } from 'react';

// Social Icons

const FloatingBall = ({ delay = 0, position }) => {
  return (
    <div 
      className={`absolute w-8 h-8 ${position}`}
      style={{ 
        animationDelay: `${delay}s`, 
        animationDuration: '8s',
        animation: `float ${8 + delay}s infinite ease-in-out`
      }}
    >
      <img 
        src="/tennis-ball.png" 
        alt="Tennis Ball" 
        className="w-full h-full object-contain" 
        style={{ 
          filter: 'contrast(1.2) brightness(1.1)',
          mixBlendMode: 'multiply'
        }} 
      />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 text-center border border-opacity-20 border-white group">
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-600 to-emerald-500 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 tracking-tight font-sans" style={{fontFamily: 'Inter, sans-serif'}}>{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-emerald-500 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-lg opacity-80">{label}</div>
    </div>
  );
};

const AiIcon = () => (
  <svg width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="9" fill="#e0f2fe" />
    <path d="M9 12h6M12 9v6" stroke="#2563eb" strokeWidth="2.2" />
  </svg>
);

const ChemistryIcon = () => (
  <svg width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="9" fill="#d1fae5" />
    <path d="M7 17l5-5 5 5" stroke="#10b981" strokeWidth="2.2" />
    <circle cx="12" cy="8" r="2" fill="#10b981" />
  </svg>
);

const ConnectionsIcon = () => (
  <svg width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="9" fill="#e0f2fe" />
    <circle cx="9" cy="12" r="2" fill="#2563eb" />
    <circle cx="15" cy="12" r="2" fill="#2563eb" />
    <rect x="11" y="11" width="2" height="2" fill="#2563eb" />
  </svg>
);

const GrowthIcon = () => (
  <svg width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="9" fill="#d1fae5" />
    <path d="M8 16l4-4 4 4" stroke="#10b981" strokeWidth="2.2" />
  </svg>
);

// Professional Social Media Icons
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-colors duration-200">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-colors duration-200">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-colors duration-200">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-colors duration-200">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const LobSmashLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => { document.title = 'LobSmash – Your AI Padel Coach'; }, []);

  const handleSubmit = async () => {
    setEmailError('');
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setIsLoading(true);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzYxq5m2sgmNIj0dysNIeY5uQDrE4DQvVpwKKH0O7WSrU9S-RCuDSpNrd55n9PNntMG/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      setIsSubmitted(true);
    } catch (error) {
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        const successEl = document.getElementById('success-message');
        if (successEl) {
          successEl.style.transform = 'scale(1.05)';
          setTimeout(() => {
            successEl.style.transform = 'scale(1)';
          }, 200);
        }
      }, 100);
    }
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div>
      {/* Player Background Image - Full Viewport */}
      <div className="fixed inset-0 opacity-20 z-0">
        <img 
          src="/player-smash.png" 
          alt="Padel Player" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
          style={{
            filter: 'brightness(0.8) contrast(1.2) saturate(0.8)',
            transform: 'translateY(0%)'
          }}
        />
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden px-2 sm:px-6">
        {/* Logo floating above the hero container */}
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingBall delay={0} position="top-1/5 left-1/12" />
          <FloatingBall delay={1} position="top-2/5 right-1/6" />
          <FloatingBall delay={2} position="top-3/5 right-1/5" />
          <FloatingBall delay={3} position="top-4/5 left-1/4" />
          <FloatingBall delay={4} position="bottom-1/5 left-1/5" />
          <FloatingBall delay={5} position="bottom-2/5 right-1/3" />
          <FloatingBall delay={6} position="bottom-3/5 left-1/6" />
          <FloatingBall delay={7} position="top-1/3 left-1/3" />
          <FloatingBall delay={8} position="bottom-1/3 right-1/4" />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2' fill='white'/%3E%3Ccircle cx='80' cy='80' r='2' fill='white'/%3E%3C/g%3E%3C/svg%3E\")`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        <div className="relative z-10 max-w-4xl px-2 sm:px-4 md:px-6 gradient-border rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl py-4 sm:py-8 mx-auto border border-white/30">
          <div className="flex flex-col items-center justify-center mb-2 sm:mb-3">
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mt-0 mb-8 sm:mb-12 blanka w-full" style={{ letterSpacing: '-2px', fontSize: 'clamp(3rem, 12vw, 10rem)', lineHeight: 1.05 }}>
            <span className="lob-shootup text-white inline-block drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Lob</span><span className="smash-in text-white inline-block drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Smash</span>
          </h1>
          <button 
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-cyan-600 to-emerald-500 hover:from-cyan-700 hover:to-emerald-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold uppercase tracking-wide transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-xl relative overflow-hidden group border-2 border-transparent gradient-border w-full sm:w-auto"
          >
            <span className="relative z-10">🚀 Get Early Access</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm opacity-75 text-gray-700">
              🤖 AI-powered coaching • 🎾 For every padel player • 📊 Instant video analytics
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-24 relative overflow-hidden px-2 sm:px-6">
        {/* Floating Tennis Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingBall delay={0.5} position="top-1/6 left-1/8" />
          <FloatingBall delay={1.5} position="top-2/6 right-1/10" />
          <FloatingBall delay={2.5} position="top-3/6 left-1/5" />
          <FloatingBall delay={3.5} position="top-4/6 right-1/7" />
          <FloatingBall delay={4.5} position="top-5/6 left-1/12" />
          <FloatingBall delay={5.5} position="bottom-1/6 right-1/8" />
          <FloatingBall delay={6.5} position="bottom-2/6 left-1/10" />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="w-full h-full" style={{
            backgroundImage: `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23064751'/%3E%3Ccircle cx='80' cy='80' r='1' fill='%23064751'/%3E%3Ccircle cx='50' cy='50' r='1' fill='%23064751'/%3E%3C/g%3E%3C/svg%3E\")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-20 gradient-border rounded-3xl bg-white/20 backdrop-blur-xl py-8 sm:py-12 px-4 sm:px-6 shadow-xl border border-white/30">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8 text-white leading-tight font-sans drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              <span>Ready to Level Up Your Padel Game?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed font-medium">
              Your AI coach delivers personalized, actionable guidance—no matter your experience level.
            </p>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-20">
            {[
              {
                value: '99%',
                label: 'AI Accuracy',
                sub: 'Smart insights for your game'
              },
              {
                value: '1 min',
                label: 'Video to Analytics',
                sub: 'Fast, actionable feedback'
              },
              {
                value: '100%',
                label: 'Private & Secure',
                sub: 'Your data, always safe'
              }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white/20 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
                <div className="text-5xl sm:text-6xl font-extrabold tracking-wide text-white drop-shadow-2xl mb-3 font-sans" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2 font-sans">{stat.label}</div>
                <div className="text-sm text-gray-500 font-sans">{stat.sub}</div>
              </div>
            ))}
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <AiIcon />,
                title: "AI-Generated Training Plans",
                description: "Get a custom weekly training plan tailored to your goals, strengths, and weaknesses. No video upload required.",
                gradient: "bg-gradient-to-br from-blue-400 to-purple-500"
              },
              {
                icon: <ChemistryIcon />,
                title: "Tactical Match Insights",
                description: "Receive match strategy, shot selection, and positioning tips based on your play style and goals.",
                gradient: "bg-gradient-to-br from-yellow-400 to-orange-500"
              },
              {
                icon: <ConnectionsIcon />,
                title: "Mental Game Mastery",
                description: "Unlock focus, confidence, and resilience with AI-powered mental training and routines.",
                gradient: "bg-gradient-to-br from-green-400 to-blue-500"
              },
              {
                icon: <GrowthIcon />,
                title: "Progress Tracking & Analytics",
                description: "Track your improvement, set goals, and get data-driven feedback after every session.",
                gradient: "bg-gradient-to-br from-purple-400 to-pink-500"
              }
            ].map((feature, i) => (
              <div key={i} className="rounded-3xl bg-white/20 backdrop-blur-xl p-8 shadow-xl border border-white/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform flex flex-col items-center text-center">
                <div className={`w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-cyan-200/40`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 tracking-tight font-sans" style={{fontFamily: 'Inter, sans-serif'}}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 relative text-center overflow-hidden">
        {/* Floating Tennis Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingBall delay={0.2} position="top-1/4 left-1/6" />
          <FloatingBall delay={1.2} position="top-2/4 right-1/8" />
          <FloatingBall delay={2.2} position="top-3/4 left-1/10" />
          <FloatingBall delay={3.2} position="bottom-1/4 right-1/6" />
          <FloatingBall delay={4.2} position="bottom-2/4 left-1/8" />
          <FloatingBall delay={5.2} position="bottom-3/4 right-1/10" />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1' fill='white'/%3E%3Ccircle cx='80' cy='80' r='1' fill='white'/%3E%3Ccircle cx='50' cy='50' r='1' fill='white'/%3E%3C/g%3E%3C/svg%3E\")`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl py-16 border border-white/30">
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-white font-sans drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)', fontFamily: 'Inter, sans-serif'}}>
            Be the First to Get Your AI Padel Coach
          </h2>
          <p className="text-base sm:text-xl mb-8 sm:mb-12 opacity-90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed text-gray-700 font-medium">
            Join the waitlist for early access to LobSmash and unlock smarter, data-driven padel training—no video upload needed.
          </p>
          {!isSubmitted ? (
            <div className="max-w-md mx-auto">
              <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(''); // Clear error when user types
                    }}
                    placeholder="Enter your email for early access"
                    className={`w-full px-4 py-3 rounded-2xl text-gray-800 text-base outline-none bg-white/90 backdrop-blur-sm shadow-lg focus:shadow-xl transition-all duration-300 border-2 font-sans ${
                      emailError 
                        ? 'border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-400/20' 
                        : 'border-white/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20'
                    }`}
                  />
                  {emailError && (
                    <div className="text-red-400 text-sm mt-2 font-medium">
                      {emailError}
                    </div>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !email}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-500 hover:from-cyan-700 hover:to-emerald-600 rounded-2xl font-bold text-lg text-white transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group border-2 border-transparent gradient-border font-sans"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Securing Your Spot...
                      </div>
                    ) : (
                      <>
                        <span className="relative z-10">🚀 Join the Waitlist</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-white/30">
                  <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs text-white/90">
                    <span className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 shadow-lg">
                      <span className="text-emerald-400 text-sm font-bold">✓</span> 
                      <span className="font-normal text-xs whitespace-nowrap">Vibora Shot</span>
                    </span>
                    <span className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 shadow-lg">
                      <span className="text-blue-400 text-sm font-bold">✓</span> 
                      <span className="font-normal text-xs whitespace-nowrap">Chiquita Shot</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              id="success-message"
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-8 rounded-3xl font-bold max-w-md mx-auto transform transition-transform duration-300 border border-emerald-300/50 shadow-2xl"
            >
              <div className="text-xl sm:text-3xl mb-2 sm:mb-3 font-sans">🎉 You're In!</div>
              <div className="text-base sm:text-lg mb-2 sm:mb-4 font-sans">Welcome to the future of padel coaching! You'll be notified the moment <span className="lob-italic">Lob</span>Smash launches.</div>
            </div>
          )}
        </div>
      </section>
      
      {/* Professional Social Icons Footer */}
      <footer className="relative z-30 py-12 px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 px-8 py-8 shadow-2xl">
            <h3 className="text-white text-lg font-semibold mb-6 text-center tracking-wide">
              Follow Our Journey
            </h3>
            <div className="flex justify-center items-center gap-6">
              <a 
                href="https://www.linkedin.com/company/lobsmash" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow LobSmash on LinkedIn"
                className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <div className="text-white group-hover:text-blue-400 transition-colors duration-300">
                  <LinkedInIcon />
                </div>
              </a>
              
              <a 
                href="https://twitter.com/lobsmash" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow LobSmash on Twitter"
                className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <div className="text-white group-hover:text-blue-400 transition-colors duration-300">
                  <TwitterIcon />
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/lobsmash_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow LobSmash on Instagram"
                className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <div className="text-white group-hover:text-pink-400 transition-colors duration-300">
                  <InstagramIcon />
                </div>
              </a>
              
              <a 
                href="https://www.tiktok.com/@lobsmash_" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow LobSmash on TikTok"
                className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <div className="text-white group-hover:text-red-400 transition-colors duration-300">
                  <TikTokIcon />
                </div>
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-center text-white/70 text-sm font-medium">
                © 2025 LobSmash. Revolutionizing padel with AI.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LobSmashLanding;
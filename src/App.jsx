import React, { useState, useEffect } from 'react';

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
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 font-normal max-w-2xl sm:max-w-3xl mx-auto leading-relaxed text-gray-700">
          You. Your partner. Your AI coach. One space to talk, learn, and dominate.
          </p>
          <button 
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-cyan-600 to-emerald-500 hover:from-cyan-700 hover:to-emerald-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold uppercase tracking-wide transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-xl relative overflow-hidden group border-2 border-transparent gradient-border w-full sm:w-auto"
          >
            <span className="relative z-10">🚀 Get Early Access</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm opacity-75 text-gray-700">
            ⚡ No video upload needed • Works for all skill levels • 100% private
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
            {[{
              value: '500+',
              label: 'Beta Testers',
              sub: 'Early access community'
            }, {
              value: '24/7',
              label: 'AI Coach Available',
              sub: 'Get tips anytime, anywhere'
            }, {
              value: '0',
              label: 'Video Uploads Needed',
              sub: '100% private, always'
            }].map((stat, i) => (
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
                    <span className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 shadow-lg">
                      <span className="text-cyan-400 text-sm font-bold">✓</span> 
                      <span className="font-normal text-xs whitespace-nowrap">Bandeja Shot</span>
                    </span>
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
    </div>
  );
};

export default LobSmashLanding;
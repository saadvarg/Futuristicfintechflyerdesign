import { CheckCircle2, Home, TrendingUp, DollarSign, Globe, Calendar, Award, Building2, Sparkles, Shield, Clock } from 'lucide-react';

export default function App() {
  const features = [
    { icon: Award, text: 'No Score for FN or FICO 680', color: 'from-amber-400 to-amber-500' },
    { icon: Home, text: 'Owner-Occupied, Second Home, or Investment', color: 'from-blue-400 to-blue-500' },
    { icon: TrendingUp, text: 'Max CLTV 90%', color: 'from-green-400 to-green-500' },
    { icon: DollarSign, text: 'Loan Amounts from $50K to $500K', color: 'from-emerald-400 to-emerald-500' },
    { icon: CheckCircle2, text: 'Max 50% DTI', color: 'from-teal-400 to-teal-500' },
    { icon: Calendar, text: '20 & 30-Year Fixed Terms', color: 'from-cyan-400 to-cyan-500' },
    { icon: TrendingUp, text: 'DSCR >1 Allowed', color: 'from-sky-400 to-sky-500' },
    { icon: Globe, text: 'Foreign Nationals Welcome', color: 'from-indigo-400 to-indigo-500' },
  ];

  const stats = [
    { icon: Clock, label: 'Fast Approval', value: '24-48hrs' },
    { icon: Shield, label: 'Secure Process', value: '100%' },
    { icon: Sparkles, label: 'AI Powered', value: 'Smart' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#102040] to-[#0a1628] flex items-center justify-center p-4 md:p-8">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-32 w-64 h-64 border border-teal-500/10 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 border border-cyan-400/10 rotate-45"></div>
        
        {/* Digital grid overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
               backgroundSize: '60px 60px'
             }}>
        </div>

        {/* Floating house illustrations */}
        <div className="absolute top-40 left-20 opacity-5">
          <Building2 className="w-32 h-32 text-teal-400" />
        </div>
        <div className="absolute bottom-40 right-32 opacity-5">
          <Home className="w-40 h-40 text-cyan-400" />
        </div>
      </div>

      {/* Main Flyer Container */}
      <div className="relative max-w-5xl w-full bg-gradient-to-br from-white/95 to-gray-50/95 rounded-3xl shadow-2xl overflow-hidden border border-teal-500/20 backdrop-blur-sm">
        
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400"></div>
        
        {/* Header with Logo */}
        <div className="relative px-8 md:px-12 pt-10 pb-6 bg-gradient-to-r from-[#0a1f3d] to-[#1a3d5c]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">CR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl tracking-tight">CR Equity.Ai</span>
                <span className="text-teal-300 text-xs tracking-widest uppercase">Intelligent Lending</span>
              </div>
            </div>
            
            {/* Stats badges */}
            <div className="hidden md:flex items-center gap-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-teal-300" />
                      <div className="flex flex-col">
                        <span className="text-white text-xs font-bold">{stat.value}</span>
                        <span className="text-teal-300 text-[10px]">{stat.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hero Section with Visual */}
        <div className="relative px-8 md:px-12 py-10 bg-gradient-to-br from-[#0d2847] to-[#1a3d5c] overflow-hidden">
          {/* Background house silhouettes */}
          <div className="absolute inset-0 flex items-end justify-center opacity-10 overflow-hidden">
            <div className="flex items-end gap-8 pb-0">
              <svg width="120" height="120" viewBox="0 0 100 100" className="text-teal-400 transform translate-y-6">
                <polygon points="50,10 10,50 20,50 20,95 80,95 80,50 90,50" fill="currentColor"/>
                <rect x="35" y="65" width="15" height="20" fill="rgba(255,255,255,0.3)"/>
                <rect x="55" y="65" width="10" height="15" fill="rgba(255,255,255,0.3)"/>
              </svg>
              <svg width="150" height="150" viewBox="0 0 100 100" className="text-cyan-400 transform translate-y-4">
                <polygon points="50,5 5,50 15,50 15,95 85,95 85,50 95,50" fill="currentColor"/>
                <rect x="30" y="60" width="18" height="25" fill="rgba(255,255,255,0.3)"/>
                <rect x="55" y="60" width="12" height="18" fill="rgba(255,255,255,0.3)"/>
                <rect x="40" y="25" width="20" height="20" fill="rgba(255,255,255,0.2)"/>
              </svg>
              <svg width="130" height="130" viewBox="0 0 100 100" className="text-teal-500 transform translate-y-8">
                <polygon points="50,8 8,48 18,48 18,92 82,92 82,48 92,48" fill="currentColor"/>
                <rect x="32" y="62" width="16" height="22" fill="rgba(255,255,255,0.3)"/>
                <rect x="52" y="62" width="11" height="16" fill="rgba(255,255,255,0.3)"/>
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
              <span className="text-teal-300 text-sm font-semibold uppercase tracking-wider">Second Mortgage Program</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Unlock Home Equity<br />
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                with Second Mortgages
              </span>
            </h1>
            
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl leading-relaxed">
              Experience the future of home financing with AI-powered solutions designed for speed, flexibility, and success.
            </p>
          </div>
        </div>

        {/* Program Highlights Section */}
        <div className="relative px-8 md:px-12 py-12 bg-white">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-teal-400"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Program Highlights
              </h2>
              <div className="w-8 h-1 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
            <p className="text-gray-600">Flexible terms designed for your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative px-8 md:px-12 py-10 bg-gradient-to-br from-[#0a1f3d] to-[#1a3d5c] border-t-2 border-teal-400/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-teal-300 text-sm">Contact us today for fast approval</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
              <a href="mailto:info@crequity.ai" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl transition-all duration-300 border border-white/20">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="font-medium">info@crequity.ai</span>
              </a>
              <a href="http://www.crequity.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl transition-all duration-300 border border-white/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="font-medium">www.crequity.ai</span>
              </a>
              <a href="tel:+19493286622" className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg font-bold">
                <span>+1 949 328 6622</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Badge */}
        <div className="px-8 md:px-12 py-4 bg-[#061426] border-t border-white/5">
          <div className="flex items-center justify-center gap-3 text-xs text-gray-400">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="uppercase tracking-wider font-medium">Powered by Artificial Intelligence</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

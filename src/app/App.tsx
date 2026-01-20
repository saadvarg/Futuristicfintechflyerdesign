import { CheckCircle2, Home, TrendingUp, DollarSign, Globe, Calendar, Award, Building2, Sparkles, Shield, Clock, Download } from 'lucide-react';
import { useRef, useState } from 'react';
import domtoimage from 'dom-to-image-more';
import jsPDF from 'jspdf';

export default function App() {
  const [activeTab, setActiveTab] = useState<'version1' | 'version2'>('version1');
  const [isGenerating, setIsGenerating] = useState(false);
  const version1Ref = useRef<HTMLDivElement>(null);
  const version2Ref = useRef<HTMLDivElement>(null);

  const downloadPDF = async (version: 'version1' | 'version2') => {
    const ref = version === 'version1' ? version1Ref : version2Ref;
    if (!ref.current) return;

    setIsGenerating(true);
    try {
      // Generate image from the DOM element
      const dataUrl = await domtoimage.toPng(ref.current, {
        quality: 1,
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        }
      });

      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [ref.current.offsetWidth, ref.current.offsetHeight],
      });

      const imgWidth = ref.current.offsetWidth;
      const imgHeight = ref.current.offsetHeight;

      pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
      
      const fileName = version === 'version1' 
        ? 'CR_Equity_AI_Second_Mortgage_V1.pdf' 
        : 'CR_Equity_AI_Second_Mortgage_V2.pdf';
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

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
    <>
      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            width: 210mm;
            min-height: 297mm;
            margin: 0;
            padding: 0;
            page-break-after: always;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#102040] to-[#0a1628] p-4 md:p-8">
        {/* Tab Navigation */}
        <div className="max-w-5xl mx-auto mb-6 no-print">
          <div className="flex gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <button
              onClick={() => setActiveTab('version1')}
              className={`flex-1 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'version1'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Version 1 - Modern Design
            </button>
            <button
              onClick={() => setActiveTab('version2')}
              className={`flex-1 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'version2'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Version 2 - Corporate
            </button>
          </div>
        </div>

        {/* Version 1 - Modern Design */}
        {activeTab === 'version1' && (
          <div className="relative flex items-center justify-center">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none no-print">
              <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-32 right-32 w-64 h-64 border border-teal-500/10 rounded-full"></div>
              <div className="absolute bottom-32 left-32 w-48 h-48 border border-cyan-400/10 rotate-45"></div>
              <div className="absolute inset-0 opacity-5" 
                   style={{
                     backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
                     backgroundSize: '60px 60px'
                   }}>
              </div>
              <div className="absolute top-40 left-20 opacity-5">
                <Building2 className="w-32 h-32 text-teal-400" />
              </div>
              <div className="absolute bottom-40 right-32 opacity-5">
                <Home className="w-40 h-40 text-cyan-400" />
              </div>
            </div>

            {/* Main Flyer Container */}
            <div className="print-container relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden border border-teal-500/20" ref={version1Ref}>
              
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#14b8a6] via-[#06b6d4] to-[#14b8a6]"></div>
              
              {/* Header with Logo */}
              <div className="relative px-8 md:px-12 pt-10 pb-6 bg-[#0a1f3d]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#14b8a6] to-[#06b6d4] rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">CR</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-2xl tracking-tight">CR Equity.Ai</span>
                      <span className="text-[#5eead4] text-xs tracking-widest uppercase">Intelligent Lending</span>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-3">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-[#5eead4]" />
                            <div className="flex flex-col">
                              <span className="text-white text-xs font-bold">{stat.value}</span>
                              <span className="text-[#5eead4] text-[10px]">{stat.label}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Hero Section */}
              <div className="relative px-8 md:px-12 py-10 bg-[#0d2847] overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4]"></div>
                    <span className="text-[#5eead4] text-sm font-semibold uppercase tracking-wider">Second Mortgage Program</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                    Unlock Home Equity<br />
                    <span className="text-[#5eead4]">with Second Mortgages</span>
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
                    <div className="w-8 h-1 bg-gradient-to-r from-transparent to-[#14b8a6]"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Program Highlights
                    </h2>
                    <div className="w-8 h-1 bg-gradient-to-l from-transparent to-[#06b6d4]"></div>
                  </div>
                  <p className="text-gray-600">Flexible terms designed for your success</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#14b8a6] transition-all duration-300 overflow-hidden"
                      >
                        <div className="relative flex items-start gap-4">
                          <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
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
              <div className="relative px-8 md:px-12 py-10 bg-[#0a1f3d] border-t-2 border-[#14b8a6]/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
                    <p className="text-[#5eead4] text-sm">Contact us today for fast approval</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
                    <a href="mailto:info@crequity.ai" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl transition-all duration-300 border border-white/20">
                      <div className="w-2 h-2 bg-[#14b8a6] rounded-full"></div>
                      <span className="font-medium">info@crequity.ai</span>
                    </a>
                    <a href="http://www.crequity.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl transition-all duration-300 border border-white/20">
                      <div className="w-2 h-2 bg-[#06b6d4] rounded-full"></div>
                      <span className="font-medium">www.crequity.ai</span>
                    </a>
                    <a href="tel:+19493286622" className="flex items-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] hover:from-[#0f9d8c] hover:to-[#0891b2] px-6 py-3 rounded-xl transition-all duration-300 font-bold">
                      <span>+1 949 328 6622</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer Badge */}
              <div className="px-8 md:px-12 py-4 bg-[#061426] border-t border-white/5">
                <div className="flex items-center justify-center gap-3 text-xs text-gray-400">
                  <Sparkles className="w-4 h-4 text-[#14b8a6]" />
                  <span className="uppercase tracking-wider font-medium">Powered by Artificial Intelligence</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Button for Version 1 */}
            <button 
              onClick={() => downloadPDF('version1')}
              disabled={isGenerating}
              className="no-print fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] hover:from-[#0f9d8c] hover:to-[#0891b2] text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Version 2 - Corporate Design */}
        {activeTab === 'version2' && (
          <div className="relative flex items-center justify-center">
            {/* Main Flyer Container */}
            <div className="print-container relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden border border-gray-200" ref={version2Ref}>
              
              {/* Header Section - Dark Navy */}
              <div className="relative px-8 md:px-12 pt-12 pb-16 bg-[#1e3a5f] overflow-hidden">
                <div className="absolute inset-0 opacity-5" 
                     style={{
                       backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                       backgroundSize: '40px 40px'
                     }}>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">CR</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-3xl tracking-tight">CR Equity.Ai, Inc</span>
                      <span className="text-[#fcd34d] text-sm tracking-wider uppercase">Second Mortgage Program</span>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                    The Power<br />
                    <span className="text-[#fcd34d]">of Yes</span>
                  </h1>
                  
                  <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
                    Unlock your home's potential with flexible second mortgage solutions
                  </p>
                </div>
              </div>

              {/* Program Highlights Section */}
              <div className="px-8 md:px-12 py-12 bg-white">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Program Highlights
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#f59e0b] to-[#d97706]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border-l-4 border-[#f59e0b]"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-900 font-semibold text-base leading-relaxed">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Benefits Section */}
              <div className="px-8 md:px-12 py-10 bg-gradient-to-br from-gray-50 to-white border-t-2 border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                  <div className="text-center p-6">
                    <Clock className="w-12 h-12 text-[#d97706] mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Approval</h3>
                    <p className="text-gray-600 text-sm">Get approved in 24-48 hours</p>
                  </div>
                  <div className="text-center p-6">
                    <Shield className="w-12 h-12 text-[#d97706] mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Process</h3>
                    <p className="text-gray-600 text-sm">100% safe and transparent</p>
                  </div>
                  <div className="text-center p-6">
                    <Sparkles className="w-12 h-12 text-[#d97706] mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI Powered</h3>
                    <p className="text-gray-600 text-sm">Smart, efficient decisions</p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="px-8 md:px-12 py-10 bg-[#1e3a5f]">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Get Started Today</h3>
                  <p className="text-gray-300">Contact our team for personalized assistance</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                  <a href="mailto:info@crequity.ai" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 border border-white/20">
                    <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                    <span className="font-medium">info@crequity.ai</span>
                  </a>
                  <a href="http://www.crequity.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 border border-white/20">
                    <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                    <span className="font-medium">www.crequity.ai</span>
                  </a>
                  <a href="tel:+19493286622" className="flex items-center gap-2 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] px-8 py-3 rounded-lg transition-all duration-300 font-bold">
                    <span>+1 949 328 6622</span>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 md:px-12 py-4 bg-[#0a1f3d] border-t border-white/10">
                <div className="flex items-center justify-center gap-3 text-xs text-gray-400">
                  <span className="font-medium">© 2026 CR Equity.Ai, Inc. All rights reserved.</span>
                </div>
              </div>
            </div>

            {/* Print Button for Version 2 */}
            <button 
              onClick={() => downloadPDF('version2')}
              disabled={isGenerating}
              className="no-print fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
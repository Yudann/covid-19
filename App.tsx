
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  Globe, 
  Info, 
  ExternalLink,
  ChevronDown,
  // Added missing icon imports
  Syringe,
  Activity
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { SYMPTOMS, PREVENTION, STATS, CHART_DATA, ICON_MAP } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Gejala', href: '#symptoms' },
    { name: 'Pencegahan', href: '#prevention' },
    { name: 'Statistik', href: '#stats' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-slate-900">Informasi COVID-19</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Darurat 119
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a 
                  href="tel:119"
                  className="w-full bg-blue-600 text-white flex items-center justify-center py-4 rounded-xl font-bold space-x-2"
                >
                  <Phone size={20} />
                  <span>Hubungi Hotline 119</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Situs Resmi Edukasi COVID-19
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Bersama Kita <span className="text-blue-600">Putus Rantai</span> Penyebaran Virus
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Dapatkan informasi akurat, gejala terkini, dan langkah-langkah pencegahan yang terverifikasi untuk melindungi diri dan keluarga Anda.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#about"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center group"
                >
                  Pelajari Lebih Lanjut
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#stats"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Lihat Statistik
                </a>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://picsum.photos/seed/medical/800/600" 
                  alt="Medical awareness" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-48 h-48 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block border border-slate-100">
                <div className="flex items-center space-x-2 text-emerald-600 font-bold mb-2">
                  <Syringe size={20} />
                  <span>Update Vaksin</span>
                </div>
                <p className="text-sm text-slate-500">90%+ Populasi Indonesia sudah menerima dosis pertama.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <ChevronDown className="text-slate-300" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center">
                <div className="w-1 h-8 bg-blue-600 rounded-full mr-4"></div>
                Apa itu COVID-19?
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  COVID-19 adalah penyakit menular yang disebabkan oleh virus SARS-CoV-2. Sebagian besar orang yang tertular akan mengalami gejala ringan hingga sedang, dan akan pulih tanpa penanganan khusus.
                </p>
                <p>
                  Namun, beberapa orang akan mengalami sakit parah dan memerlukan bantuan medis, terutama lansia dan orang dengan kondisi medis bawaan.
                </p>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <Info className="text-blue-600 mr-2" />
                    Cara Penyebaran
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Percikan cairan (droplet) dari hidung atau mulut saat penderita batuk/bersin.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Kontak fisik secara langsung dengan penderita COVID-19.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Menyentuh permukaan benda yang terkontaminasi lalu menyentuh area wajah.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/health1/400/400" alt="Health" className="rounded-3xl shadow-lg mt-8" />
              <img src="https://picsum.photos/seed/health2/400/400" alt="Health" className="rounded-3xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section id="symptoms" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Gejala Umum COVID-19</h2>
            <p className="text-lg text-slate-600">Gejala dapat muncul dalam 2-14 hari setelah terpapar virus. Pastikan Anda mengenali tanda-tandanya sedini mungkin.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SYMPTOMS.map((symptom, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group">
                <div className="mb-6 inline-block p-4 bg-white rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                  {ICON_MAP[symptom.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{symptom.title}</h3>
                <p className="text-slate-600 leading-relaxed">{symptom.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-center space-x-4 max-w-4xl mx-auto">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="text-amber-600" />
            </div>
            <p className="text-amber-800 font-medium">
              <span className="font-bold">Penting:</span> Jika Anda mengalami kesulitan bernapas yang parah, nyeri dada yang terus-menerus, atau bibir kebiruan, segera hubungi layanan darurat.
            </p>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevention" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Langkah Pencegahan</h2>
            <p className="text-lg text-slate-300">Pencegahan adalah kunci utama untuk melindungi diri kita dan orang-orang tersayang dari risiko penularan.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PREVENTION.map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm group hover:bg-slate-800 transition-all">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {idx + 1}
                </div>
                <div className="mb-6">
                  {ICON_MAP[step.icon]}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Masih ada pertanyaan tentang vaksin atau cara penggunaan masker yang benar?</p>
            <a href="https://covid19.go.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-bold text-lg transition-colors group">
              <span>Buka Portal Resmi Pemerintah</span>
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Statistik Terkini</h2>
            <p className="text-lg text-slate-600">Data monitoring kasus COVID-19 di Indonesia (Data Simulasi).</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {STATS.map((stat, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
                <div className={`w-3 h-3 rounded-full ${stat.color} mb-4`}></div>
                <span className="text-slate-500 font-semibold mb-1 uppercase tracking-wider text-xs">{stat.label}</span>
                <span className="text-3xl font-extrabold text-slate-900 mb-2">{stat.value}</span>
                <span className="text-sm text-slate-500">{stat.description}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-8 text-center md:text-left">Tren Kasus Mingguan</h3>
            <div className="h-[300px] md:h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHART_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontSize: 14 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontSize: 14 }}
                  />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="cases" radius={[8, 8, 0, 0]}>
                    {CHART_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === CHART_DATA.length - 1 ? '#2563eb' : '#94a3b8'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8 text-center text-sm text-slate-400 italic">
              * Data grafik di atas bersifat representatif untuk tujuan edukasi.
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Hubungi Kami dalam Kondisi Darurat</h2>
              <p className="text-blue-100 text-lg mb-0 max-w-xl">
                Layanan Call Center 119 tersedia 24 jam untuk melayani kebutuhan gawat darurat dan pertanyaan seputar COVID-19.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href="tel:119"
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-2xl flex items-center justify-center hover:bg-blue-50 transition-all shadow-xl"
              >
                <Phone size={28} className="mr-3" />
                119
              </a>
              <div className="flex items-center justify-center space-x-2 text-blue-100 font-bold bg-white/10 px-6 py-4 rounded-2xl border border-white/20">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Online 24 Jam</span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-start space-x-6">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <Info className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Informasi Umum</h4>
                <p className="text-slate-500">Pertanyaan umum seputar gejala dan prosedur pemeriksaan.</p>
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-start space-x-6">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <Syringe className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Layanan Vaksin</h4>
                <p className="text-slate-500">Cari tahu lokasi sentra vaksinasi terdekat di wilayah Anda.</p>
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-start space-x-6">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <Activity className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Laporan Kasus</h4>
                <p className="text-slate-500">Melaporkan temuan kasus baru atau membutuhkan bantuan tracing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-slate-900 uppercase tracking-tighter">Informasi COVID-19</span>
              </div>
              <p className="text-slate-500 leading-relaxed max-w-sm mb-8">
                Portal edukasi kesehatan masyarakat untuk memberikan informasi yang jelas, ringkas, dan mudah dipahami seputar pandemi COVID-19 di Indonesia.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram'].map(social => (
                  <div key={social} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current opacity-50 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Navigasi Cepat</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-500 hover:text-blue-600 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Sumber Resmi</h4>
              <ul className="space-y-4 text-slate-500">
                <li className="flex items-center group">
                  <a href="#" className="hover:text-blue-600 transition-colors">Kemenkes RI</a>
                </li>
                <li className="flex items-center group">
                  <a href="#" className="hover:text-blue-600 transition-colors">Satgas COVID-19</a>
                </li>
                <li className="flex items-center group">
                  <a href="#" className="hover:text-blue-600 transition-colors">WHO (World Health Organization)</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Informasi COVID-19 Indonesia. Seluruh Hak Cipta Dilindungi.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-slate-600">Kebijakan Privasi</a>
              <a href="#" className="hover:text-slate-600">Syarat & Ketentuan</a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-50 rounded-2xl text-center">
            <p className="text-xs text-slate-400 max-w-2xl mx-auto">
              <span className="font-bold">Disclaimer:</span> Website ini dibuat untuk tujuan edukasi dan simulasi informasi kesehatan. Data statistik yang ditampilkan mungkin tidak mencerminkan angka real-time terbaru. Selalu rujuk ke portal resmi kemkes.go.id untuk keputusan medis penting.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  Zap, 
  Server, 
  Lock, 
  CreditCard, 
  Code2, 
  Layout, 
  CheckCircle2, 
  X 
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bookingRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-green/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-dark/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center glow-green">
              <Terminal className="w-5 h-5 text-[#02110C]" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">FinishLab</span>
          </div>
          <button 
            onClick={openModal}
            className="text-sm font-bold bg-brand-green text-[#02110C] px-5 py-2 rounded-[10px] hover:bg-white transition-all glow-green-hover cursor-pointer"
          >
            Book Free Session
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-hero-gradient overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/software-developer/1920/1080?blur=8" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-1" 
             style={{ backgroundImage: 'radial-gradient(#00E38C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Free 15-Minute Session: <br />
              <span className="text-brand-green">We’ll Fix ONE Thing In Your App — Live</span>
            </h1>
            
            <div className="space-y-4 mb-10">
              <p className="text-xl text-zinc-400 font-medium">Stuck on deployment? Authentication broken? Payments not working?</p>
              <p className="text-lg text-zinc-500 leading-relaxed max-w-xl">
                Jump on a 15-minute call and we’ll screenshare, diagnose the issue, 
                and fix ONE thing for you — free.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-brand-green text-[#02110C] font-bold rounded-[10px] hover:scale-105 transition-all glow-green-hover flex items-center justify-center gap-2 cursor-pointer"
              >
                Book My Free Session
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                <ShieldCheck className="w-5 h-5 text-brand-green" />
                No sales pitch. Just real help.
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Transformation Mockup */}
            <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-brand-secondary/50 backdrop-blur-sm p-4 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
                  {/* Left: Broken State */}
                  <div className="rounded-xl bg-black/40 border border-red-500/20 p-4 relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-[10px] uppercase tracking-widest text-red-500 font-bold">Error: Deployment Failed</span>
                    </div>
                    <div className="space-y-2 opacity-40">
                      <div className="h-2 w-3/4 bg-zinc-800 rounded" />
                      <div className="h-2 w-1/2 bg-zinc-800 rounded" />
                      <div className="h-12 w-full bg-zinc-900 rounded-lg border border-dashed border-zinc-700" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <AlertCircle className="w-12 h-12 text-red-500/20 animate-pulse" />
                    </div>
                  </div>
                  {/* Right: Clean Dashboard */}
                  <div className="rounded-xl bg-black/40 border border-brand-green/20 p-4 relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-brand-green" />
                      <span className="text-[10px] uppercase tracking-widest text-brand-green font-bold">Status: Live & Healthy</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded bg-brand-green/10 border border-brand-green/20" />
                        <div className="space-y-1 flex-1">
                          <div className="h-2 w-full bg-brand-green/20 rounded" />
                          <div className="h-2 w-2/3 bg-brand-green/10 rounded" />
                        </div>
                      </div>
                      <div className="h-16 w-full bg-brand-green/5 rounded-lg border border-brand-green/10 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-brand-green/40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Center Arrow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center shadow-2xl z-20">
                <ArrowRight className="w-6 h-6 text-[#02110C]" />
              </div>
            </div>
            {/* Floating Glow */}
            <div className="absolute -inset-4 bg-brand-green/10 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-24 px-6 bg-brand-secondary/30 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Most Apps Get Stuck at 80%</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">We've seen it hundreds of times. You're almost there, but one technical hurdle is blocking your launch.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="w-8 h-8" />,
                title: "Deployment Issues",
                text: "Your app works locally but fails when going live. CI/CD pipelines, environment variables, or server configs.",
                image: "https://picsum.photos/seed/coding-screen/400/250"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Authentication Problems",
                text: "Google login, sessions, or permissions breaking your app. OAuth flows that just won't behave.",
                image: "https://picsum.photos/seed/cyber-security/400/250"
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Payments Not Working",
                text: "Stripe, Paystack or checkout integrations failing. Webhooks not firing or metadata missing.",
                image: "https://picsum.photos/seed/digital-payment/400/250"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-brand-secondary border border-white/5 hover:border-brand-green/30 transition-all group overflow-hidden"
              >
                <div className="h-40 w-full relative overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary to-transparent" />
                </div>
                <div className="p-8 pt-0 -mt-8 relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform shadow-lg backdrop-blur-md border border-white/5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Fix Section (Transformation) */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-3xl border border-white/10 bg-black/40 p-2 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-zinc-900 rounded-2xl p-6 flex flex-col justify-center border border-white/5">
                    <Code2 className="w-10 h-10 text-red-500/50 mb-4" />
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-red-500/10 rounded" />
                      <div className="h-2 w-3/4 bg-red-500/10 rounded" />
                      <div className="h-2 w-1/2 bg-red-500/10 rounded" />
                    </div>
                    <p className="mt-4 text-[10px] font-mono text-red-500/50 uppercase tracking-widest">Stuck MVP</p>
                  </div>
                  <div className="aspect-square bg-brand-green/5 rounded-2xl p-6 flex flex-col justify-center border border-brand-green/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                      <Zap className="w-6 h-6 text-brand-green animate-pulse" />
                    </div>
                    <Layout className="w-10 h-10 text-brand-green mb-4" />
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-brand-green/20 rounded" />
                      <div className="h-2 w-full bg-brand-green/20 rounded" />
                      <div className="h-2 w-full bg-brand-green/20 rounded" />
                    </div>
                    <p className="mt-4 text-[10px] font-mono text-brand-green uppercase tracking-widest">Working Product</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-8">From Stuck MVP → Working Product</h2>
              <div className="space-y-6 mb-10">
                <p className="text-xl text-zinc-400">In 15 minutes we’ll:</p>
                <ul className="space-y-4">
                  {[
                    "Look at your code or dashboard",
                    "Diagnose the real issue",
                    "Fix ONE problem live"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-zinc-300">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-brand-green/10 border border-brand-green/20 inline-block">
                <p className="text-brand-green font-bold text-lg">You leave the call with something actually working.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="py-24 px-6 bg-brand-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">How It Works</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block -z-10" />
            
            {[
              { step: "01", title: "Book a Time", text: "Pick a time that works for you from our calendar." },
              { step: "02", title: "Join Screenshare", text: "Show us the issue you're stuck on via Google Meet." },
              { step: "03", title: "We Fix It", text: "Our engineer helps you solve one problem live." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-dark border-4 border-brand-secondary flex items-center justify-center text-brand-green font-display font-bold text-xl mx-auto mb-6 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-500">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Founder Assurance Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[32px] bg-brand-secondary border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <ShieldCheck className="w-32 h-32 text-brand-green" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-8">No Pitch. Just Help.</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                <p>This is not a sales call.</p>
                <p>
                  We help you solve one issue. If you want help finishing the rest of your product, 
                  we can talk after.
                </p>
                <p className="text-white font-medium">If not, you're free to go build.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Booking Form Section */}
      <section ref={bookingRef} id="booking-section" className="py-24 px-6 bg-brand-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Book Your Free 15-Minute Fix</h2>
            <p className="text-zinc-500">No strings attached. Let's get your app moving again.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-dark rounded-3xl border border-white/10 shadow-2xl overflow-hidden min-h-[1200px]"
          >
            <iframe 
              src="https://forms.gle/YoZ6TRrQdHRZLZYB7" 
              className="w-full h-[1200px] border-none"
              title="Booking Form"
              scrolling="no"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-green/5 blur-[120px] rounded-full -z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">Your App Is Probably One Fix Away</h2>
          <p className="text-xl text-zinc-400 mb-12">Stop being stuck at 80%. Let's fix one thing today.</p>
          <button 
            onClick={scrollToBooking}
            className="px-12 py-5 bg-brand-green text-[#02110C] font-bold rounded-xl hover:scale-105 transition-all glow-green-hover text-xl cursor-pointer"
          >
            Book My Free Session
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-green rounded flex items-center justify-center">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">FinishLab</span>
          </div>
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} FinishLab. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-brand-green transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-green transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-green transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-brand-dark border border-white/10 rounded-3xl p-4 lg:p-8 shadow-2xl overflow-hidden max-h-[95vh]"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors z-50 bg-brand-dark/50 backdrop-blur-md cursor-pointer"
              >
                <X className="w-6 h-6 text-zinc-400" />
              </button>

              <div className="w-full h-[90vh]">
                <iframe 
                  src="https://forms.gle/YoZ6TRrQdHRZLZYB7" 
                  className="w-full h-full border-none rounded-2xl"
                  title="Booking Form Modal"
                  scrolling="no"
                >
                  Loading…
                </iframe>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

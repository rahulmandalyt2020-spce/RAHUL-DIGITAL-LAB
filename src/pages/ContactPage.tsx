import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Globe, CheckCircle2, Shield } from 'lucide-react';
import { Badge } from '../components/common/Badge.tsx';
import { Button } from '../components/common/Button.tsx';
import { useRouter } from '../context/RouterContext.tsx';
import { LAB_BRAND } from '../data/labData.ts';

export const ContactPage: React.FC = () => {
  const { showToast } = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      showToast('Message received! In the future, this will dispatch directly via the lab portal.');
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <Badge variant="cyan" size="md" className="mb-3">
          DIRECT COMMUNICATIONS
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Connect with the Lab
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
          Inquire about creative engineering partnerships, suggest app features, request custom prompts, or share feedback on our digital works.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090e1d] border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-xl font-display font-bold text-white">
              Studio Communication Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Feel free to reach out directly through the official lab dispatch. We aim to respond to all creative and technical queries within 48 hours.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#060913] border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">
                    ELECTRONIC DISPATCH
                  </span>
                  <span className="text-sm font-mono text-cyan-300">
                    contact@rahuldigitallab.com
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#060913] border border-slate-800 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">
                    DIGITAL PRESENCE
                  </span>
                  <span className="text-sm text-slate-200">
                    Global Creative Network • Asia / Worldwide
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#060913] border border-slate-800 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">
                    DATA INTEGRITY
                  </span>
                  <span className="text-xs text-slate-400">
                    No third-party tracker or unsolicited commercial mailings.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#090e1d] border border-slate-800 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Transmitted
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your dispatch has been logged in the lab queue.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    SUBJECT / TOPIC
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry, Prompt Question, or Collaboration"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    MESSAGE / DETAILS *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your idea, project scope, or feedback in detail..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#060913] border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={submitting}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    {submitting ? 'Transmitting...' : 'Dispatch Message'}
                  </Button>
                </div>

                <p className="text-[11px] text-slate-500 font-mono text-center pt-2">
                  Frontend interface ready for production email API or database webhooks.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

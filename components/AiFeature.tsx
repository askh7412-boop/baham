import React, { useState } from 'react';
import { Sparkles, Send, Loader2, HeartHandshake } from 'lucide-react';
import { askProductAI } from '../services/geminiService';

const AiFeature: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');
    
    try {
      const answer = await askProductAI(query);
      setResponse(answer);
    } catch (err) {
      setResponse('خطایی رخ داد.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-demo" className="py-20 bg-gradient-to-br from-teal-900 to-primary-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-500 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-500 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <HeartHandshake className="w-5 h-5 text-pink-300 ml-2" />
            <span className="text-sm font-medium">مشاور هوشمند نیکوکاری</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">شفافیت، اصل اول ماست</h2>
          <p className="text-lg text-teal-100">
            سوالی درباره نحوه هزینه‌کرد کمک‌ها یا پروژه‌های فعال خیریه باهم دارید؟ هوش مصنوعی ما آماده پاسخگویی است.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
          <div className="min-h-[150px] mb-6 p-4 bg-black/20 rounded-xl text-right">
            {loading ? (
              <div className="flex items-center justify-center h-full text-teal-200 gap-2">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>در حال نوشتن...</span>
              </div>
            ) : response ? (
              <p className="text-lg leading-relaxed animate-fade-in">{response}</p>
            ) : (
              <p className="text-teal-200/70 italic text-center mt-8">
                مثال: "کمک‌های من دقیقا کجا هزینه می‌شود؟" یا "آیا می‌توانم داوطلب شوم؟"
              </p>
            )}
          </div>

          <form onSubmit={handleAsk} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="سوال خود را اینجا بنویسید..."
              className="w-full bg-white text-gray-900 placeholder-gray-500 rounded-xl py-4 pr-4 pl-14 focus:outline-none focus:ring-4 focus:ring-primary-500/50 transition-all text-right"
              dir="rtl"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute left-2 top-2 bottom-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg px-4 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className={`w-5 h-5 ${loading ? 'opacity-0' : 'opacity-100'}`} />
              {loading && <Loader2 className="w-5 h-5 animate-spin absolute" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AiFeature;
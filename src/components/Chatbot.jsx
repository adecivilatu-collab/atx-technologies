import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, MessageSquare, ArrowUpRight, RotateCcw, Send } from 'lucide-react';
import { CHATBOT_TREE } from '../data/chatbotTree';
import { COMPANY_INFO } from '../data/content';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNodeKey, setCurrentNodeKey] = useState('welcome');
  const [history, setHistory] = useState([
    {
      sender: 'bot',
      text: CHATBOT_TREE.welcome.text,
      options: CHATBOT_TREE.welcome.options,
      action: CHATBOT_TREE.welcome.action
    }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [history, isOpen]);

  const handleOptionSelect = (option) => {
    const nextKey = option.next;
    const nextNode = CHATBOT_TREE[nextKey];

    const updatedHistory = [
      ...history,
      { sender: 'user', text: option.label }
    ];

    if (nextNode) {
      setCurrentNodeKey(nextKey);
      updatedHistory.push({
        sender: 'bot',
        text: nextNode.text,
        options: nextNode.options,
        action: nextNode.action
      });
    }

    setHistory(updatedHistory);
  };

  const handleActionClick = (action) => {
    if (action.type === 'link') {
      window.open(action.url, '_blank');
    } else if (action.type === 'scroll') {
      const element = document.getElementById(action.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const handleReset = () => {
    setCurrentNodeKey('welcome');
    setHistory([
      {
        sender: 'bot',
        text: CHATBOT_TREE.welcome.text,
        options: CHATBOT_TREE.welcome.options,
        action: CHATBOT_TREE.welcome.action
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5">
      
      {/* 1-Tap Floating WhatsApp Enquiry Button */}
      {!isOpen && (
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Quote"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl hover:scale-110 transition-all border-2 border-emerald-300/40 flex items-center justify-center group"
          title="Direct WhatsApp Enquiry"
        >
          <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </a>
      )}

      {/* Floating Toggle Button for Virtual Assistant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-atx-navy-card to-atx-navy border-2 border-atx-gold text-white shadow-2xl hover:scale-105 transition-all gold-glow"
          aria-label="Open AI Assistant"
        >
          <div className="w-8 h-8 rounded-full bg-atx-gold flex items-center justify-center text-atx-navy-dark font-bold">
            <Bot className="w-5 h-5" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-bold text-white tracking-wide">ATX Virtual Assistant</p>
            <p className="text-[10px] text-atx-gold">Instant Help & Quotes</p>
          </div>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] rounded-2xl bg-atx-navy-card border border-atx-gold/40 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-atx-navy border-b border-atx-navy-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-atx-gold/15 border border-atx-gold/30 flex items-center justify-center text-atx-gold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">ATX Assistant</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <p className="text-[10px] text-slate-300">Automated Guided Assistant</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart chat"
                className="p-1.5 text-slate-400 hover:text-atx-gold rounded-lg hover:bg-atx-navy-light transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-atx-navy-light transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sub-header announcement */}
          <div className="px-4 py-1.5 bg-atx-gold/10 border-b border-atx-gold/20 text-[10px] text-atx-gold text-center font-medium">
            Rule-based assistant • Connects directly to WhatsApp for live quotes
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            {history.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-atx-gold text-atx-navy-dark font-semibold'
                      : 'bg-atx-navy border border-atx-navy-border text-slate-200 whitespace-pre-line'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Optional Action Button */}
                {msg.action && (
                  <div className="mt-2.5">
                    <button
                      onClick={() => handleActionClick(msg.action)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
                    >
                      <span>{msg.action.buttonText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Quick Option Buttons (only for last message) */}
                {index === history.length - 1 && msg.options && (
                  <div className="mt-3 flex flex-wrap gap-1.5 w-full">
                    {msg.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => handleOptionSelect(opt)}
                        className="text-left px-3 py-2 rounded-xl bg-atx-navy-light/70 hover:bg-atx-gold/20 text-slate-200 hover:text-atx-gold border border-atx-navy-border hover:border-atx-gold/40 text-[11px] font-medium transition-all"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Bar */}
          <div className="p-3 bg-atx-navy border-t border-atx-navy-border flex items-center justify-between text-[11px] text-slate-400">
            <span>Need human support?</span>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-atx-gold hover:underline flex items-center gap-1"
            >
              <span>WhatsApp live chat</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      )}

    </div>
  );
}

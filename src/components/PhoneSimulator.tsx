import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, MessageSquare, Repeat2, Send, Languages, Shield, 
  Wifi, WifiOff, Zap, Sparkles, SendHorizontal, Battery, 
  Lock, Eye, Award, CheckCircle2, User, HelpCircle, Flame, Plus,
  RefreshCw, Orbit
} from 'lucide-react';
import { MOCK_POSTS, MOCK_CHATS } from '../mockData';
import { MockPost, ChatThread, ChatMessage } from '../types';

interface PhoneSimulatorProps {
  initialTab?: string;
}

export default function PhoneSimulator({ initialTab = 'feed' }: PhoneSimulatorProps) {
  // Navigation: 'feed' | 'messenger' | 'videoplus' | 'studio'
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  
  // Feature states
  const [lang, setLang] = useState<'fr' | 'en' | 'es'>('fr');
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [posts, setPosts] = useState<MockPost[]>(MOCK_POSTS);
  
  // Messenger states
  const [chats, setChats] = useState<ChatThread[]>(MOCK_CHATS);
  const [selectedThreadId, setSelectedThreadId] = useState<string>('thread-Sophie');
  const [chatInput, setChatInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  
  // Studio states
  const [studioFilter, setStudioFilter] = useState<string>('cosmic');
  const [boostedPostId, setBoostedPostId] = useState<string | null>(null);
  const [studioCaption, setStudioCaption] = useState<string>('Dans mon orbite créative 🛸🪐');
  const [isGeneratingVideo, setIsGeneratingVideo] = useState<boolean>(false);
  const [generationProgress, setGenerationProgress] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Synchronize external tab switches from landing page grid
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Toast trigger utility
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Scroll chats down
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats, selectedThreadId, isTyping]);

  // Handle Likes
  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const liked = !p.hasLiked;
        return {
          ...p,
          hasLiked: liked,
          likes: liked ? p.likes + 1 : p.likes - 1
        };
      }
      return p;
    }));
  };

  // Handle Reposts
  const handleRepost = (postId: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const reposted = !p.hasReposted;
        return {
          ...p,
          hasReposted: reposted,
          reposts: reposted ? p.reposts + 1 : p.reposts - 1
        };
      }
      return p;
    }));
  };

  // Handle Messenger Submit
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const sentText = chatInput;
    setChatInput('');

    // Append user message
    setChats(prev => prev.map(th => {
      if (th.id === selectedThreadId) {
        const newMsg: ChatMessage = {
          id: `msg-user-${Date.now()}`,
          sender: 'user',
          content: {
            fr: sentText,
            en: sentText
          },
          timestamp: 'À l\'instant',
          isEncrypted: true
        };
        return {
          ...th,
          messages: [...th.messages, newMsg]
        };
      }
      return th;
    }));

    // Trigger simulated "Encrypting transmission" block
    setIsTyping(true);

    // Simulate reply from Sophie/Gabriel
    setTimeout(() => {
      setIsTyping(false);
      setChats(prev => prev.map(th => {
        if (th.id === selectedThreadId) {
          let replyFr = 'Message sécurisé reçu avec succès.';
          let replyEn = 'Secured message received successfully.';

          if (selectedThreadId === 'thread-Sophie') {
            replyFr = 'Bien reçu ! Les protocoles de cryptographie AES-256 valident mon terminal. Travaillons sur la version délocalisée demain.';
            replyEn = 'Got it! AES-256 cryptographic protocols validated my device. Let\'s review static peer coordination tomorrow.';
          } else {
            replyFr = 'Impeccable. Les traces et télémétries de test sont effacées de manière atomique.';
            replyEn = 'Superb. Test logs and telemetry are atomically purged from target nodes.';
          }

          const responseMsg: ChatMessage = {
            id: `msg-reply-${Date.now()}`,
            sender: 'other',
            content: {
              fr: replyFr,
              en: replyEn
            },
            timestamp: 'À l\'instant',
            isEncrypted: true
          };

          return {
            ...th,
            messages: [...th.messages, responseMsg]
          };
        }
        return th;
      }));
    }, 2000);
  };

  // Handle Studio Generation Simulation
  const handleGenerateStudioPost = () => {
    if (isGeneratingVideo) return;
    setIsGeneratingVideo(true);
    setGenerationProgress(0);

    const interval = setInterval(() => {
      setGenerationProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsGeneratingVideo(false);
            
            // Add new mock post to feed
            const newPostId = `post-studio-${Date.now()}`;
            const newPost: MockPost = {
              id: newPostId,
              username: 'Créateur Démo',
              handle: '@demo_creator',
              avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
              time: 'À l\'instant',
              content: {
                fr: `${studioCaption} (Créé avec Orbit Studio 🎬)`,
                en: `${studioCaption} (Created using Orbit Studio 🎬)`,
                es: `${studioCaption} (Creado con Orbit Studio 🎬)`
              },
              image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80',
              likes: 12,
              reposts: 2,
              comments: 0
            };

            setPosts(prev => [newPost, ...prev]);
            setActiveTab('feed');
            triggerToast('Publication créée avec succès !');
          }, 400);
          return 100;
        }
        return p + 20;
      });
    }, 250);
  };

  // Handle active thread selection
  const currentThread = chats.find(th => th.id === selectedThreadId) || chats[0];

  return (
    <div className="relative mx-auto max-w-[380px] w-full" id="interstellar-sandbox-device">
      
      {/* Toast notifications inside simulator */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="absolute top-16 left-1/2 -translate-x-1/2 z-55 px-4 py-2.5 rounded-xl bg-orbit-accent border border-indigo-200 text-white text-xs font-semibold shadow-lg backdrop-blur-md flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cyber Phone Container Outer Bezel - Classic metallic frame */}
      <div className="relative border-x-8 border-y-[16px] border-[#0f172a] rounded-[52px] bg-slate-50 shadow-[0_25px_60px_rgba(15,23,42,0.12),_0_0_50px_rgba(99,102,241,0.06)] overflow-hidden flex flex-col h-[680px]">
        
        {/* Notch / Dynamic Island simulation */}
        <div className="absolute top-0 inset-x-0 h-7 bg-[#0f172a] z-50 flex justify-between items-center px-6">
          <span className="text-[10px] font-mono font-semibold text-slate-200">21:24</span>
          
          <div className="w-20 h-4 bg-black rounded-b-xl absolute left-1/2 -translate-x-1/2 top-0 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
          </div>

          <div className="flex items-center gap-1.5 text-slate-200">
            {isOffline ? (
              <WifiOff className="w-3 h-3 text-rose-400" />
            ) : (
              <Wifi className="w-3 h-3 text-emerald-400" />
            )}
            <Battery className="w-4 h-4 text-slate-200" />
          </div>
        </div>

        {/* Dynamic Simulator Screen Area */}
        <div className="flex-1 mt-7 flex flex-col bg-slate-50 overflow-hidden relative">
          
          {/* Header Banner Inside App */}
          <div className="h-14 border-b border-slate-100 bg-white/95 px-4 flex items-center justify-between z-10 sticky top-0 backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orbit-accent animate-pulse" />
              <span className="font-display font-black tracking-tight text-slate-800 text-sm uppercase">
                {activeTab === 'feed' && 'Orbit Feed'}
                {activeTab === 'messenger' && 'Orbit Messages'}
                {activeTab === 'videoplus' && 'Mode Offline'}
                {activeTab === 'studio' && 'Orbit Studio'}
              </span>
            </div>

            {/* Live Interactive Action Controllers on Header Banner */}
            {activeTab === 'feed' && (
              <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 border border-slate-200/50">
                <button
                  onClick={() => setLang('fr')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${lang === 'fr' ? 'bg-orbit-accent text-white' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-orbit-accent text-white' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('es')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${lang === 'es' ? 'bg-orbit-accent text-white' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  ES
                </button>
              </div>
            )}

            {activeTab === 'videoplus' && (
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-medium text-slate-500">Réseau</span>
                <button
                  onClick={() => {
                    setIsOffline(!isOffline);
                    triggerToast(isOffline ? "Connexion rétablie !" : "Mode Hors-ligne activé !");
                  }}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isOffline ? 'bg-rose-500' : 'bg-emerald-600'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      isOffline ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            )}
          </div>

          {/* Core Simulator Panel Router Views */}
          <div className="flex-1 overflow-y-auto overflow-hidden flex flex-col justify-start">
            <AnimatePresence mode="wait">
              {/* FEED VIEW */}
              {activeTab === 'feed' && (
                <motion.div
                  key="feed-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-3 flex flex-col gap-3"
                >
                  {/* Offline Warning inside Feed */}
                  {isOffline && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-amber-500 animate-bounce" />
                      <div className="text-[10px] text-amber-800">
                        <strong>Autonomie Active :</strong> Flux servi localement via Video Plus intelligent.
                      </div>
                    </div>
                  )}

                  {posts.map(post => {
                    const isBoosted = boostedPostId === post.id || post.isBoosted;
                    return (
                      <div 
                        key={post.id} 
                        className={`p-3.5 rounded-2xl bg-white border border-slate-205 relative overflow-hidden ${
                          isBoosted ? 'border-purple-300 bg-gradient-to-tr from-purple-50/20 via-white to-white shadow-[0_4px_15px_rgba(168,85,247,0.04)] animate-pulse-subtle' : ''
                        }`}
                      >
                        {isBoosted && (
                          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-50 border border-purple-200/50 text-[9px] font-mono text-purple-600 font-bold uppercase tracking-wider scale-90">
                            <Sparkles className="w-2.5 h-2.5 animate-pulse text-orbit-accent" />
                            Boosté
                          </div>
                        )}

                        <div className="flex items-center gap-2.5 mb-2.5">
                          <img 
                            src={post.avatar} 
                            alt={post.username} 
                            width="32" height="32" loading="lazy" 
                            className="w-8 h-8 rounded-full object-cover border border-slate-100"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                              {post.username}
                              <CheckCircle2 className="w-3 h-3 text-orbit-accent" />
                            </div>
                            <div className="text-[9px] font-mono text-slate-400">{post.handle} • {post.time}</div>
                          </div>
                        </div>

                        {/* Translated body text */}
                        <p className="text-xs text-slate-600 font-light leading-relaxed mb-3 transition-all duration-300">
                          {post.content[lang]}
                        </p>

                        {/* Attached Image if any */}
                        {post.image && (
                          <div className="rounded-xl overflow-hidden border border-slate-100 mb-3 bg-slate-50">
                            <img 
                              src={post.image} 
                            alt="Contenu attaché" 
                            width="600" height="180" loading="lazy" 
                              className="w-full h-32 object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}

                        {/* Interactive Metrics Line */}
                        <div className="flex items-center justify-between text-slate-400 pt-1.5 border-t border-slate-100">
                          <button 
                            onClick={() => handleLike(post.id)}
                            className={`flex items-center gap-1 cursor-pointer transition-colors text-[10px] hover:text-rose-500 ${post.hasLiked ? 'text-rose-500' : ''}`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${post.hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                            <span>{post.likes}</span>
                          </button>

                          <button 
                            onClick={() => handleRepost(post.id)}
                            className={`flex items-center gap-1 cursor-pointer transition-colors text-[10px] hover:text-emerald-600 ${post.hasReposted ? 'text-emerald-600' : ''}`}
                          >
                            <Repeat2 className="w-3.5 h-3.5" />
                            <span>{post.reposts}</span>
                          </button>

                          <div className="flex items-center gap-1 text-[10px]">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>{post.comments}</span>
                          </div>

                          <button 
                            onClick={() => {
                              if (isBoosted) {
                                triggerToast("Publication déjà boostée !");
                                return;
                              }
                              setBoostedPostId(post.id);
                              triggerToast("Publication propulsée en tête d'orbite !");
                            }}
                            className="flex items-center gap-1 text-[9px] font-mono text-orbit-accent hover:text-purple-700 uppercase transition-all duration-200"
                          >
                            <Zap className="w-3.5 h-3.5" />
                            <span>BOOSTER</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* MESSENGER SECURE VIEW */}
              {activeTab === 'messenger' && (
                <motion.div
                  key="messenger-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col justify-between"
                  style={{ height: 'calc(100vh - 150px)' }}
                >
                  {/* Inner Selector Bar */}
                  <div className="flex gap-1.5 p-2 bg-white/90 border-b border-slate-100">
                    {chats.map(th => {
                      const isSel = th.id === selectedThreadId;
                      return (
                        <button
                          key={th.id}
                          onClick={() => setSelectedThreadId(th.id)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-medium transition-all ${
                            isSel ? 'bg-purple-50 text-purple-705 border border-purple-200' : 'text-slate-500 hover:text-slate-800 bg-slate-50 border border-transparent'
                          }`}
                        >
                          <img src={th.avatar} alt={th.name} width="16" height="16" loading="lazy" className="w-4 h-4 rounded-full border border-slate-100" />
                          <span>{th.name.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Encryption Status Flag */}
                  <div className="p-2.5 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between text-[9px] font-mono text-emerald-700 px-3 shrink-0">
                    <span className="flex items-center gap-1 uppercase font-bold text-[8.5px]">
                      <Lock className="w-3 h-3 text-emerald-600 animate-pulse" />
                      CHIFFREMENT CONTINU ACTIF
                    </span>
                    <span className="text-[8px] opacity-65 text-emerald-600">Handshake: DH-256</span>
                  </div>

                  {/* Messages Bubble Scroller */}
                  <div 
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto p-3 space-y-3.5 flex flex-col min-h-0 bg-slate-50"
                    style={{ maxHeight: '420px' }}
                  >
                    {currentThread.messages.map(msg => {
                      if (msg.sender === 'system') {
                        return (
                          <div key={msg.id} className="text-center py-1">
                            <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[8px] font-mono text-emerald-700 tracking-wider uppercase font-semibold">
                              {msg.content[lang === 'fr' ? 'fr' : 'en']}
                            </span>
                          </div>
                        );
                      }

                      const isUser = msg.sender === 'user';
                      return (
                        <div 
                          key={msg.id} 
                          className={`flex flex-col max-w-[80%] ${isUser ? 'self-end items-end' : 'self-start items-start'}`}
                        >
                          <div className={`p-2.5 rounded-2xl text-[11px] leading-relaxed ${
                            isUser 
                              ? 'bg-orbit-primary text-white rounded-br-xs' 
                              : 'bg-white text-slate-700 rounded-bl-xs border border-slate-200/60 shadow-xs'
                          }`}>
                            {msg.content[lang === 'fr' ? 'fr' : 'en']}
                          </div>
                          
                          <div className="flex items-center gap-1 text-[8px] font-mono text-slate-400 mt-1 uppercase scale-90">
                            <span>{msg.timestamp}</span>
                            <span>•</span>
                            <span className="text-emerald-600 flex items-center gap-0.5">
                              <Lock className="w-2 h-2 text-emerald-600" /> E2EE
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    {isTyping && (
                      <div className="self-start flex flex-col items-start max-w-[80%]">
                        <div className="p-2.5 rounded-2xl bg-white border border-slate-200 text-[10px] text-slate-500 italic flex items-center gap-2 shadow-xs">
                          <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-orbit-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-1.5 h-1.5 rounded-full bg-orbit-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-1.5 h-1.5 rounded-full bg-orbit-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                          <span>Déchiffrement local...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Chat input box */}
                  <div className="p-2 border-t border-slate-100 bg-white flex items-center gap-2 shrink-0">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                      }}
                      placeholder="Message chiffré..."
                      className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-850 focus:outline-none focus:border-orbit-accent font-sans placeholder-slate-400"
                    />
                    <button 
                      onClick={handleSendMessage}
                      className="p-2 rounded-xl bg-orbit-accent hover:bg-indigo-700 text-white transition-colors cursor-pointer"
                    >
                      <SendHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* VIDEO PLUS TAB */}
              {activeTab === 'videoplus' && (
                <motion.div
                  key="vplus-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-3 flex flex-col gap-3"
                >
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    VIDEO PLUS - HORS-LIGNE
                  </p>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 relative overflow-hidden flex flex-col items-center text-center shadow-xs">
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[9px] font-mono text-amber-700 font-bold uppercase">
                      <Zap className="w-3 h-3 text-amber-500 animate-pulse" />
                      AUTONOME
                    </div>

                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-3 mt-4 border border-amber-100">
                      <Zap className="w-6 h-6 animate-pulse" />
                    </div>

                    <h4 className="font-display font-semibold text-slate-800 text-sm mb-1">Cachage Intelligent</h4>
                    <p className="text-[10px] text-slate-550 max-w-[220px] mb-4">
                      Orbit Post a stocké <strong>4 vidéos courtes</strong> sur votre disque principal pendant votre dernière connexion Wi-Fi.
                    </p>

                    <div className="w-full h-px bg-slate-100 my-2" />

                    <div className="w-full grid grid-cols-2 gap-2 mt-2">
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/75 text-left">
                        <span className="text-[8px] font-mono text-emerald-600 uppercase font-black">● DISPONIBLE</span>
                        <h5 className="text-[10px] font-bold text-slate-805 mt-1 truncate">L'univers mystérieux</h5>
                        <p className="text-[8px] text-slate-405 font-mono">12.4 Mo</p>
                      </div>
                      
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/75 text-left">
                        <span className="text-[8px] font-mono text-emerald-600 uppercase font-black">● DISPONIBLE</span>
                        <h5 className="text-[10px] font-bold text-slate-805 mt-1 truncate">Dev secret logs</h5>
                        <p className="text-[8px] text-slate-405 font-mono">8.9 Mo</p>
                      </div>
                    </div>
                  </div>

                  {/* Video Mock Play Panel */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 h-48 flex flex-col justify-between shadow-xs">
                    <div className="absolute inset-0 bg-radial-gradient(circle_at_center,_var(--tw-gradient-stops)) from-[#6366f1]/5 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="flex justify-between items-start relative z-10 w-full">
                      <span className="badge px-2 py-0.5 rounded-md bg-purple-50 border border-purple-200 text-[8px] font-mono text-purple-750">
                        HORS-LIGNE CACHED
                      </span>
                      <span className="text-[9px] font-mono text-slate-400">Flux: #astro</span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="p-2 text-slate-405 hover:text-slate-700 transition-colors cursor-pointer rounded-full bg-slate-100 border border-slate-200 mb-2">
                        <Zap className="w-6 h-6 text-amber-500" />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-800">Lecture Directe sans Data</span>
                      <span className="text-[8px] text-slate-500">Zéro paquet internet requis</span>
                    </div>

                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative z-10">
                      <div className="h-full bg-orbit-accent w-2/3 animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STUDIO CREATION VIEW */}
              {activeTab === 'studio' && (
                <motion.div
                  key="studio-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 flex flex-col gap-4"
                >
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    CRÉATION D'ORBITE VIDEOS INDÉPENDANTE
                  </p>

                  {/* Interactive filter toggle */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono mb-2 block">Choisissez le Filtre Cosmique</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['cosmic', 'supernova', 'cyber'].map(filt => (
                        <button
                          key={filt}
                          onClick={() => setStudioFilter(filt)}
                          className={`py-2 px-1 rounded-xl text-[10px] font-bold border transition-all uppercase cursor-pointer ${
                            studioFilter === filt 
                              ? 'bg-purple-100 border-orbit-accent text-purple-750 font-mono' 
                              : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-350'
                          }`}
                        >
                          {filt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Caption Input Box */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono mb-2 block">Légende de la publication</span>
                    <input
                      type="text"
                      value={studioCaption}
                      onChange={(e) => setStudioCaption(e.target.value)}
                      placeholder="Ajoutez un hashtag..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-orbit-accent"
                    />
                  </div>

                  {/* Render simulated post preview based on chosen filter */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 flex items-center gap-3 shadow-xs">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr flex items-center justify-center text-white ${
                      studioFilter === 'cosmic' ? 'from-indigo-600 to-purple-600' :
                      studioFilter === 'supernova' ? 'from-orange-500 to-rose-500' : 'from-[#00f2fe] to-[#4facfe]'
                    }`}>
                      <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-800">Aperçu Orbit Vidéo</h5>
                      <p className="text-[9px] text-slate-500 italic">" {studioCaption} "</p>
                    </div>
                  </div>

                  {/* Boost & Generate button */}
                  <button
                    onClick={handleGenerateStudioPost}
                    disabled={isGeneratingVideo}
                    className="w-full py-3 px-4 rounded-xl font-semibold font-mono text-xs bg-linear-to-r from-orbit-primary to-orbit-accent text-white shadow-md cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 duration-200"
                  >
                    {isGeneratingVideo ? (
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>PROCESSING {generationProgress}%...</span>
                      </div>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>PUBLIER SUR LE FIL DIRECT</span>
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive Core Bottom Navigation Tabs */}
          <div className="h-14 border-t border-slate-100 bg-white/95 flex items-center justify-around px-2 py-1 shrink-0 shadow-sm">
            <button
              onClick={() => {
                setActiveTab('feed');
                triggerToast('Retour au flux direct');
              }}
              className={`flex flex-col items-center gap-0.5 p-1.5 transition-all cursor-pointer ${activeTab === 'feed' ? 'text-orbit-accent scale-105' : 'text-slate-400 hover:text-slate-700'}`}
            >
              <Orbit className="w-5 h-5" />
              <span className="text-[8px] font-mono font-bold tracking-tight uppercase">Flux</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('messenger');
                triggerToast('Initialisation canal E2EE');
              }}
              className={`flex flex-col items-center gap-0.5 p-1.5 transition-all cursor-pointer relative ${activeTab === 'messenger' ? 'text-orbit-accent scale-105' : 'text-slate-400 hover:text-slate-705'}`}
            >
              <div className="relative">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <span className="text-[8px] font-mono font-bold tracking-tight uppercase">Chat</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('videoplus');
                triggerToast('Module Video Plus offline');
              }}
              className={`flex flex-col items-center gap-0.5 p-1.5 transition-all cursor-pointer ${activeTab === 'videoplus' ? 'text-orbit-accent scale-105' : 'text-slate-400 hover:text-slate-700'}`}
            >
              <Zap className="w-5 h-5" />
              <span className="text-[8px] font-mono font-bold tracking-tight uppercase">Offline</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('studio');
                triggerToast('Studio de création indépendant');
              }}
              className={`flex flex-col items-center gap-0.5 p-1.5 transition-all cursor-pointer ${activeTab === 'studio' ? 'text-orbit-accent scale-105' : 'text-slate-400 hover:text-slate-700'}`}
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-[8px] font-mono font-bold tracking-tight uppercase">Studio</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Dynamic Background Glowing Orbit Ring attached to the Phone */}
      <div className="absolute inset-[-10px] border border-dashed border-orbit-accent/15 rounded-[60px] pointer-events-none -z-10 animate-[spin_60s_linear_infinite]" />
    </div>
  );
}

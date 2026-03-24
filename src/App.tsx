import React, { useState, useEffect } from 'react';
import { Gift, Printer, Smartphone, BookOpen, Lock, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Check, Shield, ThumbsUp, MessageCircle, Share2, ShieldCheck, Star } from 'lucide-react';

const notifications = [
  { name: 'Fernanda M.', product: 'Pacote de Convites', location: 'São Paulo, SP', time: 'há 2 min' },
  { name: 'João P.', product: 'Pacote de Convites', location: 'Belo Horizonte, MG', time: 'há 5 min' },
  { name: 'Ana C.', product: 'Pacote de Convites', location: 'Salvador, BA', time: 'há 12 min' },
  { name: 'Juliana R.', product: 'Pacote de Convites', location: 'Curitiba, PR', time: 'há 18 min' },
  { name: 'Pedro L.', product: 'Pacote de Convites', location: 'Brasília, DF', time: 'há 15 min' },
];

const faqs = [
  { q: 'Preciso ter experiência com design?', a: 'Não! Os templates são 100% editáveis no Canva gratuito. É só arrastar e soltar, qualquer pessoa consegue alterar nomes, idades e fotos.' },
  { q: 'Preciso pagar o Canva Pro?', a: 'Não! Todos os convites foram criados com elementos gratuitos para funcionar perfeitamente no Canva Gratuito.' },
  { q: 'Quais temas estão inclusos?', a: 'Os temas mais pedidos do momento: infantis, 15 anos, casamentos, chás de bebê, batizados e muito mais!' },
  { q: 'Como recebo o material?', a: 'Após a compra aprovada, você recebe o acesso no seu e-mail em poucos segundos. Acesso instantâneo e digital.' },
  { q: 'É físico ou digital?', a: 'É 100% digital. Você recebe os links de acesso aos templates e pode editar pelo celular ou computador.' },
  { q: 'Por quanto posso vender cada convite?', a: 'Convites digitais interativos são vendidos entre R$15 e R$45 cada, dependendo se tem botões clicáveis ou animação. O lucro é 100% seu!' },
  { q: 'Preciso de um computador bom?', a: 'Não! Você pode editar tudo pelo celular usando o aplicativo do Canva, de forma rápida e prática.' },
  { q: 'Posso usar para vender comercialmente?', a: 'Sim! O objetivo é exatamente esse: você editar e vender os convites prontos para seus clientes e lucrar muito.' },
];

const testimonials = [
  { name: 'Luana Ribeiro', time: '5d', location: 'São Paulo, SP', text: 'Eu nunca tinha trabalhado com convites e fiquei surpresa com a facilidade. Os templates no Canva são perfeitos. Já consegui faturar muito vendendo pelo WhatsApp.', likes: 47, comments: 12, avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Carolina Mendes', time: '1d', location: 'Curitiba, PR', text: 'Trabalho com papelaria personalizada e esses convites digitais ajudaram muito a ampliar meu catálogo. Os clientes amam a praticidade.', likes: 58, comments: 15, avatar: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Ana Maria Pereira', time: '2d', location: 'Recife, PE', text: 'Gostei porque é tudo pronto. Não precisei criar nada do zero, só alterar o nome e a foto da criança. Os bônus também valem muito a pena.', likes: 41, comments: 9, avatar: 'https://i.pravatar.cc/150?img=9' },
];

const invitationImages = [
  "https://i.imgur.com/u0eqvWj.jpg",
  "https://i.imgur.com/j9f9JcA.jpg",
  "https://i.imgur.com/5HYhCyl.jpg",
  "https://i.imgur.com/vsvy8gU.jpg",
  "https://i.imgur.com/JlbLwe8.jpg",
  "https://i.imgur.com/eOmDqPl.jpg"
];

const resultImages = [
  "https://i.imgur.com/89tiBQY.jpg",
  "https://i.imgur.com/MXT9wmW.jpg",
  "https://i.imgur.com/GAAq4Me.jpg",
  "https://i.imgur.com/O58RAEy.jpg"
];

const FloatingNotification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showInterval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
        }, 500);
      }, 4000);
    }, 12000);

    return () => clearInterval(showInterval);
  }, []);

  const notification = notifications[currentIndex];

  return (
    <div className={`fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      <div className="bg-white rounded-xl shadow-2xl p-4 flex items-center gap-4 border-l-4 border-[#00b8cd] max-w-sm">
        <div className="bg-[#00b8cd] rounded-full p-1 flex-shrink-0">
          <Check className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800">{notification.name}</p>
          <p className="text-xs text-gray-600">Comprou: {notification.product}</p>
          <p className="text-[10px] text-gray-400 mt-1">{notification.location} - {notification.time}</p>
        </div>
      </div>
    </div>
  );
};

const Button: React.FC<any> = ({ children, className = '', onClick, href }) => {
  if (href) {
    return (
      <a href={href} className={`w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 px-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2 text-lg ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 px-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2 text-lg ${className}`}>
      {children}
    </button>
  );
};

const AccordionItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-gray-800 pr-4">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-[#00b8cd] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#00b8cd] flex-shrink-0" />}
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 text-sm">{answer}</p>
      </div>
    </div>
  );
};

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % resultImages.length);
  const prev = () => setCurrent((prev) => (prev - 1 + resultImages.length) % resultImages.length);

  return (
    <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
      <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {resultImages.map((src, i) => (
          <img key={i} src={src} alt={`Resultado ${i+1}`} loading={i === 0 ? "eager" : "lazy"} decoding="async" className="w-full h-[320px] object-cover flex-shrink-0" />
        ))}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {resultImages.map((_, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#00b8cd]' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
};

const BonusCard: React.FC<{ image: string, title: string, subtitle: string, description: string, highlight: string, contain?: boolean }> = ({ image, title, subtitle, description, highlight, contain }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8 max-w-md mx-auto">
    {contain ? (
      <div className="bg-gray-50 h-52 flex items-center justify-center p-2">
        <img src={image} alt={title} loading="lazy" decoding="async" className="w-full h-full object-contain" />
      </div>
    ) : (
      <img src={image} alt={title} loading="lazy" decoding="async" className="w-full h-40 object-cover" />
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
      <p className="text-center text-[#00b8cd] font-bold mb-4">{subtitle}</p>
      <p className="text-gray-600 text-sm mb-4 text-center whitespace-pre-line">{description}</p>
      <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 font-medium flex items-start gap-2">
        <span className="text-lg leading-none">👉</span> 
        <span>{highlight}</span>
      </div>
    </div>
  </div>
);

const PricingCard = () => (
  <div className="relative bg-white rounded-[2rem] shadow-2xl border-4 border-[#00b8cd] p-6 md:p-8 max-w-md mx-auto mt-12">
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#00b8cd] text-white font-black py-2 px-8 rounded-full text-sm tracking-widest shadow-md whitespace-nowrap flex items-center gap-2">
      <Star className="w-4 h-4 fill-current" /> OFERTA ESPECIAL <Star className="w-4 h-4 fill-current" />
    </div>
    
    <h3 className="text-2xl md:text-3xl font-black text-center text-[#00b8cd] mt-6 mb-4 uppercase">
      Plano Completo
    </h3>
    
    <div className="flex justify-center mb-4">
      <div className="bg-[#f0fdfa] text-[#00b8cd] font-bold py-1.5 px-6 rounded-full text-sm">
        HOJE POR APENAS
      </div>
    </div>
    
    <div className="text-center mb-1 flex flex-col items-center">
      <span className="text-gray-500 font-bold text-lg relative">
        De R$ 197,90
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 -rotate-2"></div>
      </span>
    </div>
    
    <div className="text-center mb-6 flex justify-center items-start gap-1">
      <span className="text-xl font-bold text-[#00b8cd] mt-2">R$</span>
      <span className="text-6xl font-black text-[#00b8cd] tracking-tighter">13,97</span>
    </div>
    
    <ul className="space-y-4 mb-8 px-2">
      {[
        'Acesso a +700 Convites Editáveis',
        'Pagamento único (sem mensalidade)',
        'Acesso imediato e vitalício',
        'Editável no Canva Gratuito'
      ].map((item, i) => (
        <li key={i} className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border-2 border-[#00b8cd] flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-[#00b8cd]" strokeWidth={3} />
          </div>
          <span className="text-gray-800 font-bold text-sm">{item}</span>
        </li>
      ))}
    </ul>
    
    <div className="relative border-2 border-[#00b8cd] rounded-2xl p-6 pt-8 mb-8 bg-[#f0fdfa]">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00b8cd] text-white font-bold py-1.5 px-6 rounded-full text-xs whitespace-nowrap flex items-center gap-2">
        <Gift className="w-4 h-4" /> +4 BÔNUS EXCLUSIVOS HOJE
      </div>
      <ul className="space-y-3">
        {[
          'Pack Premium de 108 Filtros',
          'Mockups de Convites Profissionais',
          '+15 Mil Kits Scrapbooks',
          '450 Kits Digitais Completos'
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-[#00b8cd] flex-shrink-0" />
            <span className="text-gray-800 font-bold text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <Button href="https://pay.lowify.com.br/checkout?product_id=Huj0p8" className="mb-6 shadow-[0_8px_30px_rgb(34,197,94,0.4)]">
      QUERO MEU PLANO 🔥
    </Button>
    
    <div className="mb-4">
      <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> Vagas preenchidas</span>
        <span className="text-red-500">87%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-gradient-to-r from-red-400 to-red-500 h-2.5 rounded-full" style={{ width: '87%' }}></div>
      </div>
    </div>
    
    <div className="text-center flex items-center justify-center gap-2 text-gray-600 font-bold text-sm mt-4">
      <span className="text-[#ea580c]">⚡</span> Acesso imediato no e-mail
    </div>
  </div>
);

const TestimonialCard: React.FC<any> = ({ name, time, location, text, likes, comments, avatar }) => (
  <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 mb-6 max-w-md mx-auto">
    <div className="flex items-center gap-4 mb-4">
      <img src={avatar} alt={name} loading="lazy" decoding="async" className="w-10 h-10 rounded-full object-cover" />
      <div>
        <h4 className="font-bold text-gray-800">{name}</h4>
        <div className="flex text-yellow-400 mb-1">
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
        </div>
        <p className="text-xs text-gray-500">•{time} <br/> {location}</p>
      </div>
    </div>
    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
      {text}
    </p>
    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
      <span>{likes} curtidas</span>
      <span>{comments} comentários</span>
    </div>
    <div className="border-t border-gray-100 pt-4 flex justify-between text-gray-500 text-sm font-medium">
      <button className="flex items-center gap-1 hover:text-gray-800"><ThumbsUp className="w-4 h-4" /> Curtir</button>
      <button className="flex items-center gap-1 hover:text-gray-800"><MessageCircle className="w-4 h-4" /> Comentar</button>
      <button className="flex items-center gap-1 hover:text-gray-800"><Share2 className="w-4 h-4" /> Compartilhar</button>
    </div>
  </div>
);

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 31, seconds: 3 });

  useEffect(() => {
    // Preconnect to video domain for faster DNS/TLS resolution
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://app.litevideo.net';
    document.head.appendChild(preconnect);

    // Load VSL script immediately without delay
    const script = document.createElement('script');
    script.src = "https://app.litevideo.net/p.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-800 pb-0">
      <FloatingNotification />
      
      {/* Top Banner */}
      <div className="bg-[#00b8cd] text-white text-center py-3 font-bold text-sm md:text-base tracking-wider">
        PROMOÇÃO VÁLIDA - 24/03/2026
      </div>

      {/* Hero Section */}
      <section className="px-4 py-8 md:py-12 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-black text-[#1a1a1a] leading-tight mb-4">
          +700 Packs Convites de Aniversário Digital Editáveis <span className="text-[#00b8cd]">+ Bônus</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Crie convites incríveis em minutos, venda muito e lucre trabalhando de casa apenas com o celular!
        </p>
        
        {/* VSL Video */}
        <div className="w-full max-w-sm mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] bg-gray-100 relative">
          {/* Loading Spinner (Behind the video) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center animate-pulse z-0">
             <div className="w-12 h-12 border-4 border-[#00b8cd] border-t-transparent rounded-full animate-spin mb-4"></div>
             <p className="text-gray-400 font-medium text-sm">Carregando vídeo...</p>
          </div>
          
          {/* Video Element (Always in DOM so the script finds it) */}
          <div className="relative z-10 w-full h-full">
            {/* @ts-ignore */}
            <lt-v2 v="e1591862-b9f3-482a-aaf1-b2a385f26dd5" ar="9:16" p="ph=8&sc=0"></lt-v2>
          </div>
        </div>

        <Button onClick={scrollToOffer} className="max-w-md mx-auto">
          <Gift className="w-6 h-6" /> QUERO OS CONVITES!
        </Button>
      </section>

      {/* Alguns dos convites prontos */}
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-8 max-w-2xl mx-auto">
          Alguns dos convites prontos que você vai receber 👇
        </h2>
        <div className="relative w-full overflow-hidden pb-8">
          <div className="flex w-max animate-marquee pause-on-hover">
            <div className="flex gap-4 px-2">
              {invitationImages.map((src, i) => (
                <div key={i} className="shrink-0 w-40 h-56 rounded-2xl overflow-hidden shadow-md">
                  <img src={src} alt={`Convite ${i+1}`} decoding="async" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex gap-4 px-2">
              {invitationImages.map((src, i) => (
                <div key={`dup-${i}`} className="shrink-0 w-40 h-56 rounded-2xl overflow-hidden shadow-md">
                  <img src={src} alt={`Convite ${i+1}`} decoding="async" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
              will-change: transform;
            }
            .pause-on-hover:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
        <Button onClick={scrollToOffer} className="max-w-md mx-auto mt-4">
          <Gift className="w-6 h-6" /> QUERO OS CONVITES!
        </Button>
      </section>

      {/* Resultados */}
      <section className="py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-8 max-w-2xl mx-auto">
          💙 Pessoas que ja esta ultilizando!
        </h2>
        <Carousel />
      </section>

      {/* Features */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#00b8cd] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Templates Profissionais</h3>
            <p className="text-gray-500 text-sm">Convites de alta conversão, prontos para editar e enviar para seus clientes</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#00b8cd] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">100% Editável no Canva</h3>
            <p className="text-gray-500 text-sm">Altere textos, cores e fotos pelo celular ou computador usando o Canva Gratuito</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-[#00b8cd] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Printer className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Pronto para Enviar</h3>
            <p className="text-gray-500 text-sm">Formato ideal para WhatsApp, Instagram e Redes Sociais. Interativos e modernos.</p>
          </div>
        </div>
        <Button onClick={scrollToOffer} className="max-w-md mx-auto">
          <Gift className="w-6 h-6" /> QUERO AGORA!
        </Button>
      </section>

      {/* Bonus */}
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-2">
          🎁 BÔNUS EXCLUSIVOS
        </h2>
        <p className="text-center text-gray-600 font-medium mb-12">Tudo o que você vai receber</p>
        
        <BonusCard 
          image="https://i.imgur.com/Vfyzavp.png"
          title="🎁+108 Filtros Premium para Convites"
          subtitle="Você vai ter acesso:"
          description={"✔️Aplicação rápida em 1 clique\n✔️Visual mais profissional\n✔️Filtros modernos e prontos\n✔️Sem precisar de experiência"}
          highlight="Transforme qualquer convite em algo profissional em segundos!"
        />
        <BonusCard 
          image="https://i.imgur.com/0T6H6sn.png"
          title="🎁+Mockups Profissionais de Convites"
          subtitle="Você vai ter acesso:"
          description={"✔️Visualização realista\n✔️Apresentação profissional\n✔️Ideal para vender ou mostrar\n✔️Valorização do seu trabalho"}
          highlight="Seus convites vão parecer feitos por designer profissional!"
        />
        <BonusCard 
          image="https://i.imgur.com/aV4YkLV.png"
          title="🎁+15 Mil Elementos Scrapbook"
          subtitle="Você vai ter acesso:"
          description={"✔️Elementos prontos para usar\n✔️Vários estilos e temas\n✔️Liberdade total na criação\n✔️Nunca faltar ideias"}
          highlight="Crie convites únicos e personalizados sem limites!"
        />
        <BonusCard 
          image="https://i.imgur.com/eM6qwis.png"
          title="🎁+450 Kits Digitais Completos"
          subtitle="Você vai ter acesso:"
          description={"✔️Kits prontos organizados\n✔️Edição simples e rápida\n✔️Convites em poucos minutos\n✔️Economia de tempo total"}
          highlight="Economize horas de trabalho com materiais prontos!"
          contain={true}
        />

        <div className="bg-[#00b8cd] text-white text-center py-4 px-4 font-bold text-lg md:text-xl rounded-xl max-w-2xl mx-auto shadow-lg mt-8">
          Todos os Bônus Inclusos <span className="text-yellow-300">SEM CUSTO ADICIONAL!</span>
        </div>
      </section>

      {/* Offer / Pricing */}
      <section id="offer" className="bg-[#fafafa] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Countdown Box */}
          <div className="max-w-md mx-auto bg-gradient-to-r from-[#ef4444] to-[#f97316] rounded-2xl p-6 shadow-xl mb-10 text-center">
            <div className="flex items-center justify-center gap-2 text-white font-bold text-lg mb-4">
              <span className="animate-pulse">⏰</span> Oferta especial expira em:
            </div>
            <div className="flex justify-center gap-3">
              <div className="bg-white rounded-xl p-2 w-16 shadow-md">
                <div className="text-2xl font-black text-[#ea580c]">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-[8px] font-bold text-gray-500">HORAS</div>
              </div>
              <div className="bg-white rounded-xl p-2 w-16 shadow-md">
                <div className="text-2xl font-black text-[#ea580c]">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-[8px] font-bold text-gray-500">MIN</div>
              </div>
              <div className="bg-white rounded-xl p-2 w-16 shadow-md">
                <div className="text-2xl font-black text-[#ea580c]">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[8px] font-bold text-gray-500">SEG</div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl relative z-10 border border-gray-100">
            <h2 className="text-2xl md:text-4xl font-black text-center text-gray-800 mb-4">
              Garanta seu acesso hoje mesmo
            </h2>
            <PricingCard />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-[#fafafa]">
        <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-8 max-w-2xl mx-auto">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-8 max-w-2xl mx-auto">
          Perguntas Frequentes
        </h2>
        <div className="max-w-2xl mx-auto mb-8">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
        <Button onClick={scrollToOffer} className="max-w-md mx-auto">
          SEM DÚVIDAS! COMPRAR AGORA
        </Button>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="bg-[#f0fdfa] rounded-3xl shadow-lg border border-[#00b8cd]/20 p-8 max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-[#00b8cd] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-4">Garantia de 7 Dias</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Teste o material por 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro sem complicação.
          </p>
          <Button onClick={scrollToOffer}>
            <Lock className="w-5 h-5" /> COMPRAR COM SEGURANÇA
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 text-center py-8 text-sm">
        <p>© 2026 +700 Convites Digitais.</p>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

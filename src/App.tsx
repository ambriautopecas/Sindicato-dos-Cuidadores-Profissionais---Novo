/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, FormEvent } from "react";
import { 
  Shield, 
  BookOpen, 
  Handshake, 
  Building, 
  Building2,
  FileText, 
  Compass, 
  Heart, 
  Users, 
  Award, 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Phone, 
  Mail, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Sparkles, 
  LogIn, 
  Download, 
  ExternalLink, 
  MessageSquare, 
  Info,
  Scale,
  DollarSign,
  HelpCircle,
  Clock,
  BriefcaseMedical,
  Vote,
  FileBadge,
  UserPlus,
  Landmark
} from "lucide-react";

const SERVICES = [
  {
    icon: "gavel",
    title: "Assessoria Jurídica",
    description: "Defesa dos direitos trabalhistas e orientação jurídica especializada para o cuidador.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "school",
    title: "Cursos e Capacitação",
    description: "Programas de atualização profissional e certificações para valorizar seu currículo.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "payments",
    title: "Convênios e Benefícios",
    description: "Descontos exclusivos em farmácias, exames, lazer e serviços para nossos associados.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "groups",
    title: "Representação Sindical",
    description: "Voz ativa nas negociações coletivas e na busca por melhores condições de trabalho.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "health_and_safety",
    title: "Saúde do Trabalhador",
    description: "Apoio psicológico e orientações sobre ergonomia e segurança no ambiente de trabalho.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: "newspaper",
    title: "Informativos e Notícias",
    description: "Fique por dentro de todas as mudanças na legislação e eventos da categoria.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"
  },
];

const TESTIMONIALS = [
  {
    text: "Desde que me associei, me sinto muito mais segura. O suporte jurídico foi fundamental para resolver uma questão pendente.",
    name: "Cláudia Rocha",
    role: "Cuidadora Associada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    text: "Os cursos de capacitação do sindicato me ajudaram a conseguir melhores oportunidades. A valorização é real.",
    name: "Ricardo Santos",
    role: "Cuidador Profissional",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    text: "Os convênios em farmácias e clínicas ajudam muito no orçamento mensal. Vale muito a pena fazer parte.",
    name: "Sônia Mendes",
    role: "Associada há 2 anos",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

const CAROUSEL_IMAGES = [
  { url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&h=600&q=80", alt: "Profissional de saúde prestando atendimento" },
  { url: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&h=600&q=80", alt: "Cuidadora sorridente com paciente" },
  { url: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&h=600&q=80", alt: "Mãos dadas simbolizando cuidado" },
  { url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&h=600&q=80", alt: "Equipe médica profissional" },
];

const Logo = ({ className = "size-10", iconSize = "size-6" }: { className?: string, iconSize?: string }) => (
  <div className={`${className} bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 overflow-hidden shrink-0`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconSize}>
      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="white" />
      <circle cx="12" cy="9" r="2.5" fill="#2b8dee" />
      <path d="M7 15C7 13.3431 9.23858 12 12 12C14.7614 12 17 13.3431 17 15" stroke="#2b8dee" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // States for Simulator
  const [simCategory, setSimCategory] = useState("cuidador");
  const [simIsResident, setSimIsResident] = useState(false);
  const [simOvertime, setSimOvertime] = useState(0); 
  const [simNightHours, setSimNightHours] = useState(0);

  // States for Carteirinha do Associado
  const [assocNome, setAssocNome] = useState("");
  const [assocCpf, setAssocCpf] = useState("");
  const [assocEmail, setAssocEmail] = useState("");
  const [assocCargo, setAssocCargo] = useState("Cuidador de Idosos");
  const [assocCardGenerated, setAssocCardGenerated] = useState(false);
  const [assocNum, setAssocNum] = useState("");

  const [filiaForm, setFiliaForm] = useState({
    nome: '',
    telefone: '',
    experiencia: '',
    cidade: 'Ribeirão Preto'
  });

  const handleFiliaSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá! Este é um formulário de filiação para dar andamento com o sindicato.

Dados do Pretendente ao Sindicato:
• Nome Completo: ${filiaForm.nome}
• Telefone / WhatsApp: ${filiaForm.telefone}
• Tempo de Experiência: ${filiaForm.experiencia}
• Cidade de Atuação: ${filiaForm.cidade}

Por favor, deem andamento à minha filiação. Obrigado!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5516988068810?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);

  return (
    <div className="min-h-screen">
      {/* Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>
      {/* LGPD Cookie Banner */}
      {showCookieBanner && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 mb-2">Privacidade e Cookies (LGPD)</h4>
              <p className="text-sm text-slate-600">
                Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <a href="#" className="text-primary underline">Política de Privacidade</a> e o tratamento de dados conforme a Lei Geral de Proteção de Dados.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button 
                onClick={() => setShowCookieBanner(false)}
                className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all text-sm"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Fixed WhatsApp Button */}
      <motion.a
        href="https://wa.me/5516988068810?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20cuidadores.%20Vi%20o%20site%20de%20vocês."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
      </motion.a>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        {/* Dynamic Green & Yellow subtle border line at the top of everything */}
        <div className="h-1 w-full bg-gradient-to-r from-green-600 via-yellow-400 to-green-600"></div>
        
        {/* Discreet Brazilian Flag & Government Agency Top bar */}
        <div className="bg-slate-900 text-slate-400 text-[11px] font-semibold py-1.5 px-4 scroll-smooth">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm select-none" aria-label="Bandeira do Brasil">🇧🇷</span>
              <span className="uppercase tracking-wide text-slate-300 font-bold">Portal Sindical Oficial</span>
              <span className="text-slate-600">|</span>
              <span className="hidden sm:inline text-slate-400">Entidade Legítima de 1º Grau</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">Fundado em 2021 • Ribeirão Preto - SP</span>
              <a href="#convencoes" className="hover:text-white transition-colors flex items-center gap-1 text-primary">
                <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                Acordo 2026/2027 Ativo
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Logo className="size-11" iconSize="size-7" />
              <span className="text-slate-900 text-base md:text-lg font-black tracking-tight leading-tight">
                Sindicato dos<br/><span className="text-primary text-xs font-bold uppercase tracking-wider block">Cuidadores Profissionais</span>
                <span className="text-[10px] text-slate-500 block font-normal mt-0.5">Estado de São Paulo • SINTEDORP</span>
              </span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              {[
                { name: "Início", href: "#inicio" },
                { name: "Quem Somos", href: "#quem-somos" },
                { name: "Objetivos", href: "#objetivos" },
                { name: "Quem Representamos", href: "#quem-representamos" },
                { name: "Nossa Atuação", href: "#nossa-atuacao" },
                { name: "Benefícios", href: "#beneficios" },
                { name: "Convenções", href: "#convencoes" },
                { name: "Filie-se", href: "#filie-se" },
                { name: "Contato", href: "#contato" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs xl:text-sm font-bold text-slate-600 hover:text-primary transition-colors tracking-tight uppercase"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:inline-flex items-center justify-center bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-primary/95 transition-all shadow-md shadow-primary/20"
                href="#filie-se"
                aria-label="Filiar-se"
              >
                Filie-se Online
              </motion.a>
              <button 
                className="lg:hidden text-slate-600 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                <span className="material-symbols-outlined normal-case">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 flex flex-col gap-3.5 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            {[
              { name: "Início", href: "#inicio" },
              { name: "Quem Somos", href: "#quem-somos" },
              { name: "Objetivos", href: "#objetivos" },
              { name: "Quem Representamos", href: "#quem-representamos" },
              { name: "Nossa Atuação", href: "#nossa-atuacao" },
              { name: "Benefícios", href: "#beneficios" },
              { name: "Convenções (Acordo Col.)", href: "#convencoes" },
              { name: "Filie-se", href: "#filie-se" },
              { name: "Contato", href: "#contato" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-slate-700 hover:text-primary py-2 border-b border-slate-50 uppercase tracking-wide block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section id="inicio" className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:flex lg:items-center lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex flex-col gap-8 z-10"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-dark px-3 py-1 rounded-full text-xs font-bold tracking-wider w-fit">
                <span className="material-symbols-outlined text-sm normal-case">verified_user</span>
                <span className="uppercase">Referência em Ribeirão Preto</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                União e Força para os <span className="text-primary">Cuidadores Profissionais</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Representação legítima, defesa de direitos e valorização da categoria. Juntos somos mais fortes na busca por dignidade e reconhecimento profissional.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
                  href="#contato"
                >
                  Quero me Filiar
                  <span className="material-symbols-outlined normal-case">person_add</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-slate-200 text-slate-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all"
                  href="https://wa.me/5516988068810?text=Olá!%20Gostaria%20de%20me%20filiar%20ao%20Sindicato%20dos%20Cuidadores.%20Vi%20o%20site%20de%20vocês."
                >
                  Falar no WhatsApp
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-0 lg:w-1/2 relative"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbbxHbMYAru6Rxw7KNMQvBZ6E6r1mATZdPmH5d6pRgegNXY_0ON2x2aITqohjkfIzywUL9Z28DNwb0DFdfv8EDoByPb0kEnuKo7B8gUHJPX70_jRDUZQmp_LtOwUvbba_cxj192-hb4PLqE0vZ-N8VaPiEuY5pL6F0pZHWKz7mEUV8OiBLTWcJ8foSc0Qsmxj-xz2Olp947D12zVDRj_AI16jmwD5MvRg4FKskDNALiH6bVPzvVCJxp-IbbxpuCWH6JrzA6qSXIhE" 
                  alt="Cuidadora ajudando idosa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quem Somos */}
        <section id="quem-somos" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6"
              >
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-dark px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                    <span className="material-symbols-outlined text-sm normal-case">info</span>
                    Sindicato de Primeiro Grau
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Quem Somos</h2>
                  <div className="w-20 h-1.5 bg-primary rounded-full mt-4 mb-4 md:mb-0"></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-xl normal-case">calendar_today</span>
                    <div className="text-left">
                      <p className="text-[10px] text-slate-500 uppercase font-semibold leading-none">Fundação</p>
                      <p className="text-sm font-bold text-slate-800">Ano 2021</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-xl normal-case">location_on</span>
                    <div className="text-left">
                      <p className="text-[10px] text-slate-500 uppercase font-semibold leading-none">Sede</p>
                      <p className="text-sm font-bold text-slate-800">Ribeirão Preto/SP</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left text intro */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100/55 p-8 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden">
                  <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl normal-case">diversity_3</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">A Entidade Legítima da Categoria</h3>
                  <p className="text-slate-700 leading-relaxed text-base">
                    O <strong>Sindicato dos Cuidadores Profissionais do Estado de São Paulo</strong> é uma entidade sindical de primeiro grau que nasceu em <strong>2021</strong> para preencher uma lacuna histórica na representação desses profissionais fundamentais. 
                  </p>
                  <p className="text-slate-700 leading-relaxed text-base mt-4">
                    Com sede estratégica em <strong>Ribeirão Preto/SP</strong>, estendemos nossa atuação na defesa incansável dos cuidadores em toda a região.
                  </p>
                </div>
              </motion.div>

              {/* Right pillars */}
              <div className="lg:col-span-7 space-y-6">
                {[
                  {
                    icon: "shield",
                    title: "Nossa Missão",
                    description: "Representar, defender e fortalecer os interesses dos cuidadores profissionais que atuam em empresas e instituições prestadoras de serviços de cuidados, tais como casas de repouso, instituições geriátricas, casas-dia, empresas de home care e demais organizações do setor.",
                    bgColor: "from-blue-50/50 to-blue-100/30",
                    borderColor: "border-blue-100",
                    iconColor: "text-blue-600",
                    iconBg: "bg-blue-100"
                  },
                  {
                    icon: "badge_accessibility",
                    title: "Representação e Distinção de Categoria",
                    description: "O sindicato representa os trabalhadores cuidadores profissionais que exercem suas atividades de forma organizada junto a empresas e instituições, distinguindo-se claramente das categorias da área da saúde já representadas por outros sindicatos específicos, como atendentes, auxiliares, técnicos e enfermeiros.",
                    bgColor: "from-emerald-50/50 to-emerald-100/30",
                    borderColor: "border-emerald-100",
                    iconColor: "text-emerald-700",
                    iconBg: "bg-emerald-100"
                  },
                  {
                    icon: "gavel",
                    title: "Nossa Atuação Geral",
                    description: "Atuamos firmemente na defesa dos direitos trabalhistas da categoria, na negociação de acordos e convenções coletivas de trabalho, na busca por melhores salários e benefícios, e na participação ativa dos debates sobre a regulamentação da profissão em âmbito nacional.",
                    bgColor: "from-slate-50 to-slate-100/70",
                    borderColor: "border-slate-200/80",
                    iconColor: "text-slate-700",
                    iconBg: "bg-slate-200"
                  }
                ].map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`bg-gradient-to-r ${pillar.bgColor} border ${pillar.borderColor} p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-5 items-start font-sans shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className={`size-12 rounded-xl ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center shrink-0`}>
                      <span className="material-symbols-outlined text-2xl normal-case">{pillar.icon}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-slate-900 text-lg leading-tight">{pillar.title}</h4>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{pillar.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Objetivos do Sindicato */}
        <section id="objetivos" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden border-b border-slate-200">
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Shield className="size-3.5" />
                Nossos Compromissos e Metas
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 animate-fade-in">
                Objetivos do Sindicato
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Temos metas bem traçadas para a nossa categoria. Sob a liderança do Sindicato, lutamos para consolidar conquistas históricas, assegurar amparo integral e garantir o devido respeito que a sua profissão merece.
              </p>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: DollarSign,
                  title: "Estabelecer piso salarial da categoria",
                  desc: "Definição de remuneração mínima obrigatória digna por meio dos acordos e convenções coletivas de trabalho.",
                  borderColor: "border-emerald-100 hover:border-emerald-400",
                  iconColor: "text-emerald-600",
                  iconBg: "bg-emerald-50",
                  badge: "Salário Digno"
                },
                {
                  icon: Clock,
                  title: "Defender jornadas de trabalho justas",
                  desc: "Zelar pelo cumprimento das escalas, folgas, descanso semanal remunerado e limites de carga horária para prevenir abusos.",
                  borderColor: "border-blue-100 hover:border-blue-400",
                  iconColor: "text-blue-600",
                  iconBg: "bg-blue-50",
                  badge: "Escala & Descanso"
                },
                {
                  icon: Award,
                  title: "Buscar benefícios coletivos",
                  desc: "Conquista de vale-refeição, vale-alimentação subsidiado, plano de saúde, seguro de vida coletivo e outros auxílios importantes.",
                  borderColor: "border-indigo-100 hover:border-indigo-400",
                  iconColor: "text-indigo-600",
                  iconBg: "bg-indigo-50",
                  badge: "Família e Saúde"
                },
                {
                  icon: Sparkles,
                  title: "Promover a valorização do cuidador",
                  desc: "Campanhas publicitárias, workshops e debates sociais para elevar o reconhecimento público e institucional dos cuidadores.",
                  borderColor: "border-purple-100 hover:border-purple-400",
                  iconColor: "text-purple-600",
                  iconBg: "bg-purple-50",
                  badge: "Reconhecimento"
                },
                {
                  icon: FileBadge,
                  title: "Participar da regulamentação",
                  desc: "Voz ativa na regulamentação da profissão em âmbito nacional, pressionando o legislativo por leis trabalhistas claras e específicas.",
                  borderColor: "border-amber-100 hover:border-amber-400",
                  iconColor: "text-amber-600",
                  iconBg: "bg-amber-50",
                  badge: "Legislação Forte"
                },
                {
                  icon: Building2,
                  title: "Fortalecer representatividade",
                  desc: "Construção de uma base sindical ampla, qualificada e combativa no estado de São Paulo, capaz de rivalizar com o poder econômico patronal.",
                  borderColor: "border-rose-100 hover:border-rose-400",
                  iconColor: "text-rose-600",
                  iconBg: "bg-rose-50",
                  badge: "União e Força"
                },
                {
                  icon: Handshake,
                  title: "Defender os interesses coletivos",
                  desc: "Foco intransigente nos interesses coletivos de toda a categoria profissional frente a sindicatos patronais, órgãos públicos e empresas.",
                  borderColor: "border-teal-100 hover:border-teal-400",
                  iconColor: "text-teal-600",
                  iconBg: "bg-teal-50",
                  badge: "Foco Coletivo"
                }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className={`bg-white p-8 rounded-2xl border ${item.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className={`size-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                          <IconComp className="size-6" />
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-primary transition-colors mb-3.5 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quem Representamos */}
        <section id="quem-representamos" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-900/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Text */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 space-y-8"
              >
                <div>
                  <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-dark px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    <Users className="size-3.5" />
                    Abrangência de Representação
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    Quem Nós <span className="text-primary">Representamos</span>
                  </h2>
                  <div className="w-16 h-1.5 bg-primary rounded-full mt-4"></div>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                  O sindicato representa profissionais fundamentais que atuam em todo o setor de cuidados de forma organizada.
                </p>
                
                <p className="text-slate-500 leading-relaxed text-sm">
                  Se você exerce suas atividades em alguma das instituições ao lado no estado de São Paulo, o SINTEDORP é a sua verdadeira representação sindical para homologações, acordos, reajustes salariais e apoio jurídico.
                </p>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl shadow-inner">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Info className="text-primary size-4" />
                    Distinção de Categorias
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Nossa representação legítima atua especificamente e de forma exclusiva sobre o cargo de cuidar, distinguindo-se formalmente das demais carreiras assistenciais de saúde representadas por outros sindicatos.
                  </p>
                </div>
              </motion.div>

              {/* Right Column Cards */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Casas de Repouso",
                      description: "Centros de convivência, residências assistidas e lares de acolhimento para idosos.",
                      icon: Building,
                      color: "text-blue-600 bg-blue-100/50"
                    },
                    {
                      title: "Instituições Geriátricas",
                      description: "Clínicas geriátricas especializadas no cuidado de pacientes idosos ou debilitados.",
                      icon: BriefcaseMedical,
                      color: "text-emerald-600 bg-emerald-100/50"
                    },
                    {
                      title: "Casas-Dia / Daycare",
                      description: "Espaços diurnos de repouso, entretenimento e monitoramento ativo de idosos.",
                      icon: Clock,
                      color: "text-amber-600 bg-amber-100/50"
                    },
                    {
                      title: "Empresas de Home Care",
                      description: "Provedores de serviços de cuidados continuados na residência do assistido.",
                      icon: Heart,
                      color: "text-rose-600 bg-rose-100/50"
                    },
                    {
                      title: "Inst. de Longa Permanência (ILPI)",
                      description: "Serviços governamentais e de caridade para acolhimento prolongado de pessoas.",
                      icon: Landmark,
                      color: "text-indigo-600 bg-indigo-100/50"
                    },
                    {
                      title: "Empresas de Cuidados",
                      description: "Agências que organizam ou intermediam cuidadores particulares.",
                      icon: Briefcase,
                      color: "text-indigo-600 bg-indigo-100/50"
                    },
                    {
                      title: "Serviços de Assistência",
                      description: "Empresas e serviços que organizam acompanhamento e locomoção de assistidos.",
                      icon: Handshake,
                      color: "text-teal-600 bg-teal-100/50"
                    }
                  ].map((org, index) => {
                    const OrgIcon = org.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.04, duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        className="p-5 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md transition-all font-sans"
                      >
                        <div className={`size-10 rounded-lg ${org.color} flex items-center justify-center shrink-0`}>
                          <OrgIcon className="size-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm leading-snug flex items-center gap-1.5">
                            {org.title}
                            <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                          </h4>
                          <p className="text-[12px] text-slate-600 leading-tight mt-1">
                            {org.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Atuação */}
        <section id="nossa-atuacao" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-secondary/15 text-secondary-dark px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 uppercase"
              >
                <span className="material-symbols-outlined text-sm normal-case">shield</span>
                Garantia de Direitos Trabalhistas
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                A Nossa Atuação
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-normal">
                O <strong>Sindicato dos Cuidadores Profissionais</strong> atua na representação coletiva dos trabalhadores perante empresas, empregadores e entidades patronais. Entre nossas principais frentes de atividade estão:
              </p>
              <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "handshake",
                  title: "Negociação de Acordos Coletivos",
                  description: "Intermediação direta e propositura de termos favoráveis de trabalho diretamente com as empresas empregadoras.",
                  highlightColor: "border-l-primary"
                },
                {
                  icon: "description",
                  title: "Celebração de Convenções Coletivas",
                  description: "Negociações de amplo escopo com sindicatos patronais para reajustes, pisos salariais e manutenção dos direitos.",
                  highlightColor: "border-l-secondary-dark"
                },
                {
                  icon: "shield_person",
                  title: "Defesa dos Direitos Trabalhistas",
                  description: "Combate ativo às irregularidades trabalhistas, subcontratação precária e desrespeito à jornada legal.",
                  highlightColor: "border-l-primary-dark"
                },
                {
                  icon: "gavel",
                  title: "Orientação Jurídica e Sindical",
                  description: "Esclarecimento de dúvidas sobre horas extras, FGTS, férias, demissões e direitos previstos em lei.",
                  highlightColor: "border-l-blue-600"
                },
                {
                  icon: "groups",
                  title: "Participação em Audiências",
                  description: "Presença e representativo legal em mesas redondas, mediações do MPT e audiências da Justiça do Trabalho.",
                  highlightColor: "border-l-emerald-600"
                },
                {
                  icon: "health_and_safety",
                  title: "Melhores Condições de Trabalho",
                  description: "Foco integral no bem-estar, pausas regulamentares de descanso, proteção contra assédios e ergonomia.",
                  highlightColor: "border-l-teal-600"
                },
                {
                  icon: "workspace_premium",
                  title: "Busca por Valorização Profissional",
                  description: "Campanhas educativas de conscientização perante a sociedade sobre a importância vital dos cuidadores.",
                  highlightColor: "border-l-amber-500"
                },
                {
                  icon: "forum",
                  title: "Regulamentação Profissional",
                  description: "Participação ativa em órgãos públicos, debates nacionais e frentes parlamentares em favor da lei do cuidador.",
                  highlightColor: "border-l-purple-600"
                },
                {
                  icon: "explore",
                  title: "Fortalecimento em São Paulo",
                  description: "Expansão da representatividade sindical no estado de SP de modo a unificar e fortalecer toda a categoria.",
                  highlightColor: "border-l-rose-500"
                }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className={`bg-white p-8 rounded-2xl border-l-[6px] border-slate-200/80 hover:border-l-primary border-t border-r border-b border-slate-150 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group h-full`}
                >
                  <div>
                    <div className="size-12 bg-slate-50 text-primary-dark rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl normal-case">{activity.icon}</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-primary transition-colors leading-snug mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Saber mais
                    <span className="material-symbols-outlined text-sm normal-case">arrow_forward</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* O Sindicato */}
        <section id="o-sindicato" className="py-24 bg-background-light overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">O Sindicato</h2>
                <div className="w-20 h-1.5 bg-secondary rounded-full mb-6"></div>
                <p className="text-slate-600 text-lg mb-6">
                  Somos a entidade representativa dos Cuidadores Profissionais em Ribeirão Preto e região, lutando incansavelmente pela valorização e respeito à nossa categoria.
                </p>
                <p className="text-slate-600 mb-8">
                  Nossa missão é garantir que cada cuidador tenha seus direitos respeitados, acesso à formação contínua e suporte em todas as etapas de sua jornada profissional.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: "gavel", title: "Defesa Jurídica", desc: "Proteção total aos seus direitos trabalhistas.", color: "primary" },
                    { icon: "workspace_premium", title: "Valorização Profissional", desc: "Luta por pisos salariais e melhores condições.", color: "secondary-dark" },
                    { icon: "handshake", title: "União da Categoria", desc: "Juntos somos ouvidos pelo poder público e empresas.", color: "primary" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`size-10 bg-slate-200 text-${item.color} rounded-lg flex items-center justify-center shrink-0`}>
                        <span className="material-symbols-outlined text-2xl normal-case">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={CAROUSEL_IMAGES[currentSlide].url}
                      alt={CAROUSEL_IMAGES[currentSlide].alt}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading={currentSlide === 0 ? "eager" : "lazy"}
                    />
                  </AnimatePresence>
                  
                  {/* Carousel Controls */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={prevSlide}
                      className="size-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-all shadow-lg"
                      aria-label="Imagem anterior"
                    >
                      <span className="material-symbols-outlined normal-case">chevron_left</span>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="size-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-all shadow-lg"
                      aria-label="Próxima imagem"
                    >
                      <span className="material-symbols-outlined normal-case">chevron_right</span>
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {CAROUSEL_IMAGES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`size-2 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/50'}`}
                        aria-label={`Ir para imagem ${idx + 1}`}
                        aria-current={currentSlide === idx}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="benefícios" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Benefícios do Associado</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Ao se tornar um associado, você tem acesso a uma rede completa de suporte e vantagens exclusivas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute top-4 left-4 size-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-2xl normal-case">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                    <a className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm" href="#contato">
                      Saiba Mais <span className="material-symbols-outlined text-sm normal-case">arrow_forward</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-white" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight">Por que se filiar ao nosso sindicato?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Segurança Jurídica", desc: "Advogados prontos para defender seus direitos trabalhistas." },
                  { title: "Cursos Gratuitos", desc: "Acesso a workshops e treinamentos de atualização." },
                  { title: "Clube de Vantagens", desc: "Descontos em diversos estabelecimentos parceiros." },
                  { title: "Força Política", desc: "Representação ativa junto aos órgãos governamentais." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined bg-white/20 p-1 rounded-md normal-case">check_circle</span>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <motion.a 
                  href="https://wa.me/5516988068810?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20cuidadores.%20Vi%20o%20site%20de%20vocês."
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all inline-flex items-center gap-2"
                >
                  Entrar em Contato Agora
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10 aspect-video bg-slate-200">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABmTIRHT040IsZ9dHEDuk6UB4hW0TJgwhfUrI_AgZcZQdJ7LWP7fjdt16Fmyfzp11G0j5idzaFPAjmZIpIYWumq7B2AWh2qicuWEr0L0Ef3fVWJrxvexiRcMuCMgwAqsLqLpNZhu_PJb1RHukF34_zuJnMVRfIiygF859FNPniPcXxwV4HajqRSm2JgjvUcdg7X3Ps7p43oVf7AjKzoWr2MFTTZkg9S4wCdZ8fkRWfjNrKUYrTMjylcUd1xlt8miM4hWVXILtlWxI" 
                  alt="Mãos dadas"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Convenções Coletivas, Simulador & Área do Associado */}
        <section id="convencoes" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
          {/* Subtle light flares */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-primary/30">
                <FileCheck className="size-4" />
                Voz Legal & Transparência
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                Convenções Coletivas & Benefícios Legais
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Acesse os documentos normativos históricos, faça o download do estatuto oficial, confira as notícias de interesse da categoria e simule seus vencimentos em tempo real de acordo com as cláusulas do <strong>Acordo Trabalhista 2026-2027</strong>.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-yellow-400 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Core Grid layout for full full-stack richness */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Side: Documents, Estatuto Social & News - 7 Columns */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* 1. News & Communications Module */}
                <div className="bg-slate-800/45 border border-slate-700/60 p-6 md:p-8 rounded-3xl relative overflow-hidden backdrop-blur-md">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-black flex items-center gap-2.5">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                      Notícias & Comunicados Oficiais
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                      Atualizado Diariamente
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Edital de Convocação Geral de Assembleia - 2026",
                        desc: "Convocamos todos os cuidadores para o debate deliberativo das metas de reajustes e acordos trabalhistas de 2026.",
                        date: "Maio de 2026",
                        link: "/edital-convocacao-2026.html",
                        tag: "Assembleia",
                        tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      },
                      {
                        title: "Concorrida Convocação e Reunião Extraordinária",
                        desc: "Atas de aprovação e termos de negociações realizados em Ribeirão Preto junto à CBDT Nacional.",
                        date: "Maio de 2026",
                        link: "/convocacao-maio-2026.html",
                        tag: "Oficial",
                        tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      },
                      {
                        title: "Orientação Normativa do Ministério Público do Trabalho nº 13",
                        desc: "Diretrizes sobre o repouso interjornada, moradia de cuidadores residentes, alimentação e integridade física de trabalhadores.",
                        date: "Ref. CLT",
                        link: "/orientacao-mpt-13.html",
                        tag: "MPT Federal",
                        tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      }
                    ].map((news, nIdx) => (
                      <div 
                        key={nIdx}
                        className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group flex flex-col md:flex-row justify-between gap-4 items-start md:items-center"
                      >
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 font-bold">{news.date}</span>
                            <span className={`text-[9px] uppercase font-bold px-2 py-0.5 border rounded-full ${news.tagColor}`}>
                              {news.tag}
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-200 group-hover:text-primary transition-colors text-sm md:text-base leading-tight">
                            {news.title}
                          </h4>
                          <p className="text-slate-400 text-xs leading-relaxed">
                            {news.desc}
                          </p>
                        </div>
                        <a 
                          href={news.link} 
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-slate-800 hover:bg-primary hover:text-white transition-all text-xs font-bold rounded-lg flex items-center gap-1.5 text-slate-300 border border-slate-700 shrink-0 self-end md:self-auto"
                        >
                          Visualizar
                          <ExternalLink className="size-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Documents & Estatuto Area (with Simulated Download) */}
                <div className="bg-slate-800/45 border border-slate-700/60 p-6 md:p-8 rounded-3xl backdrop-blur-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Estatuto Box */}
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                      <div className="size-11 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                        <BookOpen className="size-5" />
                      </div>
                      <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">Estatuto Social do Sindicato</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        Conjunto completo de normas e regras constitutivas do Sindicato dos Cuidadores de SP, detalhando direitos políticos, assembleias e representação.
                      </p>
                      <button 
                        onClick={() => {
                          alert("Download Simulado: Estatuto Social SINTEDORP_2021_SP.pdf baixado com sucesso!");
                        }}
                        className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        <Download className="size-3.5" />
                        Download Estatuto (PDF)
                      </button>
                    </div>

                    {/* Acordo Trabalhista HTML link */}
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                      <div>
                        <div className="size-11 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                          <DollarSign className="size-5" />
                        </div>
                        <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">Acordo Coletivo 2026-2027</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          Acordo firmado que regulamenta os pisos salariais da categoria para o biênio de 2026 a 2027, adicionais noturnos e vale alimentação de R$ 230,00.
                        </p>
                      </div>
                      <a 
                        href="/acordo-trabalhista-2026-2027.html" 
                        target="_blank"
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="size-3.5" />
                        Ver Documento Completo
                      </a>
                    </div>

                  </div>
                </div>

                {/* 3. Assembly & Events Gallery */}
                <div className="bg-slate-800/45 border border-slate-700/60 p-6 md:p-8 rounded-3xl backdrop-blur-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Users className="text-primary size-5" />
                    Galeria de Ações & Assembleias
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    Nossa diretoria e base em reuniões constantes de negociação coletiva com a bancada patronal, lutando por melhores salários para cuidadores.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Campanha Salarial 2026",
                        desc: "Reunião de alinhamento com a diretoria do Sindicato em Ribeirão Preto para fixação de propostas.",
                        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&h=300&q=80"
                      },
                      {
                        title: "Homologações & Apoio",
                        desc: "Atendimento presencial a trabalhadores cuidadores na nossa sede sindical na Avenida Caramuru.",
                        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=300&q=80"
                      }
                    ].map((gItem, index) => (
                      <div key={index} className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 group hover:border-slate-700 transition-all">
                        <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                          <img 
                            src={gItem.img} 
                            alt={gItem.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 text-white p-4 flex flex-col justify-end">
                            <h5 className="font-bold text-slate-100 text-sm">{gItem.title}</h5>
                            <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{gItem.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Right Side: Interactive Rights Simulator & Membership Digital Card - 5 Columns */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Rights Simulator Widget */}
                <div className="bg-slate-800/40 border border-slate-700/60 p-6 md:p-8 rounded-3xl relative backdrop-blur-md">
                  <div className="absolute top-4 right-4 text-emerald-500 font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 rounded-full animate-pulse">
                    Acordo 2026/2027 Ativo
                  </div>
                  
                  <h3 className="text-xl font-black mb-1 flex items-center gap-2">
                    <Scale className="text-primary size-5" />
                    Simulador de Direitos 2026/2027
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 font-medium leading-relaxed">
                    Calcule seus vencimentos líquidos e adicionais de acordo com a Convenção Coletiva de Trabalho (CCT 2026/2027).
                  </p>

                  <div className="space-y-4">
                    {/* Category Input */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Função / Categoria</label>
                      <select 
                        value={simCategory}
                        onChange={(e) => setSimCategory(e.target.value)}
                        className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                      >
                        <option value="domestic">Doméstica / Arrumador</option>
                        <option value="cuidador">Cuidador de Idosos/Pessoas</option>
                        <option value="baba">Babá / Acompanhante</option>
                        <option value="cozinheira">Cozinheira</option>
                        <option value="tecnico">Técnico de Enfermagem</option>
                        <option value="enfermeiro">Enfermeiro Padrão (Superior)</option>
                      </select>
                    </div>

                    {/* Modality Input */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Modalidade de Moradia</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSimIsResident(false)}
                          className={`py-2 text-xs font-bold rounded-lg border transition-all ${!simIsResident ? 'bg-primary border-primary text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'}`}
                        >
                          Não Residente (NR)
                        </button>
                        <button
                          onClick={() => setSimIsResident(true)}
                          className={`py-2 text-xs font-bold rounded-lg border transition-all ${simIsResident ? 'bg-primary border-primary text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'}`}
                        >
                          Residente (R)
                        </button>
                      </div>
                    </div>

                    {/* Night hours Input */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[11px]">
                        <label className="font-bold text-slate-400 uppercase tracking-wider">Adicional Noturno (Horas/Mês)</label>
                        <span className="text-secondary font-bold font-mono">{simNightHours} Horas</span>
                      </div>
                      <input 
                        type="range"
                        min="0"
                        max="160"
                        value={simNightHours}
                        onChange={(e) => setSimNightHours(parseInt(e.target.value))}
                        className="w-full accent-primary bg-slate-800 rounded-lg appearance-none h-1.5"
                      />
                      <p className="text-[10px] text-slate-500">Estimado entre 22h e 5h diários (Acréscimo de 20%)</p>
                    </div>

                    {/* Overtime Input */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[11px]">
                        <label className="font-bold text-slate-400 uppercase tracking-wider font-sans">Horas Extras 50% (Mês)</label>
                        <span className="text-secondary font-bold font-mono">{simOvertime} Horas</span>
                      </div>
                      <input 
                        type="range"
                        min="0"
                        max="60"
                        value={simOvertime}
                        onChange={(e) => setSimOvertime(parseInt(e.target.value))}
                        className="w-full accent-primary bg-slate-800 rounded-lg appearance-none h-1.5"
                      />
                    </div>

                    {/* Live Calculation Output Display */}
                    {(() => {
                      // Wage definitions from the original Acuerdo html table
                      let base = 0;
                      if (simCategory === "domestic") {
                        base = simIsResident ? 2809.20 : 1915.48;
                      } else if (simCategory === "cuidador") {
                        base = simIsResident ? 3081.13 : 2310.83;
                      } else if (simCategory === "baba") {
                        base = simIsResident ? 2821.41 : 2115.99;
                      } else if (simCategory === "cozinheira") {
                        base = simIsResident ? 2922.81 : 2192.54;
                      } else if (simCategory === "tecnico") {
                        base = simIsResident ? 3126.05 : 2214.22;
                      } else if (simCategory === "enfermeiro") {
                        base = simIsResident ? 4937.39 : 3635.15;
                      }

                      const hourly = base / 220;
                      const overtimeVal = simOvertime * (hourly * 1.50);
                      const nightVal = simNightHours * (hourly * 0.20);
                      const alimentation = 230.00; // VA card Cláusula Quinta
                      const groupLifeInsurance = 40.00; // Seguro social

                      const totalEst = base + overtimeVal + nightVal + alimentation + groupLifeInsurance;

                      return (
                        <div className="space-y-3 pt-4 border-t border-slate-700/60 font-sans">
                          <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-2">
                            <div className="flex justify-between items-center text-xs text-slate-400">
                              <span>Piso Salarial Normativo:</span>
                              <span className="font-mono text-white font-semibold">R$ {base.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            {simNightHours > 0 && (
                              <div className="flex justify-between items-center text-xs text-slate-400">
                                <span>Adicional Noturno (20%):</span>
                                <span className="font-mono text-white font-semibold">R$ {nightVal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                              </div>
                            )}
                            {simOvertime > 0 && (
                              <div className="flex justify-between items-center text-xs text-slate-400">
                                <span>Horas Extras (50%):</span>
                                <span className="font-mono text-white font-semibold">R$ {overtimeVal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                              </div>
                            )}
                            <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-800 pt-2">
                              <span className="flex items-center gap-1">Vale Alimentação: <Info className="size-3 text-slate-500" title="Mensal Obrigatório" /></span>
                              <span className="font-mono text-emerald-400 font-semibold">R$ {alimentation.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs text-slate-400">
                              <span className="flex items-center gap-1">Seguro de Vida Coletivo:</span>
                              <span className="font-mono text-emerald-400 font-semibold">R$ {groupLifeInsurance.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            
                            <div className="flex justify-between items-center text-sm font-bold text-white border-t border-slate-800 pt-2.5 mt-2">
                              <span>SOMA GLOBAL ESTIMADA:</span>
                              <span className="font-mono text-yellow-400 text-base">R$ {totalEst.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                          </div>

                          {/* Action Button if pay is irregular */}
                          <div className="flex gap-2">
                            <a 
                              href={`https://wa.me/5516988068810?text=Olá!%20Fiz%20a%20simulação%20no%20portal%20do%20Sindicato%20e%20percebi%20que%20meu%20vencimento%20está%20abaixo%20do%20piso%20de%20R$%20${base.toFixed(2)}.%20Gostaria%20de%20fazer%20uma%20denúncia%20anônima.`}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full py-2.5 bg-rose-600/20 text-rose-300 border border-rose-500/30 hover:bg-rose-600/40 font-bold rounded-xl transition-all text-center text-xs flex items-center justify-center gap-1.5"
                            >
                              <Shield className="size-3.5" />
                              Denunciar Irregularidade Salarial
                            </a>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>

                {/* AREA DO ASSOCIADO: Online Union ID Card Generator! */}
                <div className="bg-slate-800/40 border border-slate-700/60 p-6 md:p-8 rounded-3xl relative backdrop-blur-md">
                  <h3 className="text-xl font-black mb-1 flex items-center gap-2">
                    <UserPlus className="text-primary size-5" />
                    Área do Associado • Carteirinha Digital
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    Você já é filiado? Insira seus dados para gerar e visualizar de forma imediata a sua <strong>Carteirinha Digital do Trabalhador SINTEDORP</strong>.
                  </p>

                  {!assocCardGenerated ? (
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!assocNome || !assocCpf) {
                          alert("Atenção: Nome e CPF são obrigatórios!");
                          return;
                        }
                        const randomId = "ST-" + Math.floor(100000 + Math.random() * 900000);
                        setAssocNum(randomId);
                        setAssocCardGenerated(true);
                      }}
                      className="space-y-3"
                    >
                      <div>
                        <input 
                          type="text" 
                          required
                          placeholder="Nome Completo do Portador"
                          value={assocNome}
                          onChange={(e) => setAssocNome(e.target.value)}
                          className="w-full bg-slate-900/85 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input 
                          type="text" 
                          required
                          placeholder="CPF"
                          value={assocCpf}
                          onChange={(e) => setAssocCpf(e.target.value)}
                          className="w-full bg-slate-900/85 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-primary"
                        />
                        <input 
                          type="text" 
                          placeholder="E-mail"
                          value={assocEmail}
                          onChange={(e) => setAssocEmail(e.target.value)}
                          className="w-full bg-slate-900/85 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <select 
                          value={assocCargo}
                          onChange={(e) => setAssocCargo(e.target.value)}
                          className="w-full bg-slate-900/85 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-primary font-medium"
                        >
                          <option value="Cuidador de Idosos">Cuidador de Idosos</option>
                          <option value="Acompanhante">Babá ou Acompanhante Particular</option>
                          <option value="Técnico de Enfermagem">Técnico de Enfermagem</option>
                          <option value="Enfermeiro Supervisor">Enfermeiro Supervisor (Graduado)</option>
                        </select>
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3 bg-primary hover:bg-primary/95 text-white text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-primary/25"
                      >
                        <UserPlus className="size-3.5" />
                        Gerar Carteira de Associado
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-4 font-sans text-left">
                      {/* GORGEOUS DYNAMIC DIGITAL CARD COMPONENT */}
                      <motion.div 
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-blue-900 to-slate-900 p-5 rounded-2xl border-2 border-yellow-400/70 shadow-2xl relative overflow-hidden"
                      >
                        {/* Brazilian flag background styling details */}
                        <div className="absolute top-0 right-0 w-32 h-16 bg-gradient-to-l from-green-500/10 via-yellow-400/10 to-transparent pointer-events-none transform skew-x-12"></div>
                        
                        {/* Header of the union card */}
                        <div className="flex justify-between items-start border-b border-white/20 pb-2.5 mb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="text-base select-none">🇧🇷</span>
                            <div>
                              <p className="text-[9px] font-black tracking-widest text-slate-100 uppercase leading-none">SINTEDORP SP</p>
                              <p className="text-[7px] text-yellow-400 font-bold uppercase leading-none mt-0.5">Sindicato dos Cuidadores Profissionais</p>
                            </div>
                          </div>
                          <span className="text-[7px] font-mono text-slate-400 bg-slate-950/70 px-1.5 py-0.5 rounded uppercase font-bold text-emerald-400 border border-emerald-400/20">
                            Ativo & Regular
                          </span>
                        </div>

                        {/* Middle body */}
                        <div className="flex gap-3 items-center">
                          {/* Circle Avatar simulated */}
                          <div className="size-12 rounded-full border border-yellow-400 bg-slate-700/50 text-white font-black text-xs flex items-center justify-center shrink-0 uppercase tracking-tight shadow">
                            {assocNome.slice(0, 2)}
                          </div>

                          <div className="space-y-1.5 min-w-0 flex-1">
                            <div>
                              <p className="text-[7px] text-slate-400 uppercase tracking-widest font-bold leading-none">Nome do Associado</p>
                              <p className="text-xs font-black text-slate-100 truncate mt-0.5">{assocNome}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              <div>
                                <p className="text-[6px] text-slate-500 uppercase tracking-widest leading-none font-bold">CPF</p>
                                <p className="text-[9px] text-slate-300 font-mono font-semibold mt-0.5">{assocCpf}</p>
                              </div>
                              <div>
                                <p className="text-[6px] text-slate-500 uppercase tracking-widest leading-none font-bold">Registro Sindical</p>
                                <p className="text-[9px] text-yellow-400 font-mono font-semibold mt-0.5">{assocNum}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Footer card area */}
                        <div className="flex justify-between items-center border-t border-white/10 pt-2.5 mt-3">
                          <div>
                            <p className="text-[6px] text-slate-500 uppercase font-bold leading-none">Cargo Praticante</p>
                            <p className="text-[9px] text-indigo-300 font-bold mt-0.5">{assocCargo}</p>
                          </div>
                          
                          {/* Simulated Barcode / QR Code for absolute realism */}
                          <div className="bg-white p-1 rounded shrink-0">
                            <div className="w-12 h-4 bg-[repeating-linear-gradient(90deg,black,black_1px,transparent_1px,transparent_4px)]"></div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Controls below card */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => {
                            alert("Sua carteirinha foi enviada para o seu endereço de e-mail " + (assocEmail || "cadastrado") + " e salva em formato virtual. Apresente nas redes credenciadas para descontos!");
                          }}
                          className="w-1/2 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-slate-300 font-bold text-xs"
                        >
                          Salvar Digital
                        </button>
                        <button
                          onClick={() => {
                            setAssocNome("");
                            setAssocCpf("");
                            setAssocEmail("");
                            setAssocCardGenerated(false);
                          }}
                          className="w-1/2 py-2 bg-slate-950/20 hover:bg-slate-950/45 text-slate-400 hover:text-white rounded-lg text-xs"
                        >
                          Fazer Outra
                        </button>
                      </div>
                    </div>
                  )}
                  
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Filie-se */}
        <section id="filie-se" className="py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Como se Filiar</h2>
              <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Faça parte da nossa união em apenas alguns passos simples.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 -z-0"></div>
              {[
                { step: 1, title: "Cadastro", desc: "Preencha o formulário de interesse abaixo ou fale conosco no WhatsApp." },
                { step: 2, title: "Documentação", desc: "Envie os documentos necessários para validação profissional." },
                { step: 3, title: "Aprovação", desc: "Nossa equipe analisa seu perfil e confirma sua filiação." },
                { step: 4, title: "Benefícios", desc: "Comece a desfrutar de todas as vantagens de ser associado." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center gap-4 relative z-10"
                >
                  <div className="size-16 bg-white rounded-full border-4 border-primary text-primary font-black text-2xl flex items-center justify-center shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm px-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Membership Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Formulário de Filiação</h3>
              <form className="space-y-4" onSubmit={handleFiliaSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      value={filiaForm.nome}
                      onChange={(e) => setFiliaForm({...filiaForm, nome: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" 
                      placeholder="Seu Nome" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      value={filiaForm.telefone}
                      onChange={(e) => setFiliaForm({...filiaForm, telefone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" 
                      placeholder="(16) 99999-9999" 
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Tempo de Experiência como Cuidador</label>
                  <input 
                    type="text" 
                    required
                    value={filiaForm.experiencia}
                    onChange={(e) => setFiliaForm({...filiaForm, experiencia: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" 
                    placeholder="Ex: 2 anos, 5 meses..." 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Cidade</label>
                  <input 
                    type="text" 
                    required
                    value={filiaForm.cidade}
                    onChange={(e) => setFiliaForm({...filiaForm, cidade: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" 
                    placeholder="Ribeirão Preto" 
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined normal-case">send</span>
                  Enviar via WhatsApp
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">O que dizem nossos associados</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-background-light p-8 rounded-2xl relative"
                >
                  <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4 normal-case">format_quote</span>
                  <p className="text-slate-600 italic mb-6 relative z-10">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="size-12 rounded-full object-cover bg-slate-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500 uppercase">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Mapa */}
        <section id="contato" className="py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Fale com o Sindicato</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Dúvidas sobre direitos, filiação ou benefícios? Nossa equipe está pronta para te orientar.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Nome Completo</label>
                      <input id="name" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Seu Nome" type="text" required />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                      <input id="phone" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="(16) 99999-9999" type="tel" required />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">E-mail</label>
                    <input id="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="seu@email.com" type="email" required />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Como podemos ajudar?</label>
                    <textarea id="message" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Dúvidas, denúncias ou solicitações" rows={4} required></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3 py-2">
                    <input type="checkbox" id="lgpd-check" className="mt-1 size-4 accent-primary" required />
                    <label htmlFor="lgpd-check" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                      Concordo com o processamento dos meus dados pessoais para fins de contato, conforme a <strong>Lei Geral de Proteção de Dados (LGPD)</strong> e a Política de Privacidade.
                    </label>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    Enviar Mensagem
                  </motion.button>
                </form>
                <div className="mt-12 space-y-4">
                  <div className="flex items-center gap-4 text-slate-600">
                    <span className="material-symbols-outlined text-primary normal-case">location_on</span>
                    <span>Avenida Caramuru nº 451, Bairro Jardim Sumaré, CEP: 14025-080, Ribeirão Preto - SP</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <span className="material-symbols-outlined text-primary normal-case">phone</span>
                    <span>(16) 3021-1196</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <span className="material-symbols-outlined text-primary normal-case">chat</span>
                    <span>WhatsApp: (16) 98806-8810</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-xl min-h-[400px] border border-slate-200 relative"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApAj16xkxSwNSrIEDMvXVGRLzFGaJhnqI-Mgr_DncoTmQU3CJoA7vU7A8e5rO1R5WvVcVJxaaT-XbkeLMZDjRK01GgVqFhyxDvZfI_ROyoo9NLZK_iy-shAni24Ni0Mm76WCed7s9EtDLj3fERgZdYpAVeGKtoq6qN4VCMRHf8ZPUTtxszxX8d_oxP40kD3Oz89GP4nQH-tr0EPAjAsjiacX2zTMy4_krkcNzKv1xCx6l1pU4EtG-2zwWuUgyjYYLdn0Ss70qwkAI" 
                  alt="Mapa Ribeirão Preto"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[1px]">
                  <div className="bg-white p-4 rounded-lg shadow-xl text-slate-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500 normal-case">location_on</span>
                    <span className="font-bold">Estamos aqui!</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Logo className="size-9" iconSize="size-5" />
                <span className="text-white text-lg font-bold">Sindicato dos Cuidadores Profissionais</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Representação, defesa de direitos e valorização dos cuidadores profissionais de Ribeirão Preto e região.
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {["Início", "Quem Somos", "Nossa Atuação", "O Sindicato", "Benefícios", "Filie-se", "Contato"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Benefícios</h4>
              <ul className="space-y-3">
                <li><a href="#benefícios" className="hover:text-primary transition-colors text-sm">Assessoria Jurídica</a></li>
                <li><a href="#benefícios" className="hover:text-primary transition-colors text-sm">Cursos e Capacitação</a></li>
                <li><a href="#benefícios" className="hover:text-primary transition-colors text-sm">Convênios Exclusivos</a></li>
                <li><a href="#benefícios" className="hover:text-primary transition-colors text-sm">Saúde do Trabalhador</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Documentos Importantes</h4>
              <ul className="space-y-3 mb-8">
                <li>
                  <a href="/acordo-trabalhista-2026-2027.html" target="_blank" className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/30 rounded-xl hover:bg-primary/20 transition-all text-white font-semibold group mb-2 ring-1 ring-primary/20 hover:ring-primary/40 shadow-lg shadow-primary/5">
                    <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">payments</span>
                    <div className="flex flex-col">
                      <span className="text-sm">Acordo Trabalhista 2026-2027</span>
                      <span className="text-[10px] text-primary font-bold uppercase tracking-widest flex items-center gap-1">
                        <span className="size-1.5 bg-primary rounded-full animate-pulse" />
                        Tabela Salarial Atualizada
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/edital-convocacao-2026.html" target="_blank" className="flex items-center gap-2 text-sm hover:text-primary transition-colors text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">description</span>
                    Edital de Convocação 2026
                  </a>
                </li>
                <li>
                  <a href="/convocacao-maio-2026.html" target="_blank" className="flex items-center gap-2 text-sm hover:text-primary transition-colors text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">event_note</span>
                    Convocação Maio 2026
                  </a>
                </li>
                <li>
                  <a href="/orientacao-mpt-13.html" target="_blank" className="flex items-center gap-2 text-sm hover:text-primary transition-colors text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">gavel</span>
                    Orientação MPT nº 13
                  </a>
                </li>
              </ul>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl normal-case">location_on</span>
                  <span>Avenida Caramuru nº 451, Jardim Sumaré, CEP: 14025-080, Ribeirão Preto/SP</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl normal-case">phone</span>
                  <span>(16) 3021-1196</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl normal-case">chat</span>
                  <span>WhatsApp: (16) 98806-8810</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl normal-case">mail</span>
                  <span>contato@cuidadoresprofissionais.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p>© 2024 Sindicato dos Cuidadores Profissionais. Todos os direitos reservados. Ribeirão Preto - SP.</p>
              <p>Feito por <a href="https://eficazbot.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">EficazBot</a></p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Playfair_Display, Inter } from "next/font/google"
import Link from "next/link"
import { MessageCircle, Check, ArrowRight, Clock, Zap, Package } from "lucide-react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const WHATSAPP = "5511999999999"
const WA = `https://wa.me/${WHATSAPP}`
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`

// ─── data ─────────────────────────────────────────────────────────

const projects = [
  {
    href: "/mariana-alves",
    title: "Studio Mariana Alves",
    subtitle: "Harmonização Facial Premium",
    tag: "Biomédica Esteta",
    palette: ["#F5EFE6", "#D4B59E", "#8B6F47"],
    img: "https://placehold.co/800x500/F5EFE6/8B6F47?text=Studio+Mariana+Alves",
  },
  {
    href: "/lume-estetica",
    title: "Lume Estética Avançada",
    subtitle: "Clínica Completa",
    tag: "Clínica Multidisciplinar",
    palette: ["#3A4A3E", "#C8B89E", "#F5F2EE"],
    img: "https://placehold.co/800x500/3A4A3E/C8B89E?text=Lume+Estética+Avançada",
  },
  {
    href: "/dr-rafael",
    title: "Dr. Rafael Costa",
    subtitle: "Harmonização Masculina",
    tag: "Harmonização Orofacial",
    palette: ["#0A0A0A", "#1A1A1A", "#B8956A"],
    img: "https://placehold.co/800x500/0A0A0A/B8956A?text=Dr.+Rafael+Costa",
  },
]

const steps = [
  {
    icon: Clock,
    step: "01",
    title: "Briefing em 1h",
    desc: "Uma conversa rápida para entender seu negócio, público-alvo e objetivos. Sem formulários longos.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Aprovação em 2 dias",
    desc: "Desenvolvemos o layout completo e enviamos para você revisar, pedir ajustes e aprovar.",
  },
  {
    icon: Package,
    step: "03",
    title: "Entrega em 7 dias",
    desc: "Página no ar, testada em todos os dispositivos, configurada e pronta para converter pacientes.",
  },
]

const includes = [
  "Landing page 100% responsiva (mobile-first)",
  "Formulário integrado com WhatsApp",
  "Botão flutuante de WhatsApp",
  "Pixel Meta (Facebook & Instagram)",
  "Otimização básica para Google",
  "Hospedagem por 12 meses inclusa",
  "Domínio personalizado configurado",
  "Suporte por 30 dias após entrega",
]

// ─── Reveal: scroll-triggered slide-up ────────────────────────────

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.65s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ─── component ────────────────────────────────────────────────────

export default function EstudioLumePage() {
  return (
    <>
      {/* keyframes + smooth scroll */}
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .hero-anim { animation: fadeSlideUp 0.75s cubic-bezier(0.4,0,0.2,1) both; }
      `}</style>

      <div
        className={`${playfair.variable} ${inter.variable} bg-[#FAF7F2] text-[#1A2A1A]`}
        style={{ fontFamily: "var(--font-inter)" }}
      >

        {/* ══ HEADER ═══════════════════════════════════════════════ */}
        <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF7F2]/92 backdrop-blur-md border-b border-[#2F3E2E]/8">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#2F3E2E] flex items-center justify-center">
                <div className="w-3 h-3 border border-[#B8956A]" />
              </div>
              <span
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-lg font-semibold text-[#2F3E2E] tracking-wide"
              >
                Estúdio Lume
              </span>
            </div>
            <a
              href={waLink("Olá! Vim pelo site do Estúdio Lume e gostaria de saber mais sobre a landing page.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#B8956A] text-white px-5 py-2 text-sm font-semibold hover:bg-[#A07850] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </header>

        {/* ══ HERO ═════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184,149,106,0.08) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#2F3E2E 1px, transparent 1px), linear-gradient(90deg, #2F3E2E 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24 text-center">
            {/* staggered hero entrance */}
            <div className="hero-anim" style={{ animationDelay: "0ms" }}>
              <div className="inline-flex items-center gap-3 mb-8 bg-[#2F3E2E]/5 border border-[#2F3E2E]/10 px-5 py-2">
                <div className="w-1.5 h-1.5 bg-[#B8956A]" />
                <span className="text-xs text-[#2F3E2E]/70 tracking-[0.2em] uppercase font-medium">
                  Especialistas em LP para clínicas de estética
                </span>
              </div>
            </div>

            <div className="hero-anim" style={{ animationDelay: "120ms" }}>
              <h1
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] text-[#2F3E2E] mb-7 max-w-4xl mx-auto"
              >
                Landing pages que{" "}
                <em className="text-[#B8956A] not-italic italic">transformam</em>
                <br />
                seguidor em paciente
              </h1>
            </div>

            <div className="hero-anim" style={{ animationDelay: "260ms" }}>
              <p className="text-[#5A6A5A] text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Criamos páginas de alta conversão para clínicas de estética, harmonização
                facial e procedimentos estéticos — entregues em 7 dias, prontas para vender.
              </p>
            </div>

            <div className="hero-anim" style={{ animationDelay: "380ms" }}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center gap-2 bg-[#2F3E2E] text-[#FAF7F2] px-8 py-4 text-sm font-semibold hover:bg-[#1E2E1E] transition-colors"
                >
                  Ver projetos
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={waLink("Olá! Quero saber mais sobre a landing page para minha clínica.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#B8956A] text-[#B8956A] px-8 py-4 text-sm font-semibold hover:bg-[#B8956A] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="hero-anim" style={{ animationDelay: "500ms" }}>
              <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
                {[
                  { n: "3", label: "projetos no portfólio" },
                  { n: "7", label: "dias para entrega" },
                  { n: "100%", label: "mobile-first" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p
                      style={{ fontFamily: "var(--font-playfair)" }}
                      className="text-2xl font-semibold text-[#2F3E2E]"
                    >
                      {s.n}
                    </p>
                    <p className="text-xs text-[#5A6A5A] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJETOS ═════════════════════════════════════════════ */}
        <section id="projetos" className="py-20 sm:py-28 bg-[#F2EDE6]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Reveal className="text-center mb-14">
              <p className="text-[#B8956A] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                Portfólio
              </p>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2F3E2E]"
              >
                Projetos <em className="font-normal italic">conceituais</em>
              </h2>
              <p className="text-[#5A6A5A] text-sm mt-3 max-w-md mx-auto">
                Três landing pages desenvolvidas para demonstrar nossa capacidade criativa.
                Clique para ver cada projeto ao vivo.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <Reveal key={p.href} delay={i * 100}>
                  <Link
                    href={p.href}
                    className="group block bg-white border border-[#2F3E2E]/8 hover:border-[#B8956A]/40 hover:shadow-xl hover:shadow-[#B8956A]/10 transition-all duration-300 h-full"
                  >
                    {/* browser chrome */}
                    <div className="bg-[#F0EDE8] border-b border-[#2F3E2E]/8 px-4 py-2.5 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#2F3E2E]/15" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#2F3E2E]/15" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#2F3E2E]/15" />
                      </div>
                      <div className="flex-1 bg-white/60 rounded-sm px-3 py-1">
                        <p className="text-[9px] text-[#2F3E2E]/40 tracking-wide truncate">
                          portfolio-estudio-lume.vercel.app{p.href}
                        </p>
                      </div>
                    </div>
                    {/* screenshot */}
                    <div className="relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 right-3 flex gap-1.5">
                        {p.palette.map((c) => (
                          <div
                            key={c}
                            className="w-4 h-4 rounded-full border border-white/40 shadow-sm"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* card body */}
                    <div className="p-5">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956A] font-semibold">
                        {p.tag}
                      </span>
                      <h3
                        style={{ fontFamily: "var(--font-playfair)" }}
                        className="text-lg font-semibold text-[#2F3E2E] mt-1 mb-0.5"
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#5A6A5A]">{p.subtitle}</p>
                      <div className="mt-4 flex items-center gap-1 text-[#B8956A] text-xs font-semibold group-hover:gap-2 transition-all">
                        Ver projeto
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMO FUNCIONA ════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-[#2F3E2E]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Reveal className="text-center mb-14">
              <p className="text-[#B8956A] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                Processo
              </p>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F2]"
              >
                Como <em className="font-normal italic text-[#B8956A]">funciona</em>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#FAF7F2]/10">
              {steps.map(({ icon: Icon, step, title, desc }, i) => (
                <Reveal key={step} delay={i * 100}>
                  <div className="bg-[#2F3E2E] p-8 sm:p-10 relative group hover:bg-[#263420] transition-colors h-full">
                    <p
                      style={{ fontFamily: "var(--font-playfair)" }}
                      className="text-6xl text-[#B8956A]/15 font-semibold leading-none mb-5 select-none"
                    >
                      {step}
                    </p>
                    <div className="w-10 h-10 border border-[#B8956A]/30 flex items-center justify-center mb-5 group-hover:border-[#B8956A] transition-colors">
                      <Icon className="w-5 h-5 text-[#B8956A]" />
                    </div>
                    <h3
                      style={{ fontFamily: "var(--font-playfair)" }}
                      className="text-xl font-semibold text-[#FAF7F2] mb-3"
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-[#FAF7F2]/50 leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ O QUE ESTÁ INCLUSO ═══════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-[#FAF7F2]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal>
                <p className="text-[#B8956A] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                  Entregáveis
                </p>
                <h2
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-3xl sm:text-4xl font-semibold text-[#2F3E2E] mb-5"
                >
                  Tudo que você precisa
                  <br />
                  <em className="font-normal italic text-[#B8956A]">para converter</em>
                </h2>
                <p className="text-[#5A6A5A] text-sm sm:text-base leading-relaxed">
                  Uma landing page completa, configurada e pronta para rodar campanhas —
                  sem surpresas no escopo, sem custos ocultos.
                </p>
                <a
                  href={waLink("Olá! Quero minha landing page para clínica com o Estúdio Lume.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-[#B8956A] text-white px-8 py-4 text-sm font-semibold hover:bg-[#A07850] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Quero minha LP
                </a>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-[#F2EDE6] border border-[#2F3E2E]/6 px-4 py-3.5"
                    >
                      <div className="w-5 h-5 bg-[#2F3E2E] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#B8956A]" />
                      </div>
                      <p className="text-sm text-[#2F3E2E] leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ CTA FINAL ════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-[#2F3E2E] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #B8956A 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <Reveal className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <p className="text-[#B8956A] text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Vamos começar?
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F2] mb-5"
            >
              Sua clínica merece uma<br />
              <em className="italic font-normal text-[#B8956A]">página à altura</em>
            </h2>
            <p className="text-[#FAF7F2]/50 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto">
              Briefing hoje, layout em 2 dias, página no ar em 7.
              Entre em contato e receba uma proposta sem compromisso.
            </p>
            <a
              href={waLink("Olá! Quero minha landing page para clínica com o Estúdio Lume. Podem me enviar uma proposta?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B8956A] text-white px-10 py-5 text-base font-bold hover:bg-[#C9A678] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Quero minha LP
            </a>
            <p className="mt-5 text-[#FAF7F2]/30 text-xs tracking-wide">
              Resposta em até 2h em dias úteis
            </p>
          </Reveal>
        </section>

        {/* ══ FOOTER ═══════════════════════════════════════════════ */}
        <footer className="bg-[#1A2A1A] py-10">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 bg-[#B8956A] flex items-center justify-center">
                <div className="w-2.5 h-2.5 border border-[#1A2A1A]" />
              </div>
              <div>
                <p
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-sm font-semibold text-[#FAF7F2]"
                >
                  Estúdio Lume
                </p>
                <p className="text-[10px] text-[#B8956A] tracking-[0.15em] uppercase">
                  @estudiolume
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="text-[#FAF7F2]/30 hover:text-[#B8956A] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#FAF7F2]/30 hover:text-[#B8956A] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[#FAF7F2]/25 text-xs">
              Especialistas em landing pages para clínicas de estética
            </p>
            <p className="text-[#FAF7F2]/25 text-xs">
              Projeto conceitual desenvolvido por{" "}
              <span className="text-[#B8956A]">Estúdio Lume</span>
            </p>
          </div>
        </footer>

      </div>
    </>
  )
}

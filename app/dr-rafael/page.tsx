"use client"

import { useState } from "react"
import { Anton, Inter } from "next/font/google"
import { MessageCircle, ChevronDown, Star } from "lucide-react"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const WHATSAPP = "5511999999999"
const WA = `https://wa.me/${WHATSAPP}`
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`

// ─── data ─────────────────────────────────────────────────────────

const procedures = [
  {
    n: "01",
    name: "Contorno Mandibular",
    desc: "Ácido hialurônico aplicado com precisão para angulação, definição e impacto visual da mandíbula.",
    tag: "Mais procurado",
  },
  {
    n: "02",
    name: "Botox Masseter",
    desc: "Redução da hipertrofia do masseter para um rosto de traços mais angulosos e definidos.",
    tag: null,
  },
  {
    n: "03",
    name: "Preenchimento de Têmpora",
    desc: "Restauração do volume temporal para harmonizar proporções e marcar a estrutura óssea.",
    tag: null,
  },
  {
    n: "04",
    name: "Skinbooster Masculino",
    desc: "Hidratação profunda com resultado discreto — pele de qualidade sem aparência artificial.",
    tag: null,
  },
]

const stats = [
  { n: "320+", label: "Pacientes atendidos" },
  { n: "98%", label: "Taxa de satisfação" },
  { n: "6", label: "Anos de experiência" },
  { n: "4", label: "Procedimentos exclusivos" },
]

const credentials = [
  "Cirurgião-dentista · CRO-SP 000000",
  "Especialização em Harmonização Orofacial – USP",
  "Formação internacional em Volumetria Facial – Paris",
  "Membro da Sociedade Brasileira de Harmonização Facial",
]

const testimonials = [
  {
    name: "Fernando Gomes",
    age: 34,
    procedure: "Contorno Mandibular",
    text: "Resultado natural, ninguém percebeu que fiz — só notaram que eu estava com outra presença. Exatamente o que eu queria.",
  },
  {
    name: "Thiago Almeida",
    age: 29,
    procedure: "Botox Masseter",
    text: "Fiz o botox no masseter e o rosto ficou muito mais definido. O Dr. Rafael explicou tudo antes, sem enrolação. Processo rápido e indolor.",
  },
  {
    name: "Bruno Cardoso",
    age: 41,
    procedure: "Preenchimento de Têmpora",
    text: "Sempre tive o rosto muito redondo. Após o procedimento, fiquei com uma estrutura que eu nunca tive. Resultado que eu buscava faz anos.",
  },
]

// ─── component ────────────────────────────────────────────────────

export default function DrRafaelPage() {
  const [form, setForm] = useState({ name: "", whatsapp: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    const msg = `Olá, Dr. Rafael! Gostaria de agendar uma avaliação.\n\nNome: ${form.name}\nWhatsApp: ${form.whatsapp}`
    window.open(waLink(msg), "_blank")
    setSubmitted(true)
  }

  return (
    <div
      className={`${anton.variable} ${inter.variable} bg-[#0A0A0A] text-[#F5F5F5]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >

      {/* ══ HEADER ═══════════════════════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div>
            <p
              style={{ fontFamily: "var(--font-anton)" }}
              className="text-base tracking-[0.15em] text-[#F5F5F5] leading-none"
            >
              DR. RAFAEL COSTA
            </p>
            <p className="text-[10px] tracking-[0.2em] text-[#B8956A] uppercase mt-0.5">
              Harmonização Masculina
            </p>
          </div>
          <a
            href={waLink("Olá, Dr. Rafael! Gostaria de agendar uma avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#B8956A] text-[#0A0A0A] px-5 py-2 text-sm font-bold tracking-wide hover:bg-[#C9A678] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">AGENDAR</span>
          </a>
        </div>
      </header>

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0A0A0A]">
        {/* subtle noise grain via svg */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#B8956A]" />
              <span className="text-[#B8956A] text-xs tracking-[0.3em] uppercase font-medium">
                Harmonização Orofacial
              </span>
            </div>

            <h1
              style={{ fontFamily: "var(--font-anton)" }}
              className="text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-[0.02em] text-[#F5F5F5] mb-8"
            >
              TRAÇOS<br />
              QUE<br />
              <span className="text-[#B8956A]">COMUNICAM</span><br />
              PRESENÇA
            </h1>

            <p className="text-[#A0A0A0] text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Procedimentos exclusivos para o público masculino — resultado discreto,
              definição marcada, identidade preservada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waLink("Olá, Dr. Rafael! Gostaria de agendar uma avaliação gratuita.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#B8956A] text-[#0A0A0A] px-8 py-4 text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#C9A678] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar avaliação
              </a>
              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center border border-white/15 text-[#F5F5F5] px-8 py-4 text-sm font-medium tracking-wide uppercase hover:border-[#B8956A] hover:text-[#B8956A] transition-colors"
              >
                Ver procedimentos
              </a>
            </div>
          </div>

          {/* right */}
          <div className="hidden lg:flex justify-end relative">
            <div className="absolute -inset-px border border-[#B8956A]/20" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/520x640/1A1A1A/B8956A?text=Dr.+Rafael+Costa"
              alt="Dr. Rafael Costa"
              className="relative w-full max-w-md object-cover"
            />
            {/* gold accent corner */}
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#B8956A] -translate-x-4 translate-y-4" />
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#B8956A]/50 animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ══ PROCEDIMENTOS ════════════════════════════════════════ */}
      <section id="procedimentos" className="py-20 sm:py-28 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-[#B8956A]" />
              <span className="text-[#B8956A] text-xs tracking-[0.3em] uppercase font-medium">
                O que fazemos
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-anton)" }}
              className="text-4xl sm:text-5xl lg:text-6xl tracking-[0.03em] text-[#F5F5F5]"
            >
              PROCEDIMENTOS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {procedures.map((p) => (
              <div
                key={p.n}
                className="group bg-[#0F0F0F] p-8 hover:bg-[#1A1A1A] transition-colors relative"
              >
                {p.tag && (
                  <span className="absolute top-6 right-6 text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A] bg-[#B8956A] px-2 py-0.5 font-bold">
                    {p.tag}
                  </span>
                )}
                <p
                  style={{ fontFamily: "var(--font-anton)" }}
                  className="text-5xl text-[#B8956A]/20 leading-none mb-4 tracking-tight"
                >
                  {p.n}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-anton)" }}
                  className="text-2xl text-[#F5F5F5] tracking-[0.05em] mb-3 group-hover:text-[#B8956A] transition-colors"
                >
                  {p.name.toUpperCase()}
                </h3>
                <p className="text-sm text-[#707070] leading-relaxed">{p.desc}</p>
                <div className="mt-6 h-px w-0 bg-[#B8956A] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NÚMEROS ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-[#B8956A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  style={{ fontFamily: "var(--font-anton)" }}
                  className="text-5xl sm:text-6xl lg:text-7xl text-[#0A0A0A] leading-none tracking-tight"
                >
                  {s.n}
                </p>
                <p className="text-[#0A0A0A]/60 text-xs tracking-[0.15em] uppercase font-bold mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOBRE ════════════════════════════════════════════════ */}
      <section id="sobre" className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* left: image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-px border border-[#B8956A]/15" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/560x600/1A1A1A/B8956A?text=Dr.+Rafael+Costa"
                alt="Dr. Rafael Costa"
                className="relative w-full object-cover"
              />
              {/* corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#B8956A] translate-x-3 -translate-y-3" />
            </div>

            {/* right: bio */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-[#B8956A]" />
                <span className="text-[#B8956A] text-xs tracking-[0.3em] uppercase font-medium">
                  Sobre o profissional
                </span>
              </div>
              <h2
                style={{ fontFamily: "var(--font-anton)" }}
                className="text-4xl sm:text-5xl tracking-[0.03em] text-[#F5F5F5] mb-6"
              >
                DR. RAFAEL<br />
                <span className="text-[#B8956A]">COSTA</span>
              </h2>
              <div className="space-y-4 text-[#909090] text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Cirurgião-dentista especializado em harmonização orofacial masculina,
                  com formação pela USP e especialização internacional em volumetria facial.
                </p>
                <p>
                  Atende exclusivamente o público masculino, com protocolos desenvolvidos para
                  maximizar o impacto visual das características naturais — sem exageros,
                  sem perda de individualidade.
                </p>
                <p>
                  Mais de 320 pacientes atendidos. Resultado discreto, presença marcada.
                </p>
              </div>

              <div className="space-y-3">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-[#B8956A] rounded-full mt-2 shrink-0" />
                    <p className="text-xs text-[#707070] tracking-wide">{c}</p>
                  </div>
                ))}
              </div>

              <a
                href={waLink("Olá, Dr. Rafael! Gostaria de agendar uma avaliação.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 bg-[#B8956A] text-[#0A0A0A] px-8 py-4 text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#C9A678] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar com Dr. Rafael
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEPOIMENTOS ══════════════════════════════════════════ */}
      <section id="depoimentos" className="py-20 sm:py-28 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-[#B8956A]" />
              <span className="text-[#B8956A] text-xs tracking-[0.3em] uppercase font-medium">
                Experiências reais
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-anton)" }}
              className="text-4xl sm:text-5xl tracking-[0.03em] text-[#F5F5F5]"
            >
              QUEM JÁ FEZ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#141414] border-l-2 border-[#B8956A] px-6 py-7 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B8956A] text-[#B8956A]" />
                  ))}
                </div>
                <p className="text-[#909090] text-sm leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>
                <div>
                  <p
                    style={{ fontFamily: "var(--font-anton)" }}
                    className="text-base tracking-[0.1em] text-[#F5F5F5]"
                  >
                    {t.name.toUpperCase()}
                  </p>
                  <p className="text-[10px] text-[#B8956A] tracking-[0.2em] uppercase font-medium mt-0.5">
                    {t.age} anos · {t.procedure}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FORMULÁRIO ═══════════════════════════════════════════ */}
      <section id="contato" className="py-20 sm:py-28 bg-[#1A1A1A]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-[#B8956A]" />
              <span className="text-[#B8956A] text-xs tracking-[0.3em] uppercase font-medium">
                Primeiro passo
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-anton)" }}
              className="text-4xl sm:text-5xl tracking-[0.03em] text-[#F5F5F5]"
            >
              QUERO<br />
              <span className="text-[#B8956A]">AGENDAR</span>
            </h2>
            <p className="text-[#707070] text-sm mt-4 leading-relaxed">
              Preencha abaixo e enviaremos diretamente ao WhatsApp do Dr. Rafael.
            </p>
          </div>

          {submitted ? (
            <div className="py-12">
              <div className="h-px w-16 bg-[#B8956A] mb-8" />
              <p
                style={{ fontFamily: "var(--font-anton)" }}
                className="text-3xl text-[#F5F5F5] tracking-wide mb-2"
              >
                MENSAGEM ENVIADA
              </p>
              <p className="text-[#707070] text-sm">
                Você foi redirecionado ao WhatsApp. Aguarde o retorno do Dr. Rafael.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-[#B8956A] text-xs tracking-widest uppercase underline underline-offset-4 hover:text-[#F5F5F5] transition-colors"
              >
                Enviar novamente
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#B8956A] mb-2 font-medium">
                  Nome *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-4 text-[#F5F5F5] placeholder-white/20 text-sm focus:outline-none focus:border-[#B8956A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#B8956A] mb-2 font-medium">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="(11) 99999-9999"
                  className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-4 text-[#F5F5F5] placeholder-white/20 text-sm focus:outline-none focus:border-[#B8956A] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#B8956A] text-[#0A0A0A] py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#C9A678] transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                Quero agendar
              </button>

              <p className="text-[#505050] text-xs text-center tracking-wide">
                Avaliação gratuita · Sem compromisso
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════ */}
      <footer className="bg-[#0A0A0A] py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p
              style={{ fontFamily: "var(--font-anton)" }}
              className="text-sm tracking-[0.2em] text-[#F5F5F5]"
            >
              DR. RAFAEL COSTA
            </p>
            <p className="text-[10px] tracking-[0.2em] text-[#B8956A] uppercase mt-0.5">
              Harmonização Masculina
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="text-[#505050] hover:text-[#B8956A] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram"
              className="text-[#505050] hover:text-[#B8956A] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#404040] text-xs tracking-wide">
            © 2024 Dr. Rafael Costa · Todos os direitos reservados
          </p>
          <p className="text-[#404040] text-xs tracking-wide">
            Projeto conceitual desenvolvido por{" "}
            <span className="text-[#B8956A]">Estúdio Lume</span>
          </p>
        </div>
      </footer>

      {/* ══ FLOATING WHATSAPP ════════════════════════════════════ */}
      <a
        href={waLink("Olá, Dr. Rafael! Vim pelo site e gostaria de mais informações.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#B8956A] flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#C9A678] transition-all duration-200 hover:shadow-2xl hover:shadow-[#B8956A]/20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#0A0A0A]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </div>
  )
}

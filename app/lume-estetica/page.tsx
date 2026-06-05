"use client"

import { useState } from "react"
import { DM_Serif_Display, Inter } from "next/font/google"
import {
  MessageCircle,
  ChevronDown,
  Star,
  Check,
  MapPin,
} from "lucide-react"

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const WHATSAPP = "5511999999999"
const WA = `https://wa.me/${WHATSAPP}`
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`

// ─── data ────────────────────────────────────────────────────────────

const team = [
  {
    name: "Dra. Ana Claudia Ferreira",
    role: "Dermatologista",
    credential: "CRM 000000/SP",
    bio: "Especialista em dermatologia clínica e estética, com foco em tratamentos baseados em evidências e tecnologias de última geração.",
    img: "https://placehold.co/400x480/3A4A3E/C8B89E?text=Dra.+Ana+Claudia",
  },
  {
    name: "Dra. Beatriz Santos",
    role: "Biomédica Esteta",
    credential: "CRBio 000000/SP",
    bio: "Especializada em harmonização facial e procedimentos injetáveis, com formação internacional em técnicas avançadas.",
    img: "https://placehold.co/400x480/2A3630/C8B89E?text=Dra.+Beatriz",
  },
  {
    name: "Lucas Mendes",
    role: "Esteticista Clínico",
    credential: "CREF 000000/SP",
    bio: "Especializado em estética corporal e capilar, com domínio em equipamentos de última geração para resultados duradouros.",
    img: "https://placehold.co/400x480/3A4A3E/C8B89E?text=Lucas+Mendes",
  },
]

type TabKey = "facial" | "corporal" | "capilar"

const procedures: Record<TabKey, { name: string; desc: string; price: string }[]> = {
  facial: [
    { name: "Harmonização Facial", desc: "Equilíbrio e proporção com ácido hialurônico e toxina botulínica.", price: "Sob consulta" },
    { name: "Peeling Químico", desc: "Renovação celular profunda para uniformização do tom e textura.", price: "A partir de R$ 350" },
    { name: "Limpeza Profunda", desc: "Extração especializada e ativos personalizados para cada tipo de pele.", price: "A partir de R$ 180" },
    { name: "Luz Pulsada (IPL)", desc: "Fotorejuvenescimento para manchas, rosácea e poros dilatados.", price: "A partir de R$ 450" },
    { name: "Microagulhamento Facial", desc: "Estimulação do colágeno para cicatrizes, manchas e envelhecimento.", price: "A partir de R$ 300" },
  ],
  corporal: [
    { name: "Criolipólise", desc: "Eliminação de gordura localizada por congelamento, sem cirurgia.", price: "A partir de R$ 800" },
    { name: "Radiofrequência", desc: "Firmeza e flacidez com aquecimento profundo das camadas dérmicas.", price: "A partir de R$ 350" },
    { name: "Drenagem Linfática", desc: "Redução de inchaço e melhora da circulação com técnica manual.", price: "A partir de R$ 150" },
    { name: "Massagem Modeladora", desc: "Redução de medidas e celulite com técnicas avançadas de massagem.", price: "A partir de R$ 120" },
    { name: "Carboxiterapia", desc: "Aplicação de CO₂ medicinal para celulite, gordura e flacidez.", price: "A partir de R$ 250" },
  ],
  capilar: [
    { name: "Laserterapia Capilar", desc: "Estimulação do crescimento capilar com laser de baixa potência.", price: "A partir de R$ 200" },
    { name: "Mesoterapia Capilar", desc: "Nutrição profunda do couro cabeludo para queda e crescimento.", price: "A partir de R$ 350" },
    { name: "Ozonioterapia", desc: "Oxigenação do couro cabeludo para saúde e desenvolvimento capilar.", price: "A partir de R$ 180" },
    { name: "PRP Capilar", desc: "Plasma rico em plaquetas para estimulação natural do folículo.", price: "A partir de R$ 600" },
    { name: "Microagulhamento Capilar", desc: "Bioestimulação da circulação e absorção de ativos no couro cabeludo.", price: "A partir de R$ 280" },
  ],
}

const differentials = [
  { n: "01", title: "Equipe Multidisciplinar", desc: "Dermatologista, biomédica e esteticista trabalhando em sinergia para o melhor resultado clínico." },
  { n: "02", title: "Tecnologia Certificada", desc: "Equipamentos aprovados pela ANVISA com eficácia comprovada por estudos científicos." },
  { n: "03", title: "Protocolos Personalizados", desc: "Cada tratamento é desenhado individualmente, respeitando a singularidade de cada paciente." },
  { n: "04", title: "Medicina Baseada em Evidências", desc: "Procedimentos validados pela literatura científica, atualizados com os melhores consensos internacionais." },
]

const testimonials = [
  {
    name: "Camila Ferreira",
    procedure: "Harmonização Facial",
    text: "A equipe da Lume transformou minha autoestima. O resultado foi extremamente natural e a Dra. Beatriz foi muito cuidadosa durante todo o processo.",
  },
  {
    name: "Ricardo Tavares",
    procedure: "Criolipólise",
    text: "Após a criolipólise, perdi a gordura localizada que nem academia resolvia. Excelente atendimento e resultado visível logo nas primeiras semanas.",
  },
  {
    name: "Juliana Nunes",
    procedure: "Laserterapia Capilar",
    text: "Em 3 meses de tratamento já notei a diferença na queda. A Dra. Ana Claudia fez uma avaliação completa e o protocolo foi absolutamente certeiro.",
  },
]

const faqs = [
  {
    q: "A clínica atende pelo plano de saúde?",
    a: "Os procedimentos estéticos não são cobertos por plano de saúde. Oferecemos condições de parcelamento facilitado e pacotes com valores diferenciados para tratamentos contínuos.",
  },
  {
    q: "Qual a diferença entre a biomédica e a dermatologista da equipe?",
    a: "A Dra. Ana Claudia (dermatologista) atua no diagnóstico clínico da pele e prescreve tratamentos médicos. A Dra. Beatriz (biomédica) executa procedimentos injetáveis e estéticos. Juntas, oferecem uma abordagem verdadeiramente completa.",
  },
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "Depende do procedimento. Toxina botulínica e preenchimentos têm resultado imediato a 48h. PRP, laserterapia e carboxiterapia exigem entre 3 e 6 sessões para resultados progressivos e duradouros.",
  },
  {
    q: "Preciso marcar consulta para avaliação?",
    a: "Sim — a avaliação inicial é fundamental para um protocolo seguro e eficaz. É gratuita e pode ser agendada pelo WhatsApp ou pelo formulário do site.",
  },
  {
    q: "Os procedimentos oferecem algum risco?",
    a: "Todos os procedimentos são realizados por profissionais habilitados, com produtos e equipamentos certificados pela ANVISA. Na avaliação, detalhamos os possíveis efeitos e contraindicações de cada tratamento.",
  },
  {
    q: "Vocês atendem homens também?",
    a: "Absolutamente. Cerca de 35% dos nossos pacientes são homens. Oferecemos protocolos específicos para pele masculina, queda capilar, gordura localizada e outros cuidados estéticos para todos os gêneros.",
  },
]

const tabLabels: { key: TabKey; label: string }[] = [
  { key: "facial", label: "Facial" },
  { key: "corporal", label: "Corporal" },
  { key: "capilar", label: "Capilar" },
]

// ─── component ───────────────────────────────────────────────────────

export default function LumeEsteticaPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("facial")
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [form, setForm] = useState({ name: "", whatsapp: "", procedure: "", availability: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    const msg = `Olá! Gostaria de agendar uma avaliação na Lume Estética Avançada.\n\nNome: ${form.name}\nWhatsApp: ${form.whatsapp}\nProcedimento: ${form.procedure}\nDisponibilidade: ${form.availability || "A combinar"}`
    window.open(waLink(msg), "_blank")
    setSubmitted(true)
  }

  return (
    <div
      className={`${dmSerif.variable} ${inter.variable} bg-[#F5F2EE] text-[#2A3630]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >

      {/* ══ HEADER ══════════════════════════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#F5F2EE]/92 backdrop-blur-md border-b border-[#3A4A3E]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#3A4A3E] rounded-sm flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-[#C8B89E] rounded-[1px]" />
            </div>
            <span
              style={{ fontFamily: "var(--font-dm-serif)" }}
              className="text-lg font-normal tracking-wide text-[#3A4A3E]"
            >
              Lume Estética
            </span>
          </div>
          <a
            href={waLink("Olá! Gostaria de agendar uma avaliação na Lume Estética.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#3A4A3E] text-[#F5F2EE] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2A3630] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section className="relative bg-[#3A4A3E] min-h-screen flex items-end pb-16 pt-32 overflow-hidden">
        {/* grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#C8B89E 1px, transparent 1px), linear-gradient(90deg, #C8B89E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* large decorative number */}
        <span
          className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 text-[22vw] font-normal leading-none text-[#C8B89E]/8 select-none pointer-events-none"
          style={{ fontFamily: "var(--font-dm-serif)" }}
          aria-hidden
        >
          L
        </span>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-[#C8B89E]/70 text-xs tracking-[0.3em] uppercase mb-6 font-medium">
              Estética Clínica Avançada
            </p>
            <h1
              style={{ fontFamily: "var(--font-dm-serif)" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-[#F5F2EE] mb-8"
            >
              Ciência aplicada à<br />
              <em className="text-[#C8B89E]">sua melhor versão</em>
            </h1>
            <p className="text-[#C8B89E]/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Uma equipe multidisciplinar — dermatologista, biomédica e esteticista — unida
              pelo compromisso com resultados seguros, naturais e baseados em evidências.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waLink("Olá! Gostaria de agendar uma avaliação gratuita na Lume Estética.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C8B89E] text-[#2A3630] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#BCA88E] transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar avaliação gratuita
              </a>
              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center border border-[#C8B89E]/40 text-[#C8B89E] px-8 py-4 rounded-full text-sm font-medium hover:border-[#C8B89E] hover:bg-[#C8B89E]/10 transition-colors"
              >
                Ver procedimentos
              </a>
            </div>
          </div>

          {/* stat bar */}
          <div className="mt-16 pt-8 border-t border-[#C8B89E]/20 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: "6+", label: "Anos de atuação" },
              { n: "3", label: "Especialistas" },
              { n: "2.000+", label: "Pacientes atendidos" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                  className="text-3xl text-[#C8B89E] font-normal"
                >
                  {s.n}
                </p>
                <p className="text-[#C8B89E]/60 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EQUIPE ══════════════════════════════════════════════════ */}
      <section id="equipe" className="py-20 sm:py-28 bg-[#F5F2EE]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <p className="text-[#3A4A3E]/50 text-xs tracking-[0.25em] uppercase mb-3 font-medium">
                Nossa equipe
              </p>
              <h2
                style={{ fontFamily: "var(--font-dm-serif)" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2A3630]"
              >
                Especialistas que<br />
                <em className="text-[#3A4A3E]">cuidam de você</em>
              </h2>
            </div>
            <a
              href={waLink("Olá! Gostaria de marcar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-medium text-[#3A4A3E] border-b border-[#3A4A3E] pb-0.5 hover:opacity-70 transition-opacity"
            >
              Agendar avaliação →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((p, i) => (
              <div
                key={p.name}
                className={`group relative overflow-hidden rounded-2xl ${i === 1 ? "sm:-mt-6" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3630]/90 via-[#2A3630]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#C8B89E] text-xs tracking-[0.2em] uppercase font-medium mb-1">
                    {p.role}
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                    className="text-[#F5F2EE] text-xl font-normal mb-1"
                  >
                    {p.name}
                  </p>
                  <p className="text-[#C8B89E]/70 text-xs">{p.credential}</p>
                  <p className="text-[#F5F2EE]/80 text-sm leading-relaxed mt-3 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                    {p.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCEDIMENTOS ═══════════════════════════════════════════ */}
      <section id="procedimentos" className="py-20 sm:py-28 bg-[#3A4A3E]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <p className="text-[#C8B89E]/60 text-xs tracking-[0.25em] uppercase mb-3 font-medium">
              Tratamentos
            </p>
            <h2
              style={{ fontFamily: "var(--font-dm-serif)" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F2EE]"
            >
              O que podemos<br />
              <em className="text-[#C8B89E]">fazer por você</em>
            </h2>
          </div>

          {/* tabs */}
          <div className="flex gap-0 border-b border-[#C8B89E]/20 mb-10">
            {tabLabels.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === key
                    ? "text-[#C8B89E]"
                    : "text-[#C8B89E]/40 hover:text-[#C8B89E]/70"
                }`}
              >
                {label}
                {activeTab === key && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#C8B89E]" />
                )}
              </button>
            ))}
          </div>

          {/* procedure grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {procedures[activeTab].map((proc, i) => (
              <div
                key={proc.name}
                className={`border border-[#C8B89E]/15 rounded-xl p-5 hover:border-[#C8B89E]/40 hover:bg-[#C8B89E]/5 transition-all ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                    className="text-lg font-normal text-[#F5F2EE]"
                  >
                    {proc.name}
                  </h3>
                  <span className="shrink-0 text-xs text-[#C8B89E] font-medium tracking-wide mt-1">
                    {proc.price}
                  </span>
                </div>
                <p className="text-sm text-[#C8B89E]/60 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={waLink("Olá! Gostaria de saber mais sobre os procedimentos da Lume Estética.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8B89E] text-[#2A3630] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#BCA88E] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar disponibilidade
            </a>
          </div>
        </div>
      </section>

      {/* ══ SOBRE A CLÍNICA ═════════════════════════════════════════ */}
      <section id="sobre" className="py-20 sm:py-28 bg-[#F5F2EE]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            {/* left: story */}
            <div>
              <p className="text-[#3A4A3E]/50 text-xs tracking-[0.25em] uppercase mb-4 font-medium">
                Nossa história
              </p>
              <h2
                style={{ fontFamily: "var(--font-dm-serif)" }}
                className="text-3xl sm:text-4xl font-normal text-[#2A3630] mb-6"
              >
                Uma clínica construída sobre{" "}
                <em className="text-[#3A4A3E]">ciência e cuidado</em>
              </h2>
              <div className="space-y-4 text-[#4A5A50] text-sm sm:text-base leading-relaxed">
                <p>
                  Fundada em 2018 por três profissionais com trajetórias complementares, a Lume
                  Estética Avançada nasceu de uma convicção comum: a estética clínica precisa
                  combinar rigor científico, tecnologia de ponta e genuína atenção ao paciente.
                </p>
                <p>
                  Em seis anos de atuação, construímos um espaço onde cada visita começa por
                  ouvir — entender os objetivos, histórico e expectativas de cada pessoa. Só
                  então desenhamos um protocolo personalizado, fundamentado em evidências e
                  executado com precisão.
                </p>
                <p>
                  Mais de 2.000 pacientes atendidos reforçam nosso compromisso com resultados
                  naturais, seguros e duradouros — sem pressa, sem exagero.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#3A4A3E] shrink-0" />
                <span className="text-sm text-[#4A5A50]">Rua das Magnólias, 123 — Jardins, São Paulo/SP</span>
              </div>
            </div>

            {/* right: differentials */}
            <div className="space-y-px">
              <p className="text-[#3A4A3E]/50 text-xs tracking-[0.25em] uppercase mb-6 font-medium">
                Nossos diferenciais
              </p>
              {differentials.map((d, i) => (
                <div
                  key={d.n}
                  className={`flex gap-5 py-5 ${i < differentials.length - 1 ? "border-b border-[#3A4A3E]/10" : ""}`}
                >
                  <span
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                    className="text-3xl text-[#3A4A3E]/20 font-normal w-10 shrink-0 leading-none mt-1"
                  >
                    {d.n}
                  </span>
                  <div>
                    <h3
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                      className="text-base font-normal text-[#2A3630] mb-1"
                    >
                      {d.title}
                    </h3>
                    <p className="text-sm text-[#4A5A50] leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEPOIMENTOS ═════════════════════════════════════════════ */}
      <section id="depoimentos" className="py-20 sm:py-28 bg-[#EDE8E1]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-[#3A4A3E]/50 text-xs tracking-[0.25em] uppercase mb-3 font-medium">
              Depoimentos
            </p>
            <h2
              style={{ fontFamily: "var(--font-dm-serif)" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2A3630]"
            >
              O que nossos pacientes<br />
              <em className="text-[#3A4A3E]">dizem sobre nós</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#F5F2EE] rounded-2xl p-7 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#3A4A3E] text-[#3A4A3E]" />
                  ))}
                </div>
                <p
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                  className="text-4xl text-[#3A4A3E]/15 font-normal leading-none mb-2 -ml-1"
                  aria-hidden
                >
                  "
                </p>
                <p className="text-[#4A5A50] text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
                <div className="border-t border-[#3A4A3E]/10 pt-4">
                  <p
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                    className="text-base font-normal text-[#2A3630]"
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-[#3A4A3E]/50 font-medium tracking-wide uppercase mt-0.5">
                    {t.procedure}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FORMULÁRIO ══════════════════════════════════════════════ */}
      <section id="contato" className="py-20 sm:py-28 bg-[#2A3630]">
        <div className="max-w-xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-[#C8B89E]/60 text-xs tracking-[0.25em] uppercase mb-3 font-medium">
              Contato
            </p>
            <h2
              style={{ fontFamily: "var(--font-dm-serif)" }}
              className="text-3xl sm:text-4xl font-normal text-[#F5F2EE]"
            >
              Agende sua{" "}
              <em className="text-[#C8B89E]">avaliação gratuita</em>
            </h2>
            <p className="text-[#C8B89E]/60 mt-3 text-sm leading-relaxed">
              Preencha o formulário e você será redirecionado ao nosso WhatsApp com as informações preenchidas.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-[#C8B89E]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7 text-[#C8B89E]" />
              </div>
              <h3
                style={{ fontFamily: "var(--font-dm-serif)" }}
                className="text-2xl text-[#F5F2EE] font-normal mb-2"
              >
                Até breve!
              </h3>
              <p className="text-[#C8B89E]/60 text-sm">
                Você foi redirecionado ao WhatsApp. Aguardamos seu contato!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-[#C8B89E] text-xs underline underline-offset-4 hover:text-[#F5F2EE] transition-colors"
              >
                Enviar novamente
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "name", label: "Nome completo", type: "text", placeholder: "Seu nome", required: true },
                { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(11) 99999-9999", required: true },
              ].map((f) => (
                <div key={f.id}>
                  <label className="block text-xs font-medium text-[#C8B89E]/70 mb-2 tracking-wide uppercase">
                    {f.label} {f.required && "*"}
                  </label>
                  <input
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full bg-white/5 border border-[#C8B89E]/20 rounded-xl px-4 py-3 text-[#F5F2EE] placeholder-[#C8B89E]/30 text-sm focus:outline-none focus:border-[#C8B89E]/60 transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-[#C8B89E]/70 mb-2 tracking-wide uppercase">
                  Procedimento de interesse *
                </label>
                <select
                  required
                  value={form.procedure}
                  onChange={(e) => setForm({ ...form, procedure: e.target.value })}
                  className="w-full bg-[#2A3630] border border-[#C8B89E]/20 rounded-xl px-4 py-3 text-[#F5F2EE] text-sm focus:outline-none focus:border-[#C8B89E]/60 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecione</option>
                  <optgroup label="Facial">
                    <option>Harmonização Facial</option>
                    <option>Peeling Químico</option>
                    <option>Limpeza Profunda</option>
                    <option>Luz Pulsada (IPL)</option>
                    <option>Microagulhamento Facial</option>
                  </optgroup>
                  <optgroup label="Corporal">
                    <option>Criolipólise</option>
                    <option>Radiofrequência Corporal</option>
                    <option>Drenagem Linfática</option>
                    <option>Massagem Modeladora</option>
                    <option>Carboxiterapia</option>
                  </optgroup>
                  <optgroup label="Capilar">
                    <option>Laserterapia Capilar</option>
                    <option>Mesoterapia Capilar</option>
                    <option>Ozonioterapia Capilar</option>
                    <option>PRP Capilar</option>
                    <option>Microagulhamento Capilar</option>
                  </optgroup>
                  <option>Avaliação geral / Dúvidas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#C8B89E]/70 mb-2 tracking-wide uppercase">
                  Disponibilidade
                </label>
                <textarea
                  value={form.availability}
                  onChange={(e) => setForm({ ...form, availability: e.target.value })}
                  placeholder="Ex: manhãs na terça e quinta, ou fins de semana..."
                  rows={3}
                  className="w-full bg-white/5 border border-[#C8B89E]/20 rounded-xl px-4 py-3 text-[#F5F2EE] placeholder-[#C8B89E]/30 text-sm focus:outline-none focus:border-[#C8B89E]/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8B89E] text-[#2A3630] font-semibold py-4 rounded-xl text-sm hover:bg-[#BCA88E] transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar pelo WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 sm:py-28 bg-[#F5F2EE]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-[#3A4A3E]/50 text-xs tracking-[0.25em] uppercase mb-3 font-medium">
              Dúvidas frequentes
            </p>
            <h2
              style={{ fontFamily: "var(--font-dm-serif)" }}
              className="text-3xl sm:text-4xl font-normal text-[#2A3630]"
            >
              Perguntas <em className="text-[#3A4A3E]">e respostas</em>
            </h2>
          </div>

          <div className="divide-y divide-[#3A4A3E]/10">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left hover:text-[#3A4A3E] transition-colors group"
                >
                  <span
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                    className="text-base font-normal text-[#2A3630] group-hover:text-[#3A4A3E] pr-6 transition-colors"
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#3A4A3E] shrink-0 transition-transform duration-200 ${
                      faqOpen === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === i && (
                  <div className="pb-5">
                    <p className="text-sm text-[#4A5A50] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════════ */}
      <footer className="bg-[#3A4A3E] py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-[#C8B89E] rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#3A4A3E] rounded-[1px]" />
                </div>
                <span
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                  className="text-base text-[#F5F2EE] font-normal"
                >
                  Lume Estética Avançada
                </span>
              </div>
              <p className="text-[#C8B89E]/50 text-xs ml-9">
                Dermatologia · Estética · Capilar
              </p>
            </div>

            <div className="flex items-center gap-5">
              <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="text-[#C8B89E]/50 hover:text-[#C8B89E] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram"
                className="text-[#C8B89E]/50 hover:text-[#C8B89E] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Localização"
                className="text-[#C8B89E]/50 hover:text-[#C8B89E] transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#C8B89E]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#C8B89E]/40">
            <span>© 2024 Lume Estética Avançada · Todos os direitos reservados</span>
            <span>
              Projeto conceitual desenvolvido por{" "}
              <span className="text-[#C8B89E]/70 font-medium">Estúdio Lume</span>
            </span>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING WHATSAPP ═══════════════════════════════════════ */}
      <a
        href={waLink("Olá! Vim pelo site da Lume Estética e gostaria de mais informações.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-200"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </div>
  )
}

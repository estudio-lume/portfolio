"use client"

import { useState } from "react"
import { Cormorant_Garamond, Inter } from "next/font/google"
import {
  MessageCircle,
  Star,
  ChevronDown,
  Sparkles,
  Heart,
  Zap,
  Droplet,
  Scissors,
  LayoutGrid,
  MapPin,
} from "lucide-react"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const WHATSAPP = "5511999999999"
const WA = `https://wa.me/${WHATSAPP}`
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`

const procedures = [
  {
    icon: Sparkles,
    name: "Toxina Botulínica",
    description: "Suavização de linhas de expressão com precisão e naturalidade.",
    price: "A partir de R$ 1.800",
  },
  {
    icon: Heart,
    name: "Preenchimento Labial",
    description: "Volume e definição labial respeitando a proporção harmônica do rosto.",
    price: "A partir de R$ 2.200",
  },
  {
    icon: Zap,
    name: "Bioestimulador",
    description: "Estimulação do colágeno para firmeza, sustentação e rejuvenescimento.",
    price: "A partir de R$ 2.800",
  },
  {
    icon: Droplet,
    name: "Skinbooster",
    description: "Hidratação profunda com ácido hialurônico para pele luminosa e viçosa.",
    price: "A partir de R$ 1.900",
  },
  {
    icon: Scissors,
    name: "Fios de PDO",
    description: "Lifting e sustentação facial com fios absorvíveis de alta tecnologia.",
    price: "A partir de R$ 3.200",
  },
  {
    icon: LayoutGrid,
    name: "Microagulhamento",
    description: "Renovação celular para tratamento de manchas, poros e cicatrizes.",
    price: "A partir de R$ 1.200",
  },
]

const testimonials = [
  {
    name: "Fernanda Costa",
    procedure: "Bioestimulador de Colágeno",
    text: "A Mariana tem um olhar único para cada rosto. Meu resultado ficou absolutamente natural — exatamente o que eu queria. Me sinto mais eu mesma, só que melhorada.",
  },
  {
    name: "Camila Rocha",
    procedure: "Preenchimento Labial + Botox",
    text: "Fui com muito medo de ficar artificial e saí com um resultado que parece que eu nasci assim. A consulta foi longa, ela explicou tudo com calma. Confiança total.",
  },
  {
    name: "Isabela Martins",
    procedure: "Fios de PDO",
    text: "Depois dos 40 percebi a perda de sustentação. A Mariana indicou os fios e o efeito foi incrível — minha pele levantou de um jeito muito delicado. Amei demais.",
  },
]

const faqs = [
  {
    q: "Qual a diferença entre preenchimento e bioestimulador?",
    a: "O preenchimento com ácido hialurônico gera resultado imediato, adicionando volume e hidratação. O bioestimulador age estimulando o organismo a produzir colágeno — o resultado é progressivo (visível em 4 a 8 semanas) e extremamente natural. Ambos podem ser combinados.",
  },
  {
    q: "A aplicação de botox dói?",
    a: "A aplicação é feita com agulhas finíssimas e causa apenas um leve desconforto. Utilizamos creme anestésico antes do procedimento para tornar a experiência o mais confortável possível.",
  },
  {
    q: "Com que idade posso começar a fazer harmonização facial?",
    a: "Não há idade mínima — o tratamento é indicado quando há uma queixa estética a ser resolvida. O mais importante é a avaliação individual. Jovens podem se beneficiar de procedimentos preventivos como botox e skinbooster.",
  },
  {
    q: "Quanto tempo dura o resultado do preenchimento labial?",
    a: "Em média, o ácido hialurônico nos lábios dura de 8 a 12 meses, dependendo do metabolismo, quantidade aplicada e hábitos de vida. Retoques podem ser feitos conforme a necessidade.",
  },
  {
    q: "Posso trabalhar no dia seguinte ao procedimento?",
    a: "Na maioria dos procedimentos, sim. Pode haver pequeno inchaço ou hematomas nos primeiros dias, especialmente em preenchimentos. Para eventos importantes, recomendo agendar com pelo menos 15 dias de antecedência.",
  },
  {
    q: "A consulta de avaliação tem custo?",
    a: "A avaliação é gratuita e sem compromisso. Analiso seu rosto, entendo seus objetivos e monto um protocolo personalizado com as melhores opções para você — sem pressa e com total transparência.",
  },
]

export default function MarianaAlvesPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    procedure: "",
    hadBefore: "",
    availability: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    const msg = `Olá, Mariana! 👋\n\nMeu nome é ${form.name}.\n📱 WhatsApp: ${form.whatsapp}\n💉 Procedimento de interesse: ${form.procedure}\n✅ Já fez procedimentos antes: ${form.hadBefore === "sim" ? "Sim" : "Não"}\n🗓 Disponibilidade: ${form.availability || "A combinar"}\n\nGostaria de agendar uma avaliação!`
    window.open(waLink(msg), "_blank")
    setSubmitted(true)
  }

  return (
    <div
      className={`${cormorant.variable} ${inter.variable} min-h-screen bg-[#F5EFE6] text-[#3D2B1F]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#F5EFE6]/90 backdrop-blur-md border-b border-[#D4B59E]/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <span
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-xl font-semibold tracking-wide text-[#8B6F47]"
          >
            Studio <em className="font-light not-italic italic">Mariana Alves</em>
          </span>
          <a
            href={waLink("Olá! Gostaria de agendar uma avaliação gratuita.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#8B6F47] text-[#F5EFE6] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#7A6040] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE6] via-[#EDE0D0] to-[#D4B59E]/50" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #D4B59E 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#D4B59E] text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              Biomédica Esteta · CRBio 000000/SP
            </p>
            <h1
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.15] text-[#3D2B1F] mb-6"
            >
              Harmonização facial que{" "}
              <em className="text-[#8B6F47]">respeita seus traços naturais</em>
            </h1>
            <p className="text-[#6B5040] text-base sm:text-lg leading-relaxed mb-9 max-w-md">
              Procedimentos estéticos avançados com olhar clínico e sensibilidade
              artística — para você se sentir mais bonita sendo você mesma.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waLink("Olá, Mariana! Gostaria de agendar uma avaliação gratuita.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#8B6F47] text-[#F5EFE6] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#7A6040] hover:shadow-lg hover:shadow-[#8B6F47]/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar avaliação
              </a>
              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center border border-[#D4B59E] text-[#8B6F47] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#D4B59E]/20 transition-colors"
              >
                Conhecer procedimentos
              </a>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#D4B59E]/40 to-transparent" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/560x680/D4B59E/8B6F47?text=Studio+Mariana+Alves"
              alt="Studio Mariana Alves"
              className="relative rounded-3xl w-full object-cover shadow-2xl shadow-[#8B6F47]/15"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#D4B59E]">
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ── PROCEDIMENTOS ─────────────────────────────────────── */}
      <section id="procedimentos" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4B59E] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Tratamentos
            </p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#3D2B1F]"
            >
              Procedimentos <em className="text-[#8B6F47]">especializados</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {procedures.map(({ icon: Icon, name, description, price }) => (
              <div
                key={name}
                className="group bg-white/60 border border-[#D4B59E]/30 rounded-2xl p-6 hover:border-[#D4B59E] hover:bg-white/80 hover:shadow-xl hover:shadow-[#D4B59E]/10 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-[#F5EFE6] border border-[#D4B59E]/40 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#D4B59E]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#8B6F47]" />
                </div>
                <h3
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  className="text-xl font-semibold text-[#3D2B1F] mb-2"
                >
                  {name}
                </h3>
                <p className="text-sm text-[#6B5040] leading-relaxed mb-4">{description}</p>
                <p className="text-xs font-semibold text-[#8B6F47] tracking-wide uppercase">
                  {price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ─────────────────────────────────────────────── */}
      <section id="sobre" className="py-20 sm:py-28 bg-white/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#D4B59E]/30 to-transparent" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/520x640/D4B59E/8B6F47?text=Dra.+Mariana+Alves"
                alt="Dra. Mariana Alves"
                className="relative rounded-3xl w-full object-cover shadow-xl shadow-[#8B6F47]/10"
              />
            </div>

            <div>
              <p className="text-[#D4B59E] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Sobre mim
              </p>
              <h2
                style={{ fontFamily: "var(--font-cormorant)" }}
                className="text-3xl sm:text-4xl font-light text-[#3D2B1F] mb-6"
              >
                Ciência e estética{" "}
                <em className="text-[#8B6F47]">que se encontram</em>
              </h2>
              <p className="text-[#6B5040] leading-relaxed mb-4 text-sm sm:text-base">
                Sou Mariana Alves, biomédica esteta com mais de 8 anos de experiência
                em harmonização facial. Minha formação científica me dá a base técnica
                para resultados seguros; meu olhar artístico garante que cada
                procedimento valorize a beleza única de cada pessoa.
              </p>
              <p className="text-[#6B5040] leading-relaxed mb-8 text-sm sm:text-base">
                Acredito que o melhor resultado estético é aquele que você mesma não
                consegue apontar — natural, harmonioso, que te faz sentir mais
                confiante sendo exatamente quem você é.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Biomédica Esteta", sub: "CRBio 000000/SP" },
                  { label: "Especialização", sub: "Harmonização Facial – USP" },
                  { label: "Certificação", sub: "Bioestimuladores – Galderma" },
                  { label: "Experiência", sub: "8+ anos de atuação" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="bg-[#F5EFE6] border border-[#D4B59E]/30 rounded-xl p-4"
                  >
                    <p className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-widest mb-1">
                      {c.label}
                    </p>
                    <p className="text-xs text-[#6B5040]">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ───────────────────────────────────────── */}
      <section id="depoimentos" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4B59E] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Depoimentos
            </p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#3D2B1F]"
            >
              O que dizem{" "}
              <em className="text-[#8B6F47]">minhas pacientes</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/60 border border-[#D4B59E]/30 rounded-2xl p-6 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4B59E] text-[#D4B59E]" />
                  ))}
                </div>
                <p className="text-[#6B5040] text-sm leading-relaxed italic flex-1 mb-6">
                  "{t.text}"
                </p>
                <div>
                  <p
                    style={{ fontFamily: "var(--font-cormorant)" }}
                    className="font-semibold text-[#3D2B1F] text-base"
                  >
                    {t.name}
                  </p>
                  <p className="text-[10px] text-[#D4B59E] font-semibold tracking-widest uppercase mt-0.5">
                    {t.procedure}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ────────────────────────────────────────── */}
      <section id="contato" className="py-20 sm:py-28 bg-[#3D2B1F]">
        <div className="max-w-xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-[#D4B59E] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Contato
            </p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-3xl sm:text-4xl font-light text-[#F5EFE6]"
            >
              Agende sua{" "}
              <em className="text-[#D4B59E]">avaliação gratuita</em>
            </h2>
            <p className="text-[#9A7F72] mt-3 text-sm leading-relaxed">
              Preencha abaixo e você será redirecionada ao nosso WhatsApp com as informações já preenchidas.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-[#D4B59E]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-[#D4B59E]" />
              </div>
              <h3
                style={{ fontFamily: "var(--font-cormorant)" }}
                className="text-2xl text-[#F5EFE6] font-light mb-2"
              >
                Até logo!
              </h3>
              <p className="text-[#9A7F72] text-sm">
                Você foi redirecionada para o WhatsApp. Aguardamos você!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-[#D4B59E] text-xs underline underline-offset-4 hover:text-[#F5EFE6] transition-colors"
              >
                Enviar novamente
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#D4B59E] mb-2 tracking-wide uppercase">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full bg-white/5 border border-[#5A3F32] rounded-xl px-4 py-3 text-[#F5EFE6] placeholder-[#5A3F32] text-sm focus:outline-none focus:border-[#D4B59E] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#D4B59E] mb-2 tracking-wide uppercase">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="(11) 99999-9999"
                  className="w-full bg-white/5 border border-[#5A3F32] rounded-xl px-4 py-3 text-[#F5EFE6] placeholder-[#5A3F32] text-sm focus:outline-none focus:border-[#D4B59E] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#D4B59E] mb-2 tracking-wide uppercase">
                  Procedimento de interesse *
                </label>
                <select
                  required
                  value={form.procedure}
                  onChange={(e) => setForm({ ...form, procedure: e.target.value })}
                  className="w-full bg-[#3D2B1F] border border-[#5A3F32] rounded-xl px-4 py-3 text-[#F5EFE6] text-sm focus:outline-none focus:border-[#D4B59E] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Selecione um procedimento
                  </option>
                  <option value="Toxina Botulínica (Botox)">Toxina Botulínica (Botox)</option>
                  <option value="Preenchimento Labial">Preenchimento Labial</option>
                  <option value="Bioestimulador de Colágeno">Bioestimulador de Colágeno</option>
                  <option value="Skinbooster">Skinbooster</option>
                  <option value="Fios de PDO">Fios de PDO</option>
                  <option value="Microagulhamento">Microagulhamento</option>
                  <option value="Avaliação geral / Protocolo personalizado">
                    Avaliação geral / Protocolo personalizado
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#D4B59E] mb-3 tracking-wide uppercase">
                  Já realizou procedimentos estéticos antes? *
                </label>
                <div className="flex gap-6">
                  {(["sim", "nao"] as const).map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hadBefore"
                        value={opt}
                        required
                        checked={form.hadBefore === opt}
                        onChange={(e) => setForm({ ...form, hadBefore: e.target.value })}
                        className="accent-[#D4B59E]"
                      />
                      <span className="text-sm text-[#9A7F72]">
                        {opt === "sim" ? "Sim" : "Não"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#D4B59E] mb-2 tracking-wide uppercase">
                  Disponibilidade de horário
                </label>
                <textarea
                  value={form.availability}
                  onChange={(e) => setForm({ ...form, availability: e.target.value })}
                  placeholder="Ex: manhãs na terça e quinta, ou fins de semana..."
                  rows={3}
                  className="w-full bg-white/5 border border-[#5A3F32] rounded-xl px-4 py-3 text-[#F5EFE6] placeholder-[#5A3F32] text-sm focus:outline-none focus:border-[#D4B59E] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4B59E] text-[#3D2B1F] font-semibold py-4 rounded-xl text-sm hover:bg-[#C9A88A] transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar pelo WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4B59E] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Dúvidas
            </p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-3xl sm:text-4xl font-light text-[#3D2B1F]"
            >
              Perguntas <em className="text-[#8B6F47]">frequentes</em>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/60 border border-[#D4B59E]/30 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/40 transition-colors"
                >
                  <span
                    style={{ fontFamily: "var(--font-cormorant)" }}
                    className="text-lg font-medium text-[#3D2B1F] pr-4"
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8B6F47] shrink-0 transition-transform duration-200 ${
                      faqOpen === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-5 border-t border-[#D4B59E]/20 pt-4">
                    <p className="text-sm text-[#6B5040] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-[#3D2B1F] py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <p
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-2xl text-[#D4B59E] font-light italic mb-1"
          >
            Studio Mariana Alves
          </p>
          <p className="text-[#6B5040] text-xs mb-7">
            Biomédica Esteta · Harmonização Facial
          </p>

          <div className="flex items-center justify-center gap-5 mb-8">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#9A7F72] hover:text-[#D4B59E] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#9A7F72] hover:text-[#D4B59E] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Localização"
              className="text-[#9A7F72] hover:text-[#D4B59E] transition-colors"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-[#5A3F32]/50 pt-6 space-y-1">
            <p className="text-[#5A3F32] text-xs">
              Projeto conceitual desenvolvido por{" "}
              <span className="text-[#D4B59E] font-semibold">Estúdio Lume</span>
            </p>
            <p className="text-[#5A3F32] text-xs">
              © 2024 Studio Mariana Alves · Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ─────────────────────────────────── */}
      <a
        href={waLink("Olá! Vim pelo site e gostaria de mais informações.")}
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

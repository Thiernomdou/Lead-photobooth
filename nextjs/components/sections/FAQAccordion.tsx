'use client'

import { useState } from 'react'
import type { FaqItem } from '@/lib/schemas'

interface FAQAccordionProps {
  title?:    string
  subtitle?: string
  items:     FaqItem[]
}

export default function FAQAccordion({ title, subtitle, items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Vous avez des questions ?
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
              {title ?? 'FAQ'}
            </h2>
            {subtitle && (
              <p className="text-gray-600">{subtitle}</p>
            )}
          </div>

          <dl className="space-y-2">
            {items.map((faq, i) => {
              const isOpen = open === i
              const id     = `faq-answer-${i}`

              return (
                <div key={i} className="bg-white border border-gray-200">
                  <dt>
                    <button
                      aria-expanded={isOpen}
                      aria-controls={id}
                      className="w-full flex items-center justify-between px-6 py-5 text-left
                                 hover:bg-gray-50 transition-colors focus-visible:outline-none
                                 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-400"
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="font-semibold text-gray-900 pr-6">{faq.question}</span>
                      <svg
                        aria-hidden
                        className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </dt>
                  <dd
                    id={id}
                    role="region"
                    aria-hidden={!isOpen}
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </dd>
                </div>
              )
            })}
          </dl>

          <p className="text-center text-gray-500 text-sm mt-10">
            Pas trouvé votre réponse ?{' '}
            <a href="#contact" className="text-gold-500 font-semibold hover:underline">
              Contactez-nous →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

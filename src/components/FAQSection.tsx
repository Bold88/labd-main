'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  locale: string;
}

export default function FAQSection({ locale }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqsEN: FAQ[] = [
    {
      question: "What makes LABD different from other consulting firms?",
      answer: "LABD uniquely combines strategic consulting with technology implementation through our partnership with Antrieb 2.0 (Germany). We don't just provide recommendations – we design complete systems including processes, tools, and governance frameworks that enable sustainable scaling. Our team has been operating since 2015 with proven expertise across MENA, Europe, Asia, and USA."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have deep expertise in education sector transformation, franchise operations, and service business digitalization. Our solutions are particularly effective for organizations looking to scale their operations while maintaining quality and consistency."
    },
    {
      question: "How long does a typical engagement last?",
      answer: "Engagement duration varies based on project scope. Strategic consulting projects typically range from 3-6 months, while comprehensive transformation initiatives involving system design and implementation can span 6-18 months. We work with you to create a timeline that fits your business needs."
    },
    {
      question: "Do you work with international companies?",
      answer: "Absolutely! With offices in Dubai and Germany, we serve clients across four continents. Our team understands cultural nuances and regulatory requirements in different markets, enabling us to deliver locally relevant solutions with global best practices."
    },
    {
      question: "What is your approach to digital transformation?",
      answer: "Our digital transformation approach is holistic – combining strategy, process optimization, technology implementation, and change management. Through our partnership with Antrieb 2.0, we bring cutting-edge technical capabilities while ensuring solutions align with your business objectives."
    },
    {
      question: "How do you ensure sustainable results?",
      answer: "We focus on building internal capabilities and creating systems that your team can maintain and evolve. This includes comprehensive documentation, training programs, and ongoing support. Our goal is to enable your organization to continue growing long after our engagement ends."
    }
  ];

  const faqsDE: FAQ[] = [
    {
      question: "Was unterscheidet LABD von anderen Beratungsunternehmen?",
      answer: "LABD kombiniert einzigartig strategische Beratung mit Technologieimplementierung durch unsere Partnerschaft mit Antrieb 2.0 (Deutschland). Wir geben nicht nur Empfehlungen – wir entwerfen komplette Systeme einschließlich Prozessen, Tools und Governance-Frameworks, die nachhaltiges Wachstum ermöglichen. Unser Team arbeitet seit 2015 mit bewährter Expertise in MENA, Europa, Asien und den USA."
    },
    {
      question: "In welchen Branchen sind Sie spezialisiert?",
      answer: "Wir haben tiefe Expertise in der Transformation des Bildungssektors, Franchise-Operationen und der Digitalisierung von Dienstleistungsunternehmen. Unsere Lösungen sind besonders effektiv für Organisationen, die ihre Betriebe skalieren möchten, während sie Qualität und Konsistenz beibehalten."
    },
    {
      question: "Wie lange dauert ein typisches Engagement?",
      answer: "Die Dauer des Engagements variiert je nach Projektumfang. Strategische Beratungsprojekte dauern in der Regel 3-6 Monate, während umfassende Transformationsinitiativen mit Systemdesign und Implementierung 6-18 Monate umfassen können. Wir arbeiten mit Ihnen zusammen, um einen Zeitplan zu erstellen, der zu Ihren Geschäftsanforderungen passt."
    },
    {
      question: "Arbeiten Sie mit internationalen Unternehmen?",
      answer: "Auf jeden Fall! Mit Büros in Dubai und Deutschland bedienen wir Kunden auf vier Kontinenten. Unser Team versteht kulturelle Nuancen und regulatorische Anforderungen in verschiedenen Märkten und ermöglicht es uns, lokal relevante Lösungen mit globalen Best Practices zu liefern."
    },
    {
      question: "Was ist Ihr Ansatz für die digitale Transformation?",
      answer: "Unser Ansatz zur digitalen Transformation ist ganzheitlich – er kombiniert Strategie, Prozessoptimierung, Technologieimplementierung und Change Management. Durch unsere Partnerschaft mit Antrieb 2.0 bringen wir modernste technische Fähigkeiten mit und stellen gleichzeitig sicher, dass Lösungen mit Ihren Geschäftszielen übereinstimmen."
    },
    {
      question: "Wie stellen Sie nachhaltige Ergebnisse sicher?",
      answer: "Wir konzentrieren uns auf den Aufbau interner Fähigkeiten und die Schaffung von Systemen, die Ihr Team pflegen und weiterentwickeln kann. Dazu gehören umfassende Dokumentation, Schulungsprogramme und laufende Unterstützung. Unser Ziel ist es, Ihrer Organisation zu ermöglichen, auch nach Beendigung unseres Engagements weiter zu wachsen."
    }
  ];

  const faqs = locale === 'de' ? faqsDE : faqsEN;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {locale === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xl text-gray-300">
            {locale === 'de' 
              ? 'Erfahren Sie mehr über unsere Dienstleistungen und Arbeitsweise'
              : 'Learn more about our services and how we work'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl border border-amber-500/30 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-amber-500/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 transition-transform duration-300" 
                      style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  <Plus className="w-6 h-6 text-amber-400" />
                </div>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ 
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl border border-amber-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            {locale === 'de' ? 'Noch Fragen?' : 'Still Have Questions?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {locale === 'de' 
              ? 'Unser Team steht Ihnen gerne zur Verfügung, um Ihre spezifischen Anforderungen zu besprechen.'
              : 'Our team is happy to discuss your specific requirements.'}
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105">
            {locale === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}
          </button>
        </div>
      </div>
    </section>
  );
}

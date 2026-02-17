import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who owns my data?",
    answer:
      "You do. We use a personal health code — only you can share it with providers. No data is shared without your explicit consent.",
  },
  {
    question: "What is a normal blood pressure range?",
    answer:
      "A normal blood pressure is generally considered to be around 120/80 mmHg. Readings consistently above 140/90 are typically classified as high blood pressure (hypertension). Your care team can set personalized targets in VitalPath.",
  },
  {
    question: "What blood sugar level is considered high?",
    answer:
      "A fasting blood sugar above 7.0 mmol/L (126 mg/dL) is generally considered high. After meals, levels above 11.1 mmol/L (200 mg/dL) may indicate hyperglycaemia. VitalPath helps you track these numbers and share them with your doctor.",
  },
  {
    question: "How do medication reminders work?",
    answer:
      "When your pharmacist or doctor enters a prescription, VitalPath prompts you to choose consistent dosing times. You receive push notifications at those times daily, with the option to mark each dose as taken.",
  },
  {
    question: "Can I import activity from Strava?",
    answer:
      "Yes. Connect your Strava account and your exercise data will appear alongside your BP and glucose readings — so you can see how movement impacts your health metrics.",
  },
  {
    question: "Who sees my lab results?",
    answer:
      "Only the care team members you have explicitly granted access to via your personal health code. Lab results appear in your timeline and are visible to you by default.",
  },
  {
    question: "What happens if my doctor marks 'follow-up required'?",
    answer:
      "You receive an in-app notification and can book a follow-up directly inside VitalPath. The flag stays visible until the follow-up is completed and recorded.",
  },
  {
    question: "How often should I check my BP?",
    answer:
      "For most people managing hypertension, checking twice daily (morning and evening) is recommended. Your doctor can set a personalised schedule inside VitalPath based on your treatment plan.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">FAQs</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {"Common Questions About Diabetes & BP"}
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-heading font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

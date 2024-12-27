import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI virtual receptionist work?",
      answer: "Our AI receptionist uses advanced natural language processing to understand and respond to callers naturally. It can handle scheduling, inquiries, and basic support while seamlessly integrating with your existing systems.",
    },
    {
      question: "Can I customize how the AI handles calls?",
      answer: "Yes! You can customize greeting messages, call handling rules, and response scripts. The AI learns from your preferences and adapts to your business needs.",
    },
    {
      question: "What happens if the AI can't handle a specific request?",
      answer: "The AI is designed to gracefully handle complex situations by either transferring to a human operator or taking a message, ensuring no call goes unaddressed.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and follow strict security protocols to protect your data. All conversations are encrypted and stored securely.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-forest-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-forest mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="bg-white rounded-lg p-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
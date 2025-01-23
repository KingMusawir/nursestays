import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function FAQSection() {
  return (
    <motion.section
      className="py-16 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2 className="text-3xl font-bold text-center mb-8" variants={fadeIn}>
          Frequently Asked Questions
        </motion.h2>
        <motion.div variants={fadeIn}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you charge travel nurses?</AccordionTrigger>
              <AccordionContent>
                No, we do not charge travel nurses for using our platform. Our service is free for healthcare
                professionals seeking housing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>If I fill out this form, am I committing to anything?</AccordionTrigger>
              <AccordionContent>
                No, filling out the form does not commit you to anything. It's simply an expression of interest, and our
                team will reach out to provide more information and answer any questions you may have.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why rent to travel nurses?</AccordionTrigger>
              <AccordionContent>
                Travel nurses are typically responsible, respectful tenants who need short-term housing for their
                assignments. Renting to them can provide a steady income stream and the opportunity to help essential
                healthcare workers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How long are typical stays?</AccordionTrigger>
              <AccordionContent>
                Most travel nurse assignments last 13 weeks, but can range from 8 weeks to 26 weeks or longer. You can
                specify your preferred rental duration when listing your property.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Is my property guaranteed to be rented?</AccordionTrigger>
              <AccordionContent>
                While we cannot guarantee that your property will be rented, we have a large network of travel nurses
                actively seeking housing. Properties in high-demand areas near hospitals tend to receive more interest.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  )
}


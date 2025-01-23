import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

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

export function CTASection() {
  return (
    <motion.section
      className="py-16 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="max-w-7xl mx-auto">
        <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <CardContent className="p-12">
            <motion.div variants={fadeIn} className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to List Your Property?</h2>
              <p className="mb-8 text-purple-100">
                Join thousands of property owners earning consistent income by hosting travel nurses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  List Your Property
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}


import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

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

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[1, 2, 3].map((i) => (
            <motion.div key={i} variants={fadeIn}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-yellow-400 mb-4" />
                  <p className="text-zinc-600 mb-4">
                    "The platform made it incredibly easy to find quality housing near my assignment. The direct
                    communication with property owners saved me so much time."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600" />
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-zinc-600">Travel Nurse - ICU</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


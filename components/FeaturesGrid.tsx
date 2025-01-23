import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Users, Calendar, ArrowRight } from "lucide-react"

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

export function FeaturesGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-4 auto-rows-[250px]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="row-span-2 col-span-2 relative group" variants={fadeIn}>
            <Card className="w-full h-full overflow-hidden">
              <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Verified Properties</h3>
                  <p className="text-zinc-600">
                    All listings are verified to ensure quality and safety for travel nurses.
                  </p>
                </div>
                <Button variant="ghost" className="w-fit group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-50 opacity-50" />
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full group">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <Building2 className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1">Furnished Units</h3>
                  <p className="text-sm text-zinc-600">Ready-to-move-in spaces with all essentials</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full group">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <Calendar className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1">Flexible Terms</h3>
                  <p className="text-sm text-zinc-600">13-week assignments or longer stays available</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full group">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <MapPin className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1">Prime Locations</h3>
                  <p className="text-sm text-zinc-600">Close to major hospitals and medical centers</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full group">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <Users className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1">Direct Communication</h3>
                  <p className="text-sm text-zinc-600">Chat directly with property owners</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


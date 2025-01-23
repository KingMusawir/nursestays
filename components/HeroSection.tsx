import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

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

export function HeroSection() {
  return (
    <motion.section className="pt-32 pb-16 px-4" initial="initial" animate="animate" variants={stagger}>
      <div className="max-w-7xl mx-auto">
        <motion.h1 className="text-4xl md:text-6xl font-bold text-center mb-6" variants={fadeIn}>
          Find Your Perfect
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {" "}
            Travel Nurse{" "}
          </span>
          Housing
        </motion.h1>
        <motion.p className="text-zinc-600 text-center max-w-2xl mx-auto mb-12" variants={fadeIn}>
          Connect directly with property owners and find your ideal furnished housing solution for your next assignment.
        </motion.p>

        <motion.div variants={fadeIn}>
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="room">Private Room</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input placeholder="Location" className="h-10" />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 h-10">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}


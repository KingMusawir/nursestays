import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

export function PropertyOwnerForm() {
  return (
    <motion.section
      className="py-16 px-4 bg-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 className="text-3xl font-bold text-center mb-8" variants={fadeIn}>
          List Your Property
        </motion.h2>
        <motion.div variants={fadeIn}>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Full Name" />
                  <Input placeholder="Email Address" />
                </div>
                <Input placeholder="Phone Number" />
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
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="City" />
                  <Input placeholder="State" />
                </div>
                <Input placeholder="Property Address" />
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  placeholder="Tell us about your property (optional)"
                ></textarea>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit Listing</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}


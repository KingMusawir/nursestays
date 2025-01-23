import { motion } from "framer-motion"

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

export function StatsSection() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div variants={fadeIn}>
            <div className="text-4xl font-bold mb-2">150M+</div>
            <div className="text-purple-100">Annual Page Views</div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <div className="text-4xl font-bold mb-2">2000+</div>
            <div className="text-purple-100">Daily Listings</div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <div className="text-4xl font-bold mb-2">250k+</div>
            <div className="text-purple-100">Monthly Searches</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}


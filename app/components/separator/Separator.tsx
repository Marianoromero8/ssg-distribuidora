'use client'
import { motion } from "framer-motion";

export function Separator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center my-8 text-[#4166e0] text-2xl gap-48 bg-[url('/truckIA2.webp')] bg-cover bg-center h-32 w-full"
        >
            {/* <span>🚛💨</span>
            <span>🚛💨</span>
            <span>🚛💨</span>
            <span>🚛💨</span>
            <span>🚛💨</span> */}
        </motion.div>
    )
}
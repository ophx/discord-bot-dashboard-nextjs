"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ScrollAnimation({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    
    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start({ opacity: 1, y: 0 });
        }
    }, [inView]);

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: -70 }}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}
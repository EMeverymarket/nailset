'use client';

import { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

const accordionVariants = {
  enter: (custom: number) => ({
    x: -100,
    opacity: 0,
    transition: {
      delay: custom * 0.2,
    },
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  collapsed: { 
    opacity: 0,
    height: 0,
    transition: {
      height: {
        duration: 0.3,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
  expanded: { 
    opacity: 1,
    height: "auto",
    transition: {
      height: {
        duration: 0.3,
      },
      opacity: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  },
};

const textVariants = {
  collapsed: {
    opacity: 0,
    y: 10,
    filter: "blur(10px)",
  },
  expanded: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (accordionId: string) => {
    setOpenAccordion(prev => prev === accordionId ? null : accordionId);
  };

  const accordionSections = [
    {
      id: 'hack1',
      title: 'Hack #1: Daytime Liquid Care for Daily Nail Support',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Use the VigorWell Nail Care Liquid during the day as part of your regular nail routine.</p>
          <p>Apply a small amount to clean, dry nails and allow it to absorb naturally.</p>
          <div>
            <h4 className="font-semibold mb-2">Why it matters:</h4>
            <p>Daytime application helps maintain nail surface care and supports ongoing nail hygiene as part of a daily routine.</p>
          </div>
          <p className="italic">💡 Tip: Apply before putting on socks or shoes and allow a few minutes for drying.</p>
        </div>
      ),
    },
    {
      id: 'hack2',
      title: 'Hack #2: Overnight Patch for Extended Nail Contact',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>At night, apply a VigorWell Nail Care Patch to clean, dry toenails before bedtime.</p>
          <p>The patch stays in place while you sleep, providing extended overnight contact for up to 8 hours.</p>
          <div>
            <h4 className="font-semibold mb-2">Why it matters:</h4>
            <p>Overnight wear allows uninterrupted contact time, which many users prefer as part of a nighttime nail care routine.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'hack3',
      title: 'Hack #3: Keep Nails Clean & Dry',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Before applying liquid or patches:</p>
          <div>
            <ul className="space-y-2 list-disc pl-5">
              <li>Wash feet gently</li>
              <li>Dry nails thoroughly</li>
              <li>Trim nails regularly</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Why it matters:</h4>
            <p>Good nail hygiene supports comfort and helps maintain a clean environment for routine nail care.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'hack4',
      title: 'Hack #4: Stay Consistent with Your Routine',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Consistency is key for visible nail appearance improvements.</p>
          <div>
            <h4 className="font-semibold mb-2">Recommended routine:</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>Liquid during the day</li>
              <li>Patch overnight</li>
              <li>Daily use as part of a regular nail care habit</li>
            </ul>
          </div>
          <p className="italic">💡 Pro Tip: Set a daily reminder—skipping days may slow visible progress.</p>
        </div>
      ),
    },
    {
      id: 'hack5',
      title: 'Hack #5: Think Long-Term for Healthier-Looking Nails',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Nails grow slowly, and appearance changes take time.</p>
          <div>
            <ul className="space-y-2 list-disc pl-5">
              <li>Many users follow a routine for several weeks or longer</li>
              <li>Patience and consistency are essential</li>
              <li>Long-term routines often lead to better-looking results</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Final Pro Tips from VigorWell Customers:</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>Use liquid during the day and patches at night</li>
              <li>Keep nails clean, trimmed, and dry</li>
              <li>Avoid sharing nail tools</li>
              <li>Stay consistent with daily care</li>
              <li>Be patient—nail appearance changes gradually</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8 pb-0">
        {/* Header with logo */}
        <header className="flex flex-col items-center mb-8">
          <Image
            src="/logo.png" 
            alt="VigorWell Logo"
            width={120}
            height={120}
            className="mb-4"
          />
          <h1 className="text-xl font-bold text-center text-slate-800">The Ultimate Toenail Care Guide – Shared by VigorWell Customers</h1>
        </header>

        {/* Product image and welcome section */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            <div className="md:w-1/3 flex justify-center">
          <Image
                src="/product.jpg"
                alt="VigorWell Day & Night Nail Care System"
                width={250}
                height={250}
                className="rounded-md"
              />
            </div>
            <div className="md:w-2/3 text-slate-800">
              <h3 className="text-2xl font-bold mb-4">Featuring: VigorWell Day & Night Nail Care System</h3>
              <p className="mb-4">At VigorWell, we believe in consistent routines and long-term care. Our extra-strength nail care system combines daytime liquid care with overnight nail patches to support healthier-looking nails over time. Whether you're dealing with thickened nails, discoloration, brittleness, or long-term nail concerns, these user-favored nail care hacks help support a cleaner, smoother nail appearance—one step at a time.</p>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">💜 The VigorWell Difference:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Complementary liquid + patch system designed for day & night nail care</li>
                  <li>• Extra-strength formula developed for routine nail appearance support</li>
                  <li>• Easy-to-use, non-invasive, and suitable for long-term nail care routines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion sections */}
        <div className="space-y-4">
          {accordionSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(section.id)}
                className="w-full flex items-center justify-between p-4 bg-slate-100 text-left group"
              >
                <h3 className="text-lg font-semibold text-slate-800">{section.title}</h3>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-600"
                  animate={{ rotate: openAccordion === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {openAccordion === section.id && (
                  <motion.div
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={contentVariants}
                    className="overflow-hidden"
                  >
                    <motion.div
                      variants={textVariants}
                      className="content"
                    >
                      {section.content}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer with disclaimer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: accordionSections.length * 0.15 + 0.3, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <p className="text-sm text-slate-600 leading-relaxed">
            For external use only. Do not use on open or broken skin unless otherwise stated. Discontinue use if irritation occurs. Keep out of reach of children. Store at room temperature. This content is for informational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment. Individual experiences may vary.
          </p>
          <div className="mt-6 pb-8 text-center text-sm text-slate-500">
            © 2025 VigorWell®. All rights reserved.
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, ChevronRight, Users, Gavel, Calendar, Shield, FileText, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import Footer from "../../Footer/page"

import Navbar from "../Navbar/page"

const articles = [
  {
    id: "article-1",
    title: "Article I - Membership",
    icon: Users,
    sections: [
      {
        title: "Section 1.1 - Eligibility",
        content:
          "Membership is open to all individuals who share our club's mission and values. Prospective members must complete the application process and be approved by the membership committee.",
      },
      {
        title: "Section 1.2 - Rights and Privileges",
        content:
          "Members have the right to participate in all club activities and events, vote on club matters and elections, and access club resources and facilities.",
      },
      {
        title: "Section 1.3 - Responsibilities",
        content:
          "Members are expected to uphold the club's values, pay dues on time, and contribute positively to the club community.",
      },
    ],
  },
  {
    id: "article-2",
    title: "Article II - Governance Structure",
    icon: Gavel,
    sections: [
      {
        title: "Section 2.1 - Executive Board",
        content:
          "The Executive Board consists of President, Vice President, Secretary, and Treasurer, elected annually by club members.",
      },
      {
        title: "Section 2.2 - Duties and Powers",
        content:
          "The Executive Board is responsible for day-to-day operations, policy implementation, and strategic planning.",
      },
    ],
  },
  {
    id: "article-3",
    title: "Article III - Meetings and Procedures",
    icon: Calendar,
    sections: [
      {
        title: "Section 3.1 - Regular Meetings",
        content: "Regular meetings shall be held monthly on the first Tuesday of each month at 7:00 PM.",
      },
      {
        title: "Section 3.2 - Special Meetings",
        content: "Special meetings may be called by the President or upon written request of 25% of active members.",
      },
    ],
  },
  {
    id: "article-4",
    title: "Article IV - Code of Conduct",
    icon: Shield,
    sections: [
      {
        title: "Section 4.1 - Standards",
        content:
          "All members must conduct themselves with integrity, respect, and professionalism in all club activities.",
      },
      {
        title: "Section 4.2 - Violations",
        content:
          "Violations of the code of conduct may result in disciplinary action, including suspension or termination of membership.",
      },
    ],
  },
  {
    id: "article-5",
    title: "Article V - Amendments",
    icon: FileText,
    sections: [
      {
        title: "Section 5.1 - Proposal Process",
        content:
          "Amendments may be proposed by any member in good standing with written notice to the Executive Board.",
      },
      {
        title: "Section 5.2 - Approval",
        content: "Amendments require a two-thirds majority vote of active members present at a regular meeting.",
      },
    ],
  },
]

export default function ClubConstitution() {
  const [currentPage, setCurrentPage] = useState(1)
  const [openAccordion, setOpenAccordion] = useState("article-1")
  const totalPages = articles.length

  const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )

  const currentArticle = articles[currentPage - 1]

  return (

    <div>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
            <FloatingElement delay={0}>
            <div className="absolute top-20 left-10 w-16 h-16 bg-[#155dfc]/10 rounded-full blur-xl" />
            </FloatingElement>
            <FloatingElement delay={1}>
            <div className="absolute top-40 right-20 w-12 h-12 bg-indigo-300/20 rounded-full blur-lg" />
            </FloatingElement>
            <FloatingElement delay={2}>
            <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl" />
            </FloatingElement>
            <FloatingElement delay={1.5}>
            <Sparkles className="absolute top-32 right-1/3 w-6 h-6 text-[#155dfc]/30" />
            </FloatingElement>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
            >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Club Constitution</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our club constitution outlines the fundamental principles, rules, and guidelines that govern our
                organization. Please review these policies to understand your rights and responsibilities as a member.
            </p>
            </motion.div>

            {/* Main Content */}
            <AnimatePresence mode="wait">
            <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
            >
                <Card className="mb-6 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader style={{borderRadius : "0px"}} className="bg-gradient-to-r from-[#155dfc] to-[#1e40af] text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                    <currentArticle.icon className="w-6 h-6" />
                    {currentArticle.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Accordion type="single" value={openAccordion} onValueChange={setOpenAccordion} className="w-full">
                    <AccordionItem value={currentArticle.id} className="border-none">
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                        <span className="text-lg font-semibold text-gray-700">View Sections</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                        <div className="space-y-6">
                            {currentArticle.sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="border-l-4 border-[#155dfc] pl-4 py-2"
                            >
                                <h3 className="font-semibold text-gray-800 mb-2">{section.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{section.content}</p>
                            </motion.div>
                            ))}
                        </div>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </CardContent>
                </Card>
            </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg w-fit mx-auto"
            >
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="rounded-full hover:bg-[#155dfc]/10"
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>

            <span className="text-sm font-medium text-gray-600 px-3">
                {currentPage} / {totalPages}
            </span>

            <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="rounded-full hover:bg-[#155dfc]/10"
            >
                <ChevronRight className="w-4 h-4" />
            </Button>
            </motion.div>

            {/* Article Overview */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-2"
            >
            {articles.map((article, index) => (
                <Button
                key={article.id}
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(index + 1)}
                className={`text-xs p-2 h-auto flex flex-col gap-1 ${
                    currentPage === index + 1
                    ? "bg-[#155dfc] hover:bg-[#155dfc]/90"
                    : "hover:bg-[#155dfc]/10 border-[#155dfc]/20"
                }`}
                >
                <article.icon className="w-4 h-4" />
                <span className="hidden md:block">Article {index + 1}</span>
                <span className="md:hidden">{index + 1}</span>
                </Button>
            ))}
            </motion.div>
        </div>
        </div>
        <Footer/>
    </div>

  )
}

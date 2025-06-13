"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ClubConstitution() {
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({
    "article-1": true,
    "article-2": false,
    "article-3": false,
    "article-4": false,
    "article-5": false,
  })

  const toggleArticle = (articleId: string) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [articleId]: !prev[articleId],
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-sky-200 text-sky-600 p-2 rounded">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Club Management</h1>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Members
              </a>
              <a href="#" className="text-sky-600 font-medium border-b-2 border-sky-600 pb-1">
                Constitution
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Events
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden container mx-auto px-4 py-2 overflow-x-auto">
        <div className="flex space-x-4 whitespace-nowrap">
          <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Dashboard
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Members
          </a>
          <a href="#" className="text-sky-600 font-medium border-b-2 border-sky-600 px-3 py-2">
            Constitution
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Events
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Club Constitution</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our club constitution outlines the fundamental principles, rules, and guidelines that govern our
              organization. Please review these policies to understand your rights and responsibilities as a member.
            </p>
          </div>

          {/* Article 1 */}
          <Card className="mb-4 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div
              className={`bg-sky-100 px-6 py-4 flex items-center justify-between cursor-pointer`}
              onClick={() => toggleArticle("article-1")}
            >
              <h2 className="text-lg font-medium text-gray-800">Article I - Membership</h2>
              <div className="text-sky-600">
                {expandedArticles["article-1"] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </div>
            </div>
            {expandedArticles["article-1"] && (
              <CardContent className="px-6 py-4 bg-white">
                <div className="space-y-6">
                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 1.1 - Eligibility</h3>
                    <p className="text-gray-600">
                      Membership is open to all individuals who share our club's mission and values. Prospective members
                      must complete the application process and be approved by the membership committee.
                    </p>
                  </div>

                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 1.2 - Rights and Privileges</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <div className="min-w-[20px] mr-2 text-sky-500">•</div>
                        <span>Participate in all club activities and events</span>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-[20px] mr-2 text-sky-500">•</div>
                        <span>Vote on club matters and elections</span>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-[20px] mr-2 text-sky-500">•</div>
                        <span>Access to club resources and facilities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 1.3 - Responsibilities</h3>
                    <p className="text-gray-600">
                      Members are expected to uphold the club's values, pay dues on time, and contribute positively to
                      the club community.
                    </p>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Article 2 */}
          <Card className="mb-4 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div
              className={`bg-sky-100 px-6 py-4 flex items-center justify-between cursor-pointer`}
              onClick={() => toggleArticle("article-2")}
            >
              <h2 className="text-lg font-medium text-gray-800">Article II - Governance Structure</h2>
              <div className="text-sky-600">
                {expandedArticles["article-2"] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </div>
            </div>
            {expandedArticles["article-2"] && (
              <CardContent className="px-6 py-4 bg-white">
                <div className="space-y-4 text-gray-600">
                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 2.1 - Executive Board</h3>
                    <p>
                      The club is governed by an elected Executive Board consisting of President, Vice President,
                      Secretary, and Treasurer. Elections are held annually.
                    </p>
                  </div>

                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 2.2 - Term Limits</h3>
                    <p>Board members serve one-year terms and may be re-elected for up to three consecutive terms.</p>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Article 3 */}
          <Card className="mb-4 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div
              className={`bg-sky-100 px-6 py-4 flex items-center justify-between cursor-pointer`}
              onClick={() => toggleArticle("article-3")}
            >
              <h2 className="text-lg font-medium text-gray-800">Article III - Meetings and Procedures</h2>
              <div className="text-sky-600">
                {expandedArticles["article-3"] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </div>
            </div>
            {expandedArticles["article-3"] && (
              <CardContent className="px-6 py-4 bg-white">
                <div className="space-y-4 text-gray-600">
                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 3.1 - Regular Meetings</h3>
                    <p>
                      General meetings are held monthly. Special meetings may be called by the Executive Board with 48
                      hours notice.
                    </p>
                  </div>

                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 3.2 - Quorum and Voting</h3>
                    <p>
                      Quorum for general meetings is 50% of active membership. Decisions require a simple majority vote
                      unless otherwise specified.
                    </p>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Article 4 */}
          <Card className="mb-4 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div
              className={`bg-sky-100 px-6 py-4 flex items-center justify-between cursor-pointer`}
              onClick={() => toggleArticle("article-4")}
            >
              <h2 className="text-lg font-medium text-gray-800">Article IV - Code of Conduct</h2>
              <div className="text-sky-600">
                {expandedArticles["article-4"] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </div>
            </div>
            {expandedArticles["article-4"] && (
              <CardContent className="px-6 py-4 bg-white">
                <div className="space-y-4 text-gray-600">
                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 4.1 - Expected Behavior</h3>
                    <p>
                      All members are expected to conduct themselves with respect, integrity, and professionalism.
                      Discrimination, harassment, and bullying will not be tolerated.
                    </p>
                  </div>

                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 4.2 - Disciplinary Actions</h3>
                    <p>
                      Violations of the code of conduct may result in disciplinary action, including suspension or
                      termination of membership.
                    </p>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Article 5 */}
          <Card className="mb-4 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div
              className={`bg-sky-100 px-6 py-4 flex items-center justify-between cursor-pointer`}
              onClick={() => toggleArticle("article-5")}
            >
              <h2 className="text-lg font-medium text-gray-800">Article V - Amendments</h2>
              <div className="text-sky-600">
                {expandedArticles["article-5"] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </div>
            </div>
            {expandedArticles["article-5"] && (
              <CardContent className="px-6 py-4 bg-white">
                <div className="space-y-4 text-gray-600">
                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 5.1 - Proposal Process</h3>
                    <p>
                      Amendments to this constitution may be proposed by any member and must be submitted in writing to
                      the Executive Board.
                    </p>
                  </div>

                  <div className="border-l-4 border-sky-300 pl-4">
                    <h3 className="font-medium text-gray-800 mb-2">Section 5.2 - Approval Process</h3>
                    <p>Proposed amendments require a two-thirds majority vote of the membership to be adopted.</p>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Questions Section */}
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <h2 className="text-xl font-medium text-gray-800 mb-3">Questions About Our Constitution?</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these policies or need clarification on any section, please don't hesitate
              to contact our executive board.
            </p>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">Contact Executive Board</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Club Management System. All rights reserved.</p>
          <p className="mt-1">Last updated: January 2024</p>
        </div>
      </footer>
    </div>
  )
}

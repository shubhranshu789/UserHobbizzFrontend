import { NavBar } from "./nav-bar"
import { TeamMember } from "./team-member"

export default function CabinetPage() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Director",
      image: "/placeholder.svg?height=150&width=150",
      description:
        "Leading the club with 5+ years of experience in community building and event management. Passionate about fostering collaboration and growth among members.",
    },
    {
      name: "James Rodriguez",
      role: "Chief Editor",
      image: "/placeholder.svg?height=150&width=150",
      description:
        "Overseeing all publications and content creation. Specializes in digital media and has published numerous articles on leadership and innovation in student organizations.",
    },
    {
      name: "Dr. Emily Chen",
      role: "Senior Advisor",
      image: "/placeholder.svg?height=150&width=150",
      description:
        "Faculty advisor with expertise in organizational development. Provides strategic guidance and mentorship to help the club achieve its long-term goals and objectives.",
    },
    {
      name: "Maria Gonzalez",
      role: "Events Coordinator",
      image: "/placeholder.svg?height=150&width=150",
      description:
        "Orchestrating memorable events and workshops. Known for creative event planning and building strong partnerships with local organizations and sponsors.",
    },
    {
      name: "Alex Thompson",
      role: "Treasurer",
      image: "/placeholder.svg?height=150&width=150",
      description:
        "Managing club finances and budget planning. Finance major with strong analytical skills and experience in financial planning for student organizations.",
    },
    {
      name: "Lisa Park",
      role: "Secretary",
      image: "/placeholder.svg?height=150&width=150",
      description:
        "Maintaining detailed records and coordinating communications. Excellent organizational skills and ensures all club documentation and meeting minutes are properly maintained.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Club Cabinet</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Meet our dedicated leadership team who guide and manage our club activities.
            <br />
            Get to know the key members who make everything possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </main>
    </div>
  )
}

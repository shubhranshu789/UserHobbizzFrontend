"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Users, Mail, AlertCircle, RefreshCw, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "../../Navbar/page"

interface cabinate {
  _id: string
  name: string
  role: string
  email: string
  description?: string
}

interface UserData {
  club: string
  district: string
  school: string
}

export default function ClubCabinetPage() {
  const [cabinetMembers, setCabinetMembers] = useState<cabinate[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)

  // Load user data from localStorage
  useEffect(() => {
    const loadUserData = () => {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          const parsed = JSON.parse(storedUser)
          setUserData({
            club: parsed.club,
            district: parsed.district,
            school: parsed.school,
          })
        }else {
          // Fallback data if no user in localStorage
          setUserData({
            club: "craftclub",
            district:"",
            school:"",
          })
        }
      }
    loadUserData()}, [])

  // Fetch cabinet members
  useEffect(() => {
    if (userData){

    const fetchCabinetMembers = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/get-cabinate-craft?club=${encodeURIComponent("craftclub")}&district=${encodeURIComponent(userData.district)}&school=${encodeURIComponent(userData.school)}`,
          //`http://localhost:5000/get-cabinate-craft?club=${encodeURIComponent("craftclub")}&district=${encodeURIComponent(userData.district)}&school=${encodeURIComponent(userData.school)}`,
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch cabinet members: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()

        // Handle different response formats
        if (Array.isArray(data.cabinate)) {
          setCabinetMembers(data.cabinate)
        } else {
          setCabinetMembers([])
        }
      } catch (err) {
        console.error("Error fetching cabinet members:", err)
        setError(err instanceof Error ? err.message : "Failed to load cabinet members")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCabinetMembers()
  }}, [userData])

  const handleRetry = () => {
    if (userData) {
      setError(null)
      setIsLoading(true)
      // The useEffect will automatically re-run
    }
  }

  const getRoleColor = (role: string) => {
    const roleColors: Record<string, string> = {
      director: "bg-red-100 text-red-800 border-red-200",
      "chief editor": "bg-green-100 text-green-800 border-green-200",
      "senior advisor": "bg-purple-100 text-purple-800 border-purple-200",
      principle: "bg-orange-100 text-orange-800 border-orange-200",
      "vice president": "bg-orange-100 text-orange-800 border-orange-200",
      editor: "bg-teal-100 text-teal-800 border-teal-200",
      head: "bg-yellow-100 text-yellow-800 border-yellow-200",
      ambassador: "bg-gray-100 text-yellow-800 border-gray-200",
    }

    return roleColors[role.toLowerCase()] || "bg-blue-100 text-blue-800 border-blue-200"
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const generateDescription = (member: cabinate) => {
    if (member.description) return member.description

    const roleDescriptions: Record<string, string> = {
      director: `Leading the club with extensive experience in community building and event management. Passionate about fostering collaboration and growth among members.`,
      "chief editor": `Overseeing all publications and content creation. Specializes in digital media and has published numerous articles on leadership and innovation in student organizations.`,
      "senior advisor": `Faculty advisor with expertise in organizational development. Provides strategic guidance and mentorship to help the club achieve its long-term goals and objectives.`,
      principle: `Guiding the overall vision and strategy of the club. Responsible for major decision-making and representing the club in external affairs.`,
      "vice president": `Supporting the president and managing day-to-day operations. Coordinates between different committees and ensures smooth functioning.`,
      editor: `Managing all documentation, communications, and meeting coordination. Maintains records and handles correspondence with members and external parties.`,
      head: `Overseeing financial planning, budgeting, and expense management. Ensures transparent handling of club funds and financial reporting.`,
      ambassador: `Active contributor to club activities and initiatives. Brings fresh perspectives and enthusiasm to various projects and events.`,
    }

    return (
      roleDescriptions[member.role.toLowerCase()] ||
      `Dedicated ${member.role.toLowerCase()} contributing to the success and growth of our club through active participation and leadership.`
    )
  }

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen mt-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Header Skeleton */}
            <div className="text-center mb-12">
              <Skeleton className="h-12 w-64 mx-auto mb-4" />
              <Skeleton className="h-6 w-96 mx-auto mb-2" />
              <Skeleton className="h-6 w-80 mx-auto" />
            </div>

            {/* Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="bg-white">
                  <CardContent className="p-8 text-center">
                    <Skeleton className="w-24 h-24 rounded-full mx-auto mb-6" />
                    <Skeleton className="h-8 w-32 mx-auto mb-4" />
                    <Skeleton className="h-6 w-24 mx-auto mb-6" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mx-auto mb-6" />
                    <div className="flex justify-center space-x-4">
                      <Skeleton className="w-6 h-6 rounded" />
                      <Skeleton className="w-6 h-6 rounded" />
                      <Skeleton className="w-6 h-6 rounded" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen mt-16 bg-gray-50 flex items-center justify-center">
          <Card className="max-w-md w-full">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Failed to Load Cabinet</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              {userData && (
                <div className="text-sm text-gray-500 mb-4">
                  <p>Club: {userData.club}</p>
                  <p>District: {userData.district}</p>
                  <p>School: {userData.school}</p>
                </div>
              )}
              <Button onClick={handleRetry} className="w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Club Cabinet</h1>
            <p className="text-lg text-gray-600 mb-2">
              Meet our dedicated leadership team who guide and manage our club activities.
            </p>
            {/* <p className="text-lg text-gray-600">Get to know the key members who make everything possible.</p> */}
            {/* {userData && (
              <div className="mt-4 text-sm text-gray-500">
                <Badge variant="outline" className="mr-2">
                  {userData.club}
                </Badge>
                <Badge variant="outline" className="mr-2">
                  {userData.district}
                </Badge>
                <Badge variant="outline">{userData.school}</Badge>
              </div>
            )} */}
          </div>

          {/* Cabinet Members Grid */}
          {cabinetMembers.length === 0 ? (
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Cabinet Members Found</h3>
                <p className="text-gray-600 mb-4">
                  No cabinet members are currently registered for this club configuration.
                </p>
                {userData && (
                  <div className="text-sm text-gray-500">
                    <p>Club: {userData.club}</p>
                    <p>District: {userData.district}</p>
                    <p>School: {userData.school}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cabinetMembers.map((member, index) => (
                <Card key={member._id || index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    {/* Avatar */}
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-700">{getInitials(member.name)}</span>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{member.name}</h3>

                    {/* Role Badge */}
                    <Badge className={`${getRoleColor(member.role)} px-4 py-2 text-sm font-medium mb-6`}>
                      {member.role}
                    </Badge>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{generateDescription(member)}</p>

                    {/* Contact Info */}
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="truncate">{member.email}</span>
                    </div>

                    {/* Social Icons Placeholder */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"></div>
                      <div className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"></div>
                      <div className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

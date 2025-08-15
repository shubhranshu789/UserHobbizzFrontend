"use client"

import { useState, useEffect, Suspense } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MapPin, School, Users, Mail } from "lucide-react"
import { useSearchParams } from "next/navigation"
import Navbar from "../../Components/ArtClub/Navbar/page"

interface UserProfile {
  _id: string
  name: string
  email: string
  state: string
  district: string
  school: string
  club: string
  joinedClubs: string[]
}


export default function WrappedPage() {
  return (
    <Suspense>
      <ProfilePage />
    </Suspense>
  )
}


 function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Using the provided user ID from the example
  // const userId = "6897556910360b01ce895e6f"
  const searchParams = useSearchParams();
  const id = searchParams.get("userid");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/userProfile/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch profile")
        }
        const data = await response.json()
        setProfile(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-red-600">Error: {error}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-gray-600">Profile not found</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (

    <div>
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <Card className="mb-6 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <CardContent className="relative px-6 pb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-16">
                <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                  <AvatarFallback className="text-2xl font-bold bg-indigo-600 text-white">
                    {getInitials(profile.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h1>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{profile.email}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  Location Details
                </h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-600">State</span>
                  <span className="text-gray-900">{profile.state}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-600">District</span>
                  <span className="text-gray-900">{profile.district}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-600 flex items-center gap-2">
                    <School className="h-4 w-4" />
                    School
                  </span>
                  <span className="text-gray-900 text-right">{profile.school}</span>
                </div>
              </CardContent>
            </Card>

            {/* Club Information */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-indigo-600" />
                  Club Activities
                </h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-600 mb-2">Primary Club</h3>
                  <Badge variant="default" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1">
                    {profile.club}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 mb-2">All Joined Clubs</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.joinedClubs.map((club, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                      >
                        {club}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Card */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-indigo-600">{profile.joinedClubs.length}</div>
                  <div className="text-sm text-gray-600">Clubs Joined</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-purple-600">1</div>
                  <div className="text-sm text-gray-600">Primary Club</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-green-600">Active</div>
                  <div className="text-sm text-gray-600">Status</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

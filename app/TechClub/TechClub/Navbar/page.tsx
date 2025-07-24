"use client"

import { useState } from "react"
import {
    Menu,
    Search,
    Bell,
    ChevronDown,
    Palette,
    Users,
    Calendar,
    Trophy,
    BookOpen,
    Camera,
    Award,
    FileText,
    Globe,
    Heart,
    Newspaper,
    ImageIcon,
    Target,
    LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { useRouter } from 'next/navigation';





// import "../../../Components/Auth/files/SignIn"







const mainTabs = [
    { id: "overview", name: "Overview", icon: BookOpen },
    { id: "events", name: "Events", icon: Calendar },
    { id: "members", name: "Members", icon: Users },
    { id: "achievements", name: "Achievements", icon: Trophy },
]

const tabContent = {
    overview: {
        title: "Club Overview",
        content:
            "The Art Club is a vibrant community of creative individuals passionate about visual arts. Founded with the mission to foster artistic expression and cultural appreciation, we provide a platform for artists of all skill levels to explore, learn, and showcase their talents.",
        features: [
            {
                icon: Palette,
                title: "Workshops",
                description: "Regular workshops covering various art techniques and mediums.",
            },
            {
                icon: Camera,
                title: "Exhibitions",
                description: "Monthly exhibitions showcasing member artwork and guest artists.",
            },
            {
                icon: Users,
                title: "Community",
                description: "A supportive network of artists sharing knowledge and inspiration.",
            },
        ],
    },
    events: {
        title: "Upcoming Events",
        content:
            "Join us for exciting art events, workshops, and exhibitions throughout the year. From beginner-friendly sessions to advanced masterclasses.",
        features: [
            { icon: Calendar, title: "Weekly Workshops", description: "Every Saturday 2-5 PM - Various art techniques" },
            { icon: Trophy, title: "Annual Exhibition", description: "December 15-20 - Showcase your best work" },
            { icon: Users, title: "Artist Meetups", description: "Monthly networking events with local artists" },
        ],
    },
    members: {
        title: "Our Community",
        content:
            "Meet our diverse community of artists, from beginners to professionals, all united by their passion for creative expression.",
        features: [
            { icon: Users, title: "150+ Members", description: "Active artists from various backgrounds and skill levels" },
            { icon: Award, title: "Expert Mentors", description: "Professional artists providing guidance and support" },
            { icon: Heart, title: "Inclusive Environment", description: "Welcoming space for all artistic expressions" },
        ],
    },
    achievements: {
        title: "Club Achievements",
        content:
            "Celebrating our members' successes and the club's milestones in fostering artistic excellence and community engagement.",
        features: [
            { icon: Trophy, title: "50+ Awards", description: "Members have won numerous local and national competitions" },
            { icon: Camera, title: "100+ Exhibitions", description: "Successfully organized exhibitions since our founding" },
            {
                icon: Users,
                title: "Community Impact",
                description: "Reached over 1000 people through art education programs",
            },
        ],
    },
}

export default function ArtClubNavbar() {
    const [activeTab, setActiveTab] = useState("overview")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const token = typeof window !== 'undefined' ? localStorage.getItem("jwt") : null;

    const router = useRouter();
    const navigationItems = [
        { name: "Cabinet", icon: Users, id: "Cabinet" },
        { name: "Constitution", icon: FileText, id: "Constitution" },
        { name: "Legacy", icon: BookOpen, id: "Legacy" },
        { name: "Heritage", icon: Award, id: "Heritage" },
        { name: "Calendar", icon: Calendar, id: "Calendar" },
        // { name: "Library", icon: BookOpen, id: "Library" },
        { name: "Club Journal", icon: Newspaper, id: "Journal" },
        { name: "Club Domain", icon: Globe, id: "Domain" },
        { name: "Club Affairs", icon: Heart, id: "Affairs" },
        { name: "Club Chapters", icon: BookOpen, id: "Chapters" },
        { name: "Club News", icon: Newspaper, id: "News" },
        { name: "Hall of Fame", icon: Trophy, id: "Fame" },
        { name: "Gallery", icon: ImageIcon, id: "Gallery" },
        { name: "Contests", icon: Target, id: "Contests" },
        { name: "Logout", icon: LogOut, id: "Logout" },
    ]




    const filteredNavigationItems = navigationItems.filter(item =>
        item.id !== "Logout" || token
    );




    const logout = () => {
        console.log("logout");

        localStorage.clear()
        router.push("/");
    }

    return (
        <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div style={{ cursor: "pointer" }} onClick={() => {
                            router.push("/Components/ArtClub/home");
                        }} className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                <Palette className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    Tech Club
                                </h1>
                                <p className="text-xs text-gray-500 hidden sm:block">Where creativity meets passion</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {filteredNavigationItems.slice(0, 6).map((item) => (
                                <Button
                                    key={item.name}
                                    variant="ghost"
                                    size="sm"
                                    className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"

                                    onClick={() => {
                                        if (item.id == "Cabinet") {
                                            router.push("/TechClub/TechClub/Cabinate/cabinate")
                                        }
                                        if (item.id == "Constitution") {
                                            router.push("/TechClub/TechClub/ClubConstitution")
                                        }
                                        if (item.id == "Legacy") {
                                            router.push("/TechClub/TechClub/ClubLegacy")
                                        }
                                        if (item.id == "Heritage") {
                                            router.push("/TechClub/TechClub/Heritage")
                                        }
                                        if (item.id == "Calendar") {
                                            router.push("/TechClub/TechClub/Calendar")
                                        }
                                        if (item.id == "Library") {
                                            // router.push("/Components/ArtClub/Cabinate")
                                        }
                                        if (item.id == "Journal") {
                                            router.push("/TechClub/TechClub/ClubJournal")
                                        }
                                        if (item.id == "Domain") {
                                            router.push("/TechClub/TechClub/CubDomain")
                                        }
                                        if (item.id == "Chapters") {
                                            router.push("/TechClub/TechClub/LocalEvents/Events")
                                        }
                                        if (item.id == "Affairs") {
                                            router.push("/TechClub/TechClub/Affairs")
                                        }
                                        if (item.id == "News") {
                                            router.push("/TechClub/TechClub/ClubNews")
                                        }
                                        if (item.id == "Fame") {
                                            router.push("/TechClub/TechClub/HallOfFame")
                                        }
                                        if (item.id == "Gallery") {
                                            router.push("/TechClub/TechClub/Gallery")
                                        }
                                        if (item.id == "Contests") {
                                            router.push("/TechClub/TechClub/Contest")
                                        }
                                        if (item.id == "Logout") {
                                            localStorage.clear()
                                            // router.push("/Components/Auth/files/SignIn")
                                            logout()
                                        }

                                    }}
                                >
                                    <item.icon className="w-4 h-4 mr-2" />
                                    {item.name}
                                </Button>
                            ))}
                            <div className="relative group">
                                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-600">
                                    More <ChevronDown className="w-4 h-4 ml-1" />
                                </Button>
                                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="p-2">
                                        {filteredNavigationItems.slice(6).map((item) => (
                                            <Button
                                                key={item.name}
                                                variant="ghost"
                                                size="sm"
                                                className="w-full justify-start text-gray-600 hover:text-purple-600 hover:bg-purple-50"


                                                onClick={() => {
                                                    if (item.id == "Cabinet") {
                                                        router.push("/TechClub/TechClub/Cabinate/cabinate")
                                                    }
                                                    if (item.id == "Constitution") {
                                                        router.push("/TechClub/TechClub/ClubConstitution")
                                                    }
                                                    if (item.id == "Legacy") {
                                                        router.push("/TechClub/TechClub/ClubLegacy")
                                                    }
                                                    if (item.id == "Heritage") {
                                                        router.push("/TechClub/TechClub/Heritage")
                                                    }
                                                    if (item.id == "Calendar") {
                                                        router.push("/TechClub/TechClub/Calendar")
                                                    }
                                                    if (item.id == "Library") {
                                                        router.push("/TechClub/TechClub/Cabinate")
                                                    }
                                                    if (item.id == "Journal") {
                                                        router.push("/TechClub/TechClub/ClubJournal")
                                                    }
                                                    if (item.id == "Domain") {
                                                        router.push("/TechClub/TechClub/CubDomain")
                                                    }
                                                    // if (item.id == "Affairs") {
                                                    //     router.push("/Components/ArtClub/Cabinate")
                                                    // }
                                                    if (item.id == "Chapters") {
                                                        router.push("/TechClub/TechClub/LocalEvents/Events")
                                                    }
                                                    if (item.id == "Affairs") {
                                                        router.push("/TechClub/TechClub/Affairs")
                                                    }
                                                    if (item.id == "News") {
                                                        router.push("/TechClub/TechClub/ClubNews")
                                                    }
                                                    if (item.id == "Fame") {
                                                        router.push("/TechClub/TechClub/HallOfFame")
                                                    }
                                                    if (item.id == "Gallery") {
                                                        router.push("/TechClub/TechClub/Gallery")
                                                    }
                                                    if (item.id == "Contests") {
                                                        router.push("/TechClub/TechClub/Contest")
                                                    }
                                                    if (item.id == "Logout") {
                                                        localStorage.clear()
                                                        // router.push("/Components/Auth/files/SignIn")
                                                        logout()
                                                    }

                                                }}
                                            >
                                                <item.icon className="w-4 h-4 mr-2" />
                                                {item.name}
                                            </Button>
                                        ))}
                                        {/* <Button
                                            variant="ghost"
                                            size="sm"
                                            className="hidden sm:flex text-[#2b7fff] hover:text-[#1a5fd6]"
                                            onClick={logout}
                                        >
                                            Logout
                                        </Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side actions */}
                        <div className="flex items-center space-x-3">
                            {token && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="hidden sm:flex text-[#2b7fff] hover:text-[#1a5fd6]"
                                >
                                    Profile
                                </Button>
                            )}
                            {/* <Button style={{display : "none"}} variant="ghost" size="sm" className="hidden sm:flex relative">
                                <Bell className="w-4 h-4" />
                                <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500" />
                            </Button> */}

                            {/* Mobile menu trigger */}
                            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="sm" className="lg:hidden">
                                        <Menu className="w-5 h-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-80">
                                    <div className="flex flex-col space-y-4 mt-6">
                                        {/* <div className="flex items-center space-x-3 pb-4 border-b">
                                            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                                <Palette className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="font-semibold">Art Club</h2>
                                                <p className="text-sm text-gray-500">Navigation</p>
                                            </div>
                                        </div> */}
                                        {filteredNavigationItems.map((item) => (
                                            <Button
                                                key={item.name}
                                                variant="ghost"
                                                className="justify-start text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                                                // onClick={() => setIsMenuOpen(false)}
                                                onClick={() => {

                                                    setIsMenuOpen(false)
                                                    if (item.id == "Cabinet") {
                                                        router.push("/TechClub/TechClub/Cabinate/cabinate")
                                                    }
                                                    if (item.id == "Constitution") {
                                                        router.push("/TechClub/TechClub/ClubConstitution")
                                                    }
                                                    if (item.id == "Legacy") {
                                                        router.push("/TechClub/TechClub/ClubLegacy")
                                                    }
                                                    if (item.id == "Heritage") {
                                                        router.push("/TechClub/TechClub/Heritage")
                                                    }
                                                    if (item.id == "Calendar") {
                                                        router.push("/TechClub/TechClub/Calendar")
                                                    }
                                                    if (item.id == "Library") {
                                                        router.push("/TechClub/TechClub/Cabinate")
                                                    }
                                                    if (item.id == "Journal") {
                                                        router.push("/TechClub/TechClub/ClubJournal")
                                                    }
                                                    if (item.id == "Domain") {
                                                        router.push("/TechClub/TechClub/CubDomain")
                                                    }
                                                    if (item.id == "Affairs") {
                                                        router.push("/TechClub/TechClub/Affairs")
                                                    }
                                                    if (item.id == "Chapters") {
                                                        router.push("/TechClub/TechClub/LocalEvents/Events")
                                                    }
                                                    // if (item.id == "Affairs") {
                                                    //     router.push("/Components/ArtClub/Cabinate")
                                                    // }
                                                    if (item.id == "News") {
                                                        router.push("/TechClub/TechClub/ClubNews")
                                                    }
                                                    if (item.id == "Fame") {
                                                        router.push("/TechClub/TechClub/HallOfFame")
                                                    }
                                                    if (item.id == "Gallery") {
                                                        router.push("/TechClub/TechClub/Gallery")
                                                    }
                                                    if (item.id == "Contests") {
                                                        router.push("/TechClub/TechClub/Contest")
                                                    }
                                                    if (item.id == "Logout") {
                                                        localStorage.clear()
                                                        // router.push("/Components/Auth/files/SignIn")
                                                        logout()
                                                    }

                                                }}
                                            >
                                                <item.icon className="w-4 h-3 mr-3" />
                                                {item.name}
                                            </Button>


                                        ))}
                                        {/* <Button
                                            variant="ghost"
                                            size="sm"
                                            className="hidden sm:flex text-[#2b7fff] hover:text-[#1a5fd6]"
                                            onClick={() => {logout()}}
                                        >
                                            Logout
                                        </Button> */}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>




        </div>
    )
}

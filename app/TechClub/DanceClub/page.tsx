'use client'

import Image from "next/image"
import { Search, Bell, Palette, ImageIcon, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import DraggableElement from "../ArtClub/files/draggable-element"
import DraggableElement from "../TechClub/files/draggable-element"



import { useRouter } from 'next/navigation';


export default function Home() {

    const router = useRouter();

 
    const gotoArtClub = () => {
        router.push(`../Components/DanceClub/Cabinate`);
    };
    const gotoArtLibrary = () => {
        router.push(`../Components/DanceClub/Library`);
    };
    const gotoClubNews = () => {
        router.push(`../Components/DanceClub/ClubNews`);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar Navigation - Collapses to top bar on mobile */}
            <aside className="bg-gray-50 md:w-64 md:min-h-screen flex-shrink-0 border-r">
                <div className="p-4 font-semibold text-lg border-b">Club Navigation</div>
                <nav className="p-2">
                    {[
                        { icon: "layout-grid", label: "Cabinet", id: "Cabinet" },
                        { icon: "scroll", label: "Constitution" },
                        { icon: "history", label: "Legacy" },
                        { icon: "landmark", label: "Heritage" },
                        { icon: "calendar", label: "Calendar" },
                        { icon: "book", label: "Library" , id : "Library"},
                        { icon: "book-open", label: "Club Journal" },
                        { icon: "globe", label: "Club Domain" },
                        { icon: "briefcase", label: "Club Affairs" },
                        { icon: "git-branch", label: "Club Chapters" },
                        { icon: "newspaper", label: "Club News", id: "ClubNews"},
                        { icon: "award", label: "Hall of Fame" },
                        { icon: "image", label: "Gallery" },
                        { icon: "trophy", label: "Contests" },
                    ].map((item, index) => (
                        <Button onClick={() => {
                                if(item.id == "Cabinet") {
                                    gotoArtClub()
                                }
                                if(item.id == "Library") {
                                    gotoArtLibrary()
                                }
                                if(item.id == "ClubNews") {
                                    gotoClubNews()
                                }
                             }} key={index} variant="ghost" className="w-full justify-start mb-1 font-normal">
                            <span className="mr-2" >
                                {item.icon === "layout-grid" && "📊"}
                                {item.icon === "scroll" && "📜"}
                                {item.icon === "history" && "👑"}
                                {item.icon === "landmark" && "🏛️"}
                                {item.icon === "calendar" && "📅"}
                                {item.icon === "book" && "📚"}
                                {item.icon === "book-open" && "📖"}
                                {item.icon === "globe" && "🌐"}
                                {item.icon === "briefcase" && "💼"}
                                {item.icon === "git-branch" && "🔱"}
                                {item.icon === "newspaper" && "📰"}
                                {item.icon === "award" && "🏆"}
                                {item.icon === "image" && "🖼️"}
                                {item.icon === "trophy" && "🏅"}
                            </span>
                            {item.label}
                        </Button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
                {/* Header */}
                <header className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-2xl font-bold">Dance Club</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative h-[300px] md:h-[400px]">
                    <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Dance studio with paintings and easels"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-2">Welcome to Dance Club</h2>
                        <p className="text-lg md:text-xl">Where creativity meets passion</p>
                    </div>
                </section>

                {/* About Section */}
                <section className="p-6 md:p-10">
                    <h2 className="text-2xl font-bold mb-4">About Our Club</h2>
                    <p className="text-gray-700 mb-6">
                       The Dance Club is a vibrant community of passionate dancers dedicated to the art of movement and rhythm. Founded with the mission to promote artistic expression through dance and celebrate diverse cultural styles, we provide a platform for performers of all skill levels to explore, learn, and showcase their dance talents. Our club organizes dance workshops, stage performances, competitions, and group choreographies that ignite creativity and foster strong bonds within the dance community.
                    </p>

                    {/* Tabs */}
                    <Tabs defaultValue="overview" className="mb-10">
                        <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="events">Events</TabsTrigger>
                            <TabsTrigger value="members">Members</TabsTrigger>
                            <TabsTrigger value="achievements">Achievements</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="pt-4">
                            <p>Overview content goes here...</p>
                        </TabsContent>
                        <TabsContent value="events" className="pt-4">
                            <p>Events calendar and upcoming activities...</p>
                        </TabsContent>
                        <TabsContent value="members" className="pt-4">
                            <p>Member directory and profiles...</p>
                        </TabsContent>
                        <TabsContent value="achievements" className="pt-4">
                            <p>Club achievements and awards...</p>
                        </TabsContent>
                    </Tabs>

                    {/* Feature Cards - Draggable on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <DraggableElement>
                            <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center">
                                <div className="bg-gray-100 p-4 rounded-full mb-4">
                                    <Palette className="h-8 w-8 text-purple-500" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Workshops</h3>
                                <p className="text-gray-600">Regular workshops covering various art techniques and mediums.</p>
                            </div>
                        </DraggableElement>

                        <DraggableElement>
                            <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center">
                                <div className="bg-gray-100 p-4 rounded-full mb-4">
                                    <ImageIcon className="h-8 w-8 text-cyan-500" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Exhibitions</h3>
                                <p className="text-gray-600">Monthly exhibitions showcasing member artwork and guest artists.</p>
                            </div>
                        </DraggableElement>

                        <DraggableElement>
                            <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center">
                                <div className="bg-gray-100 p-4 rounded-full mb-4">
                                    <Users className="h-8 w-8 text-teal-500" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Community</h3>
                                <p className="text-gray-600">A supportive network of artists sharing knowledge and inspiration.</p>
                            </div>
                        </DraggableElement>
                    </div>
                </section>
            </main>
        </div>
    )
}

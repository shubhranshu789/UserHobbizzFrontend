"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from 'next/navigation';

import Navbar from "../Navbar/page"

import Footer from "../../Footer/page";

// import "../../../Components/ArtClub/ClubNews/ParticularArtNews"

interface NewsItem {
  _id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  imageUrl?: string;
  tags: string[];
  isFeatured: boolean;
  publishedAt: string;
}


const ClubNewsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Other",
    author: "",
    imageUrl: "",
    tags: "",
    isFeatured: false,
  });

  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();


  const handleClickSubmitId = (id: any) => {
   router.push(`/TechClub/TechClub/ClubNews/ParticularArtNews?id=${id}`);
  };



  // Input Change Handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.content || !formData.category) {
      toast.error(" Please fill all required fields!");
      return;
    }

    const newsData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/techclubnews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(" News Posted Successfully!");
        setFormData({
          title: "",
          content: "",
          category: "Other",
          author: "Art Club Team",
          imageUrl: "",
          tags: "",
          isFeatured: false,
        });
        fetchNews(); // refresh after post
      } else {
        toast.error(" Failed: " + data.message);
      }
    } catch (error: any) {
      toast.error(" Error: " + error.message);
    }
  };

  // Fetch News  here
  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/techclubnewsviewallpost`);
      const data = await res.json();

      if (res.ok) {
        setNewsList(data.data);
      } else {
        toast.error(" Failed to fetch news: " + data.message);
      }
    } catch (error: any) {
      toast.error("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div style={{ padding: "2px" }}>
      <Navbar />

      <div className="relative bg-gradient-to-br from-[#BCDAFB] via-white to-[#E2ECFF] h-[450px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Decorative SVG blob */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>

        {/* Content */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 drop-shadow-md z-10">
          Art Club NEWS
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-xl z-10">
          Stay updated with the latest announcements, achievements, and press coverage.
        </p>
      </div>

      {/* Form Section */}
      


      {/* News Feed Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
       

        {loading ? (
          <p className="text-center text-gray-500">Loading news...</p>
        ) : newsList.length === 0 ? (
          <p className="text-center text-gray-500">No Journal found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsList.map((news) => (
              <div
                key={news._id}
                className="relative group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Featured Badge */}
                {news.isFeatured && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                    🌟 Featured
                  </div>
                )}

                {/* Image Section */}
                {news.imageUrl && (
                  <div style={{cursor : "pointer"}} className="h-48 w-full overflow-hidden" onClick={() => {handleClickSubmitId(news._id)}}>
                    <img
                      src={news.imageUrl}
                      alt="News"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Text Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-1">
                    <strong>Category:</strong> {news.category}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    <strong>Author:</strong> {news.author}
                  </p>

                  <p className="text-gray-700 text-sm mt-2 mb-4 line-clamp-3">
                    {news.content}
                  </p>

                  {/* Tags */}
                  {news.tags?.length > 0 && (
                    <div className="mb-4">
                      {news.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto text-xs text-gray-400">
                    🕒 {new Date(news.publishedAt).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Footer */}
        <Footer/>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default ClubNewsForm;

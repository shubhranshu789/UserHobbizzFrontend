"use client";
import React, { useState, useEffect } from "react";
import { Share2, X, MessageCircle, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonProps {
  eventTitle: string;
  eventDate: string;
  eventVenue: string;
  eventId: string;
  eventImage?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({
  eventTitle,
  eventDate,
  eventVenue,
  eventId,
  eventImage,
  size = "md",
  className = "",
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [facebookCopied, setFacebookCopied] = useState(false);
  const [showFacebookModal, setShowFacebookModal] = useState(false);
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const eventUrl = `${baseUrl}/Components/ArtClub/LocalEvents/Overview?event_id=${encodeURIComponent(eventId)}`;
  
  const shareText = `🎨 Join us for "${eventTitle}"!\n📅 Date: ${eventDate}\n📍 Venue: ${eventVenue}\n\nRegister now: ${eventUrl}`;
  
  // WhatsApp-specific text with proper encoding
  const whatsappText = `Join us for "${eventTitle}"!\nDate: ${eventDate}\nVenue: ${eventVenue}\n\nRegister now: ${eventUrl}`;

  // Handle browser back button to close modals
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (showCopySuccess) {
        setShowCopySuccess(false);
        event.preventDefault();
      } else if (showInstagramModal) {
        setShowInstagramModal(false);
        event.preventDefault();
      } else if (showFacebookModal) {
        setShowFacebookModal(false);
        event.preventDefault();
      } else if (isPopupOpen) {
        setIsPopupOpen(false);
        event.preventDefault();
      }
    };

    if (isPopupOpen || showFacebookModal || showInstagramModal || showCopySuccess) {
      window.addEventListener('popstate', handlePopState);
      // Push a new state when modal opens
      window.history.pushState({ modalOpen: true }, '');
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isPopupOpen, showFacebookModal, showInstagramModal, showCopySuccess]);

  const handleShare = async (platform: string) => {
    let shareUrl = "";
    
    switch (platform) {
      case "whatsapp":
        // For WhatsApp, automatically open WhatsApp with event details
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
        
        if (isMobile) {
          // On mobile, try to open WhatsApp app first
          shareUrl = `whatsapp://send?text=${encodeURIComponent(whatsappText)}`;
          window.open(shareUrl, "_blank");
          // Fallback to web WhatsApp after a delay
          setTimeout(() => {
            if (!document.hidden) {
              window.open(`https://wa.me/?text=${encodeURIComponent(whatsappText)}`, "_blank");
            }
          }, 1000);
        } else {
          // On desktop, use web WhatsApp
          shareUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
          window.open(shareUrl, "_blank", "noopener,noreferrer");
        }
        setIsPopupOpen(false);
        return;
      case "facebook":
        try {
          // Copy the text to clipboard
          await navigator.clipboard.writeText(shareText);
          
          // Set state to show success feedback
          setFacebookCopied(true);
          setTimeout(() => setFacebookCopied(false), 5000);
          
          // Show custom modal with instructions instead of alert
          setShowFacebookModal(true);
          
        } catch (clipboardError) {
          console.log('Clipboard access failed, using basic share');
          // If clipboard fails, show the text in modal for manual copy
          setShowFacebookModal(true);
        }
        
        setIsPopupOpen(false);
        return;
      case "instagram":
        try {
          // Copy the text to clipboard
          await navigator.clipboard.writeText(shareText);
          
          // Set state to show success feedback
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 5000);
          
          // Show custom modal with instructions instead of alert
          setShowInstagramModal(true);
          
        } catch (clipboardError) {
          console.log('Clipboard access failed, using basic share');
          // If clipboard fails, show the text in modal for manual copy
          setShowInstagramModal(true);
        }
        
        setIsPopupOpen(false);
        return;
      case "copy":
        try {
          // Copy event details to clipboard
          await navigator.clipboard.writeText(shareText);
          setShowCopySuccess(true);
          setIsPopupOpen(false);
          
          // Hide success message after 1 second
          setTimeout(() => {
            setShowCopySuccess(false);
          }, 1000);
        } catch (clipboardError) {
          console.error('Failed to copy to clipboard:', clipboardError);
          // Fallback: show the text for manual copy
          alert(`Please copy this text manually:\n\n${shareText}`);
          setIsPopupOpen(false);
        }
        return;
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case "sm":
        return "w-8 h-8";
      case "lg":
        return "w-12 h-12";
      default:
        return "w-10 h-10";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "lg":
        return "w-6 h-6";
      default:
        return "w-5 h-5";
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className={`${getButtonSize()} bg-green-50 hover:bg-green-100 border-green-200 hover:w-auto hover:px-3 transition-all duration-200 ease-in-out group flex items-center gap-1 rounded-md ${className}`}
        onClick={() => setIsPopupOpen(true)}
        title="Share Event"
      >
        <Share2 className={`${getIconSize()} text-green-600`} />
        <span className="hidden group-hover:inline text-sm font-medium text-green-600 whitespace-nowrap">Share</span>
      </Button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Share Event</h3>
              <Button
                variant="ghost"
                onClick={() => setIsPopupOpen(false)}
                className="text-red-500 bg-red-50 hover:bg-red-100 hover:px-4 transition-all duration-200 ease-in-out group flex items-center gap-1 rounded-md"
              >
                <X className="w-5 h-5" />
                <span className="hidden group-hover:inline text-sm font-medium">Close</span>
              </Button>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm">
              Share "{eventTitle}" with your friends and family
            </p>

            {/* Event Preview with Image */}
            {eventImage && (
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <img 
                  src={eventImage} 
                  alt={eventTitle}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h4 className="font-medium text-sm text-gray-900">{eventTitle}</h4>
                <p className="text-xs text-gray-600">{eventDate} • {eventVenue}</p>
              </div>
            )}
            
            <div className="space-y-3">
              <Button
                onClick={() => handleShare("whatsapp")}
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                Share on WhatsApp
              </Button>
              
              <Button
                onClick={() => handleShare("facebook")}
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Share on Facebook {facebookCopied && "✓ Ready to paste!"}
              </Button>
              
              <Button
                onClick={() => handleShare("instagram")}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                </svg>
                Share on Instagram {copySuccess && "✓ Ready to paste!"}
              </Button>

              <Button
                onClick={() => handleShare("copy")}
                className="w-full flex items-center justify-center gap-3 bg-gray-600 hover:bg-gray-700 text-white py-3"
              >
                <Copy className="w-5 h-5" />
                Copy event details {copySuccess && "✓ Copied!"}
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              WhatsApp opens automatically. Facebook & Instagram copy text to paste. Copy button saves event details to clipboard.
            </p>
          </div>
        </div>
      )}

      {/* Facebook Instructions Modal */}
      {showFacebookModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Facebook Sharing</h3>
              <Button
                variant="ghost"
                onClick={() => setShowFacebookModal(false)}
                className="text-red-500 bg-red-50 hover:bg-red-100 hover:px-4 transition-all duration-200 ease-in-out group flex items-center gap-1 rounded-md"
              >
                <X className="w-5 h-5" />
                <span className="hidden group-hover:inline text-sm font-medium">Close</span>
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 text-sm font-medium">✓ Event details copied to clipboard!</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Event Details to Share:</h4>
                <div className="text-sm text-blue-800 bg-white p-3 rounded border font-mono whitespace-pre-wrap break-words overflow-hidden">
                  {shareText}
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <ol className="space-y-1">
                    <li>1. Click "Share as Message" button below</li>
                    <li>2. Open any chat and Paste (Ctrl+V) the event details</li>
                    <li>3. Click "Send" button</li>
                  </ol>
                  
                  <div className="flex items-center my-3">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500 font-medium">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>
                  
                  <ol className="space-y-1">
                    <li>1. Click "Share as Post" button below</li>
                    <li>2. Paste (Ctrl+V) the event details</li>
                    <li>3. Click "Share" button</li>
                  </ol>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    window.open("https://www.facebook.com/messages/t", "facebook-messages", "width=600,height=600,scrollbars=yes,resizable=yes");
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  Share as Message
                </Button>
                <Button
                  onClick={() => {
                    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`;
                    window.open(shareUrl, "facebook-share", "width=600,height=600,scrollbars=yes,resizable=yes");
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Share as Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instagram Instructions Modal */}
      {showInstagramModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Instagram Sharing</h3>
              <Button
                variant="ghost"
                onClick={() => setShowInstagramModal(false)}
                className="text-red-500 bg-red-50 hover:bg-red-100 hover:px-4 transition-all duration-200 ease-in-out group flex items-center gap-1 rounded-md"
              >
                <X className="w-5 h-5" />
                <span className="hidden group-hover:inline text-sm font-medium">Close</span>
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 text-sm font-medium">✓ Event details copied to clipboard!</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-2">Event Details to Share:</h4>
                <div className="text-sm text-purple-800 bg-white p-3 rounded border font-mono whitespace-pre-wrap break-words overflow-hidden">
                  {shareText}
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
                <ol className="text-sm text-gray-700 space-y-1">
                  <li>1. Click "Open Instagram" button below</li>
                  <li>2. Create a Post, story or directly message</li>
                  <li>3. Paste (Ctrl+V) the event details</li>
                </ol>
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowInstagramModal(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    window.open("https://www.instagram.com/", "instagram-share", "width=600,height=600,scrollbars=yes,resizable=yes");
                  }}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Open Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Copy Success Popup */}
      {showCopySuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Copy className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Event details copied successfully!</h3>
            <p className="text-gray-600 text-sm">You can now paste the event details anywhere you want to share.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareButton;

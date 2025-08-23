
"use client"

import VideoPopup from '@/modals/VideoPopup'
import React, { useState } from 'react'

export default function FeatureVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);


  return (
    <>
      <div className="feature-video pb-5">
        <div className="container">
          <div className="feature-video-wrap w-100">
            <img 
              src="assets/img/about/feature-vid.png" 
              alt="img" 
              className="w-100" 
              style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}
            />
            <a
              onClick={() => setIsVideoOpen(true)}
              style={{ cursor: "pointer" }}
              className="video-cmn d-center video-popup"><i className="fa-solid fa-play"></i></a>
          </div>
          
          {/* Google Map Section */}
          <div className="mt-5">
            <h2 className="text-center mb-4">Trouvez-nous</h2>
            <div className="google-map" style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.6944554545094!2d5.054581314325327!3d36.728496245518144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d3332a0d352b3%3A0xcdb6cf7d9cd10125!2sGroupe%20Tchin-Lait!5e1!3m2!1sfr!2sma!4v1755520162022!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"pcr7pHTjcQw"}
      />
      {/* video modal end  */}


    </>
  )
}

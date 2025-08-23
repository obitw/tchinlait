

import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Faq() {
  return (
    <>
      <HeaderOne />
      <Breadcrumnd title="Faq" subtitle="Faq" />
      <div className="container py-5">
        <h2 className="text-center mb-5">Foire aux questions</h2>
        {/* Ajoutez ici le contenu de votre FAQ */}
      </div>
      <FooterOne />
    </>
  )
}

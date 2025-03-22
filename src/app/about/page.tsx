

import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'TchinLait - Candia Algérie',
  description: 'TchinLait - Candia Algérie',
};


export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

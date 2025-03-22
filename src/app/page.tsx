
import React from 'react'
import { Metadata } from 'next';
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';

export const metadata: Metadata = {
  title: 'TchinLait - Candia Algérie'
};

export default function index() {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}

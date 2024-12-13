'use client'

import dynamic from 'next/dynamic';
import React from 'react';

const Navbar = dynamic(() => import('./Navbar'), { ssr: true });
const Hero = dynamic(() => import('./Hero'), { ssr: true });
const Feature = dynamic(() => import('./Feature'), { ssr: false }); 
const DetailsFeature = dynamic(() => import('./DetailsFeature'), { ssr: true });
const RetailsProducts = dynamic(() => import('./RetailsProjects'), { ssr: true });
const ExpandingCircle = dynamic(() => import('./ExpandingCircle'), { ssr: true });
const OurClients = dynamic(() => import('./OurClients'), { ssr: true });
const CircleShrink = dynamic(() => import('./CircleSrink'), { ssr: true });
const SocialMedia = dynamic(() => import('./SocialMedia'), { ssr: true });
const ContactForm = dynamic(() => import('./ContactForm'), { ssr: true });
const CloserLook = dynamic(() => import('./CloserLook'), { ssr: true });
const Footer = dynamic(() => import('./Footer'), { ssr: true });
const Logistic = dynamic(() => import('./Logistic'), { ssr: false }); 

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <DetailsFeature />
      <Logistic />
      <RetailsProducts />
      <ExpandingCircle />
      <OurClients />
      <CircleShrink />
      <SocialMedia />
      <ContactForm />
      <CloserLook />
      <Footer />
    </>
  );
}

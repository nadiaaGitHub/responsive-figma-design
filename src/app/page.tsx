import React from 'react'
import Navebar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projectmanagement from "@/components/Projectmanagement";
import WorkTogether from "@/components/WorkTogether";
import Extension from '@/components/Extension';
import Customize from '@/components/Customize';
import Plan from '@/components/Plan';
import Yourwork from '@/components/Yourwork';
import Data from '@/components/Data';
import Sponsers from '@/components/Sponsers';
import Apps from '@/components/Apps';
import Comments from '@/components/Comments';
import Footer from '@/components/Footer';


export default function page() {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <Projectmanagement/>
      <WorkTogether/>
      <Extension/>
      <Customize/>
      <Plan/>
      <Yourwork/>
      <Data/>
      <Sponsers/>
      <Apps/>
      <Comments/>
      <Footer/>
     
    </div>
  )
}

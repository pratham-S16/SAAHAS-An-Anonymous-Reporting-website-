import React from 'react'
import { Header } from './components/Header'
import { IntroSection } from './components/IntroSection'
import { ReportForm } from './components/ReportForm'
import { AnonymityAssurance } from './components/AnonymityAssurance'
// import { EmotionalSafetyFooter } from './components/EmotionalSafetyFooter'
import Footer from '../components/Footer'

function report() {
  return (
    <div className="min-h-screen bg-slate-50">
        <Header/>

        <main className="w-full  pb-0">
        <IntroSection/>
        <ReportForm/>
        <AnonymityAssurance/>
      </main>

      <Footer/>
        
    </div>
  )
}

export default report
import React from 'react'
import { Header } from './components/Header'
import { IntroSection } from './components/IntroSection'
import { ReportForm } from './components/ReportForm'
import { AnonymityAssurance } from './components/AnonymityAssurance'
import { EmotionalSafetyFooter } from './components/EmotionalSafetyFooter'

function report() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 via-white to-indigo-50/30">
        <Header/>

        <main className="w-full pb-0">
        <IntroSection/>
        <ReportForm/>
        <AnonymityAssurance/>
      </main>

      <EmotionalSafetyFooter/>
        
    </div>
  )
}

export default report
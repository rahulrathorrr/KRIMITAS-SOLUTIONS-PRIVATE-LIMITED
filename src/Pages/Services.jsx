import React from 'react'
import ServiceHero from '../Components/ServiceHero'
import WebAppsSection from '../Components/WebAppsSection'
import MobileAppsSection from '../Components/Mobile'
import AISection from '../Components/Ai'
import AutomationSection from '../Components/Bussiness'
import UIUXSection from '../Components/UIUXSection'

const Services = () => {
  return (
    <div>
    <ServiceHero/> 
    <WebAppsSection/>
    <MobileAppsSection/>
    <AISection/>
    <AutomationSection/>
    <UIUXSection/>
    </div>
  )
}

export default Services
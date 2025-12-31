'use client'

import { AudioProvider } from './context/AudioContext'
import { ErrorBoundary } from './components/ErrorBoundary'
import SmoothScroll from './components/SmoothScroll'
import AudioControl from './components/AudioControl'
import ScrollGradientBackground from './components/ScrollGradientBackground'
import SectionConnector from './components/SectionConnector'
import Section1Landing from './components/Section1Landing'
import Section2Lyrics from './components/Section2Lyrics'
import Section3FirstGift from './components/Section3FirstGift'
import Section3BEmotionalBridge from './components/Section3BEmotionalBridge'
import Section4Decision from './components/Section4Decision'
import Section5SecondGift from './components/Section5SecondGift'
import Section6LongDistance from './components/Section6LongDistance'
import Section7QuestionGame from './components/Section7QuestionGame'
import Section8MoodSwings from './components/Section8MoodSwings'
import Section8BExtraGift from './components/Section8BExtraGift'
import Section9SorryEasterEgg from './components/Section9SorryEasterEgg'
import Section10ThankYou from './components/Section10ThankYou'
import Section10BWish from './components/Section10BWish'
import Section11FinalWish from './components/Section11FinalWish'
import Section12FinalEnding from './components/Section12FinalEnding'
import SecretSadButton from './components/SecretSadButton'

export default function Home() {
  return (
    <ErrorBoundary>
      <AudioProvider>
        <SmoothScroll>
          <ScrollGradientBackground />
          
          <main className="relative" suppressHydrationWarning>
            <AudioControl />
        
        <Section1Landing />
        <SectionConnector variant="fade" />
        
        <Section2Lyrics />
        <SectionConnector variant="glow" />
        
        <Section3FirstGift />
        <SectionConnector variant="fade" />
        
        <Section3BEmotionalBridge />
        <SectionConnector variant="glow" />
        
        <Section4Decision />
        <SectionConnector variant="glow" />
        
        <Section5SecondGift />
        <SectionConnector variant="fade" />
        
        <Section6LongDistance />
        <SectionConnector variant="glow" />
        
        <Section7QuestionGame />
        <SectionConnector variant="fade" />
        
        <Section8MoodSwings />
        <SectionConnector variant="fade" />
        
        <Section8BExtraGift />
        <SectionConnector variant="glow" />
        
        <Section9SorryEasterEgg />
        <SectionConnector variant="glow" />
        
        <Section10ThankYou />
        <SectionConnector variant="fade" />
        
        <Section10BWish />
        <SectionConnector variant="glow" />
        
        <Section11FinalWish />
        <SectionConnector variant="fade" />
        
        <Section12FinalEnding />
        
        {/* Secret 😿 button */}
        <SecretSadButton />
          </main>
        </SmoothScroll>
      </AudioProvider>
    </ErrorBoundary>
  )
}

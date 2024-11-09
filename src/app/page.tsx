import MainVisual from '../components/main-visual'
import AboutMe from '../components/about-me'
import Skills from '@/components/skills'
import Works from '@/components/works'
import Strength from '@/components/strength'
import Contact from '@/components/contact'
export default function Home() {
  return (
    <main>
      <MainVisual />
      <AboutMe />
      <Skills />
      <Works />
      <Strength />
      <Contact />
    </main>
  )
}
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"


function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
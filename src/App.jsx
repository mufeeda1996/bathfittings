import React from 'react'
import Addressbar from './Components/Addressbar/Addressbar'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import homeHero from './Image/hero.png'
import hero1 from './Image/hero1.png'
import Features from './Components/Feature/Features'
import { Container } from '@mui/material'
import delivery from './Image/delivery.png'
import loyality from './Image/loyality.png'
import transparency from './Image/transparant.png'
import experience from './Image/experience.png'
import team from './Image/team.png'
import guarantees from './Image/guarantees.png'
import results from './Image/results.png'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import logo from './Image/logo.png'

const navItems = [
  ' Brands catalogue',
  'Company',
  'Certificates',
  'Contacts',
  'Submit a request'
]
const address = ['Home', 'About', 'home']

const features = [
  {
    title: 'Delivery time',
    image: delivery,
    description: `Due to our well-functioning logistics network, we can deliver the goods throughout the world within the shortest possible time.`
  },
  {
    title: 'Loyalty',
    image: loyality,
    description: `We value our customers and always offer the best terms to our long-term clients.`
  },
  {
    title: 'Transparency',
    image: transparency,
    description: `All deliveries are carried out in full compliance with the laws and product certification rules.`
  },
  {
    title: 'Experience',
    image:experience,
    description: `More than 10 years at the industrial equipment market.`
  },
  {
    title: 'Team of experts',
    image: team,
    description: `Our highly qualified specialists will help you choose the necessary equipment and bring it to your country`
  },
  {
    title: 'Guarantees',
    image: guarantees,
    description: `All the goods are being covered under a manufacturer’s warranty.`
  },
  {
    title: "Results",
    image:results,
    description: `With competitive pricing,offering value for money while
     maintaining the highest standards of comfort,elegance,and personalised service.`,
  },
]

const App = () => {
  return (
    <div>
      <Addressbar navItems={navItems} address={address} />
      <Navbar />
      <Hero
        image={homeHero}
        altTxt='luxury transportation services - abu dhabi'
        isFullWidthHero={true}
        title='Industrial equipment and
        components through global sourcing'
        description='We supply industrial equipment
        and spare parts for companies from all over the world'
      />
      <Container maxWidth='lg' sx={{ margin: '3rem auto' }}>
        <Features features={features} />
      </Container>
      <About image={hero1}
        altTxt=''
        isFullWidthHero={true}
        title='We can compile your order
        according to your purchasing list.'
        description='This service offers more comfort for our customers. Just upload the list of equipment you need.
        '/>
         <Footer
        logo={logo}
        mail={"info@alameentransportsuae.com"}
        copyright={"2023 - Al Ameen Transports L.L.C"}
      />
    </div>
  )
}

export default App

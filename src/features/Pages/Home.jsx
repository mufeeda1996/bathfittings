import React from 'react'
import Hero from '../../Components/Hero/Hero'
import homeHero from '../../Image/hero.jpg'
import hero1 from '../../Image/hero1.webp'
import Features from '../../Components/Feature/Features'
import { Container } from '@mui/material'
import delivery from '../../Image/delivery.png'
import loyality from '../../Image/loyality.png'
import transparency from '../../Image/transparant.png'
import experience from '../../Image/experience.png'
import team from '../../Image/team.png'
import guarantees from '../../Image/guarantees.png'
import results from '../../Image/results.png'
import About from '../../Components/About/About'
import Footer from '../../Components/Footer/Footer'
import afterSales from '../../Image/service-7.png'
import Layout from '../Layout/Layout'
import { features } from '../../data.js'
import { heading } from '../../data.js'
import { subHeading } from '../../data.js'

const Home = () => {
  console.log("dddddddddddd",features)
  const description=`At ENAVO Bath Fittings, we take pride in our legacy of innovation, setting and surpassing industry standards in the creation of bathroom fittings and accessories. We are dedicated to promoting healthier, more responsible, and exquisitely beautiful living environments.Since our inception, we've been at the forefront of redefining lifestyles, offering elegant bathroom fittings at affordable prices without compromising quality. Our products undergo rigorous durability testing, backed by comprehensive warranties, ensuring reliability and peace of mind for our customers. With a wide selection always prioritizing high quality, we cater to diverse preferences and needs. At ENAVO, we prioritize personalized experiences, making each customer feel uniquely valued. By closely listening to consumer feedback, investing in extensive research and design, and leveraging cutting-edge technology, we continually enhance our offerings to simplify our customers' lives.Beyond innovation, we are deeply committed to environmental sustainability, integrating eco-friendly practices into every aspect of our business.
  At ENAVO, we're not just setting trends – we're shaping a brighter, greener future`
  return (
    <Layout>
    <div>
        <Hero
        image={homeHero}
        altTxt=''
        isFullWidthHero={true}
        title='WHERE LUXUARY FINDS ITS HOME'
        description='We supply products & systems for companies from all over the world .'
        description2="LH TECH LLC brings together dedicated git init team of experts from Oil & Gas, Marine, Lubricants, Process Packages, Power, Water, Desalination, Solar, including Sustainable Green Technology and Renewable Energy domains, in establishing projects from concept to commissioning"
      />
       <Container maxWidth='lg' sx={{ margin: '3rem auto' }}>
        <Features features={features} heading={heading} subHeading={subHeading} />
      </Container>
      {/* <Container maxWidth='lg' sx={{ margin: '3rem auto' }}>
        <Features features={features} heading={heading} subHeading={subHeading} />
      </Container> */}
      <About image={hero1}
        altTxt=''
        isFullWidthHero={true}
        title='Enavo Bathfittings.'
        description={description}
        />
    </div>
    </Layout>
  ) 
}

export default Home
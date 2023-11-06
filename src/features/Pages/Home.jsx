import React from 'react'
import Hero from '../../Components/Hero/Hero'
import homeHero from '../../Image/hero.png'
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
    {
      title: "After Sales",
      image:afterSales,
      description: `We are with our clients each step of the way, from engineering to manufacturing to logistics and finally after sales support. Our commitment continues even after the order has been completed to our client’s satisfaction.`,
    },
  ]

const Home = () => {
  return (
    <Layout>
    <div>
        <Hero
        image={homeHero}
        altTxt=''
        isFullWidthHero={true}
        title='Industrial equipment and
        components through global sourcing'
        description='We supply products & systems for companies from all over the world .'
        description2="LH TECH LLC brings together dedicated team of experts from Oil & Gas, Marine, Lubricants, Process Packages, Power, Water, Desalination, Solar, including Sustainable Green Technology and Renewable Energy domains, in establishing projects from concept to commissioning"
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
    </div>
    </Layout>
  ) 
}

export default Home
// import { Grid,Box } from '@mui/material'
// import React from 'react'

// const ProductSystems = () => {
//   return (
//   <>
//    <Grid container spacing={2} justifyContent="space-around">
//     <Grid item md={2}>
//      <Box>
//         title
//      </Box>
//     </Grid>
//     <Grid item md={2}>
//          description
//     </Grid>
//    </Grid>
//   </>
//   )
// }

// export default ProductSystems
import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Grid from '@mui/material/Grid'

function ProductSystems () {
  const data = [
    {
      package: 'Pumping Packages',
      description:
        'Screw Pumps, Centrifugal Pumps, Propeller Pumps, Progressing CavityPumps, Peristaltic Pumps and Macerators'
    },
    {
      package: 'SKIDS-Top Side &amp Cryogenic',
      description:
        'Skids and Detail engineering related to Automation, Instrumentation,Control, Skid and piping platform Plug &amp; Play (Atex, Cryo and Dust environments)'
    },
    {
        package:"HVAC Packages",
        description:"HVAC, Fans, silencers, louvers, Dampers, Ventilation Systems"
    },
    {
        package:"Treatment Packages",
        description:"Oily water separator, Sewage treatment, reverse osmosis Fresh water generators"
    },
    {
        package:"Foundation Packages",
        description:"Epoxy Chockfast Foundation Systems (Red/Orange)"
    },
    {
        package:"Valves",
        description:"Industrial &amp; Marine Valves"
    },
    {
        package:"Lubricants &amp; Chemicals",
        description:"Marine Lubricants and Marine Chemicals"
    },
    {
        package:"Helideck Packages",
        description:"Helideck, Gangway, Aluminium Sections, Helideck belts, Lights and Navigation Equipments, JET Refuel systems"
    },
    {
        package:"Marine Engines",
        description:"Main Engines/Aux Engines/Spares"
    },
    {
        package:"Spares for Marine Engines",
        description:"Main Engines/Spares"
    },
    {
        package:"Inert Gas Systems",
        description:"Nitrogen Gas Systems"
    },
    {
        package:"Air Compressors",
        description:"Starting air &amp; working air compressors and Industrial compressors"
    },
    {
        package:"Marine Doors",
        description:"Watertight sliding doors"
    },
    {
        package:"Propulsion Packages",
        description:"Thrusters"
    },
    {
        package:"Measurement Systems-Torque &amp; Power",
        description:"Torque &amp; Power Measurement Systems"
    },
    {
        package:"Deck Equipment",
        description:"Gangway, Cranes, Davits, Fenders, Marine Loading arm, Bollards, quick release hooks"
    },
    {
        package:"Hydrocarbon Cutoff Valves",
        description:"Engine intake shutoff system"
    },
    {
        package:"Emergency Fire Pump Engine",
        description:"Diesel fire pump Engines"
    },
    {
        package:"Scrubbers ",
        description:"Sox &amp; Nox Cleaning technology"
    },
    {
        package:"Cargo equipment ",
        description:"Grabs and other lifting equipment"
    },
    {
        package:"GRP Piping ",
        description:"Glass Reinforced Epoxy (GRE) Pipes for Sox, Ballast Water System,Filter housing"
    },
    {
        package:"Galley &amp; Laundry Equipments",
        description:"The One Stop Solution to your Galley/Laundry and Living Quarter&#39;s requirements."
    },
    {
        package:"Specialised Pump Packages",
        description:"Diesel and Electric Fire Pumps, semi sub high flow FW/SW pumps"
    },
    {
        package:"Refuelling equip.",
        description:"JET Refuel systems, Tote Tanks (IBC), JET A1 Fuel Storage tanks"
    },
    {
        package:"Pollution control Chem",
        description:"Oil Spill Absorbents (Granules and Kits)"
    },
    {
        package:"Power Generation",
        description:"480V 60Hz – Marine Turbine Generators, Dual (gas and diesel) fuelled power generators, Diesel Emergency power generator package"
    },
    {
        package:"Waste Compactors",
        description:"Marine Bottle Crushers and Waste compactors"
    },
    {
        package:"Cargo Discharge",
        description:" Grabs"
    },
    {
        package:"Drives &amp; Motors ",
        description:"Electric Motors"
    },
    {
        package:"",
        description:""
    },
    {
        package:"Fire Rated Doors ",
        description:"Water tight doors, A40/A60 fire doors"
    },
    {
        package:"Marine Misc Equipments",
        description:"Water contamination detection kits, Marine and Navigation equipments (including navigation radars, oil spill detection radars, radio equipments)"
    },
    {
        package:"RUBBER PRODUCTS",
        description:"Rubber Mats, Rubber hoses and RIG fire proof curtains"
    }
   
   
  ]

  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={12} md={6}>
        <TableContainer component={Paper}>
          <Table >
            <TableHead sx={{backgroundColor:"#454545"}}>
              <TableRow >
                
                <TableCell sx={{color:"#ffffff"}}>PACKAGES</TableCell>
               
                <TableCell sx={{color:"#ffffff"}}>PORTFOLIO EQUIPMENTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow key={row.id}>
                  {/* <TableCell>{row.id}</TableCell> */}
                  <TableCell>{row.package}</TableCell>
                  {/* <TableCell>{row.age}</TableCell> */}
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default ProductSystems

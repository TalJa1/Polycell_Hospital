import React from 'react'
import TraineeHeader from '../../components/layoutComponents/TraineeHeader'
import { Box } from '@mui/material'
import Footer from '../../components/layoutComponents/Footer'
import TraineeHomeComponent from '../../components/traineeHomeComponents/TraineeHomeComponent'

const TraineeHome: React.FC = () => {
  return (
    <div className="class-container">
      <TraineeHeader title="Pollycell" />
      <Box
        sx={{
          backgroundColor: "white",
          // display: "flex",
          // justifyContent: "center",
          // height: "100vh",
          position: "relative",
        }}
      >
        <TraineeHomeComponent/>
      </Box>
      <Footer />
    </div>
  )
}

export default TraineeHome
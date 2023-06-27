import React from 'react'
import Menubar from '../../components/layoutComponents/Menubar'
import ScheduleCP from '../../components/scheduleComponent/ScheduleCp'
import ScheduleGoogle from '../../components/scheduleComponent/ScheduleGoogle'

const SchedulePage : React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <ScheduleGoogle/>
      </main>
    </div>
  )
}

export default SchedulePage
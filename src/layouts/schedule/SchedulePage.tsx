import React from 'react'
import Menubar from '../../components/layoutComponents/Menubar'
import ScheduleCP from '../../components/scheduleComponent/ScheduleCp'

const SchedulePage : React.FC = () => {
  return (
    <div className="container">
      {/* <Menubar /> */}
      <main className="rightlayout">
        <ScheduleCP/>
      </main>
    </div>
  )
}

export default SchedulePage
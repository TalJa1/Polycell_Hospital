import React from 'react'
import Menubar from '../../components/layoutComponents/Menubar'
import FormActivityCp from '../../components/formActivityComponents/FormActivityCp'

const CourseFormActivity : React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
       <FormActivityCp/>
      </main>
    </div>
  )
}

export default CourseFormActivity
import React from 'react'
import Menubar from '../../components/layoutComponents/Menubar'
import DocumentPageCp from '../../components/traineeComponents/DocumentPageCp'

const DocumentPage : React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <DocumentPageCp />
      </main>
    </div>
  )
}

export default DocumentPage
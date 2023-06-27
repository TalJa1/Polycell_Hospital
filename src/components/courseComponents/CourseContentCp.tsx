import React from 'react'
import CourseTabBar from './CourseTabBar'
import CourseEditTopicAccordionCp from './CourseEditTopicAccordionCp'
import CourseViewTopicAccordionCp from './CourseViewTopicAccordionCp';

interface CourseContentProps {
    editMode: boolean;
  }

const CourseContentCp : React.FC<CourseContentProps> = ({ editMode }) => {
  return (
    <div>
        <CourseTabBar/>
        {editMode ? (
          <CourseEditTopicAccordionCp />
        ) : (
          <CourseViewTopicAccordionCp />
        )}
    </div>
  )
}

export default CourseContentCp
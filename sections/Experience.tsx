import React from 'react'
import SectionTitle from '../components/SectionTItle'
import ExperienceCard from '../components/ExperienceCard'

export default function Experience() {
  return (
    <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto dark:bg-slate-950'>
      <SectionTitle text='My Experiences' />
      <ExperienceCard />
    </div>
  )
}

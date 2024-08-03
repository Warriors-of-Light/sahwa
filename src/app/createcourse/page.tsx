'use client'

import CourseForm from '@/components/course/Form'
import Header from '@/components/header'

export default function CreateCourse() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-24 bg-white'>
      <div className=' bg-white z-10 w-full absolute top-0 '>
        <Header  displayLogin />
      </div>
      <CourseForm />
    </main>
  )
}

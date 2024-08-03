'use client'

import CourseForm from '@/components/course/Form'
import Header from '@/components/header'

export default function CreateCourse() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-4 md:p-6 lg:p-8 bg-white'>
      <div className='bg-white z-10 w-full fixed top-0 left-0'>
        <Header displayLogin />
      </div>
      <div className='flex-grow w-full max-w-4xl p-4'>
        <CourseForm />
      </div>
    </main>
  )
}

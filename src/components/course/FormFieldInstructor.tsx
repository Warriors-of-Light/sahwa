import React, { useState, useEffect, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import SearchBar from '../searchbar' // Ensure this import path is correct
import { UserOut } from '@/models/interfaces/user'

interface FormFieldInstructorProps {
  Instructors?: UserOut[]
}

const FormFieldInstructor: React.FC<FormFieldInstructorProps> = ({
  Instructors = [],
}) => {
  const { control, setValue, watch } = useFormContext()
  const [filteredInstructors, setFilteredInstructors] = useState<UserOut[]>(
    []
  )
  const [instructorsLoaded, setInstructorsLoaded] = useState<boolean>(false)

  const selectedInstructor = watch('instructor_id')

  const handleSearch = useCallback((filteredContent?: UserOut[]) => {
    setFilteredInstructors(filteredContent || [])
  }, [])

  useEffect(() => {
    if (Instructors) {
      setFilteredInstructors(Instructors)
      setInstructorsLoaded(true)
    } else {
      setInstructorsLoaded(false)
    }
  }, [Instructors])

  return (
    <div className='flex flex-col'>
      <label className='block text-lg font-medium text-gray-700 text-right'>
        المدرس
      </label>
      {!instructorsLoaded ? (
        <p className='text-gray-500'>جاري تحميل المدرسين...</p>
      ) : (
        <>
          <div className='flex justify-end w-full mt-2'>
            <SearchBar<UserOut>
              placeholder='ابحث عن مدرس هنا'
              searchableContent={Instructors || []}
              properties={['first_name', 'last_name']}
              onSearch={handleSearch}
            />
          </div>
          <div className='flex flex-wrap gap-2 mt-4'>
            {filteredInstructors.length > 0 ? (
              filteredInstructors.map((instructor) => (
                <button
                  key={instructor.id}
                  type='button'
                  className={`px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${
                    selectedInstructor === instructor.id
                      ? 'bg-red-500 text-white shadow-lg transform scale-105 hover:bg-red-400'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => {
                    const newValue =
                      selectedInstructor === instructor.id
                        ? undefined
                        : instructor.id
                    setValue('instructor_id', newValue)
                  }}
                >
                  {instructor.first_name} {instructor.last_name}
                </button>
              ))
            ) : (
              <p className='text-gray-500'>لا يوجد مدرسين</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default FormFieldInstructor

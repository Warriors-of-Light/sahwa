import React, { useState, useEffect, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import SearchBar from '../searchbar' 
import { Tag } from '@/models/interfaces/tag'

interface FormFieldTagsProps {
  tags?: Tag[] 
}

const FormFieldTags: React.FC<FormFieldTagsProps> = ({ tags }) => {
  const { setValue, watch } = useFormContext()
  const [filteredTags, setFilteredTags] = useState<Tag[]>([])
  const [tagsLoaded, setTagsLoaded] = useState<boolean>(false)

  const selectedTags = watch('tags_ids') || []

  const handleSearch = useCallback((filteredContent?: Tag[]) => {
    setFilteredTags(filteredContent || [])
  }, [])


  useEffect(() => {
    if (tags) {
      setFilteredTags(tags)
      setTagsLoaded(true)
    } else {
      setTagsLoaded(false)
    }
  }, [tags])

  return (
    <div className='flex flex-col'>
      <label className='block text-lg font-medium text-gray-700 text-right'>
        العلامات
      </label>
      {!tagsLoaded ? (
        <p className='text-gray-500'>جاري تحميل العلامات...</p>
      ) : (
        <>
          <div className='flex justify-end w-full mt-2'>
            <SearchBar<Tag>
              placeholder='ابحث عن اهتمامك هنا'
              searchableContent={tags || []}
              properties={['name']}
              onSearch={handleSearch}
            />
          </div>
          <div className='flex flex-wrap gap-2 mt-4'>
            {filteredTags.length > 0 ? (
              filteredTags.map((tag) => (
                <button
                  key={tag.id}
                  type='button'
                  className={`px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${
                    selectedTags.includes(tag.id)
                      ? 'bg-red-500 text-white shadow-lg transform scale-105 hover:bg-red-400'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => {
                    const newValue = selectedTags.includes(tag.id)
                      ? selectedTags.filter((id: number) => id !== tag.id)
                      : [...selectedTags, tag.id]
                    setValue('tags_ids', newValue)
                  }}
                >
                  {tag.name}
                </button>
              ))
            ) : (
              <p className='text-gray-500'>لا توجد علامات</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default FormFieldTags

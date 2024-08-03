import React, { useState, useEffect, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import SearchBar from '../searchbar' // Adjust the import path as necessary
import { Badge } from '@/models/interfaces/badge'
import Image from 'next/image'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

interface FormFieldBadgesProps {
  badges?: Badge[] // badges can be undefined
}

const FormFieldBadges: React.FC<FormFieldBadgesProps> = ({ badges = [] }) => {
  const { control, setValue, watch } = useFormContext()
  const [filteredBadges, setFilteredBadges] = useState<Badge[]>([])
  const [badgesLoaded, setBadgesLoaded] = useState<boolean>(false)

  const selectedBadges = watch('badges_ids') || []

  const handleSearch = useCallback((filteredContent?: Badge[]) => {
    setFilteredBadges(filteredContent || [])
  }, [])

  // Effect to handle badges when they are loaded or changed
  useEffect(() => {
    if (badges) {
      setFilteredBadges(badges)
      setBadgesLoaded(true)
    } else {
      setBadgesLoaded(false)
    }
  }, [badges])

  return (
    <FormField
      control={control}
      name='badges_ids'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='block text-lg font-medium text-gray-700 text-right'>
            الشارات
          </FormLabel>
          <FormControl>
            <div className='flex flex-col'>
              {!badgesLoaded ? (
                <p className='text-gray-500'>جاري تحميل الشارات...</p>
              ) : (
                <>
                  <div className='flex justify-end w-full mt-2'>
                    <SearchBar<Badge>
                      placeholder='ابحث عن شارة هنا'
                      searchableContent={badges}
                      properties={['name']}
                      onSearch={handleSearch}
                    />
                  </div>
                  <div className='flex flex-wrap gap-4 justify-center items-center mt-4 min-w-[300px]'>
                    {filteredBadges.length > 0 ? (
                      filteredBadges.map((badge) => (
                        <button
                          key={badge.id}
                          type='button'
                          className={`flex items-center justify-center px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${
                            field.value.includes(badge.id)
                              ? 'bg-red-500 text-white shadow-lg transform scale-105 hover:bg-red-400'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                          onClick={() => {
                            const newValue = field.value.includes(badge.id)
                              ? field.value.filter(
                                  (id: number) => id !== badge.id
                                )
                              : [...field.value, badge.id]
                            setValue('badges_ids', newValue)
                          }}
                        >
                          <Image
                            src={badge.image}
                            alt={badge.name}
                            className='w-8 h-8 mr-2'
                            width={32}
                            height={32}
                          />
                          {badge.name}
                        </button>
                      ))
                    ) : (
                      <p className='text-gray-500'>لا توجد شارات</p>
                    )}
                  </div>
                </>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldBadges

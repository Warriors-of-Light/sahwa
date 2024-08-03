// FormFieldBadges.tsx
import React from 'react'
import { useFormContext } from 'react-hook-form'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

import Image from 'next/image'
import { Badge } from '@/models/interfaces/badge'

interface FormFieldBadgesProps {
  badges?: Badge[]
}

const FormFieldBadges: React.FC<FormFieldBadgesProps> = ({ badges }) => {
  const { control } = useFormContext()

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
            <div className='flex flex-wrap gap-4 justify-center items-center'>
              {badges?.map((badge: Badge) => (
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
                      ? field.value.filter((id: number) => id !== badge.id)
                      : [...field.value, badge.id]
                    field.onChange(newValue)
                  }}
                >
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    className='w-8 h-8 mr-2'
                    width={32}
                    height={32}
                  />
                </button>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldBadges

// FormFieldTags.tsx
import React from 'react'
import { useFormContext } from 'react-hook-form'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Tag } from '@/models/interfaces/tag'
import Item from '../ui/drop'
export interface Lesson {
  name: string
  youtube_link: string
}

interface FormFieldLessonsProps {
  moveItem: (dragIndex: number, hoverIndex: number) => void
}

const FormFieldLessons: React.FC<FormFieldLessonsProps> = ({ moveItem }) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name='lessons'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='block text-lg font-medium text-gray-700 text-right'>
            الدروس
          </FormLabel>
          <FormControl>
            <ul className='space-y-2'>
              {field.value.map((item: Lesson, index: number) => (
                <li
                  key={index}
                  className='p-2 border border-gray-300 rounded-md shadow-sm'
                >
                  <Item item={item} index={index} moveItem={moveItem} />
                </li>
              ))}
            </ul>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldLessons

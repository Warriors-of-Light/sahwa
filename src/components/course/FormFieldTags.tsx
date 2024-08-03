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


interface FormFieldTagsProps {
  tags?: Tag[]
}

const FormFieldTags: React.FC<FormFieldTagsProps> = ({ tags }) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name='tags_ids'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='block text-lg font-medium text-gray-700 text-right'>
            العلامات
          </FormLabel>
          <FormControl>
            <div className='flex flex-wrap gap-2'>
              {tags?.map((tag: Tag) => (
                <button
                  key={tag.id}
                  type='button'
                  className={`px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${
                    field.value.includes(tag.id)
                      ? 'bg-red-500 text-white shadow-lg transform scale-105 hover:bg-red-400'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => {
                    const newValue = field.value.includes(tag.id)
                      ? field.value.filter((id: number) => id !== tag.id)
                      : [...field.value, tag.id]
                    field.onChange(newValue)
                  }}
                >
                  {tag.name}
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

export default FormFieldTags

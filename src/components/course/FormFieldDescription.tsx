// FormFieldDescription.tsx
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { Textarea } from '../ui/textarea'

const FormFieldDescription = () => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name='description'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='block text-lg font-medium text-gray-700 text-right'>
            وصف الدورة التدريبية
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder='حدثنا قليلا عن هذه الدورة التدريبية'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-right'
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldDescription

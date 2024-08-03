import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { Input } from '../ui/input'

const FormFieldName = () => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name='name'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='block text-lg font-medium text-gray-700 text-right'>
            أسم الدورة التدريبية
          </FormLabel>
          <FormControl>
            <Input
              placeholder='ادخل اسم الدورة'
              {...field}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-right'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldName

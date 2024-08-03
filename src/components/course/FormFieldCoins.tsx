// FormFieldCoins.tsx
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { Input } from '../ui/input'

const FormFieldCoins = () => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name='coins_to_win'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='block text-lg font-medium text-gray-700 text-right'>
            العملات
          </FormLabel>
          <FormControl>
            <Input
              placeholder='ادخل عدد العملات'
              type='number'
              value={field.value ?? ''}
              onChange={(e) =>
                field.onChange(
                  e.target.value === '' ? undefined : Number(e.target.value)
                )
              }
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-right'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormFieldCoins
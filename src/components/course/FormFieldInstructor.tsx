// FormFieldInstructor.tsx
import { useFormContext } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import { Check, ChevronsUpDown } from 'lucide-react'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { UserSummary } from '@/models/interfaces/user'


interface FormFieldInstructorProps {
  Instructors?: UserSummary[]
}

const FormFieldInstructor: React.FC<FormFieldInstructorProps> = ({
  Instructors,
}) => {
  const { control, setValue } = useFormContext()

  return (
    <FormField
      control={control}
      name='instructor_id'
      render={({ field, fieldState }) => (
        <FormItem className='flex flex-col'>
          <FormLabel className='block text-lg font-medium text-gray-700 text-right'>
            المدرس
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant='outline'
                  role='combobox'
                  className={cn(
                    'w-full md:w-[200px] justify-between border-gray-300 text-gray-900 text-right',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value
                    ? Instructors?.find((user) => user.id === field.value)
                        ?.first_name +
                      ' ' +
                      Instructors?.find((user) => user.id === field.value)
                        ?.last_name
                    : 'اسم المدرس'}
                  <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-full md:w-[200px] p-0'>
              <Command>
                <CommandInput
                  className='text-right'
                  placeholder='ادخل اسم المدرس'
                />
                <CommandList>
                  <CommandEmpty>لم يتم العثور على مدرس</CommandEmpty>
                  <CommandGroup>
                    {Instructors?.map((user) => (
                      <CommandItem
                        value={`${user.first_name} ${user.last_name}`}
                        key={user.id}
                        onSelect={() => {
                          setValue('instructor_id', user.id)
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            user.id === field.value
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                        {user.first_name} {user.last_name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage className='mt-1 text-red-500 text-right'>
            {fieldState.error?.message}
          </FormMessage>
        </FormItem>
      )}
    />
  )
}

export default FormFieldInstructor

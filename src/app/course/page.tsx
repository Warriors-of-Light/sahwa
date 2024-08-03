import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


// Define schema with regex validation
const formSchema = z.object({
  items: z
    .array(
      z.object({
        name: z
          .string()
          .min(1, 'Name is required')
          .regex(/^[A-Za-z]+$/, 'Name must contain only letters'),
        youtubeLink: z
          .string()

          .regex(
            /^https?:\/\/(www\.)?youtube\.com\/.+$/,
            'Must be a valid YouTube link'
          ),
      })
    )
    .optional()
    .default([]),
})

type FormValues = z.infer<typeof formSchema>

const FormWithDialog = () => {
  const [showDialog, setShowDialog] = useState(false)
  const description =
    'Enter the details of the item you want to add to the list.'

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      items: [],
    },
  })

  const onSubmit = (values: FormValues) => {
    console.log('Form submitted with values:', values)
  }

  const handleDialogSubmit = (name: string, youtubeLink: string) => {
    const newItem = {
      name: name.trim(),
      youtubeLink: youtubeLink.trim(),
    }
    const updatedItems = [...form.getValues('items'), newItem]
    form.setValue('items', updatedItems)
    setShowDialog(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='items'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg font-semibold'>Items</FormLabel>
              <FormControl>
                <ul className='space-y-2'>
                  {field.value.map((item, index) => (
                    <li key={index}>
                      <div className='font-semibold'>{item.name}</div>
                      {item.youtubeLink && (
                        <a
                          href={item.youtubeLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-blue-500 hover:underline'
                        >
                          {item.youtubeLink}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </FormControl>
            </FormItem>
          )}
        />
        <FormItem>
          <FormControl>
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
              <DialogTrigger asChild>
                <Button variant='outline'>Add Item</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Item</DialogTitle>
                  {description && (
                    <DialogDescription id='dialog-description'>
                      {description}
                    </DialogDescription>
                  )}
                </DialogHeader>
                <div className='space-y-4'>
                  <FormItem>
                    <FormLabel>Item Name</FormLabel>
                    <FormControl>
                      <Controller
                        name='name'
                        control={form.control}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Input
                              placeholder='Enter item name'
                              {...field}
                              onChange={(e) => field.onChange(e.target.value)}
                            />
                            {error && (
                              <CustomFormMessage
                                message={error.message}
                                type='error'
                              />
                            )}
                          </>
                        )}
                      />
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormLabel>YouTube Link (Optional)</FormLabel>
                    <FormControl>
                      <Controller
                        name='youtubeLink'
                        control={form.control}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Input
                              placeholder='Enter YouTube link'
                              {...field}
                              onChange={(e) => field.onChange(e.target.value)}
                            />
                            {error && (
                              <CustomFormMessage
                                message={error.message}
                                type='error'
                              />
                            )}
                          </>
                        )}
                      />
                    </FormControl>
                  </FormItem>
                </div>
                <DialogFooter>
                  <Button
                    type='button'
                    onClick={() =>
                      handleDialogSubmit(
                        form.getValues('name'),
                        form.getValues('youtubeLink')
                      )
                    }
                  >
                    Save Item
                  </Button>
                  <DialogClose asChild>
                    <Button variant='outline'>Cancel</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </FormControl>
        </FormItem>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}

export default FormWithDialog

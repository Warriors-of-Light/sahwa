'use client'
import React, { useState, useRef } from 'react'
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
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Define the drag item type
const ItemType = 'ITEM'

interface DragItem {
  index: number
  id: string
  type: string
}

const formSchema = z.object({
  items: z
    .array(
      z.object({
        name: z.string(),
        youtubeLink: z.string().url().optional(),
      })
    )
    .optional()
    .default([]),
})

type FormValues = z.infer<typeof formSchema>

const FormWithDialog = () => {
  const [dialogName, setDialogName] = useState('')
  const [dialogYouTubeLink, setDialogYouTubeLink] = useState('')
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

  const handleDialogSubmit = () => {
    if (dialogName.trim() !== '') {
      const newItem = {
        name: dialogName.trim(),
        youtubeLink: dialogYouTubeLink.trim(),
      }
      const updatedItems = [...form.getValues('items'), newItem]
      form.setValue('items', updatedItems)
      setDialogName('')
      setDialogYouTubeLink('')
      setShowDialog(false)
    }
  }

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const items = form.getValues('items')
    const dragItem = items[dragIndex]
    const updatedItems = [...items]
    updatedItems.splice(dragIndex, 1)
    updatedItems.splice(hoverIndex, 0, dragItem)
    form.setValue('items', updatedItems)
  }

  const Item = ({ item, index }: { item: any; index: number }) => {
    const ref = useRef<HTMLDivElement>(null)

    const [, drop] = useDrop({
      accept: ItemType,
      hover(draggedItem: DragItem) {
        if (!ref.current) return
        const dragIndex = draggedItem.index
        const hoverIndex = index
        if (dragIndex === hoverIndex) return
        moveItem(dragIndex, hoverIndex)
        draggedItem.index = hoverIndex
      },
    })

    const [{ isDragging }, drag] = useDrag({
      type: ItemType,
      item: { type: ItemType, id: item.name, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })

    drag(drop(ref))

    return (
      <div
        ref={ref}
        className={`flex items-center justify-between p-4 bg-white rounded shadow mb-2 ${
          isDragging ? 'opacity-50' : 'opacity-100'
        }`}
      >
        <div>
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
        </div>
        <div className='cursor-move text-gray-500'>&#9776;</div>
      </div>
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
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
                        <Item item={item} index={index} />
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
                        <Input
                          placeholder='Enter item name'
                          value={dialogName}
                          onChange={(e) => setDialogName(e.target.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <FormItem>
                      <FormLabel>YouTube Link (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter YouTube link'
                          value={dialogYouTubeLink}
                          onChange={(e) => setDialogYouTubeLink(e.target.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                  <DialogFooter>
                    <Button type='button' onClick={handleDialogSubmit}>
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
    </DndProvider>
  )
}

export default FormWithDialog

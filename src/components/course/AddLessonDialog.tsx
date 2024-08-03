import React from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

interface AddLessonDialogProps {
  showDialog: boolean
  setShowDialog: (value: boolean) => void
  description?: string
  dialogName: string
  setDialogName: (value: string) => void
  dialogYouTubeLink: string
  setDialogYouTubeLink: (value: string) => void
  handleDialogSubmit: () => void
}

const AddLessonDialog: React.FC<AddLessonDialogProps> = ({
  showDialog,
  setShowDialog,
  description,
  dialogName,
  setDialogName,
  dialogYouTubeLink,
  setDialogYouTubeLink,
  handleDialogSubmit,
}) => {
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <div className='flex justify-start '>
          <Button
            type='button'
            variant='outline'
            className='py-2 px-4 border rounded-md bg-red-600 text-white text-sm font-medium shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out'
          >
            اضافة درس
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className='p-4'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-semibold text-center'>
            اضافة الدرس
          </DialogTitle>
          {description && (
            <DialogDescription
              id='dialog-description'
              className='text-gray-600 text-right'
            >
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <FormItem>
          <FormLabel className='block text-lg font-medium text-gray-700 text-right'>
            اسم الدرس
          </FormLabel>
          <FormControl>
            <Input
              placeholder='ادخل اسم الدرس'
              value={dialogName}
              onChange={(e) => setDialogName(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-right'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel className='block text-lg font-medium text-gray-700 text-right'>
            رابط الفيديو
          </FormLabel>
          <FormControl>
            <Input
              placeholder='ادخل رابط الفيديو'
              value={dialogYouTubeLink}
              onChange={(e) => setDialogYouTubeLink(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-right'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <DialogFooter>
          <Button
            type='button'
            onClick={handleDialogSubmit}
            className='py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          >
            تسجيل الدرس
          </Button>
          <DialogClose asChild>
            <Button
              type='button'
              variant='outline'
              className='py-2 px-4 border border-gray-300 rounded-md ml-2 text-gray-700 hover:bg-gray-100'
            >
              الغاء
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddLessonDialog

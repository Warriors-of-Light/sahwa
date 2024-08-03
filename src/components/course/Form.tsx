'use client'
import {
  CourseSchema,
  CourseSchemaType,
  defaultFormCourse,
} from '@/models/validation/courseForm'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useToast } from '../ui/use-toast'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import { Check, ChevronsUpDown, ImagePlus } from 'lucide-react'
import { UserSummary } from '@/models/interfaces/user'
import { Tag } from '@/models/interfaces/tag'
import { Badge } from '@/models/interfaces/badge'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

import { useDropzone } from 'react-dropzone'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { fetchBadges, fetchInstructors, fetchTags } from '@/utils/fetchers'
import { baseUrl } from '@/models/interfaces/baseUrl'
import Item from '../ui/drop'
import FormFieldName from './FormFieldName'
import FormFieldCost from './FormFieldCost'
import FormFieldCoins from './FormFieldCoins'
import FormFieldDescription from './FormFieldDescription'
import FormFieldInstructor from './FormFieldInstructor'
import FormFieldTags from './FormFieldTags'
import FormFieldBadges from './FormFieldBadges'
import AddLessonDialog from './AddLessonDialog'
import FormFieldLessons from './FormFieldTags copy'

export default function CourseForm() {
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>('')
  const [dialogName, setDialogName] = useState('')
  const [dialogYouTubeLink, setDialogYouTubeLink] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const { toast } = useToast()
  const description = 'أدخل تفاصيل الدرس الذي تريد إضافته إلى القائمة'
  const queryClient = useQueryClient()

  const { data: Instructors } = useQuery<UserSummary[]>({
    queryKey: ['instructors'],
    queryFn: fetchInstructors,
  })

  const { data: tags } = useQuery<Tag[]>({
    queryKey: ['tags'],
    queryFn: fetchTags,
  })

  const { data: badges } = useQuery<Badge[]>({
    queryKey: ['badges'],
    queryFn: fetchBadges,
  })

  const form = useForm<CourseSchemaType>({
    resolver: zodResolver(CourseSchema),
    defaultValues: defaultFormCourse,
  })

  const handleDialogSubmit = () => {
    if (dialogName.trim() !== '') {
      const newItem = {
        name: dialogName.trim(),
        youtube_link: dialogYouTubeLink.trim(),
      }
      const updatedItems = [...form.getValues('lessons'), newItem]
      form.setValue('lessons', updatedItems)
      setDialogName('')
      setDialogYouTubeLink('')
      setShowDialog(false)

      toast({
        title: 'نجاح',
        description: 'تم انشاء الدرس بنجاح',
      })
    } else {
      toast({
        title: 'خطأ',
        description: 'هناك مشكلة في نظامنا الرجاء المحاولة لاحقا',
        variant: 'destructive',
      })
    }
  }
  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const items = form.getValues('lessons')
    const dragItem = items[dragIndex]
    const updatedItems = [...items]
    updatedItems.splice(dragIndex, 1)
    updatedItems.splice(hoverIndex, 0, dragItem)
    form.setValue('lessons', updatedItems)
  }

  const { mutate: CreateClass } = useMutation({
    mutationFn: async (values) => {
      const { data } = await axios.post(`${baseUrl}courses/`, values)
      return data
    },
    onError: (error) => {
      return toast({
        title: 'خطأ',
        description: 'هناك مشكلة في نظامنا الرجاء المحاولة لاحقا',
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })

      form.reset()
      setPreview(null) 
      form.setValue('thumbnail', '') 
      return toast({
        title: 'نجاح',
        description: 'تم انشاء الدورة بنجاح',
      })
    },
  })
  async function onSubmit(values: CourseSchemaType) {
    const payload: CourseSchemaType = {
      badges_ids: values.badges_ids,
      coins_to_win: values.coins_to_win,
      cost: values.cost,
      description: values.description,
      name: values.name,
      thumbnail: values.thumbnail,
      tags_ids: values.tags_ids,
      instructor_id: values.instructor_id,
      lessons: values.lessons,
    }
    console.log(payload)
    // @ts-ignore
    CreateClass(payload)
  }

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader()
      try {
        reader.onload = () => {
          if (reader.result) {
            const dataUrl = reader.result.toString()
            setPreview(dataUrl)
            form.setValue('thumbnail', dataUrl)
            form.clearErrors('thumbnail')
          }
        }
        reader.readAsDataURL(acceptedFiles[0])
      } catch (error) {
        setPreview(null)
        form.resetField('thumbnail')
      }
    },
    [form]
  )

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { 'image/png': [], 'image/jpg': [], 'image/jpeg': [] },
    })
  return (
    <DndProvider backend={HTML5Backend}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 md:space-y-8 mx-auto max-w-3xl p-4 bg-white rounded-lg shadow-md mt-10'
          dir='rtl'
        >
          <FormFieldName />
          <FormFieldCost />
          <FormFieldCoins />
          <FormFieldDescription />
          <FormFieldInstructor Instructors={Instructors} />
          <FormFieldTags tags={tags} />
          <FormFieldBadges badges={badges} />
          <FormField
            control={form.control}
            name='thumbnail'
            render={() => (
              <FormItem className='mx-auto md:w-1/2'>
                <FormLabel
                  className={`text-lg font-medium ${
                    fileRejections.length !== 0
                      ? 'text-red-500'
                      : 'text-gray-700'
                  } text-right`}
                >
                  <h2 className='text-xl font-semibold tracking-tight'>
                    قم بتحميل صورت الدورة
                  </h2>
                </FormLabel>
                <FormControl>
                  <div
                    {...getRootProps()}
                    className='flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:border-blue-500'
                  >
                    {preview && (
                      <Image
                        src={preview as string}
                        alt='Uploaded image'
                        width={600}
                        height={400}
                        className='max-h-[400px] max-w-full w-auto h-auto rounded-lg object-contain'
                      />
                    )}
                    <ImagePlus
                      className={`size-40 ${preview ? 'hidden' : 'block'}`}
                    />
                    <Input {...getInputProps()} type='file' />
                    {isDragActive ? (
                      <p className='text-right'>ضع الصورة هنا</p>
                    ) : (
                      <p className='text-right'>
                        انقر هنا أو اسحب الصورة لتحميلها
                      </p>
                    )}
                  </div>
                </FormControl>
                <FormMessage>
                  {fileRejections.length !== 0 && (
                    <p className='text-red-500'>
                      Image must be less than 1MB and of type png, jpg, or jpeg
                    </p>
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormFieldLessons  moveItem={moveItem} />
          <AddLessonDialog
            showDialog={showDialog}
            setShowDialog={setShowDialog}
            description={description}
            dialogName={dialogName}
            setDialogName={setDialogName}
            dialogYouTubeLink={dialogYouTubeLink}
            setDialogYouTubeLink={setDialogYouTubeLink}
            handleDialogSubmit={handleDialogSubmit}
          />
          <Button
            type='submit'
            className='mx-auto block w-full sm:w-auto px-8  bg-gradient-to-r from-red-400 to-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-red-500 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-transform duration-300 ease-out transform hover:scale-105'
          >
            تسجيل الدورة
          </Button>
        </form>
      </Form>
    </DndProvider>
  )
}

import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

interface ItemProps {
  item: any
  index: number
  moveItem: (dragIndex: number, hoverIndex: number) => void
}

const Item: React.FC<ItemProps> = ({ item, index, moveItem }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [, drop] = useDrop({
    accept: 'ITEM', // Replace 'ITEM' with the actual type if necessary
    hover(draggedItem: { index: number }) {
      if (!ref.current) return
      const dragIndex = draggedItem.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return
      moveItem(dragIndex, hoverIndex)
      draggedItem.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM', // Replace 'ITEM' with the actual type if necessary
    item: { type: 'ITEM', id: item.name, index },
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
        {item.youtube_link && (
          <a
            href={item.youtube_link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            {item.youtube_link}
          </a>
        )}
      </div>
      <div className='cursor-move text-gray-500'>&#9776;</div>
    </div>
  )
}

export default Item

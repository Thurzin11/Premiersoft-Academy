import React from 'react'

interface IProps{
    category: ICategory,
    handleDelete: (category: ICategory) => void
}

const Pill = ({category, handleDelete}: IProps) => {
  return (
    <div className='flex justify-between items-center bg-gray-200 rounded-full px-3 py-1'>
      <p>{category.name}</p>
      <span className='cursor-pointer' onClick={()=>{handleDelete(category)}} >X</span>
    </div>
  )
}

export default Pill

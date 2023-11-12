import React from 'react'
import Story from '../story/Story'
import './Stories.css'
import HorizontalScroll from 'react-scroll-horizontal'

const Stories = () => {
  return (
    <div className='stories'>
      <HorizontalScroll className="scroll" reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
  )
}

export default Stories
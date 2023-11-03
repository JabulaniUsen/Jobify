import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../assets/ali.png'
import amazon from '../../assets/amazon.png'
import ig from '../../assets/ig.png'
import linkedin from '../../assets/linkedin.png'
import micros from '../../assets/microsoft.png'
import sony from '../../assets/sony.png'

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Frontend Eng',
    time: 'Now',
    location: 'London',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Alibaba Group'
  },
  {
    id: 2,
    image: amazon,
    title: 'Flutter Developer',
    time: 'Now',
    location: 'NYC',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Amazon'
  },
  {
    id: 3,
    image: sony,
    title: 'Java developer',
    time: 'Now',
    location: 'Toronto, Canada',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Sony Tech'
  },
  {
    id: 4,
    image: linkedin,
    title: 'Golang Eng',
    time: 'Now',
    location: 'Califonia, USA',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'LinkedIn'
  },
  {
    id: 5,
    image: sony,
    title: 'Backend Eng',
    time: 'Now',
    location: 'Lagos, Nigeria',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Sony Tech'
  },
  {
    id: 6,
    image: ig,
    title: 'Product Designer',
    time: 'Now',
    location: 'Chicago',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Meta'
  },
  {
    id: 7,
    image: logo1,
    title: 'Copy Writer',
    time: 'Now',
    location: 'Hong Kong, China',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Alibaba Group'
  },
  {
    id: 8,
    image: amazon,
    title: 'Prodct Manager',
    time: 'Now',
    location: 'Miami, USA',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Amazon'
  },
  {
    id: 9,
    image: logo1,
    title: 'DevOps Eng',
    time: 'Now',
    location: 'China',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Alibaba Group'
  },
  {
    id: 10,
    image: micros,
    title: 'Frontend Eng',
    time: 'Now',
    location: 'London',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'MircroSoft'
  },
  {
    id: 1,
    image: logo1,
    title: 'Frontend Eng',
    time: 'Now',
    location: 'London',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Alibaba Group'
  },
  {
    id: 2,
    image: amazon,
    title: 'Flutter Developer',
    time: 'Now',
    location: 'NYC',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Amazon'
  },
  {
    id: 3,
    image: sony,
    title: 'Java developer',
    time: 'Now',
    location: 'Toronto, Canada',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Sony Tech'
  },
  {
    id: 4,
    image: linkedin,
    title: 'Golang Eng',
    time: 'Now',
    location: 'Califonia, USA',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'LinkedIn'
  },
  {
    id: 5,
    image: sony,
    title: 'Backend Eng',
    time: 'Now',
    location: 'Lagos, Nigeria',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Sony Tech'
  },
  {
    id: 6,
    image: ig,
    title: 'Product Designer',
    time: 'Now',
    location: 'Chicago',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Meta'
  },
  {
    id: 7,
    image: logo1,
    title: 'Copy Writer',
    time: 'Now',
    location: 'Hong Kong, China',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Alibaba Group'
  },
  {
    id: 8,
    image: amazon,
    title: 'Prodct Manager',
    time: 'Now',
    location: 'Miami, USA',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Amazon'
  },
  {
    id: 9,
    image: logo1,
    title: 'DevOps Eng',
    time: 'Now',
    location: 'China',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Alibaba Group'
  },
  {
    id: 10,
    image: sony,
    title: 'Frontend Eng',
    time: 'Now',
    location: 'London',
    desc: 'Lorem djjk dksnek jaemd kdknek kddnkdkdk dknkndk cdggbin dknvkndk c',
    company: 'Sony'
  },
  
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        
        { Data.map(({ id, image, title, time, location, desc, company}) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>
                  {title}
                </h1> 
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive/>{time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="" className='w-[10%]' />
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                Apply Now
              </button>
            </div>
          )
        }) }

      </div>
    </div>
  )
}

export default Jobs
import React from 'react'
import './HomeLastNews.css'
import store from '../../Store'
export default function HomeLastNews() {
  return (
   <>
   {
       store.homeLastNewItems.map((item,index)=>(
              <div className="col-12 col-md-4  mt-5" key={index}>
                     <div className='home-last-news-box-container my-5 cp p-3 '>
              <div className="home-last-news-img-container rounded-2 overflow-hidden mb-2">
                <img src={item.img} className='w-100 h-100 img-fluid' alt="" />
              </div>
              <a className='home-last-news-box-title mt-5 cp'>
                {item.title}
              </a>
              <div className='home-last-news-box-subtitle my-2 cp'>
                <a className='home-last-news-subtitle-link'>by Jane Doe </a>
                /
                <a className='home-last-news-subtitle-link'> Competition</a>
                / {item.date}
              </div>
              <p className='text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristiqu...
              </p>
              <button className='btn home-last-news-box-btn'> Read More <i className='fa fa-arrow-right home-last-news-box-btn-icon'></i></button>
              </div>
            </div>
       ))
   }
  
   </>
  )
}

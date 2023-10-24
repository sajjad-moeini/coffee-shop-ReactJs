import React, { useEffect } from 'react'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeHeaderCarousel from '../../Components/HomeHeaderCarousel/HomeHeaderCarousel'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import HomeBookTableBoxes from '../../Components/HomeBookTableBoxes/HomeBookTableBoxes'
import BaristaProptiesBoxes from '../../Components/BaristaProptiesBoxes/BaristaProptiesBoxes'
import SvgGen from '../../Components/SvgGen/SvgGen'
import HomeCoffeTools from '../../Components/HomeCoffeTools/HomeCoffeTools'
import VerticalSwiper from '../../Components/VerticalSwiper/VerticalSwiper'
import HomeMenuGerator from '../../Components/HomeMenuGerator/HomeMenuGerator';
import { Link } from 'react-router-dom';
import HomeProducts from '../../Components/HomeProducts/HomeProducts';
import HomeLastNews from '../../Components/HomeLastNews/HomeLastNews';




export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <HomeHeaderCarousel />
      <SectionTitle subTitle={'What Happens Here'} title={'COFFEE BUILD YOUR BASE.'} titleColor={'black'} />
      <div className="home-booktable-section">
        <div className="row w-75 mx-auto py-5">
          <HomeBookTableBoxes type={'persons'} />
          <HomeBookTableBoxes type={'date'} />
          <HomeBookTableBoxes type={'time'} />
          <div className="col-2">
            <button className='gold-btn home-booktable-btn'>Book A Table</button>
          </div>
        </div>
      </div>
      <BaristaProptiesBoxes />
      <div className='homepage-our-application-section position-relative'>
        <SvgGen pos={'top'} />
        <SvgGen pos={'buttom'} />
        <div className="row w-100 h-100">
          <div className="col-12 col-md-6 d-flex-centering ">
            <img src="images/home/home-1-img-6.png" className='img-fluid' alt="" />
          </div>
          <div className="col-12 col-md-6 d-flex-centering">
            <div>
              <div className='homepage-our-application-section-subTutle text-light my-4'>Application</div>
              <div className='homepage-our-application-section-title text-light h1 my-5'>USE OUR APPLICATION.</div>
              <div className="borderW30"></div>
              <p className='text-light my-5'>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius.
              </p>
              <button className='homepage-our-application-section-btn mt-3 cp'>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <HomeCoffeTools />
      <div className="best-coffee-inCity-section w-75 mx-auto py-5 ">
        <div className="row g-0 align-items-center">
          <div className="col-12 col-md-6 best-coffee-inCity-infos d-flex flex-column justify-content-around p-5" data-aos="fade-right" data-aos-duration="1000">
            <div className="h1 text-light">
              TRY THE BEST COFFEE IN THE CITY
            </div>

            <p className=' text-light my-5'>
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an at dictum lacu pericula uni euripidis.
            </p>
            <a href="#" className='btn best-coffee-inCity-btn text-light me-auto' > Read More <i className='fa fa-arrow-right best-coffee-inCity-btn-arrow'></i></a>
          </div>
          <div className="col-12 col-md-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
            <VerticalSwiper />
          </div>
        </div>
      </div>
      <div className="home-barista-menu position-relative ">
        <SvgGen pos={'buttom'} />
        <SvgGen pos={'top'} />
        <div className='home-barista-menu-wrapper w-100 h-100 py-5'>
          <SectionTitle subTitle={'What Happens Here'} title={'FAVOURITE COFFEE FLAVOURS.'} titleColor={'white'} />
          <HomeMenuGerator />
          <div className='my-2 mx-auto d-flex-centering'>
            <Link className='home-barista-menu-btn text-light my-5' to={'/menu'}>View Menu</Link>
          </div>
        </div>
      </div>
      <div className="home-products py-5">
        <SectionTitle title={'COFFEE BUILD YOUR BASE.'} subTitle={'What Happens Here'} titleColor={'black'} />
        <HomeProducts />
      </div>
      <div className="home-pics-container">
        <div className="row w-100 justify-content-center my-5">
          <div className=" col-12 col-md-4 g-0 ">
            <div className="home-pics-wrapper overflow-hidden cp position-relative">
              <img src="images/home/home-1-gallery-1.jpg" className='w-100 h-100' alt="" />
              <div className="home-pic-layout position-absolute"></div>
            </div>
          </div>
          <div className=" col-12 col-md-2 g-0 ">
            <div className="h-50">
              <div className="home-pics-wrapper overflow-hidden cp position-relative">
                <img src="images/home/home-1-gallery-2.jpg" className='w-100 h-100' alt="" />
                <div className="home-pic-layout position-absolute"></div>
              </div>
            </div>
            <div className="h-50">
              <div className="home-pics-wrapper overflow-hidden cp position-relative">
                <img src="images/home/home-1-gallery-3.jpg" className='w-100 h-100' alt="" />
                <div className="home-pic-layout position-absolute"></div>
              </div>
            </div>

          </div>
          <div className=" col-12 col-md-2 g-0 ">
            <div className="home-pics-wrapper overflow-hidden cp h-100 position-relative">
              <img src="images/home/home-1-gallery-4.jpg" className='w-100 h-100' alt="" />
              <div className="home-pic-layout position-absolute"></div>
            </div>
          </div>
          <div className=" col-12 col-md-2 g-0 ">
            <div className="h-50">
              <div className="home-pics-wrapper overflow-hidden cp position-relative">
                <img src="images/home/home-1-gallery-5.jpg" className='w-100 h-100' alt="" />
                <div className="home-pic-layout position-absolute"></div>
              </div>
            </div>
            <div className="h-50">
              <div className="home-pics-wrapper overflow-hidden cp position-relative">
                <img src="images/home/home-1-gallery-6.jpg" className='w-100 h-100' alt="" />
                <div className="home-pic-layout position-absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-last-news'>
        <div className="row mx-auto" style={{width:'90%'}}>
         <HomeLastNews />
        </div>
      </div>
    </>
  )
}

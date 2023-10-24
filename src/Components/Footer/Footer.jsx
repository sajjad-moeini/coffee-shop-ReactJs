import React from 'react'
import './Footer.css'
import store from '../../Store'
export default function Footer() {
       return (
              <>
                     <div className='footer'>
                            <div className="footer-wrapper mx-auto">
                                   <div className="row g-5">
                                          <div className="col-12 col-md-3  py-5">

                                                 <div className="footer-col-header text-light mb-4">
                                                        {store.footer.firstCol.title}
                                                 </div>
                                                 {
                                                        store.footer.firstCol.daysAndHours.map((day, index) => (
                                                               <div className='d-flex footer-open-time-box' key={index}>
                                                                      <div className="footer-item-day text-light d-flex-centering">{day.title}</div>
                                                                      <div className='footer-item-underline overflow-hidden text-secondary mx-2'>________________________________</div>
                                                                      {day.close ? (<div className='footer-item-close-time'>{day.hourText}</div>) : (
                                                                             <div className='footer-item-active-hours text-light d-flex-centering'>{day.hourText}</div>
                                                                      )}


                                                               </div>
                                                        ))
                                                 }

                                          </div>
                                          <div className="col-12 col-md-3  py-5">
                                                 <div className="footer-col-header text-light mb-4">
                                                        {store.footer.secondCol.title}
                                                 </div>

                                                 {
                                                        store.footer.secondCol.items.map((item, index) => (
                                                               <>

                                                                      <div className='footer-second-col-box'>
                                                                             <div className="footer-second-col-item-title cp text-light">
                                                                                    {item.title}
                                                                             </div>
                                                                             <div className="footer-second-col-item-subtitle my-2">
                                                                                    {item.date}
                                                                             </div>
                                                                      </div>
                                                               </>
                                                        ))
                                                 }

                                          </div>
                                          <div className="col-12 col-md-3 py-5">
                                                 <div className="footer-col-header text-light mb-4">
                                                 CONTACT US
                                                 </div>
                                                 <div className="footer-email text-light">
                                                        sajjadmoeini97@gmail.com
                                                 </div>
                                                 <div className="footer-phone text-secondary">
                                                        +98-9195805686
                                                 </div>
                                                 <div className="footer-location text-secondary">
                                                        Iran-Tehran-Gholhak
                                                 </div>
                                                 <div className="footer-github text-secondary">
                                                        GitHub : sajjad-moeni
                                                 </div>
                                                 <div className="footer-linkedin text-secondary">
                                                        Linkedin : sajjad-moeini
                                                 </div>
                                                 <div className="footer-telegram text-secondary">
                                                        Telegram : sajjad_moeini
                                                 </div>
                                                 <div className="footer-instagram text-secondary">
                                                        Instagram : sajjadmoeini7
                                                 </div>
                                                 <div className="footer-col-header text-light mt-5 mb-4">
                                                        THE LAST STANDARD POST
                                                 </div>

                                                 <div className="footer-sendEmail d-flex">

                                                        <input type="text" className='form-control footer-email-input' placeholder='Your E-Mail' />
                                                        <button className='footer-sendEmail-btn'>
                                                               <i className=' fa fa-angle-right '></i>
                                                        </button>
                                                 </div>

                                          </div>
                                          <div className="col-12 col-md-3 py-5">
                                          <div className="footer-col-header text-light mb-4">
                                          OTHER LOCATIONS
                                                 </div>
                                                 <div>
                                                        <div className='footer-col-4-box-title text-light my-3'>
                                                        BARISTA COFFEE SHOP
                                                        </div>
                                                        <div className='text-secondary'>2606 Saints Alley</div>
                                                        <div className='text-secondary'>Tampa, FL 33602</div>
                                                 </div>
                                                 <div>
                                                        <div className='footer-col-4-box-title text-light my-3'>
                                                        BARISTA CAFE
                                                        </div>
                                                        <div className='text-secondary'>3497 Watson Street</div>
                                                        <div className='text-secondary'>Camden, NJ 08102</div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </>
       )
}

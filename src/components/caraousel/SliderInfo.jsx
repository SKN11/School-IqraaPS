import Carousel from 'react-bootstrap/Carousel';
import PrincipalImg from '../../utils/images/Principal.jpg';
import ChairmanImg from '../../utils/images/Chairman.jpg';
import "./SliderInfo.css";

function SliderInfo(){

    return(
        <section>
           
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='py-5 col-lg-4'>
                        <h2 className='text-capitalize'>Message from the Chairperson</h2>
                        <p><b>Dear Parents,</b><br/><br/>
                        As the Chairperson of IQRAA Public School, it is my privilege to welcome you to our vibrant community. Our school is committed to providing an exceptional education that prepares students for success in life. We believe in fostering an environment where every student can excel academically, socially, and emotionally.<br/>
                        <br/>The partnership between the school, students, and their families is at the heart of our success. With your support, we are confident that we can continue to nurture the leaders of tomorrow.<br/><br/>
                        <b>Warm regards,</b><br/>
                        <b>Shafi Mohammad</b><br/>
                        Chairperson</p>
                        
                    </div>
                    <div className='col-lg-4 mt-5 mt-lg-0'>
                        <img src={ChairmanImg} className='img-fluid' style={{borderRadius:10}} alt="" />
                    </div>
                </div>
                    <Carousel.Caption/>
                </Carousel.Item>
                <Carousel.Item>
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='py-5 col-lg-4'>
                        <h2 className='text-capitalize'>Message from the Principal</h2>
                        <p><b>Dear Parents,</b><br/><br/>
                        At IQRAA Public School, we are passionate about creating a nurturing environment where every student can thrive. Our mission is to cultivate a love for learning, encourage critical thinking, and develop responsible global citizens. We understand that education is the foundation of a successful life, and our dedicated staff works tirelessly to ensure each student reaches their full potential.<br/>
                        <br/>Together with the support of parents and guardians, we are building a community that values growth, innovation, and the pursuit of excellence.<br/><br/>
                        <b>Warm regards,</b><br/>
                        <b>Shahina Parveen</b><br/>
                        Principal</p>
                        
                    </div>
                    <div className='col-lg-4 mt-5 mt-lg-0'>
                        <img src={PrincipalImg} className='img-fluid' style={{borderRadius:10}}alt="" />
                    </div>
                </div>
                    <Carousel.Caption/>
                </Carousel.Item>
                
                
            </Carousel>
            
        </section>
    );

}


export default SliderInfo
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
// import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
// import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/School_Award1.jpg';
//import Carousel from 'react-bootstrap/Carousel';
import SliderInfo from '../../components/caraousel/SliderInfo';
//import Blog2Img from '../../utils/images/blog2-img.jpg';
//import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Iqraa Public School Awarded AAA+ Rating for 2024',
        description: "Iqraa Public School, Fatehpur Taga, has been recognized as one of India's best schools by Careers360, receiving an *AAA+ rating* in the *Day School* category for the academic year 2023-24. This achievement highlights the school's dedication to academic excellence, quality faculty, and outstanding infrastructure."
    },
    // {
    //     id: 2,
    //     img: [Blog2Img],
    //     title: 'Blog 2',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    // },
    // {
    //     id: 3,
    //     img: [Blog3Img],
    //     title: 'Blog 3',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    // }
];

function Home() {
  return (
    <div className='home-page'>
        {/* <header className='h-100 min-vh-100 d-flex align-items-center text-light'> */}
        <header className='height-75 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>IQRAA PUBLIC SCHOOL</h1>
                <h2 className='text-cente'>Affiliated to CBSE</h2><br/>
                <h2 className='text-center text-success'>"A Journey through Knowledge and Discovery"</h2>
                {/* <p  className='text-center w-75 mb-5'></p> */}
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                   <Link to="/contact">
                        <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5  bg-light">
            <ChooseSection />
        </div>

        <SliderInfo/>

        {/* <div className='py-5 bg-light'>
            <div className="container">
                
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 start courses</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div> */}

        {/* <div className="py-5">
            <FaqAccordion />
        </div> */}

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest Achievements</h2>
                
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-9 col-lg-5'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                        </div>
                    ))}
                
            </div>
        </div>
    </div>
  )
}

export default Home;
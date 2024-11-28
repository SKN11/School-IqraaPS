import React from 'react';
import './Gallery.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/School_FrontView3.jpg';
import Blog2Img from '../../utils/images/School_FrontView2.jpg';
import Blog3Img from '../../utils/images/School_BackView_Edit1.jpg';

import Blog4Img from '../../utils/images/School_BackView.jpg';
import Blog5Img from '../../utils/images/School_FrontView.jpg';
import Blog6Img from '../../utils/images/School_BackView3.jpg';

import Blog7Img from '../../utils/images/School_Students.jpg';
import Blog8Img from '../../utils/images/School_Children.jpg';

import Blog9Img from '../../utils/images/School_Library.jpg';

import Blog10Img from '../../utils/images/School_Sport1.jpg';
import Blog11Img from '../../utils/images/School_Sport2.jpg';
import Blog12Img from '../../utils/images/School_Sport3.jpg';
import Blog13Img from '../../utils/images/School_Sport4.jpg';
import Blog14Img from '../../utils/images/School_Children1.jpg';
import Blog15Img from '../../utils/images/School_Children2.jpg';
import Blog16Img from '../../utils/images/School_Children3.jpg';
import Blog17Img from '../../utils/images/School_Students1.jpg';

import Blog18Img from '../../utils/images/School_Lab.jpg';
import Blog19Img from '../../utils/images/School_Students2.jpg';
import Blog20Img from '../../utils/images/School_Bus.jpg';
import Blog21Img from '../../utils/images/School_Assembly2.jpg';

import Blog22Img from '../../utils/images/School_FrontBoundary.jpg';
import Blog23Img from '../../utils/images/School_StudentCouncil.jpg';
import Blog24Img from '../../utils/images/Computer Lab.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Blog 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Blog 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Blog 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Blog 7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Blog 8',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 10,
        img: [Blog10Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 11,
        img: [Blog11Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 12,
        img: [Blog12Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 13,
        img: [Blog13Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 14,
        img: [Blog14Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 15,
        img: [Blog15Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 16,
        img: [Blog16Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 17,
        img: [Blog17Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 18,
        img: [Blog18Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 19,
        img: [Blog19Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 20,
        img: [Blog20Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 21,
        img: [Blog21Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 22,
        img: [Blog22Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 23,
        img: [Blog23Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 24,
        img: [Blog24Img],
        title: 'Blog 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
];

function Gallery() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Gallery</h1>
                <p className='text-center w-75 mb-5'>Explore our school's gallery, capturing moments of academic excellence, cultural celebrations, sports activities, and creative expressions. From classroom learning to memorable events, these photos showcase the vibrant and diverse experiences that make our school a special place to grow and thrive.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    {/* <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body> */}
                                </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery;
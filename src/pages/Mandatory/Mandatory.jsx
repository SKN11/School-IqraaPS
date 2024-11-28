import React from 'react';
import './Mandatory.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TableA from '../../components/tables/TableA';
import TableB from '../../components/tables/TableB';
import TableC from '../../components/tables/TableC';
import TableD from '../../components/tables/TableD';
import TableE from '../../components/tables/TableE';
import { useEffect } from 'react';


function Mandatory(props) {

    useEffect(() => {    
        window.addEventListener( "pageshow", function ( event ) {
            var historyTraversal = event.persisted || 
                                   ( typeof window.performance != "undefined" && 
                                        window.performance.navigation.type === 2 );
            if ( historyTraversal ) {
              // Handle page restore.
              window.location.reload();
            }
          });
     }, []);
 
  return (
    <div className='mandatory-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Mandatory</h1>
                <p className='text-center w-75 mb-5'>Welcome to the Mandatory Disclosure section of IQRAA Public School. In accordance with CBSE guidelines, we ensure transparency by providing essential information about our institution. Below are the key details:</p>
                {/* <p className='text-center w-75 mb-5'>We believe that every student has the potential to excel and succeed when nurtured in an environment of encouragement and support. Our curriculum not only promotes overall personal growth but also helps students achieve key milestones such as securing admission to prestigious universities and pursuing successful careers.</p>
                <p className='text-center w-75 mb-5'>Our classrooms are equipped with modern educational tools like Smart Class Technology, interactive boards, advanced computing systems, and specialized learning spaces including biology, chemistry, physics, communication, social studies labs, and AV labs. The curriculum aligns with the latest global educational trends and techniques, offering diverse opportunities for practical application, making the learning experience both challenging and rewarding.</p> */}
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
            <Tabs  defaultActiveKey="general"  id="uncontrolled-tab-example"  className="mb-3" >
                <Tab eventKey="general" title="General Information">
                   <TableA/>
                </Tab>
                <Tab eventKey="docinfo" title="Documents and Information">
                <TableB/>
                </Tab>
                <Tab eventKey="result" title="Result and Academics">
                <TableC/>
                </Tab>
                <Tab eventKey="staff" title="Staff (Teaching)">
                <TableD/>
                </Tab>
                <Tab eventKey="infra" title="School Infrastructure">
                <TableE/>
                </Tab>

            </Tabs>
            </div>
        </div>

        

        {/* <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div> */}
    </div>
  )
}

export default Mandatory;
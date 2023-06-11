import React from 'react'
import './home.css';

const Home = () => {
  return (
    <div>
      <div className="container">
            <div className="header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="true" href="#active">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#link">Link1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#link2'>Link2</a>
                    </li>
                </ul>
            </div>

            <div className='card-wrapper'>
                <div className="card">
                    <div className='card-header'>
                        <h3>Card content</h3>
                    </div>
                    <div className="card-body">
                        <div className='d-flex d-inline-block'>
                            <p className='author mr-5'>Author:</p>
                            <p className='date'>Date:</p>
                        </div>
                        <h3 className="title">Title:</h3>
                        <p className='body'>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home

import React from 'react'
import './Dashboard.css';
import Nav from '../Components/Navbar/Nav'
import Nav2 from '../Components/Download/Download';
import Table from '../Components/Table/Table';
import Searchbar from '../Components/Searchbar/Searchbar';
import Pagination from '../Components/Pagination/Pagination';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Nav />
      <Nav2 />
      <Searchbar />
      <div className='tbl-container'>
        <Table />
      </div>
      <span className='pagination'>
        <Pagination />
      </span>
    </div>
  )
}

export default Dashboard
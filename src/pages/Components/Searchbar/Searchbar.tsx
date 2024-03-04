import React from 'react'
import './Searchbar.css';

const Searchbar = (): JSX.Element => {
  return (
    <form className='search-bar-container'>
        <label className='select-bar' htmlFor='Select-bar'>
            Tipo doc.
            <select name="Select-bar" className='Select-bar' id="Select-bar">
                <option value="value1"></option>
                <option value="value2">Cédula</option>
            </select>
        </label>
        <input type="text" name="document" id="document" className='numID'
        placeholder='Número de documento'/>
        <input type="text" name="disburse" id="disburse" className='disburse'
        placeholder="Número de desembolso"/>
        <label className='from-date-lbl'>
            Desde
            <input type="date" name="fromDate" id="fromDate" />
        </label>
        <label className='to-date-lbl'>
            Hasta
            <input type="date" name="toDate" id="toDate"/>
        </label>
    </form>
  )
}

export default Searchbar
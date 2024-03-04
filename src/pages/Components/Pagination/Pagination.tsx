import React from 'react';
import './Pagination.css';
import left from '../../../assets/icons/leftArrow.png'
import right from '../../../assets/icons/rightArrow.png'

const Pagination = (): JSX.Element => {
  return (
    <div className='container-pag'>
        <form className='pagination-container'>
            <label className='pages'>
            <a className='arrows'>
                <img src={left} alt=""
                width="13px"
                height="13px"/>
            </a>
            <input type="text" name="page" id="page" className='page'
            value="1"/>
            <a className='arrows'>
                <img src={right} alt=""
                width="13px"
                height="13px"/>
            </a>
            <span> de 10 </span> &nbsp;
            </label>
            <span className='register'>
                    <span>Registros por página</span>
                    <select name="select" className='select-register'>
                        <option value="value2">16</option>
                    </select>
            </span>
        </form>
    </div>
  )
}

export default Pagination
import React from 'react'
import info from '../../../helpers/info/data.json'

const Table = (): JSX.Element => {
  const data = info.data
  return (
    <div className="table-responsive col-12 col-md-11 mx-auto" style={{
        "fontFamily": "sans-serif",
    "fontWeight": "normal",
    "fontSize": "14px",
    }}>
        <table className="table table-striped table-borderless" >
          <thead className="table-fixed" style={{"backgroundColor":"#F1F6FB",
        "height":"48px"}}>
            <tr>
              <th className="header" scope="col">
                Fecha y hora
              </th>
              <th className="header" scope="col">
                Número de desembolso
              </th>
              <th className="header" scope="col">
                Tipo de documento
              </th>
              <th className="header" scope="col">
                Número de documento
              </th>
              <th className="header" scope="col">
                Monto
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Se reenderizan los elementos del body de la tabla dinámicamente, de acuerdo a la cantidad de registros que se encuentren
            en el archivo data.json */}
            {data.map((e)=> (
                <tr key={e.numID}>
                <td>{e.fecha} &nbsp; {e.hora}</td>
                <td>{e.desembolso}</td>
                <td>{e.tipoID}</td>
                <td>{e.numID}</td>
                <td>$ {e.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Table
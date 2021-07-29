import React, { useMemo, useState } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
// import PatientsDB from './PatientsDB.json'
import { COLUMNS } from './Columns'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'


const Table = ({ Adding, Updating, Deleting, patients }) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => patients, [patients])

    const tableInstance = useTable({
        columns,
        data,
    },
    useSortBy,
    usePagination,
    )

    
    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage,  canNextPage, canPreviousPage, pageOptions, state, gotoPage, pageCount, prepareRow } = tableInstance 
    
    const { pageIndex } = state
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
    const [rowId, setRowId] = useState(0)

    const popUpOpen = (e) => {
        const popUp = document.querySelector('.homepage .pop-up')
        popUp.style.display = 'flex'  
    }

    const popUpClose = (e) => {
        const popUp = document.querySelector('.homepage .pop-up')
        popUp.style.display = 'none'  
        const msg = document.querySelector('.banner-msg')
        msg.innerHTML = 'The patient has been deleted'
        msg.style.display = 'block'
        setTimeout(() => {
            msg.style.display = 'none'
        }, 3000)
    }

    const cancel = () => {
        const popUp = document.querySelector('.homepage .pop-up')
        popUp.style.display = 'none'  
    }

    
    return (
        <>  
            
            <div className="pop-up">
                <div className="pop-up-box">
                    <div className="pop-up-msg">
                        Are you sure you want to delete this patient?
                    </div>
                    <div className="pop-up-btn">
                        <button className="btn btn-ok" 
                        onClick={(e) => {
                            popUpClose(e)
                            Deleting(rowId)
                        }}>
                        OK
                        </button>
                        <button className="btn btn-cancel" onClick={() => cancel()}>Cancel</button>
                    </div>
                </div>
            </div>
            <table className="table" {...getTableProps()}>
                <thead className="table-header">
                    <tr >
                        <th className="table-title" colSpan={5}>List Patients</th>
                        <th className="table-btn">
                            <button className="btn btn-add" onClick={Adding}>
                                Add Patients
                            </button>
                        </th>
                    </tr>
                    {
                        headerGroups.map(headerGroup => ( 
                            <tr className="row" {...headerGroup.getHeaderGroupProps()}>
                                {   
                                    headerGroup.headers.map(column => (
                                        <th className="row-header" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span className="sort-icon">
                                                {
                                                    column.isSorted ? (column.isSortedDesc ? ( <FontAwesomeIcon icon={faCaretDown}/>) : ( <FontAwesomeIcon icon={faCaretUp}/>)) : ''
                                                }
                                            </span>
                                        </th>
                                    ))
                                }
                                <th className="row-header"></th>
                            </tr>
                        ))
                    }
                </thead>
                <tbody className="table-body" {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr key={row.values.index} className="row" {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell, index) => {
                                            return <td  
                                            key={row.values.id} index={index} className="row-content" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                    <td className="row-content">
                                        <button className="btn btn-del" onClick={(e) => {
                                        popUpOpen(e)
                                        setRowId(row.values.id)}}>Delete</button>
                                        <button className="btn btn-upd " onClick={()=> {
                                        // console.log(row.values)
                                        Updating(row.values)}}>Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="paging">
                <button className="paging-btn" 
                        onClick={() => {
                                            gotoPage(0)
                                            setMaxPageNumberLimit(5)
                                            setMinPageNumberLimit(0)
                                    }}
                        disabled={!canPreviousPage}>
                    First
                </button>
                <button className="paging-btn" 
                        onClick={() => {
                                            previousPage()
                                            if (pageIndex <= minPageNumberLimit) {
                                            setMaxPageNumberLimit(maxPageNumberLimit - 1)
                                            setMinPageNumberLimit(minPageNumberLimit - 1)
                                        }   
                                    }} 
                        disabled={!canPreviousPage}>
                    Previous
                </button>
                {
                    pageOptions.map((number) => {
                        if (number < maxPageNumberLimit && number >= minPageNumberLimit) {
                            return (
                                <button onClick={() => gotoPage(number)} className={"paging-btn " + (number === pageIndex ? "chosen": "")}>
                                    {number + 1}
                                </button> 
                            )
                        }
                        return ''
                    })
                }
                <button className="paging-btn" 
                        onClick={() => {
                                        nextPage()
                                        if (pageIndex + 1 >= maxPageNumberLimit) {
                                            setMaxPageNumberLimit(maxPageNumberLimit + 1)
                                            setMinPageNumberLimit(minPageNumberLimit + 1)
                                        }    
                                    }} 
                        disabled={!canNextPage}>
                    Next
                </button>
                <button className="paging-btn" 
                    onClick={() => {
                                        gotoPage(pageCount - 1)
                                        setMaxPageNumberLimit(pageCount + 1)
                                        setMinPageNumberLimit(pageCount - 5)
                                }} 
                    disabled={!canNextPage}>
                    Last
                </button>
            </div>
        </>
    )
}

export default Table

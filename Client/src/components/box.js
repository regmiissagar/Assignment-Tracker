import React from 'react'
import { faCartShopping, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUser, faMap, faPhone, faCalendarAlt, faClock, faDolly } from '@fortawesome/free-solid-svg-icons'
//we take all the item from assignment list as a props in box.js
const Box = ({item})=>{

    return(
        <>
            <div className='order_item'>
                                <div className='top'>
                                    <p className='badge'>Status: <span className='pending'>Pending</span></p>
                                    <span>#{item._id}</span> <span><strong>{item.productType}</strong></span>
                                </div>
                                
                                <div className='bottom'>
                                    <ul>
                                        <li><i><FontAwesomeIcon icon={faUser}/></i> {item.assignmentName}</li>
                                        <li><i><FontAwesomeIcon icon={faMap}/></i> {item.deadline}</li>
                                        <li><i><FontAwesomeIcon icon={faPhone}/></i> {item.faculty}</li>
                                        <li><i><FontAwesomeIcon icon={faCalendarAlt}/></i> {item.semester}</li>
                                        
                                    </ul>
                                </div>
                            </div>
        </>
    )
}
export default Box


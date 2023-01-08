import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '../../components/box'
import { faDolly } from '@fortawesome/free-solid-svg-icons'
const AssignmentsList = ()=>{
    const [assignmentList, setAssignmentList] = useState([])

    const fetchData = async()=>{
        const response = await fetch("http://localhost:4000/assignment")
        const data = await response.json()

        if(data){
            setAssignmentList(data.AssignmentsList)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <section>
            <div className='container'>
                <div className='AssignmentList'>
                    <h1 className='title'><i><FontAwesomeIcon icon={faDolly}/></i> All AssignmentList</h1> //make every item in loop 
                    {assignmentList.length > 0 ? assignmentList.map((item)=>{
                        return(
                            <Box item={item}/> //it shows in box every item 
                            )
                    }): 'list not found'}
                </div>
            </div>
        </section>
    )
}

export default AssignmentsList
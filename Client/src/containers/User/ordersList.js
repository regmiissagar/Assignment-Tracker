import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '../../components/box'
import { faDolly } from '@fortawesome/free-solid-svg-icons'
const OrdersList = ()=>{
    const [orderList, setOrderList] = useState([])

    const fetchData = async()=>{
        const response = await fetch("http://localhost4000:/orders")
        const data = await response.json()

        if(data){
            setOrderList(data.ordersList)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <section>
            <div className='container'>
                <div className='orderList'>
                    <h1 className='title'><i><FontAwesomeIcon icon={faDolly}/></i> My Orders</h1>
                    {orderList.length > 0 ? orderList.map((item)=>{
                        return(
                            <Box item={item}/>
                            )
                    }): 'list not found'}
                </div>
            </div>
        </section>
    )
}

export default OrdersList
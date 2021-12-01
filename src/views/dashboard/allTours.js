import React from "react";
import { Table,Tag,Space } from 'antd';
import AllAvailableData from "../../assets/constants/tours.json";
import { EditOutlined,EyeOutlined, DeleteOutlined} from '@ant-design/icons';
import AllAvailableUsers from "../../assets/constants/info.json";

        const columns = [
          {
            title: 'Title',
            dataIndex: 'title',
            key: 'title 1',
           
          },
          {
            title: 'Date Scheduled',
            dataIndex: 'dateScheduled',
            key: 'dateScheduled',
            
          },
          {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate',
            
          },
          {
            title: 'Seats',
            dataIndex: 'seats',
            key: 'seats ',
           
          },
          {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            
          },
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: ()=>(
                <Space size="middle">
                    <a><EyeOutlined/></a> <a><EditOutlined/></a> <a><DeleteOutlined/></a>
                </Space>
            )
          },
        ]
          const column = [
            {
              title: 'FirstName',
              dataIndex: 'firstname',
              key: 'firstname',
             
            },
            {
              title: 'LastName',
              dataIndex: 'lastname',
              key: 'lastname',
              
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
              
            },
            {
              title: 'Phone',
              dataIndex: 'phone',
              key: 'phone ',
             
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
              
            },
            {
                title: 'Action',
                key: 'operation',
                fixed: 'right',
                width: 100,
                render: ()=>(
                    <Space size="middle">
                        <a style={{color:"green"}}>Accept</a> <a style={{color:"red"}}>Decline</a> 
                    </Space>
                )
              },
         
       
        ]
        const AllTours =()=>{

            return( 
                <>
                <Table columns={columns} dataSource={AllAvailableData} />
                <Table columns={column} dataSource={AllAvailableUsers} />
                </>
          )
    

} 
export default AllTours;
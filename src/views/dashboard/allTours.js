import React from "react";
import { Table,Tag,Space } from 'antd';
import AllAvailableData from "../../assets/constants/tours.json";
import { EditOutlined,EyeOutlined, DeleteOutlined} from '@ant-design/icons';

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
        const AllTours =()=>{

            return( 
                <Table columns={columns} dataSource={AllAvailableData} />
          )
    

} 
export default AllTours;
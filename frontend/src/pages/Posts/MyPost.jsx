import React from 'react'
import TableSwitcher from '../../components/TableSwitcher';
import TopHeader from '../../components/TopHeader';

function MyPost() {
const data = [
    { id: 1, name: 'John Doe', age: 25, occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 30, occupation: 'Designer' },
    { id: 3, name: 'Michael Brown', age: 35, occupation: 'Manager' },
    { id: 4, name: 'Sarah Johnson', age: 28, occupation: 'Developer' },
    ];
  return (
    <>
     <TopHeader headerName="My Posts" tagline="This is my posts" />
    <div className="container mx-auto p-4">
        <TableSwitcher data={data} />
    </div>
    </>
  )
}

export default MyPost
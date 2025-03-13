import  { useState } from 'react';
import { Table } from 'antd';
import StatsForm from '../Form';

const RevenueStats = () => {
    const [data, setData] = useState([]);

    const handleFilter = (values: any) => {
        // Fetch and set data based on filter values
    };

    const columns = [
        { title: 'Service', dataIndex: 'service', key: 'service' },
        { title: 'Employee', dataIndex: 'employee', key: 'employee' },
        { title: 'Revenue', dataIndex: 'revenue', key: 'revenue' },
    ];

    return (
        <div>
            <StatsForm onFinish={handleFilter} />
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default RevenueStats;

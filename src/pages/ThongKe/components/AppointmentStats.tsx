import React, { useState } from 'react';
import { Table } from 'antd';
import StatsForm from '../Form';

const AppointmentStats = () => {
    const [data, setData] = useState([]);

    const handleFilter = (values: any) => {
        // Fetch and set data based on filter values
    };

    const columns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Appointments', dataIndex: 'appointments', key: 'appointments' },
    ];

    return (
        <div>
            <StatsForm onFinish={handleFilter} />
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default AppointmentStats;

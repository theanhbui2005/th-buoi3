import React from 'react';
import { Menu } from 'antd';
import { useState } from 'react';
import AppointmentStats from './components/AppointmentStats';
import RevenueStats from './components/RevenueStats'; 

const ThongKe = () => {
    const [current, setCurrent] = useState('appointments');

    const handleClick = (e: any) => {
        setCurrent(e.key);
    };

    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="appointments">Thống kê lịch hẹn</Menu.Item>
                <Menu.Item key="revenue">Thống kê doanh thu</Menu.Item>
            </Menu>
            {current === 'appointments' && <AppointmentStats />}
            {current === 'revenue' && <RevenueStats />}
        </div>
    );
};

export default ThongKe;

import { Tabs } from 'antd';
import EmployeeList from './components/EmployeeList';
import EmployeeSchedule from './components/EmployeeSchedule';
import ServiceManagement from './components/ServiceManagement';

const { TabPane } = Tabs;

const Employee = () => {
    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Employee Management" key="1">
                    <EmployeeList />
                </TabPane>
                <TabPane tab="Schedule Management" key="2">
                    <EmployeeSchedule />
                </TabPane>
                <TabPane tab="Service Management" key="3">
                    <ServiceManagement />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Employee;

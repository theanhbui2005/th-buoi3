import { Button, Modal, Table, Space } from 'antd';
import { useModel } from 'umi';
import FormEmployee from '../Form';
import type { Employee } from '@/models/employee';

const EmployeeList = () => {
    const { 
        data, 
        getDataEmployee, 
        setRow, 
        isEdit, 
        setVisible, 
        setIsEdit, 
        visible,
        deleteEmployee 
    } = useModel('employee');

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: string, record: Employee) => (
                <Space>
                    <Button
                        type="primary"
                        onClick={() => {
                            setRow(record);
                            setIsEdit(true);
                            setVisible(true);
                        }}
                    >
                        Edit
                    </Button>
                    <Button 
                        danger 
                        onClick={() => deleteEmployee(record.key)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        }
    ];

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                    setIsEdit(false);
                }}
            >
                Add Employee
            </Button>

            <Table dataSource={data} columns={columns} />

            <Modal
                destroyOnClose
                footer={false}
                title={isEdit ? 'Edit Employee' : 'Add Employee'}
                visible={visible}
                onCancel={() => setVisible(false)}
            >
                <FormEmployee />
            </Modal>
        </div>
    );
};

export default EmployeeList;

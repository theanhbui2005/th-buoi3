import { Button, Form, Input, Modal, Table } from 'antd';
import { useState } from 'react';
const ServiceManagement = () => {
    const [visible, setVisible] = useState(false);
    const [services, setServices] = useState(() => {
        const saved = localStorage.getItem('serviceData');
        return saved ? JSON.parse(saved) : [];
    });
    const handleDelete = (name: string) => {
        const newServices = services.filter((s: any) => s.name !== name);
        setServices(newServices);
        localStorage.setItem('serviceData', JSON.stringify(newServices));
    };

    interface Service {
        name: string;
        price: number;
        duration: number;
    }

    const columns = [
        {
            title: 'Service Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Duration (minutes)',
            dataIndex: 'duration',
            key: 'duration',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: Service) => (
                <Button onClick={() => handleDelete(record.name)} type="primary" danger>
                    Delete
                </Button>
            ),
        },
    ];

    

    const onFinish = (values: any) => {
        const newServices = [...services, values];
        setServices(newServices);
        localStorage.setItem('serviceData', JSON.stringify(newServices));
        setVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={() => setVisible(true)}>
                Add Service
            </Button>

            <Table dataSource={services} columns={columns} />

            <Modal
                title="Add Service"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <Form onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="Service Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="duration"
                        label="Duration (minutes)"
                        rules={[{ required: true }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ServiceManagement;

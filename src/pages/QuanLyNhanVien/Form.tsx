import { Employee, QuanLyNhanVien } from '@/services/QuanLyNhanVien/typings';
import { Button, Form, Input } from 'antd';
import { useModel } from 'umi';

const FormEmployee = () => {
    const { data, getDataEmployee, row, isEdit, setVisible } = useModel('quanlynhanvien');

    return (
        <Form
            onFinish={(values) => {
                const index = data.findIndex((item: any) => item.name === row?.name);
                const dataTemp: QuanLyNhanVien.Record[] = [...data];
                dataTemp.splice(index, 1, values);
                const dataLocal = isEdit ? dataTemp : [values, ...data];
                localStorage.setItem('employeeData', JSON.stringify(dataLocal));
                setVisible(false);
                getDataEmployee();
            }}
        >
            <Form.Item
                initialValue={row?.name}
                label='Name'
                name='name'
                rules={[{ required: true, message: 'Please input the name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                initialValue={row?.serviceLimit}
                label='Service Limit'
                name='serviceLimit'
                rules={[{ required: true, message: 'Please input the service limit!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                initialValue={row?.workingHours}
                label='Working Hours'
                name='workingHours'
                rules={[{ required: true, message: 'Please input the working hours!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                initialValue={row?.schedule}
                label='Schedule'
                name='schedule'
                rules={[{ required: true, message: 'Please input the schedule!' }]}
            >
                <Input />
            </Form.Item>

            <div className='form-footer'>
                <Button htmlType='submit' type='primary'>
                    {isEdit ? 'Save' : 'Insert'}
                </Button>
                <Button onClick={() => setVisible(false)}>Cancel</Button>
            </div>
        </Form>
    );
};

export default FormEmployee;

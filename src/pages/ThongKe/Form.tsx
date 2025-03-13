
import { Form, Button } from 'antd';
import MyDatePicker from '@/components/MyDatePicker';

const StatsForm = ({ onFinish }: { onFinish: (values: any) => void }) => {
    return (
        <Form onFinish={onFinish} layout="inline">
            <Form.Item name="startDate" label="Start Date">
                <MyDatePicker />
            </Form.Item>
            <Form.Item name="endDate" label="End Date">
                <MyDatePicker />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Filter
                </Button>
            </Form.Item>
        </Form>
    );
};

export default StatsForm;

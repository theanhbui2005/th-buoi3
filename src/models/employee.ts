import { useState } from 'react';

export interface Employee {
    key: string;
    name: string;
    age: number;
    address: string;
}

export default () => {
    const [data, setData] = useState<Employee[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [row, setRow] = useState<Employee | null>(null);

    const getDataEmployee = async () => {
        try {
            // Mock data for example
            const mockData: Employee[] = [
                { key: '1', name: 'John Doe', age: 30, address: 'New York' },
                { key: '2', name: 'Jane Smith', age: 25, address: 'Los Angeles' }
            ];
            setData(mockData);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const addEmployee = (employee: Employee) => {
        setData([...data, employee]);
        setVisible(false);
    };

    const updateEmployee = (updatedEmployee: Employee) => {
        const newData = data.map(item => 
            item.key === updatedEmployee.key ? updatedEmployee : item
        );
        setData(newData);
        setVisible(false);
    };

    const deleteEmployee = (key: string) => {
        setData(data.filter(item => item.key !== key));
    };

    return {
        data,
        setData,
        visible,
        setVisible,
        isEdit,
        setIsEdit,
        row,
        setRow,
        getDataEmployee,
        addEmployee,
        updateEmployee,
        deleteEmployee
    };
};

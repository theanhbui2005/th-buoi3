import { QuanLyNhanVien } from '@/services/QuanLyNhanVien/typings';
import { useState } from 'react';

export default () => {
	const [data, setData] = useState<QuanLyNhanVien.Record[]>([]);
	const [row, setRow] = useState<QuanLyNhanVien.Record | null>(null);
	const [isEdit, setIsEdit] = useState(false);
	const [visible, setVisible] = useState(false);

	const getDataEmployee = () => {
		const dataLocal = JSON.parse(localStorage.getItem('employeeData') || '[]');
		setData(dataLocal);
	};

	return {
		data,
		row,
		isEdit,
		visible,
		setRow,
		setIsEdit,
		setVisible,
		getDataEmployee,
	};
};

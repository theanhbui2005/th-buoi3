import axios from 'axios';

export const getDataEmployee = async () => {
	const data = localStorage.getItem('employeeData');
	if (data) {
		return JSON.parse(data);
	} else {
		const res = await axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
		localStorage.setItem('employeeData', JSON.stringify(res.data));
		return res.data;
	}
};

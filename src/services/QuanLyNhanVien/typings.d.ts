import Employee from "@/pages/QuanLyNhanVien";

declare module QuanLyNhanVien {
	export interface Record {
		name: string;
		serviceLimit: Interger;
		workingHours: Float;
		schedule: string;
        serviceName: string
	}
}


declare module Employee {
    export interface Employee {
        name: string;
        age: number;
        address: string;
        // Add other fields as necessary
    }

    export interface Column {
        title: string;
        dataIndex: string;
        key: string;
        render?: (text: string, record: Employee) => JSX.Element;
    }

    export const columns: Column[];
}
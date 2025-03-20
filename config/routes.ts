﻿export default [
	{
		path: '/user',
		layout: false,
		routes: [
			{
				path: '/user/login',
				layout: false,
				name: 'login',
				component: './user/Login',
			},
			{
				path: '/user',
				redirect: '/user/login',
			},
		],
	},

	///////////////////////////////////
	// DEFAULT MENU
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: './TrangChu',
		icon: 'HomeOutlined',
	},
	{
		path: '/gioi-thieu',
		name: 'About',
		component: './TienIch/GioiThieu',
		hideInMenu: true,
	},
	{
		path: '/random-user',
		name: 'RandomUser',
		component: './RandomUser',
		icon: 'ArrowsAltOutlined',
	},
	{
<<<<<<< HEAD
		path: '/quanlynhanvien',
		name: 'QuanLyNhanVien',
		component: './QuanLyNhanVien',
		icon: 'ArrowsAltOutlined',
	},
	{
		path: '/thongke',
		name: 'ThongKe',
		component: './ThongKe',
		icon: 'ArrowsAltOutlined',
	},
=======
		path: '/todolist',
		name: 'ToDoList',
		component: './ToDoList',
		icon: 'ArrowsAltOutlined',
	},
	{
		path: '/ramdomnumber',
		name: 'RandomNumber',
		component: './RandomNumber',
		icon: 'ArrowsAltOutlined',
	},
	{
		path: '/quanlyhoctap',
		name: 'QuanLyHocTap',
		component: './QuanLyHocTap',
		icon: 'ArrowsAltOutlined',
	},
	{
		path: '/quanlymonhoc',
		name: 'QuanLyMonHoc',
		component: './QuanLyMonHoc',
		icon: 'ArrowsAltOutlined',
	},

>>>>>>> e720ef374a6ec73bb83dc667fd42a5862612dbd9

	// DANH MUC HE THONG
	// {
	// 	name: 'DanhMuc',
	// 	path: '/danh-muc',
	// 	icon: 'copy',
	// 	routes: [
	// 		{
	// 			name: 'ChucVu',
	// 			path: 'chuc-vu',
	// 			component: './DanhMuc/ChucVu',
	// 		},
	// 	],
	// },

	{
		path: '/notification',
		routes: [
			{
				path: './subscribe',
				exact: true,
				component: './ThongBao/Subscribe',
			},
			{
				path: './check',
				exact: true,
				component: './ThongBao/Check',
			},
			{
				path: './',
				exact: true,
				component: './ThongBao/NotifOneSignal',
			},
		],
		layout: false,
		hideInMenu: true,
	},
	{
		path: '/',
	},
	{
		path: '/403',
		component: './exception/403/403Page',
		layout: false,
	},
	{
		path: '/hold-on',
		component: './exception/DangCapNhat',
		layout: false,
	},
	{
		component: './exception/404',
	},
];

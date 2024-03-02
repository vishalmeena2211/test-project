import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'createTask',
		label: 'Create Task',
		path: '/dashboard/createTask',
		icon: <HiOutlineCube />
	},
	
	{
		key: 'allTask',
		label: 'All Tasks',
		path: '/dashboard/allTasks',
		icon: <HiOutlineUsers />
	},
	
	{
		key: 'editTasks',
		label: 'Edit Tasks',
		path: '/dashboard/editTasks',
		icon: <HiOutlineAnnotation />
	}
]



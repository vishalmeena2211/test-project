import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS} from '../lib/constants'

const linkClass =
	'flex items-center gap-3 px-6 mx-1 my-[1px] py-4 hover:bg-neutral-200 hover:no-underline active:bg-neutral-600 rounded-lg text-sm font-semibold'

export default function Sidebar() {
	return (
		<div className="bg-white rounded-lg ml-4 mt-3 w-3/12 max-h-screen py-2 px-3 md:flex flex-col border hidden">
			<div className="flex items-center justify-center my-6">
				<span className=" text-md font-bold">Collage Dashboard</span>
			</div>
			<div className="py-4 flex flex-col  gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-900 text-white hover:bg-neutral-900 ' : 'text-gray-500', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}

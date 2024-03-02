// import  { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
// import { useDispatch } from "react-redux";
// import {add} from "../redux/Slices/RegistrationsSlice";
// import {addEvent} from "../redux/Slices/eventSlice";
// import { apiConnector } from "../Service/apiconnector"
// import { eventEndpoints, reportEndpoints } from "../Service/apis"

// redux\Slices\RegistrationsSlice.js
export default function Layout() {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const res = await apiConnector("GET", reportEndpoints.GET_REPORT_API)
	// 			const res2 = await apiConnector("GET", eventEndpoints.GET_ALL_EVENTS_API)
	// 			dispatch(add(res.data));
	// 			dispatch(addEvent(res2.data));
	// 		} catch (error) {
	// 			console.log("Could not fetch Categories.", error)
	// 		}
	// 	})()
	// }, [dispatch])

	return (
		<div className="bg-neutral-100 h-screen max-w-screen flex flex-row">
			<Sidebar />
			<div className="flex flex-col w-full h-full ">
				<Header />
				<div className="flex-1 p-4 min-h-0 overflow-y-auto scroll-smooth">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

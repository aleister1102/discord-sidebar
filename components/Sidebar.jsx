import React from 'react'
import { FaFireAlt, FaPlusCircle, FaPoo } from 'react-icons/fa'
import { BsFillLightningFill } from 'react-icons/bs'

export default function Sidebar() {
	return (
		<div
			className='fixed top-0 left-0 h-screen w-30 px-2 m-0 
                        flex flex-col place-items-start 
                        dark-theme shadow-md'>
			<SidebarIcon icon={<FaFireAlt size='28' />} />
			<SidebarIcon icon={<FaPlusCircle size='28' />} />
			<SidebarIcon icon={<BsFillLightningFill size='28' />} />
			<SidebarIcon icon={<FaPoo size='28' />} />
		</div>
	)
}

function SidebarIcon({ icon, text = 'tooltip 💡' }) {
	return (
		<div className='sidebar-icon group'>
			{icon}
			<span class='sidebar-tooltip group-hover:scale-100'>{text}</span>
		</div>
	)
}

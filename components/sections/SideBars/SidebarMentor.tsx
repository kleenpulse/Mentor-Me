//@ts-nocheck
"use client";
import { sidebarMentorLinks } from "@/constants/constants";
import { LogoIcon, LogoutIcon, ProfileIcon, SettingIcon } from "@/public/SVGs";

import Link from "next/link";

export type SideBarMentorProps = {
	light?: boolean;
};

export default function SidebarMentor({
	light,
	path,
}: SideBarMentorProps & { path?: string | null | undefined }) {
	return (
		<section
			className={`hidden w-[274px]  p-5 min-h-screen h-full fixed lg:flex left-0 top-0 ${
				light ? "bg-[#fff]" : " bg-[#000]"
			}`}
		>
			<div className="flex flex-col h-full justify-between">
				{/* <div className="h-[82px]">
					<LogoIcon />
				</div> */}

				{/* menu */}

				<div>
					<div className="w-full pl-3">
						<LogoIcon />
					</div>
					<div className="mt-20">
						<p className="  font-Inter tetx-[14px]  leading-[20.3px] font-[500]   text-Neutra30 pl-3">
							MENU
						</p>
						<ul className="l px-3  py-4  gap-4 cursor-pointer text-xl">
							{sidebarMentorLinks.map((link) => (
								<Link key={link.id} href={link.path} prefetch>
									<li
										className={`flex gap-3  ${
											light && path === link.label.toLowerCase()
												? "bg-[#E5FFFF]"
												: !light && path === link.label.toLowerCase()
												? " bg-Neutra50"
												: ""
										} rounded-[5px] p-2 items-center`}
									>
										<span>{link.iconDark}</span>

										<span
											className={` font-Inter tetx-[14px] font-[500] ${
												light ? "text-[#008080]" : "text-[#fff]"
											} `}
										>
											{link.label}
										</span>
									</li>
								</Link>
							))}
						</ul>
					</div>
				</div>
				{/* logout */}

				<div className="my-6 border-t-2 border-Neutra40 ">
					<ul className=" px-3  py-1 flex flex-col  cursor-pointer">
						<Link href="/mentee-settings?path=settings">
							<li
								className={`flex gap-2 rounded-[5px] p-2 items-center ${
									light && path === "settings"
										? "bg-[#E5FFFF]"
										: !light && path === "settings"
										? " bg-Neutra50"
										: ""
								}`}
							>
								<SettingIcon />
								<span
									className={` font-Inter tetx-[11px] font-[500]  rounded-[5px] p-2 text-white`}
								>
									Setting
								</span>
							</li>
						</Link>
						<li className={`flex gap-3  rounded-[5px] p-2`}>
							<LogoutIcon />
							<span className="  font-Inter tetx-[11px] font-[500]  text-Error50">
								LogOut
							</span>
						</li>
					</ul>
				</div>
				{/* profile */}

				<div className="  bottom-0">
					<ul className="  cursor-pointer   ">
						<li className={`flex gap-3 items-center  p-2`}>
							<ProfileIcon />
							<span className="  font-Inter tetx-[10px] font-[500]   text-Neutra30">
								<span className={`${light ? "text-[#000]" : " text-Neutra30"}`}>
									Funmi Oladapo
								</span>
								<br /> funmi@zurimp.com
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

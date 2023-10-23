import React from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
	return (
		<Link href="/" className="flex items-center text-dark">
			<div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
				<Image
					src={profileImg}
					alt="Gustavo Jordão"
					className="w-full h-auto rouded-full"
				/>
			</div>
			<span className="font-bold text-xl">Gustavo Jordão</span>
		</Link>
	);
};

export default Logo;

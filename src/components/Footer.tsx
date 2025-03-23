import InstaIcon from "../assets/icons/insta.svg";
import XIcon from "../assets/icons/x-social.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import Tiktokcon from "../assets/icons/tiktok.svg";

export const Footer = () => {
	return (
		<footer className="py-5 bg-black text-white/60 border-t border-white/60">
			<div className="container ">
				<div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
					<div className="text-center">2024 OneTask Inc, All rights reserved</div>
					<div>
						<ul className="flex justify-center gap-2.5">
							<li>
								<img src={YoutubeIcon} alt="youtube" />
							</li>
							<li>
								<img src={InstaIcon} alt="insta" />
							</li>
							<li>
								<img src={XIcon} alt="X" />
							</li>
							<li>
								<img src={Tiktokcon} alt="tiktok" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

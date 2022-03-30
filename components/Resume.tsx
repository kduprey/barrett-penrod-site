import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	closeIcon: IconDefinition;
	fileIcon: IconDefinition;
	setIsCVOpen: (isCVOpen: boolean) => void;
	isCVOpen: boolean;
};

const Resume = ({ closeIcon, fileIcon, setIsCVOpen, isCVOpen }: Props) => {
	return (
		<div
			className={`fixed z-20 overflow-auto bg-primary p-6 transition-all duration-300 ease-in-out md:p-12 md:duration-500 ${
				isCVOpen
					? "left-0 top-0 h-full w-full md:w-1/2 md:shadow-lg"
					: "-left-full -top-full h-0 w-0"
			}`}
		>
			<div className="flex items-center justify-between">
				<h2 className="py-3 text-secondary">Resume</h2>
				<FontAwesomeIcon
					icon={closeIcon}
					className="cursor-pointer text-4xl text-white transition-colors ease-in-out hover:text-slate-400"
					onClick={(e) => setIsCVOpen(false)}
				/>
			</div>
			<div className="flex flex-col justify-evenly space-y-3 pb-3">
				<p>Born: 1991</p>
				<p>Height: 6&apos; 0&quot;</p>
				<p>Eye Color: Brown</p>
				<p>Hair Color: Dark Red</p>
				<div className="">
					<a
						className="w-auto text-white underline underline-offset-2 hover:text-secondary"
						href="#"
					>
						<FontAwesomeIcon icon={fileIcon} className="pr-2" />
						Download Resume
					</a>
				</div>
			</div>
			<hr />
			<div className="md:grid md:grid-cols-2 md:gap-4">
				<div className="skills">
					<h3 className="py-3 text-secondary">Special Skills</h3>
					<div className="flex flex-col justify-evenly space-y-3">
						<p>Physical Comedy</p>
						<p>Singing</p>
						<p>Swimming</p>
						<p>Football</p>
					</div>
				</div>
				<div className="skills">
					<h3>Theater</h3>
					<div>
						<p>2023, Play / Director / Theater / Role</p>
						<p>2023, Play / Director / Theater / Role</p>
					</div>
				</div>
				<div className="skills">
					<h3>Film</h3>
					<div>
						<p>2023, Title / Director / Role</p>
						<p>2023, Title / Director / Role</p>
						<p>2023, Title / Director / Role</p>
					</div>
				</div>
				<div className="skills">
					<h3>Education & Training</h3>
					<div>
						<p>Institution / Workshop Name / Instructor</p>
						<p>Institution / Workshop Name / Instructor</p>
						<p>Institution / Workshop Name / Instructor</p>
					</div>
				</div>
				<div className="skills">
					<h3>TV</h3>
					<div>
						<p>2023, Title / Director / Production House / Role</p>
						<p>2023, Title / Director / Production House / Role</p>
					</div>
				</div>
				<div className="skills">
					<h3>Awards</h3>
					<div>
						<p>2023 / Description</p>
						<p>2023 / Description</p>
						<p>2023 / Description</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;

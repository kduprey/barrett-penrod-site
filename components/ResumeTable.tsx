import {
	stats,
	specialSkills,
	training,
	eduTheatre,
	theater,
} from "../data/resumeData";
import Image from "next/image";
import headshot3 from "/public/headshot3.jpg";

type Props = {};

const ResumeTable = (props: Props) => {
	return (
		<div className="p-6">
			<div className="flex flex-col items-center justify-evenly space-y-3 ">
				<p className="text-center">
					Voice Range: {stats["Voice Range"]}
				</p>
				<p>Height: {stats.height}</p>
			</div>

			<div className="flex flex-col items-center justify-center py-3 md:flex-row md:items-start md:justify-start md:space-x-6">
				<div className="w-4/6 md:w-1/4 md:pl-10">
					<Image
						loading="lazy"
						placeholder="blur"
						src={headshot3}
						alt="Barrett Penrod - Headshot"
					/>
				</div>

				<div className="w-full space-y-4">
					<div>
						<table className="w-full text-slate-100">
							<tbody>
								<th
									colSpan={3}
									className="text-left text-xl font-semibold text-secondary"
								>
									Theatre
								</th>
								{theater.map((item, index) => (
									<tr key={index}>
										<td>{item["Show Name"]}</td>
										<td>{item.Role}</td>
										<td>{item["Theater Company"]}</td>
									</tr>
								))}
								<th
									colSpan={3}
									className="text-left text-xl font-semibold text-secondary"
								>
									Educational Theatre
								</th>
								{eduTheatre.map((item, index) => (
									<tr key={index}>
										<td>{item["Show Name"]}</td>
										<td>{item.Role}</td>
										<td>{item["Theater Company"]}</td>
									</tr>
								))}
								<th
									colSpan={3}
									className="text-left text-xl font-semibold text-secondary"
								>
									Training
									<br /> New York University: Master of Music
									in Vocal Performance - Musical Theater
									&apos;22
								</th>
								{training.NYU.map((item, index) => (
									<tr key={index}>
										<td>{item.Skill}</td>
										<td>{item.Instructor}</td>
									</tr>
								))}
								<th
									colSpan={3}
									className="text-left text-xl font-semibold text-secondary"
								>
									Cornish College of the Arts: BFA - Theater
									&apos;18
								</th>
								{training.Cornish.map((item, index) => (
									<tr key={index}>
										<td>{item.Skill}</td>
										<td>{item.Instructor}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className="md:pr-20">
						<h3 className="text-xl font-semibold text-secondary">
							Special Skills
						</h3>
						<p className="text-sm">{specialSkills}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeTable;

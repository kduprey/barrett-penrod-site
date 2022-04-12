import {
	stats,
	specialSkills,
	otherTraining,
	training,
	eduTheatre,
	theater,
} from "../data/resumeData";

type Props = {};

const Resume = (props: Props) => {
	return (
		<div className="flex justify-evenly p-6">
			<div className="w-full">
				<div className="flex justify-evenly">
					<p>Voice Range: {stats["Voice Range"]}</p>
					<p>Height: {stats.height}</p>
				</div>

				<div>
					<p className="text-xl font-semibold text-secondary">
						Theatre
					</p>
					<table className="w-full text-slate-100">
						<tbody>
							{theater.map((item, index) => (
								<tr key={index}>
									<td>{item["Show Name"]}</td>
									<td>{item.Role}</td>
									<td>{item["Theater Company"]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div>
					<h3 className="text-xl font-semibold text-secondary">
						Educational Theatre
					</h3>
					<table className="w-full text-slate-100">
						<tbody>
							{eduTheatre.map((item, index) => (
								<tr key={index}>
									<td>{item["Show Name"]}</td>
									<td>{item.Role}</td>
									<td>{item["Theater Company"]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="w-3/4">
				<div>
					<h3 className="text-xl font-semibold text-secondary">
						Training
					</h3>
					<div>
						<h5 className="text-lg font-semibold text-secondary">
							New York University: Master of Music in Vocal
							Performance - Musical Theater &apos;22
						</h5>
						<table className="w-full text-slate-100">
							<tbody>
								{training.NYU.map((item, index) => (
									<tr key={index}>
										<td>{item.Skill}</td>
										<td>{item.Instructor}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div>
						<h5 className="text-lg font-semibold text-secondary">
							Cornish College of the Arts: BFA - Theater &apos;18
						</h5>
						<table className="w-full text-slate-100">
							<tbody>
								{training.Cornish.map((item, index) => (
									<tr key={index}>
										<td>{item.Skill}</td>
										<td>{item.Instructor}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div>
					<h3 className="text-xl font-semibold text-secondary">
						Special Skills
					</h3>
					<p className="text-sm">{specialSkills}</p>
				</div>
			</div>
		</div>
	);
};

export default Resume;

/* eslint-disable @typescript-eslint/no-unsafe-call -- TODO: Add conetnt to CMS to resolve this issue */
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- TODO: Add conetnt to CMS to resolve this issue */
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- TODO: Add conetnt to CMS to resolve this issue */
import Image from "next/image";
import headshot3 from "../../public/headshot3.jpg";
import { eduTheatre, specialSkills, stats, theater, training } from "@/data";

export const ResumeTable = (): JSX.Element => (
	<div className="p-6" data-cy="resume">
		<div className="flex flex-col items-center justify-evenly space-y-3 ">
			<p className="text-center">Voice Range: {stats["Voice Range"]}</p>
			<p>Height: {stats.height}</p>
		</div>

		<div className="flex flex-col items-center justify-center py-3 md:flex-row md:items-start md:justify-start md:space-x-6">
			<div className="w-4/6 md:w-1/4 md:pl-10">
				<Image
					alt="Barrett Penrod - Headshot"
					loading="lazy"
					placeholder="blur"
					src={headshot3}
				/>
			</div>

			<div className="w-full space-y-4">
				<div>
					<table className="w-full text-slate-100">
						<thead>
							<tr>
								<th
									className="py-3 text-left text-xl font-semibold text-secondary"
									colSpan={3}
								>
									Theatre
								</th>
							</tr>
						</thead>

						<tbody>
							{theater.map((item) => (
								<tr key={item["Show Name"]}>
									<td>{item["Show Name"]}</td>
									<td>{item.Role}</td>
									<td>{item["Theater Company"]}</td>
								</tr>
							))}
						</tbody>
						<thead>
							<tr>
								<th
									className="py-3 text-left text-xl font-semibold text-secondary"
									colSpan={3}
								>
									Educational Theatre
								</th>
							</tr>
						</thead>
						<tbody>
							{eduTheatre.map((item) => (
								<tr key={item["Show Name"]}>
									<td>{item["Show Name"]}</td>
									<td>{item.Role}</td>
									<td>{item["Theater Company"]}</td>
								</tr>
							))}
						</tbody>
						<thead>
							<tr>
								<th
									className=" py-3 text-left text-xl font-semibold text-secondary"
									colSpan={3}
								>
									<div>Training</div>

									<div className="pt-3">
										New York University: Master of Music in Vocal Performance -
										Musical Theater &apos;22
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{training.NYU.map((item) => (
								<tr key={item.Skill}>
									<td>{item.Skill}</td>
									<td>{item.Instructor}</td>
								</tr>
							))}
						</tbody>
						<thead>
							<tr>
								<th
									className="py-3 text-left text-xl font-semibold text-secondary"
									colSpan={3}
								>
									Cornish College of the Arts: BFA - Theater &apos;18
								</th>
							</tr>
						</thead>
						<tbody>
							{training.Cornish.map((item) => (
								<tr key={item.Skill}>
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

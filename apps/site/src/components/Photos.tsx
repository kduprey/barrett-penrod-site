import Image from "next/image";
import gaycity from "/public/gaycity.jpeg";
import knightensemble from "/public/knightensemble.png";
import mamamia from "/public/mamamia.jpeg";
import maywest from "/public/maywest.png";
import seussical from "/public/seussical.png";
import soldierensemble from "/public/soldierensemble.jpeg";
import springawakening from "/public/springawakening.png";

const Photos = () => (
		<div
			id="production-photos"
			data-cy="production-photos"
			className="flex flex-col items-center justify-center space-y-4 bg-slate-100 py-6"
		>
			<h2 className="text-primary">Production Photos</h2>
			<div className="flex w-full flex-col items-center justify-center space-y-3 md:grid md:grid-cols-3 md:justify-items-center md:space-y-0">
				<div className="w-3/4">
					<Image
						src={maywest}
						loading="lazy"
						placeholder="blur"
						alt="Horton, Sussical"
					/>
					<p className="text-center text-primary">
						Barbara (Mae West’s The Drag), Gay City - Seattle,
						Washington
					</p>
				</div>

				<div className="w-3/4">
					<Image
						src={mamamia}
						loading="lazy"
						placeholder="blur"
						alt="Horton, Sussical"
					/>
					<p className="text-center text-primary">
						Does Your Mother Know Ensemble (Mamma Mia), Seattle
						Musical Theatre
					</p>
				</div>

				<div className="w-3/4">
					<Image
						src={knightensemble}
						loading="lazy"
						placeholder="blur"
						alt="Horton, Sussical"
					/>
					<p className="text-center text-primary">
						Knight Ensemble (Cardinal Sins), Centerstage Theatre
					</p>
				</div>
				<div className="w-3/4">
					<Image
						src={springawakening}
						loading="lazy"
						placeholder="blur"
						alt="Horton, Sussical"
					/>
					<p className="text-center text-primary">
						Hanschen (Barrett Penrod ) and Ernst (Spring Awakening),
						Cornish College of the Arts
					</p>
				</div>
				<div className="w-3/4">
					<Image
						src={seussical}
						loading="lazy"
						placeholder="blur"
						alt="Horton, Sussical"
					/>
					<p className="text-center text-primary">
						Horton the Elephant (Seussical), Cornish College of the
						Arts
					</p>
				</div>

				<div className="w-3/4">
					<Image
						src={gaycity}
						loading="lazy"
						placeholder="blur"
						alt="Horton, Sussical"
					/>
					<p className="text-center text-primary">
						Rodney (Barrett Penrod) and Claire (The Drag), Gay City
						- Seattle Washington
					</p>
				</div>
				<div className="w-3/4">
					<Image
						src={soldierensemble}
						loading="lazy"
						placeholder="blur"
						alt="Horton, Sussical"
					/>
					<p className="text-center text-primary">
						Soldier Ensemble (For All That), Centerstage Theatre
					</p>
				</div>
			</div>
		</div>
	);

export default Photos;

import ProjectCard from '../components/ProjectCard'
import { GithubButton, ActionButton } from '../components/ActionButton'
import Carousel from '../components/Carousel'

const Home = () => {
	return (
		<div className="portfolio">
			<header className="portfolio-header">
				<div className="portfolio-logo">Douglas Wesley &lt;/&gt;</div>
				<nav className="portfolio-nav">
					<a href="#about">About Me</a>
					<a href="#projects">Projects</a>
					<a href="#skills">Skills</a>
				</nav>
			</header>

			<main className="portfolio-main">
				<section id="about" className="hero-section">
					<div className="hero-card">
						<div className="hero-text">
							<h1 className="hero-greeting">Hello.</h1>
							<h1 className="hero-title">I&apos;m Douglas!</h1>
							<p className="hero-description">
								I am a Software Engineering student at UFRPE specialising in
								building robust, scalable, and secure backend solutions with
								Java and Spring Boot.
							</p>
							<div className="hero-actions">
								<GithubButton onClick={() => window.open('https://github.com/douglas-wesley', '_blank')} />
								<ActionButton
									label="LinkedIn"
									variant='primary'
									onClick={() => window.open('https://www.linkedin.com/in/douglas-wesley/', '_blank')}
									rightIcon={
										<img
											src="/linkedin.svg"
											alt="LinkedIn"
											className="btn-icon"
										/>
									}
								/>
								<ActionButton
									label="Email"
									variant='primary'
									onClick={() => (window.location.href = 'mailto:douglas@example.com')}
									rightIcon={
										<img
											src="/email.svg"
											alt="Email"
											className="btn-icon"
										/>
									}
								/>
							</div>
						</div>
						<div className="hero-photo-card">
							<div className="window-header">
								<span className="dot" />
								<span className="dot" />
							</div>
							<img
								src="/images/eu.jpeg"
								alt="Douglas Wesley"
								className="hero-photo"
							/>
						</div>
					</div>
				</section>

				<section id="projects" className="section projects-section">
					<h2 className="section-title">Projects</h2>
					<Carousel className="projects-carousel">
						<ProjectCard
							title="Hospital API"
							description="Built a Java/Spring Boot system for hospital workflows with JWT-based RBAC security for multiple user roles and complete Swagger documentation."
							onViewProject={() => window.open('https://github.com/douglas-wesley/hospital-api', '_blank')}
						/>

						<ProjectCard
							title="Personal Finance API"
							description="Developed a Java/Spring Boot REST API for financial management featuring automated balance reconciliation, limit setting, and full Docker containerization."
							onViewProject={() => window.open('https://github.com/douglas-wesley/personal-finance-api', '_blank')}
						/>

						<ProjectCard
							title="Hostify"
							description="Collaborated on a cross-platform app for the hotel industry using React Native and a backend in Java/Spring Boot to handle reservations and room management."
							onViewProject={() => window.open('https://github.com/douglas-wesley/hostify', '_blank')}
						/>

						{/* duplicação para carrossel contínuo */}
						<ProjectCard
							title="Hospital API"
							description="Built a Java/Spring Boot system for hospital workflows with JWT-based RBAC security for multiple user roles and complete Swagger documentation."
							onViewProject={() => window.open('https://github.com/douglas-wesley/hospital-api', '_blank')}
						/>

						<ProjectCard
							title="Personal Finance API"
							description="Developed a Java/Spring Boot REST API for financial management featuring automated balance reconciliation, limit setting, and full Docker containerization."
							onViewProject={() => window.open('https://github.com/douglas-wesley/personal-finance-api', '_blank')}
						/>

						<ProjectCard
							title="Hostify"
							description="Collaborated on a cross-platform app for the hotel industry using React Native and a backend in Java/Spring Boot to handle reservations and room management."
							onViewProject={() => window.open('https://github.com/douglas-wesley/hostify', '_blank')}
						/>
					</Carousel>
				</section>

				<section id="skills" className="section skills-section">
					<h2 className="section-title">My Skills</h2>
					<Carousel className="skills-strip" speed={0.3}>
						<img src="/java-svgrepo-com.svg" alt="Java" className="skill-icon" />
						<img src="/spring-svgrepo-com.svg" alt="Spring" className="skill-icon" />
						<img src="/python.svg" alt="Python" className="skill-icon" />
						<img src="/pandas-svgrepo-com.svg" alt="Pandas" className="skill-icon" />
						<img src="/react-svgrepo-com.svg" alt="React" className="skill-icon" />
						<img src="/fastapi-svgrepo-com.svg" alt="FastAPI" className="skill-icon" />
						<img src="/docker-svgrepo-com.svg" alt="Docker" className="skill-icon" />
						<img src="/postgresql-svgrepo-com.svg" alt="PostgreSQL" className="skill-icon" />
						<img src="/mysql-svgrepo-com.svg" alt="MySQL" className="skill-icon" />
						<img src="/mongodb-svgrepo-com.svg" alt="MongoDB" className="skill-icon" />
						{/* repetição para carrossel contínuo */}
						<img src="/java-svgrepo-com.svg" alt="Java" className="skill-icon" />
						<img src="/spring-svgrepo-com.svg" alt="Spring" className="skill-icon" />
						<img src="/python.svg" alt="Python" className="skill-icon" />
						<img src="/pandas-svgrepo-com.svg" alt="Pandas" className="skill-icon" />
						<img src="/react-svgrepo-com.svg" alt="React" className="skill-icon" />
						<img src="/fastapi-svgrepo-com.svg" alt="FastAPI" className="skill-icon" />
						<img src="/docker-svgrepo-com.svg" alt="Docker" className="skill-icon" />
						<img src="/postgresql-svgrepo-com.svg" alt="PostgreSQL" className="skill-icon" />
						<img src="/mysql-svgrepo-com.svg" alt="MySQL" className="skill-icon" />
						<img src="/mongodb-svgrepo-com.svg" alt="MongoDB" className="skill-icon" />
					</Carousel>
				</section>

				<section id="formation" className="section formation-section">
					<h2 className="section-title">Education</h2>
					<article className="formation-card">
						<div className="window-header">
							<span className="dot" />
							<span className="dot" />
						</div>
						<div className="formation-cover">
							<img
								src="/images/rural.jpg"
								alt="Federal Rural University of Pernambuco campus"
								className="formation-cover-image"
							/>
						</div>
						<div className="formation-body">
							<div className="formation-logo">
								<img src="/ufrpe.svg" alt="UFRPE" className="formation-logo-image" />
							</div>
							<div className="formation-text">
								<h3>Federal Rural University of Pernambuco (UFRPE)</h3>
								<p>B.Sc. in Information Systems</p>
								<p className="formation-period">out 2024 - current</p>
							</div>
						</div>
					</article>
				</section>
			</main>
		</div>
	)
}

export default Home

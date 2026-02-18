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
								I&apos;m a backend-focused developer with a passion for building
							well-architected systems that solve real problems. Currently
							pursuing a B.Sc. in Information Systems at UFRPE, I spend most of
							my time designing RESTful APIs, working with relational databases,
							and exploring cloud-native patterns with Docker. I believe great software
							comes from clean code, solid engineering principles, and continuous learning.
							</p>
							<div className="hero-highlights">
								<div className="hero-highlight-item">
									<img src="/focus.svg" alt="" className="highlight-icon" />
									<div className="highlight-text">
										<span className="highlight-label">Focus</span>
										<span className="highlight-value">Backend &amp; APIs</span>
									</div>
								</div>
								<div className="hero-highlight-item">
									<img src="/stack.svg" alt="" className="highlight-icon" />
									<div className="highlight-text">
										<span className="highlight-label">Stack</span>
										<span className="highlight-value">Java &amp; Spring Boot</span>
									</div>
								</div>
								<div className="hero-highlight-item">
									<img src="/location.svg" alt="" className="highlight-icon" />
									<div className="highlight-text">
										<span className="highlight-label">Location</span>
										<span className="highlight-value">Recife, PE</span>
									</div>
								</div>
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

				<div className="section-divider">
					<div className="divider-buttons">
						<GithubButton onClick={() => window.open('https://github.com/douglas-wesley', '_blank')} />
						<ActionButton
							label="LinkedIn"
							variant='primary'
							onClick={() => window.open('https://www.linkedin.com/in/douglas-wesley/', '_blank')}
							rightIcon={
								<img src="/linkedin.svg" alt="LinkedIn" className="btn-icon" />
							}
						/>
						<ActionButton
							label="Email"
							variant='primary'
							onClick={() => (window.location.href = 'mailto:douglas@example.com')}
							rightIcon={
								<img src="/email.svg" alt="Email" className="btn-icon" />
							}
						/>
					</div>
				</div>

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

			<footer className="portfolio-footer">
				<div className="footer-icons">
					<a href="https://github.com/douglas-wesley" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
						<svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
					</a>
					<a href="https://www.linkedin.com/in/douglas-wesley/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
					</a>
					<a href="mailto:douglas@example.com" aria-label="Email">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
					</a>
				</div>
				<nav className="footer-nav">
					<a href="#about">About Me</a>
					<a href="#projects">Projects</a>
					<a href="#skills">Skills</a>
					<a href="#formation">Education</a>
				</nav>
				<p className="footer-copy">&copy; {new Date().getFullYear()} Douglas Wesley. All rights reserved.</p>
			</footer>
		</div>
	)
}

export default Home

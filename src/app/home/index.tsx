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
							<p className="hero-greeting">Hello.</p>
							<h1 className="hero-title">I&apos;m Douglas!</h1>
							<p className="hero-description">
								I am a Software Engineering student at UFRPE specialising in
								building robust, scalable, and secure backend solutions with
								Java and Spring Boot.
							</p>
							<div className="hero-actions">
								<button className="btn primary">Github</button>
								<button className="btn">LinkedIn</button>
								<button className="btn">Email</button>
							</div>
						</div>
						<div className="hero-photo-card">
							<div className="window-header">
								<span className="dot red" />
								<span className="dot yellow" />
								<span className="dot green" />
							</div>
							<img
								src="/douglas.jpg"
								alt="Douglas Wesley"
								className="hero-photo"
							/>
						</div>
					</div>
				</section>

				<section id="projects" className="section projects-section">
					<h2 className="section-title">Projects</h2>
					<div className="projects-grid">
						<article className="project-card">
							<div className="window-header">
								<span className="dot red" />
								<span className="dot yellow" />
								<span className="dot green" />
							</div>
							<div className="project-content">
								<h3>Hospital API</h3>
								<p>
									Built a Java/Spring Boot system for hospital workflows with
									JWT-based RBAC security for multiple user roles and complete
									Swagger documentation.
								</p>
								<div className="project-footer">
									<button className="btn ghost">View Project</button>
								</div>
							</div>
						</article>

						<article className="project-card">
							<div className="window-header">
								<span className="dot red" />
								<span className="dot yellow" />
								<span className="dot green" />
							</div>
							<div className="project-content">
								<h3>Personal Finance API</h3>
								<p>
									Developed a Java/Spring Boot REST API for financial
									management featuring automated balance reconciliation, limit
									setting, and full Docker containerization.
								</p>
								<div className="project-footer">
									<button className="btn ghost">View Project</button>
								</div>
							</div>
						</article>

						<article className="project-card">
							<div className="window-header">
								<span className="dot red" />
								<span className="dot yellow" />
								<span className="dot green" />
							</div>
							<div className="project-content">
								<h3>Hostify</h3>
								<p>
									Collaborated on a cross-platform app for the hotel industry
									using React Native and a backend in Java/Spring Boot to
									handle reservations and room management.
								</p>
								<div className="project-footer">
									<button className="btn ghost">View Project</button>
								</div>
							</div>
						</article>
					</div>
				</section>

				<section id="skills" className="section skills-section">
					<h2 className="section-title">My Skills</h2>
					<div className="skills-strip">
						<span>Java</span>
						<span>Spring Boot</span>
						<span>PostgreSQL</span>
						<span>Docker</span>
						<span>REST APIs</span>
						<span>Git</span>
						<span>Linux</span>
					</div>
				</section>

				<section id="formation" className="section formation-section">
					<h2 className="section-title">Formation</h2>
					<article className="formation-card">
						<div className="window-header">
							<span className="dot red" />
							<span className="dot yellow" />
							<span className="dot green" />
						</div>
						<div className="formation-body">
							<div className="formation-image-placeholder">UFRPE</div>
							<div className="formation-text">
								<h3>Federal Rural University of Pernambuco (UFRPE)</h3>
								<p>B.Sc. in Information Systems</p>
							</div>
						</div>
					</article>
				</section>
			</main>
		</div>
	)
}

export default Home

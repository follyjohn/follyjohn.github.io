import "./intro.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Intro() {
	return (
		<div id="intro">
			<div class="portfolio-intro-wrapper">
				<div class="portfolio-intro-content">
					<div class="container-fluid">
						<div class="row">
							<div class="col-8">
								<div class="row">
									<div class="col-12">
										<p class="portfolio-owner-name">
											Hi <br ></br>
											I'm John.
										</p>
									</div>
									<div class="col-12">
										<p class="portfolio-owner-links">
											<Link to="/" class="portfolio-owner-link"><FontAwesomeIcon icon={faGithub} size="lg" /></Link>
											<Link to="/" class="portfolio-owner-link"><FontAwesomeIcon icon={faLinkedin} size="lg" /></Link>
											<Link to="/" class="portfolio-owner-link"><FontAwesomeIcon icon={faInstagram} size="lg" /></Link>
										</p>
									</div>
								</div>
							</div>
							<div class="col-4 px-lg-3">
								<div class="row">
									<div class="col-12">
										<p>Introduction</p>
									</div>
									<div class="col-12 p2">
										<p>Product Designer and Developper, Based in France.</p>
									</div>
									<div class="col-12">
										<p>Donec tempus sem non augue venenatis fringilla. Cras volutpat sed ligula quis euismod. Ut eu lacus erat. Fusce a tempus lectus, non faucibus dolor. Nullam faucibus egestas varius.</p>
									</div>
									<div class="col-12">
										<Link to="/" class="">My story <FontAwesomeIcon icon={faArrowRight} /></Link>
									</div>
								</div>

							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	);
}

export default Intro;
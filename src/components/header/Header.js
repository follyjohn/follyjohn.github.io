import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div id="header" class="portfolio-header">
			<div class="portfolio-header-wrapper">
				<nav class="navbar">
					<Link to="/" class="navbar-brand">
						JF <span id="brand-dot">.</span>
					</Link>

					<div>
						<ul class="navbar-nav">
							<li class="nav-item active">
								<Link to="/" class="nav-link active" >Services</Link>
							</li>
							{/* <li class="nav-item">
								<Link to="/" class="nav-link" >Works </Link>
							</li> */}
							<li class="nav-item">
								<Link to="/" class="nav-link" >Blog </Link>
							</li>
							<li class="nav-item">
								<Link to="/" class="nav-link" >Contact </Link>
							</li>

						</ul>
					</div>
				</nav>


			</div>

		</div>
	);
}

export default Header;
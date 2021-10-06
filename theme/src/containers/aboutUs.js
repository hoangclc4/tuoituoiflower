import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { themeSettings } from '../lib/settings';
import MetaTags from '../components/metaTags';
import PageList from '../components/pageList';
import PageBreadcrumbs from '../components/breadcrumbs';

const AboutUsContainer = props => {
	const {
		state: { pageDetails }
	} = props;
	const pageListTag = themeSettings.page_list_tag;
	const pageListTagDefined = pageListTag && pageListTag.length > 0;
	const pageListPath = pageListTagDefined ? `/${pageListTag}` : null;
	const showPageList = pageListTagDefined && pageDetails.path === pageListPath;

	return (
		<Fragment>
			<MetaTags
				title={pageDetails.meta_title}
				description={pageDetails.meta_description}
				canonicalUrl={pageDetails.url}
				ogType="article"
				ogTitle={pageDetails.meta_title}
				ogDescription={pageDetails.meta_description}
			/>

			<section className="main__header section-container">
				<PageBreadcrumbs
					page={pageDetails.meta_title}
					path={pageDetails.path}
				/>
				{/* <h1 className="main__title">hello</h1> */}
				<main>
					<header className="row tm-welcome-section">
						<h1 className="col-12 text-center tm-section-title">
							Về shop hoa tươi tươi của chúng tôi
						</h1>
						<p className="col-12 text-center">
							This is about page of simple house template. You can modify and
							use this HTML template for your website. Total 3 HTML pages
							included in this template. Header image has a parallax effect.
						</p>
					</header>

					<div className="tm-container-inner tm-featured-image">
						<div className="row">
							<div className="col-12">
								<div className="placeholder-2">
									<img src="assets/images/about-05.jpg" />
								</div>
							</div>
						</div>
					</div>
					<div className="tm-container-inner tm-features">
						<div className="row">
							<div className="col-lg-4">
								<div className="tm-feature">
									<p className="tm-feature-description">
										Donec sed orci fermentum, convallis lacus id, tempus elit.
										Sed eu neque accumsan, porttitor arcu a, interdum est. Donec
										in risus eu ante.
									</p>
									{/* <a href="index.html" className="tm-btn tm-btn-primary">
										Read More
									</a> */}
								</div>
							</div>
							<div className="col-lg-4">
								<div className="tm-feature">
									<img src="assets/images/simple-house.jpg" />
									<p className="tm-feature-description">
										Maecenas pretium rutrum molestie. Duis dignissim egestas
										turpis sit. Nam sed suscipit odio. Morbi in dolor finibus,
										consequat nisl eget.
									</p>
									{/* <a href="index.html" className="tm-btn tm-btn-success">
										Read More
									</a> */}
								</div>
							</div>
							<div className="col-lg-4">
								<div className="tm-feature">
									<img src="assets/images/slide3.jpeg" />
									<p className="tm-feature-description">
										Morbi in dolor finibus, consequat nisl eget, pretium nunc.
										Maecenas pretium rutrum molestie. Duis dignissim egestas
										turpis sit.
									</p>
									{/* <a href="index.html" className="tm-btn tm-btn-danger">
										Read More
									</a> */}
								</div>
							</div>
						</div>
					</div>
					<div className="tm-container-inner tm-history">
						<div className="row">
							<div className="col-12">
								<div className="tm-history-inner">
									<img
										src="assets/images/slide2.jpeg"
										alt="Image"
										className="img-fluid tm-history-img"
									/>
									<div className="tm-history-text">
										<h4 className="tm-history-title">History of our shop</h4>
										<p className="tm-mb-p">
											Sed ligula risus, interdum aliquet imperdiet sit amet,
											auctor sit amet justo. Maecenas posuere lorem id augue
											interdum vehicula. Praesent sed leo eget libero ultricies
											congue.
										</p>
										<p>
											Redistributing this template as a downloadable ZIP file on
											any template collection site is strictly prohibited. You
											will need to{' '}
											<a href="https://templatemo.com/contact">
												contact TemplateMo
											</a>{' '}
											for additional permissions about our templates. Thank you.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</section>

			<section className="section-container page">
				<div
					className="page__content"
					dangerouslySetInnerHTML={{
						__html: pageDetails.content
					}}
				/>
				{showPageList && <PageList tags={pageListTag} sort="-date_created" />}
			</section>
		</Fragment>
	);
};

AboutUsContainer.propTypes = {
	state: PropTypes.shape({
		pageDetails: PropTypes.shape({})
	}).isRequired
};

export default AboutUsContainer;

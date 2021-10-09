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
							Shop hoa Tươi Tươi là một xưởng hoa nhỏ ở Thủ Đức, TpHCM. Niềm đam
							mê của chúng tôi là giúp những bông hoa hoàn thành sứ mệnh của
							mình, đó là truyền đi thông điệp của niềm vui, hạnh phúc, lòng
							biết ơn và cả lời xin lỗi đến những người xứng đáng. Mỗi bó hoa do
							chúng tôi thực hiện đều được đảm bảo có chất lượng cao. Mỗi bông
							hoa đều mang lại tiếng nói riêng bên trong và sự độc đáo, lộng
							lẫy. Tất cả các bông hoa đều được kiểm tra cẩn thận và chi tiết để
							đảm bảo sản phẩm được xuất xứ từ những nguồn đáng tin cậy và sẽ
							tươi mới đến tay khách hàng. Với tôi, đó là niềm hạnh phúc, tự hào
							và sứ mệnh của Shop hoa Tươi Tươi là mang tiếng nói của những bông
							hoa đến với mọi người
						</p>
					</header>

					<div className="tm-container-inner tm-featured-image">
						<div className="row">
							<div className="col-12">
								<div className="placeholder-2">
									<img
										src="assets/images/about-us1.jpeg"
										alt="shop hoa tươi tươi"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="tm-container-inner tm-features">
						<div className="row">
							<div className="col-lg-4">
								<div className="tm-feature">
									<img
										src="assets/images/about-us3.jpeg"
										alt="shop hoa tươi tươi"
										style={{ width: '500px;' }}
									/>
									<p className="tm-feature-description">
										Cung cấp hoa theo yêu cầu của bạn
									</p>
									{/* <a href="index.html" className="tm-btn tm-btn-primary">
										Read More
									</a> */}
								</div>
							</div>
							<div className="col-lg-4">
								<div className="tm-feature">
									<img
										src="assets/images/about-us2.jpeg"
										alt="shop hoa tươi tươi"
										style={{ width: '600px;' }}
									/>
									<p className="tm-feature-description">
										Có cửa hàng riêng tại Chung Cư 4s, Linh Đông, Thủ Đức
									</p>
									{/* <a href="index.html" className="tm-btn tm-btn-success">
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
										src="assets/images/simple-house.jpg"
										alt="shop hoa tươi tươi"
										className="img-fluid tm-history-img"
									/>
									<div className="tm-history-text">
										<h4 className="tm-history-title">Tầm nhìn</h4>
										<p className="tm-mb-p">
											Sản phẩm của chúng tôi được thiết kế với mục đích phù hợp
											và được làm cẩn thận. Họ yêu cầu kỹ năng và kiến thức từ
											nhà thiết kế và nhà sản xuất, họ có thể có lịch sử, họ có
											thể bảo tồn truyền thống, duy trì di sản hoặc hỗ trợ một
											ngành công nghiệp. Hầu như tất cả đều có một câu chuyện để
											kể.
										</p>
										<p>
											Redistributing this template as a downloadable ZIP file on
											any template collection site is strictly prohibited. You
											will need to{' '}
											<a href="https://www.facebook.com/shophoatuoituoi">
												Liên hệ
											</a>{' '}
											Nếu có vấn đề không hài lòng, quý khách cứ thoải mái liên
											hệ với Shop
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

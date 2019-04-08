import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const SEO = ({ metadata, facebook }) => (
  <Helmet>
    <html lang="ko" />
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />

    <meta name="theme-color" content="#fff" />
    <meta
      property="og:type"
      content={facebook ? facebook.type : "business.business"}
    />
    <meta
      property="og:title"
      content={facebook ? facebook.title : metadata.title}
    />
    <meta property="og:url" content={facebook ? facebook.url : metadata.url} />
    <meta
      property="og:image"
      content={facebook ? facebook.image : metadata.image}
    />

    <link rel="apple-touch-icon" sizes="180x180" href="favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
      rel="stylesheet"
      type="text/css"
    />

    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-1.12.4.min.js"
    />
    <script
      type="text/javascript"
      src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
    />
  </Helmet>
)

export default SEO

SEO.propTypes = {
  metadata: PropTypes.object.isRequired,
  facebook: PropTypes.object,
}

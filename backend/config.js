//
// config.js
//
// Web service configuration parameters, separate
// from our photoapp-config file that contains 
// AWS-specific configuration information.
//

const config = {
  score_config: "score-config.ini",
  score_profile: "s3readwrite",
  service_port: 8080,
  page_size: 12
};

module.exports = config;

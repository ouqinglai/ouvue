import config from '../../src/main'


export default ({
  Vue,
  options,
  router,
  siteData 
}) => {
  Vue.use(config.install)
}
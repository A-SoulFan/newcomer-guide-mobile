module.exports = {
  // css相关配置
  css: {
	// 是否使用css分离插件 ExtractTextPlugin
	extract: true,
	// 开启 CSS source maps?
	sourceMap: false,
	// css预设器配置项
	// 启用 CSS modules for all css / pre-processor files.
	requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  devServer: {
	open: process.platform === 'darwin',
	host: '0.0.0.0',
	port: 8080,
	https: false,
	hotOnly: false,
  },
  // 第三方插件配置
  pluginOptions: {
	// ...
  }
};

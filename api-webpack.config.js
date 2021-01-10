module.exports = (config, _context) => {
  const tsLoader = config.module.rules.find((r) => r.loader.includes('ts-loader'))

  if (tsLoader) {
    tsLoader.options.transpileOnly = false
    tsLoader.options.getCustomTransformers = (program) => ({
      before: [require('@nestjs/graphql/plugin').before({ introspectComments: true }, program)],
    })
  }

  return config
}

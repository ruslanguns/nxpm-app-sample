module.exports = (config, context) => {
  for (const rule of config.module.rules) {
    if (rule.loader !== 'ts-loader') {
      continue
    }

    rule.options.getCustomTransformers = (program) => ({
      before: [
        require('@nestjs/graphql/plugin').before(
          {
            typeFileNameSuffix: ['.model.ts', '.dto.ts', 'input.ts'],
            introspectComments: true,
          },
          program,
        ),
      ],
    })
  }

  return config
}

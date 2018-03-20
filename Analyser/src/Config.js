function Default(i, d) {
    return process.env[i] || d;
}

export default {
	regexEnabled: !Default('DISABLE_REGULAR_EXPRESSIONS', false),
	capturesEnabled: !Default('DISABLE_CAPTURE_GROUPS', false),
	arraysEnabled: !Default('DISABLE_ARRAYS', false),
	refinementsEnabled: !Default('DISABLE_REFINEMENTS', false),
	outFilePath: Default('EXPOSE_OUT_PATH', undefined),
    outCoveragePath: Default('EXPOSE_COVERAGE_PATH', undefined),
    concretizationsEnabled: Default('EXPOSE_PRINT_CONCRETIZATIONS', false)
}
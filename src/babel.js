const babelJest = require('babel-jest');

const createTransformer =
	babelJest.createTransformer || babelJest.default.createTransformer;

module.exports = createTransformer({
	presets: [
		[
			'@babel/preset-typescript',
			{
				jsxPragma: 'h',
				jsxPragmaFrag: 'Fragment',
			},
		],
		[
			'@babel/preset-env',
			{ useBuiltIns: 'entry', corejs: '2', targets: { node: 'current' } },
		],
	],
	plugins: [
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'h',
				pragmaFrag: 'Fragment',
			},
		],
		'@babel/plugin-proposal-class-properties',
		[
			'auto-import',
			{
				declarations: [
					{ default: 'Preact', members: ['h', 'Fragment'], path: 'preact' },
				],
			},
		],
		// Replace import.meta
		function () {
			return {
				visitor: {
					MetaProperty(path) {
						path.replaceWithSourceString('process');
					},
				},
			};
		},
	],
	babelrc: false,
	configFile: false,
});

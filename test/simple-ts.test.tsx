import { Fragment, FunctionalComponent } from 'preact';

// @ts-ignore
const foo = import.meta.env.FOO;

describe('serializer', () => {
	it('should serialize simple component', () => {
		const App: FunctionalComponent = () => (
			<>
				<div>foo</div>
				<Fragment>
					<div>foo2</div>
				</Fragment>
			</>
		);
		expect(<App />).toMatchSnapshot();
	});
});

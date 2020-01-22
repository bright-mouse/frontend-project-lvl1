 
install:
	npm install
start_even:
	npx babel-node src/bin/brain-even.js
start_calc:
	npx babel-node src/bin/brain-calc.js
start_gcd:
	npx babel-node src/bin/brain-gcd.js
publish:
	npm publish --dry-run
make lint:
	npx eslint

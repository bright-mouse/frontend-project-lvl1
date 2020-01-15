 
install:
	npm install
start:
	npx babel-node src/brain-games.js
publish:
	npm publish --dry-run

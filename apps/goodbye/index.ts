#!/usr/bin/env node

const args = process.argv.slice(2);
const name = args.join(" ");

if (name) {
	console.log(`Goodbye ${name}!`);
} else {
	console.log("Goodbye!");
}

#!/usr/bin/env node

const args = process.argv.slice(2);
const name = args.join(" ");

if (name) {
	console.log(`Hello ${name}! It's good to see you.`);
} else {
	console.log("Hello! It's good to see you.");
}

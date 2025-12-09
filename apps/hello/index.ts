#!/usr/bin/env node

const args = process.argv.slice(2);
const name = args.join(" ");

if (name) {
	console.log(`Hello ${name}!`);
} else {
	console.log("Hello awesome friend!");
}

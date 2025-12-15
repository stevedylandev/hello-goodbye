#!/usr/bin/env node

const args = process.argv.slice(2);
const name = args.join(" ");

if (name) {
	console.log(`Hello ${name}! Nice to see you :)`);
} else {
	console.log("Hello there my good boody!");
}

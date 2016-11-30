// Problem: We need a simple way to look at GitHub profile
// Solution: Use NodeJS to connect to GitHub API to get profile info and print
// it to the console.
//
'use strict'
const https = require('https')

const username = 'rizafahmi'
const options = {
  hostname: 'api.github.com',
  port: 443,
  path: `/users/${username}`,
  method: 'GET',
  headers: {
    'user-agent': 'node.js'
  }
}

// Connect to GitHub API
let request = https.request(options, (response) => {
  console.log(response.statusCode)
})

request.end()

request.on('error', (error) => {
  console.error(e)
})

// TODO: Read the data
// TODO: Parse the data
// TODO: Print the info

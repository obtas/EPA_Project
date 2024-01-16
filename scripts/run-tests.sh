#!/bin/bash

# install dependencies
npm install

# run jest tests
npm test --testPathPattern=__tests__

# print statement
echo tests complete
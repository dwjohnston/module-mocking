'use strict';

const path = require('path');
const fs = jest.createMockFromModule<typeof import("fs")>('fs')


fs.writeFileSync= jest.fn();
module.exports = fs;


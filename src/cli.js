#!/usr/bin/env node
const sierpinski = require('./index.js');

const printUsage = function(showIntro) {
    if (showIntro) {
        console.log(sierpinski.create(4));
        console.log(' Print the Sierpinski Arrowhead to the console!');
    }
    console.log('\n' + 
                ' Usage:\n' + 
                '   $ sierpinski-arrowhead-cli <n>\n' + 
                '   $ sierpinski-arrowhead-cli <n> [size] [options]\n' + 
                '\n' + 
                '   <n> is the recursive step, a number greater than or equal to 0\n' + 
                '   [size] is the size to draw, a number greater than or equal to <n>\n' + 
                '\n' +
                ' Options:\n' + 
                '   --rotate=<rotate>  Rotate the Sierpinski Arrowhead: [left|right|standard]\n' +
                '   --line=<line>      Draw using a specific line type: [bold|standard]\n' +
                '   --slash, -s        Draw using standard slash characters\n');
}

const getFlags = function(params) {
    let flags = [];
    if (params) {
        for (let i = 0; i < params.length; i++) {
            if (params[i].startsWith('-')) {
                flags.push(params[i]);
            }
        }
    }
    return flags;
}

const getValues = function(params) {
    let values = [];
    if (params) {
        for (let i = 0; i < params.length; i++) {
            if (!params[i].startsWith('-')) {
                values.push(params[i]);
            }
        }
    }
    return values;
}

const getRotation = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && flags[i].toLowerCase().startsWith('--rotate=')) {
            const line = flags[i].substring(9);
            if (line) {
                if (line.toLowerCase() === 'left' || line.toLowerCase() === 'right' || line.toLowerCase() === 'standard') {
                    return line.toLowerCase();
                } else {
                    console.log('\n Warning: Please provide a supported rotation type: [left|right|standard]');
                }
            } else {
                console.log('\n Warning: Please provide a supported rotation type: [left|right|standard]');
            }
        }
    }
    return undefined;
}

const getLine = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && flags[i].toLowerCase().startsWith('--line=')) {
            const line = flags[i].substring(7);
            if (line) {
                if (line.toLowerCase() === 'bold' || line.toLowerCase() === 'standard') {
                    return line.toLowerCase();
                } else {
                    console.log('\n Warning: Please provide a supported line type: [bold|standard]');
                }
            } else {
                console.log('\n Warning: Please provide a supported line type: [bold|standard]');
            }
        }
    }
    return undefined;
}

const drawSlash = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && (flags[i].toLowerCase() === '-s' || flags[i].toLowerCase() === '--slash')) {
            return true;
        }
    }
    return false;
}

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    const values = getValues(params);
    const flags = getFlags(params);
    if (values[0] && !isNaN(values[0]) && parseInt(values[0]) >= 0) {
        var n = parseInt(values[0]);
        var s = undefined;
        if (values[1]) {
            if (!isNaN(values[1]) && parseInt(values[1]) >= n) {
                s = parseInt(values[1]);
            } else {
                console.log('\n <size> should be a number greater than or equal to <n>');
                printUsage(false);
            }
        } else {
            s = n;
        }

        if (n !== undefined && s !== undefined) {
            console.log(sierpinski.create(n, { size: s, rotate: getRotation(flags), line: getLine(flags), slash: drawSlash(flags) }));
        }
    } else {
        console.log('\n <n> should be a number greater than or equal to 0');
        printUsage(false);
    }
} else {
    printUsage(true);
}
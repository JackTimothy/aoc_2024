#!/usr/bin/env ts-node

import * as fs from 'fs/promises';

async function readFile(filePath: string): Promise<string> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        throw err;
    }
}

// Usage
readFile('./example.txt').then(console.log);


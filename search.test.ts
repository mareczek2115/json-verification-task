import {searchForAsterisk} from "./searchForAsterisk.ts";
const jsonExamples : any = require('./json/jsonTestExamples.json')

test('Test function call with no argument', () => {
    expect(searchForAsterisk()).toBeTruthy();
})

test('Test function call with empty string', () => {
    expect(searchForAsterisk('')).toBeTruthy();
})

test('Test function call with correct JSON (Statement field is an array)', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.StatementArray))).toBeFalsy();
})

test('Test function call with correct JSON (Statement field is an object)', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.StatementObject))).toBeFalsy();
})

test('Test function call with JSON with missing PolicyDocument field', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.MissingPolicyDocument))).toBeTruthy();
})

test('Test function call with JSON with empty PolicyDocument value', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.EmptyPolicyDocument))).toBeTruthy();
})

test('Test function call with JSON with missing Statement field', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.MissingStatement))).toBeTruthy();
})

test('Test function call with JSON with empty Statement value', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.EmptyStatement))).toBeTruthy();
})

test('Test function call with JSON with empty object inside Statement array', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.EmptyObjectInsideStatement))).toBeTruthy();
})

test('Test function call with JSON with missing Resource field', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.MissingResource))).toBeTruthy();
})

test('Test function call with JSON with incorrect Resource value ("  ")', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.IncorrectResource_1))).toBeTruthy();
})

test('Test function call with JSON with incorrect Resource value (" *")', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.IncorrectResource_2))).toBeTruthy();
})

test('Test function call with JSON with incorrect Resource value ("* ")', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.IncorrectResource_3))).toBeTruthy();
})

test('Test function call with JSON with incorrect Resource value ("test*test")', () => {
    expect(searchForAsterisk(JSON.stringify(jsonExamples.IncorrectResource_4))).toBeTruthy();
})
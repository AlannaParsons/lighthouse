/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 20 2023
-------------------------------------------------------------
Instruction

Here are all the requirements for this function:
-
return an empty string when passed an empty string
input: ""
output: ""
-
return a single name when passed a single name
input: "name"
output: "name"
-
return a single name when passed a single name with extra spaces
input: " name "
output: "name"
-
return a last-name, first-name when passed a first and last-name
input: "first last"
output: "last, first"
-
Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)
input: " first last"
output: "last, first"
-
return an empty string when passed a single honorific
input: "Dr. "
output: ""
-
return honorific first-name when passed honorific first-name
input: "Dr. first"
output: "Dr. first"
-
return a honorific last-name, first-name when passed honorific first-name last-name
input: "Dr. first-name last-name"
output: "Dr. last-name, first-name"
-
return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words
input: " Dr. first-name last-name "
output: "Dr. last-name, first-name"
-
throw an error when name is undefined
input: undefined
output: throw 'Error'

In the English language, an English honorific is a title prefixing a person's name. Examples of honorifics:

Mr.
Mrs.
Ms.
Dr.

*/

const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name with extra spaces', function() {
    const inputName = " name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });


  it('should return a last-name, first-name when passed a first and last-name', function() {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });


  it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)', function() {
    const inputName = " first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return an empty string when passed a single honorific', function() {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return honorific first-name when passed honorific first-name', function() {
    const inputName = "Dr. first";
    const expectedOutput = "Dr. first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return a honorific last-name, first-name when passed honorific first-name last-name', function() {
    const inputName = "Dr. first-name last-name";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
    const inputName =  " Dr. first-name last-name ";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('throw an error when name is undefined', function() {
    chai.expect(nameInverter).to.throw(TypeError);
  });

});
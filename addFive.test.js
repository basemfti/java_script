const { defaul :testRunner}= require("jest-runner");
const addfive= require(',/addfive');
Test(' return he number plus 5',()=> { expect(addfive(1)).toBe(6); })
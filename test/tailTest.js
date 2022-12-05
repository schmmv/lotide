const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE
const test1 = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(test1.length, 2);
assertEqual(test1[0], "Lighthouse");
assertEqual(test1[1], "Labs");

const test2 = tail([1]);
assertEqual(test2.length, 0);
assertEqual(test2[0], undefined);

const test3 = tail([]);
assertEqual(test3.length, 0);
assertEqual(test3[0], undefined);
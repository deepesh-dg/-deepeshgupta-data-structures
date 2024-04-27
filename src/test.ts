/**
 * 1. Insertion
 *  a. First
 *  b. Last
 *  c. in the middle
 * 2. Deletion
 *  a. First
 *  b. Last
 *  c. in the middle
 * 3. Searching
 *  a. First
 *  b. Last
 *  c. in the middle
 */

import { LinkedList } from "./";
const d1 = { number: 1 };
const d2 = { number: 2 };
const d3 = { number: 3 };
const d4 = { number: 4 };
const count = new LinkedList(d1);

count.insert(d2);
count.insert(d3);
count.insert(d4);
count.insertAt(2, { number: 2.1 });
count.removeLast();
count.removeAt(1);
count.remove(d2);
count.remove(d1);

console.log(count.indexOf(count.getAt(0)));

import LinkedList from "./classes/linked-list/LinkedList.js";

const count = new LinkedList({ number: 1 });

count.add({ number: 2 });
count.add({ number: 3 });
count.add({ number: 4 });
count.addAtIndex(2, { number: 2.1 });
count.removeLast();
count.removeAt(1);

console.log(count.toObject());

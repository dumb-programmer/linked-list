const LinkedList = require("./linkedList");

describe("Linked List", () => {
  it("append adds value to the end of the list", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    expect(linkedList.toString()).toEqual("( 10 ) -> null");
    linkedList.append(20);
    expect(linkedList.toString()).toEqual("( 10 ) -> ( 20 ) -> null");
    linkedList.append(30);
    expect(linkedList.toString()).toEqual("( 10 ) -> ( 20 ) -> ( 30 ) -> null");
  });

  it("prepend adds value to the front of the list", () => {
    const linkedList = new LinkedList();
    linkedList.prepend(10);
    expect(linkedList.toString()).toEqual("( 10 ) -> null");
    linkedList.prepend(20);
    expect(linkedList.toString()).toEqual("( 20 ) -> ( 10 ) -> null");
    linkedList.prepend(30);
    expect(linkedList.toString()).toEqual("( 30 ) -> ( 20 ) -> ( 10 ) -> null");
  });

  it("size returns the total number of nodes in the list", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    expect(linkedList.size).toEqual(1);
    linkedList.prepend(20);
    expect(linkedList.size).toEqual(2);
    linkedList.prepend(30);
    expect(linkedList.size).toEqual(3);
  });

  it("head returns the first element", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    expect(linkedList.head.data).toEqual(10);
    linkedList.prepend(20);
    expect(linkedList.head.data).toEqual(20);
    linkedList.append(30);
    expect(linkedList.head.data).toEqual(20);
  });

  it("tail returns the last element", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    expect(linkedList.tail.data).toEqual(10);
    linkedList.prepend(20);
    expect(linkedList.tail.data).toEqual(10);
    linkedList.append(30);
    expect(linkedList.tail.data).toEqual(30);
  });

  it("at(index) returns the node at the given index", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    expect(linkedList.at(0)).toEqual(10);
    linkedList.prepend(20);
    expect(linkedList.at(1)).toEqual(10);
    linkedList.append(30);
    expect(linkedList.at(2)).toEqual(30);
    expect(linkedList.at(4)).toEqual(-1);
  });

  it("pop removes the last element from the list", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.prepend(20);
    linkedList.append(30);
    expect(linkedList.pop()).toEqual(30);
    expect(linkedList.pop()).toEqual(10);
    expect(linkedList.pop()).toEqual(20);
    expect(linkedList.pop()).toEqual(undefined);
  });

  it("contains returns true if the passed value is in list and false otherwise", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.prepend(20);
    linkedList.append(30);
    expect(linkedList.contains(10)).toBeTruthy();
    expect(linkedList.contains(20)).toBeTruthy();
    expect(linkedList.contains(30)).toBeTruthy();
    expect(linkedList.contains(-5)).toBeFalsy();
  });

  it("find returns the index of the node containing value or null otherwise", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.prepend(20);
    linkedList.append(30);
    expect(linkedList.find(10)).toEqual(1);
    expect(linkedList.find(20)).toEqual(0);
    expect(linkedList.find(30)).toEqual(2);
    expect(linkedList.find(-5)).toEqual(null);
  });

  it("toString represents linked list in format ( value ) -> ( value ) -> ... -> null", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.prepend(20);
    linkedList.append(30);
    expect(linkedList.toString()).toEqual("( 20 ) -> ( 10 ) -> ( 30 ) -> null");
  });

  it("insertAt inserts a new node at a given index", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.prepend(20);
    linkedList.append(30);

    linkedList.insertAt(12, 0);
    expect(linkedList.toString()).toEqual(
      "( 12 ) -> ( 20 ) -> ( 10 ) -> ( 30 ) -> null"
    );
    linkedList.insertAt(100, 2);
    expect(linkedList.toString()).toEqual(
      "( 12 ) -> ( 20 ) -> ( 100 ) -> ( 10 ) -> ( 30 ) -> null"
    );
  });

  it("removeAt removes a node at a given index", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.prepend(20);
    linkedList.append(30);

    linkedList.removeAt(0);
    expect(linkedList.toString()).toEqual("( 10 ) -> ( 30 ) -> null");
    linkedList.removeAt(1);
    expect(linkedList.toString()).toEqual("( 10 ) -> null");
  });
});

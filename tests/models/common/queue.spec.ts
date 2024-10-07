import { Queue } from "../../../scripts/models/common/queue";

import { describe, expect, it } from "@jest/globals";

describe("Queue", () => {
  describe("constructor", () => {
    it("should be defined when created", () => {
      const queue = new Queue<number>();

      expect(queue).toBeDefined();
    });
  });

  describe("enqueue", () => {
    it("should add an element to the queue", () => {
      const queue = new Queue<number>();

      expect(queue.peek).toBeNull();

      queue.enqueue(1);

      expect(queue.peek).toBe(1);
    });

    it("should add multiple elements to the queue", () => {
      const queue = new Queue<number>();

      expect(queue.peek).toBeNull();

      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.peek).toBe(1);
    });
  });

  describe("dequeue", () => {
    it("should remove an element from the queue", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);

      expect(queue.peek).toBe(1);

      queue.dequeue();

      expect(queue.peek).toBeNull();
    });

    it("should remove multiple elements from the queue", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.peek).toBe(1);

      queue.dequeue();

      expect(queue.peek).toBe(2);

      queue.dequeue();

      expect(queue.peek).toBeNull();
    });

    it("should not throw when removing an element from an empty queue", () => {
      const queue = new Queue<number>();

      expect(queue.peek).toBeNull();

      queue.dequeue();

      expect(queue.peek).toBeNull();
    });
  });

  describe("size", () => {
    it("should have a size of 0 when created", () => {
      const queue = new Queue<number>();

      expect(queue.size).toBe(0);
    });

    it("should have a size of 1 after adding an element", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);

      expect(queue.size).toBe(1);
    });

    it("should have a size of 0 after adding and removing an element", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);
      queue.dequeue();

      expect(queue.size).toBe(0);
    });

    it("should have a size of 0 after removing an element from an empty queue", () => {
      const queue = new Queue<number>();

      queue.dequeue();

      expect(queue.size).toBe(0);
    });
  });

  describe("peek", () => {
    it("should have a peek of null when the queue is empty", () => {
      const queue = new Queue<number>();

      expect(queue.peek).toBeNull();
    });

    it("should have a peek of 1 when 1 is enqueued", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);

      expect(queue.peek).toBe(1);
    });

    it("should have a peek of 1 when 1 is enqueued and 2 is enqueued", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.peek).toBe(1);
    });
  });

  describe("fromArray", () => {
    it("should be created from an array", () => {
      const queue = Queue.fromArray([1, 2, 3]);

      expect(queue.size).toBe(3);
      expect(queue.peek).toBe(1);
    });

    it("should be created from an empty array", () => {
      const queue = Queue.fromArray([]);

      expect(queue.size).toBe(0);
      expect(queue.peek).toBeNull();
    });
  });

  describe("[Symbol.iterator]", () => {
    it("should be iterable using the spread operator", () => {
      const queue = Queue.fromArray([1, 2, 3]);

      const elements = [...queue];

      expect(elements).toEqual([1, 2, 3]);
    });

    it("should be iterable using a for...of loop", () => {
      const queue = Queue.fromArray([1, 2, 3]);

      const elements = [];
      for (const element of queue) {
        elements.push(element);
      }

      expect(elements).toEqual([1, 2, 3]);
    });
  });
});

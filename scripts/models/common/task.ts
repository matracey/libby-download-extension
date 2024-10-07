import { Queue } from "./queue";

export class Task {
  id: string;
  filename: string;
  task: string;
  state: string;

  private static readonly TASKS_KEY: string = "tasks";

  constructor(filename: string, task: string, state: string) {
    this.id = self.crypto.randomUUID();
    this.filename = filename;
    this.task = task;
    this.state = state;
  }

  /**
   * Add a Task to the front of the task Queue.
   *
   * @param task The Task to add to the Queue.
   * @returns A promise that resolves to the Id of the enqueued Task.
   */
  static async addTask(task: Task): Promise<string> {
    const tasks = await Task.fetchAll();
    tasks.enqueue(task);
    await Task.flush(tasks);
    return task.id;
  }

  /**
   * Update the state of a given task.
   *
   * @param id The Id of the Task to update.
   * @param state The updated state to set on the Task.
   */
  static async updateTask(id: string, state: string) {
    const tasks = await Task.fetchAll();
    for (const task of tasks) {
      if (task.id === id) {
        task.state = state;
      }
    }
    await Task.flush(tasks);
  }

  /**
   * Fetches all active tasks from localStorage.
   * 
   * @returns A Queue that contains all active tasks.
   */
  private static async fetchAll(): Promise<Queue<Task>> {
    const storageResponse = await browser.storage.local.get(Task.TASKS_KEY);

    return Queue.fromArray(storageResponse?.tasks ?? []);
  }

  /**
   * Flushes the specified taskQueue to localStorage.
   * 
   * @param taskQueue The taskQueue to flush.
   * @returns A promise that resolves when localStorage has been updated.
   */
  private static async flush(taskQueue: Queue<Task>): Promise<void> {
    return await browser.storage.local.set({ tasks: [...taskQueue] });
  }
}

export class Task {
  id: string;
  filename: string;
  task: string;
  state: string;

  constructor(filename: string, task: string, state: string) {
    this.id = self.crypto.randomUUID();
    this.filename = filename;
    this.task = task;
    this.state = state;
  }

  /**
   * Add task to task list
   *
   * @param task
   */
  public static async addTask(task: Task): Promise<string> {
    const tasks = await Task.fetchTasks();
    tasks.unshift(task);
    await browser.storage.local.set({ tasks: tasks });
    return task.id;
  }

  /**
   * Update state of task
   *
   * @param id
   * @param state
   */
  public static async updateTask(id: string, state: string) {
    const tasks = await Task.fetchTasks();
    for (const task of tasks) {
      if (task.id === id) {
        task.state = state;
      }
    }
    await browser.storage.local.set({ tasks: tasks });
  }

  /**
   * Fetch active tasks
   */
  private static async fetchTasks(): Promise<Array<Task>> {
    const storageResponse = await browser.storage.local.get("tasks");
    if (storageResponse.tasks) {
      return storageResponse.tasks;
    } else {
      return [];
    }
  }
}

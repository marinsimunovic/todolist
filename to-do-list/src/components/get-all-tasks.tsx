const API_URL = "http://localhost:3000/tasks";

// Za dohvaćanje svih zadataka
const getAllTasks = async () => {
  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

// Za dodavanje novog zadatka
const addTask = async (text: string) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, completed: false }),
    });
    const newTask = await response.json();
    return newTask;
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

// Za brisanje zadatka
const deleteTask = async (id: number) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

// Za ažuriranje statusa zadatka
const updateTaskStatus = async (id: number, completed: boolean) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });
  } catch (error) {
    console.error("Error updating task status:", error);
  }
};

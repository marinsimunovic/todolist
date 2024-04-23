import Button from "./components/button";
import Layout from "./components/layout";

type listType = {
  tasks: string[];
};

const App = () => {
  const data: listType = { tasks: ["operi sudje", "usisaj"] };

  return (
    <>
      <Layout>
        <div>
          <h1>TO-DO List</h1> <Button>Add task</Button>
          <div>
            {" "}
            <select name="todolist" id="todolist">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="list">
            <ul className="list__card">
              {data.tasks.map((todo, index) => {
                return (
                  <div className="list__item">
                    <li key={index}>{todo}</li>
                    <Button>delete</Button>
                    <Button>edit</Button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default App;

const Task = require("../db/db").task;

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    return res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      text: req.body.text,
      ischeck: req.body.ischeck,
    });
    return res.status(201).send(task);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateTask = async (req, res) => {
  const body = req.body;
  if (body.hasOwnProperty("id") && body.hasOwnProperty("text")) {
    Task.update(
      {
        text: body.text,
      },
      {
        where: {
          id: body.id,
        },
      }
    );
    res.send(body);
  } else if (body.hasOwnProperty("id") && body.hasOwnProperty("ischeck")) {
    Task.update(
      {
        ischeck: body.ischeck,
      },
      {
        where: {
          id: body.id,
        },
      }
    );
    res.send(body);
  } else {
    res.status(422).send("Error! Params not correct");
  }
};

const deleteTask = async (req, res) => {
  const id = req.query.id;
  if (id) {
    Task.destroy({
      where: {
        id: id,
      },
    })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
  } else {
    res.status(422).send("Error! Params not correct");
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};

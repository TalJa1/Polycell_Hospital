import React, { useState } from "react";
import { Grid, InputLabel, Autocomplete, TextField, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { TimePicker } from "antd";
import { RangeValue } from "rc-picker/lib/interface";
import { Dayjs } from "dayjs";

interface Todo {
    id: number;
    time: RangeValue<Dayjs>;
    dayOfWeek: string | null;
  }

const TodoGeneralTimeList: React.FC = () => {
  const daysOfWeek: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: nextId,
      time: null,
      dayOfWeek: null,
    };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTimeChange = (id: number, time: RangeValue<Dayjs>) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, time: time || null } : todo
      )
    );
  };

  const handleDayOfWeekChange = (id: number, dayOfWeek: string | null) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, dayOfWeek: dayOfWeek || null } : todo
      )
    );
  };

  return (
    <>
      {todos.map((todo) => (
        <Grid container key={todo.id}>
          <Grid item sm={5}>
            <TimePicker.RangePicker
              style={{
                width: "100%",
                backgroundColor: "transparent",
              }}
              value={todo.time || undefined}
              onChange={(time) => handleTimeChange(todo.id, time)}
            />
          </Grid>
          <Grid item sm={1}>
            <InputLabel
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 700,
              }}
            ></InputLabel>
          </Grid>
          <Grid item sm={5}>
            <Autocomplete
              options={daysOfWeek}
              renderInput={(params) => <TextField {...params} />}
              fullWidth
              value={todo.dayOfWeek}
              onChange={(event, value) =>
                handleDayOfWeekChange(todo.id, value)
              }
            />
          </Grid>
          <Grid item sm={1}>
            <InputLabel
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 700,
                cursor: "pointer",
              }}
              onClick={() => handleRemoveTodo(todo.id)}
            >
              <RemoveCircleOutlineIcon />
            </InputLabel>
          </Grid>
        </Grid>
      ))}
      <Button
        variant="contained"
        onClick={handleAddTodo}
      >
        Add
      </Button>
    </>
  );
};

export default TodoGeneralTimeList;

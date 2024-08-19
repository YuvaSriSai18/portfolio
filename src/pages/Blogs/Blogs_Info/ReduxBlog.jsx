import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import code_1 from "../../../assets/codesnaps/code_1.png";
import code_2 from "../../../assets/codesnaps/code_2.png";
import code_3 from "../../../assets/codesnaps/code_3.png";
import code_4 from "../../../assets/codesnaps/code_4.png";
import code_5 from "../../../assets/codesnaps/code_5.png";
export default function ReduxBlog() {
  return (
    <Box>
      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Understanding React Redux: A Comprehensive Guide
        </Typography>
        <Typography variant="p">
          Redux is a powerful state management tool often used in React
          applications to manage complex state across various components. It
          helps to centralize the state in a single store, making it predictable
          and easier to debug. In this blog, we'll dive into the key concepts of
          Redux, its advantages, and how to implement it in a React application
          with a practical example.
        </Typography>
      </Box>
      <Divider sx={{ marginTop: 3, marginBottom: 2 }} />
      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          What is Redux?
        </Typography>
        <Typography variant="p">
          Redux is a powerful state management tool often used in React
          applications to manage complex state across various components. It
          helps to centralize the state in a single store, making it predictable
          and easier to debug. In this blog, we'll dive into the key concepts of
          Redux, its advantages, and how to implement it in a React application
          with a practical example.
        </Typography>
        <ol>
          <li>
            <b>Single Source of Truth: </b>The entire state of the application
            is stored in a single JavaScript object (the store). This makes the
            state easier to manage and debug.
          </li>
          <li>
            <b>State is Read-Only: </b>The only way to change the state is by
            dispatching an action, an object that describes what happened.
          </li>
          <li>
            <b>Changes are Made with Pure Functions: </b>To specify how the
            state tree is transformed by actions, you write pure reducers. A
            reducer is a function that takes the current state and an action as
            arguments and returns a new state.
          </li>
        </ol>
      </Box>
      <Divider sx={{ marginTop: 3, marginBottom: 2 }} />
      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Why Use Redux ?
        </Typography>
        <ul>
          <li>
            <b>Predictability: </b>Since the state is stored in a single object,
            it becomes easier to track how state changes over time, which
            simplifies debugging and testing.
          </li>
          <li>
            <b>Maintainability: </b>With Redux, the flow of data is consistent
            and easy to understand, making your codebase more maintainable as
            your application grows.
          </li>
          <li>
            <b>Extensibility:</b>Redux has a robust ecosystem, including
            middleware like Redux Thunk for handling asynchronous logic, making
            it highly extensible.
          </li>
          <li>
            <b>DevTools Integration: </b> Redux DevTools allows you to inspect
            every action, the state before and after, and even "time-travel"
            through different states of your application.
          </li>
        </ul>
      </Box>
      <Divider sx={{ marginTop: 3, marginBottom: 2 }} />
      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Core Concepts of Redux
        </Typography>
        <ol>
          <li>
            <b>Store: </b>The single source of truth that holds the entire state
            of your application.
          </li>
          <li>
            <b>Actions: </b>Plain JavaScript objects that describe what happened
            in the app. Actions are dispatched to the store to signal that
            something has occurred.
          </li>
          <li>
            <b>Reducers:</b> Redux has a robust ecosystem, including middleware
            like Redux Thunk for handling asynchronous logic, making it highly
            extensible.
          </li>
          <li>
            <b>Middleware: </b> Functions that sit between the dispatch of an
            action and the moment it reaches the reducer. They can be used to
            log actions, handle asynchronous operations, and more.
          </li>
        </ol>
      </Box>
      <Divider sx={{ marginTop: 3, marginBottom: 2 }} />
      <Box>
        <Typography fontWeight={600} mt={1} mb={1} variant="h6">
          Setting Up Redux in a React Application: A Step-by-Step Example
        </Typography>
        <Typography>
          Let’s walk through setting up Redux in a React application with a
          simple example.
        </Typography>
        <ol>
          <Typography>
            <li>
              <b style={{ fontWeight: 600 }}>Install Redux and React-Redux</b>
            </li>
            First, install the necessary packages: <br />
            <Box
              component="img"
              src={code_1}
              width={{ xs: 250, sm: 400 }}
              alignSelf={"center"}
              ml={{ xs: 2, sm: 10 }}
              mt={2}
              borderRadius={4}
            />
          </Typography>

          <Typography>
            <li>
              <b style={{ fontWeight: 600 }}>Create a Redux Slice</b>
            </li>
            A slice is a collection of Redux reducer logic and actions for a
            single feature of your application. <br />
            <Box
              component="img"
              src={code_2}
              width={{ xs: 250, sm: 400 }}
              alignSelf={"center"}
              ml={{ xs: 2, sm: 10 }}
              mt={2}
              borderRadius={4}
            />{" "}
            <br />
            Here, we created a counterSlice with an initial state and three
            reducers:{" "}
            <b style={{ fontWeight: 600 }}>
              increment, decrement, and incrementByAmount
            </b>
            .
          </Typography>

          <Typography>
            <li>
              <b style={{ fontWeight: 600 }}>Configure the Redux Store</b>
            </li>
            Now, let’s configure the Redux store and include the counterSlice
            reducer. <br />
            <Box
              component="img"
              src={code_3}
              width={{ xs: 250, sm: 400 }}
              alignSelf={"center"}
              ml={{ xs: 2, sm: 10 }}
              mt={2}
              borderRadius={4}
            />{" "}
            <br />
            This sets up the store with the counter slice reducer.
          </Typography>

          <Typography>
            <li>
              <b style={{ fontWeight: 600 }}>
                Provide the Redux Store to Your App
              </b>
            </li>
            Wrap your application with the Provider component to make the Redux
            store available throughout the app. <br />
            <Box
              component="img"
              src={code_4}
              width={{ xs: 250, sm: 400 }}
              alignSelf={"center"}
              ml={{ xs: 2, sm: 10 }}
              mt={2}
              borderRadius={4}
            />{" "}
            <br />
          </Typography>

          <Typography>
            <li>
              <b style={{ fontWeight: 600 }}>
                Use Redux State and Actions in Components
              </b>
            </li>
            Now, you can access the state and dispatch actions using React-Redux
            hooks in your components. <br />
            <Box
              component="img"
              src={code_5}
              width={{ xs: 250, sm: 400 }}
              alignSelf={"center"}
              ml={{ xs: 2, sm: 10 }}
              mt={2}
              borderRadius={4}
            />{" "}
            <br />
            In this Counter component :
            <Box ml={{ xs: 1, sm: 4 }}>
              <ul style={{ marginLeft: { xs: "10px", sm: "50px" } }}>
                <li>
                  <b style={{ fontWeight: 600 }}>useSelector</b> is used to read
                  the counter state from the store.
                </li>
                <li>
                  <b style={{ fontWeight: 600 }}>useDispatch</b> is used to
                  dispatch actions (increment, decrement, and
                  incrementByAmount).
                </li>
              </ul>
            </Box>
          </Typography>
        </ol>
      </Box>
      <Divider sx={{ marginTop: 3, marginBottom: 2 }} />

      <Box>
        <Typography variant="h6" fontWeight={600} mt={1} mb={1}>
          Conclusion :
        </Typography>
        <Typography variant="p">
          Redux is a scalable state management solution for React, providing
          predictable and debuggable application state through actions,
          reducers, and a central store. It's ideal for complex scenarios like
          global authentication and async data fetching. Implementing Redux
          enhances code maintainability and benefits from tools like Redux
          DevTools and middleware, making it ideal for large React projects.
          <br />
          <br />
          Happy coding!
        </Typography>
      </Box>
    </Box>
  );
}

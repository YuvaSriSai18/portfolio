import { Box, Typography, Divider } from "@mui/material";
import React from "react";

import code_6 from "../../../assets/codesnaps/code_6.png";
import code_7 from "../../../assets/codesnaps/code_7.png";
import code_8 from "../../../assets/codesnaps/code_8.png";
import code_9 from "../../../assets/codesnaps/code_9.png";
import code_10 from "../../../assets/codesnaps/code_10.png";
// import code_11 from "../../../assets/codesnaps/code_11.png";
// import code_12 from "../../../assets/codesnaps/code_12.png";
export default function Socket_IO() {
  return (
    <Box>
      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Socket.IO: Understanding the Core Methods with ExamplesSocket IO:
          Comprehensive
        </Typography>
        <Typography variant="p">
          Socket.IO is a powerful library for real-time communication between
          the server and client, built on WebSockets with fallbacks for older
          browsers. It enables real-time, bi-directional communication, making
          it ideal for applications like chat apps, gaming, and collaborative
          tools. Below is a breakdown of common Socket.IO methods with code
          examples to help you understand how to use them effectively.
        </Typography>
      </Box>
      <Divider sx={{ marginTop: 3, marginBottom: 2 }} />
      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Why to use Socket IO
        </Typography>
        <Typography ml={{ xs: 1, sm: 4 }}>
          <ul>
            <li>
              <b style={{ fontWeight: 500 }}>Real-Time Communication: </b>Easily
              implement real-time features like chat apps, notifications, and
              live updates.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>Scalability: </b>Supports handling
              large numbers of simultaneous connections with clustering and load
              balancing.
            </li>

            <li>
              <b style={{ fontWeight: 500 }}>Ease of Use:: </b>Provides a
              straightforward API with built-in reconnection logic and
              event-driven architecture.
            </li>

            <li>
              <b style={{ fontWeight: 500 }}>Low Latency: </b>Actions like
              sending messages or receiving updates occur almost instantly.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>Efficient Data Usage: </b>
              Event-driven communication reduces unnecessary data transmission.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>Instant Updates: </b>Users get live
              updates, enhancing the interactive experience.
            </li>
          </ul>
        </Typography>
      </Box>
      <Divider sx={{ marginTop: 3, marginBottom: 2 }} />
      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Connection Methods
        </Typography>
        <Typography ml={{ xs: 1, sm: 4 }}>
          <ul>
            <li>
              <b style={{ fontWeight: 500 }}>socket.connect(): </b>Establishes a
              new connection to the server.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>socket.disconnect(): </b>
              Disconnects the socket from the server.
            </li>
          </ul>
        </Typography>
        <Box
          component={"img"}
          src={code_6}
          width={{ xs: 250, sm: 400 }}
          alignSelf={"center"}
          ml={{ xs: 2, sm: 10 }}
          mt={2}
          borderRadius={4}
        />
      </Box>

      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Event Handling Methods
        </Typography>
        <Typography ml={{ xs: 1, sm: 4 }}>
          <ul>
            <li>
              <b style={{ fontWeight: 500 }}>socket.on(event, callback): </b>
              Listens for the specified event and executes the callback when the
              event occurs.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>socket.off(event, callback): </b>
              Removes the event listener for the specified event and callback.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>socket.once(event, callback): </b>
              Listens for the specified event but only once. After the event
              occurs, the listener is automatically removed.
            </li>
          </ul>
        </Typography>
        <Box
          component={"img"}
          src={code_7}
          width={{ xs: 250, sm: 400 }}
          alignSelf={"center"}
          ml={{ xs: 2, sm: 10 }}
          mt={2}
          borderRadius={4}
        />
      </Box>

      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Emitting Events
        </Typography>
        <Typography ml={{ xs: 1, sm: 4 }}>
          <ul>
            <li>
              <b style={{ fontWeight: 500 }}>socket.emit(event, ...args): </b>{" "}
              Emits the specified event with optional arguments to the server or
              other clients.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>socket.send(data): </b>
              Sends a message to the server using the default event ('message').
            </li>
          </ul>
        </Typography>
        <Box
          component={"img"}
          src={code_8}
          width={{ xs: 250, sm: 400 }}
          alignSelf={"center"}
          ml={{ xs: 2, sm: 10 }}
          mt={2}
          borderRadius={4}
        />
      </Box>

      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Room Methods
        </Typography>
        <Typography ml={{ xs: 1, sm: 4 }}>
          <ul>
            <li>
              <b style={{ fontWeight: 500 }}>socket.join(room): </b> Joins a
              specific room, allowing the socket to receive messages sent to
              that room.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>socket.leave(room): </b>
              Leaves a specific room.
            </li>
          </ul>
        </Typography>
        <Box
          component={"img"}
          src={code_9}
          width={{ xs: 250, sm: 400 }}
          alignSelf={"center"}
          ml={{ xs: 2, sm: 10 }}
          mt={2}
          borderRadius={4}
        />
      </Box>

      <Box>
        <Typography fontWeight={600} variant="h6" mt={1} mb={1}>
          Namespace Methods
        </Typography>
        <Typography ml={{ xs: 1, sm: 4 }}>
          <ul>
            <li>
              <b style={{ fontWeight: 500 }}>
                socket.to(room).emit(event, ...args):{" "}
              </b>{" "}
              Emits the event to all sockets in the specified room except the
              sender.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>
                socket.in(room).emit(event, ...args):{" "}
              </b>
              Emits the event to all sockets in the specified room including the
              sender.
            </li>
            <li>
              <b style={{ fontWeight: 500 }}>socket.nsp: </b>
              Returns the namespace the socket is connected to.
            </li>
          </ul>
        </Typography>
        <Box
          component={"img"}
          src={code_10}
          width={{ xs: 250, sm: 400 }}
          alignSelf={"center"}
          ml={{ xs: 2, sm: 10 }}
          mt={2}
          borderRadius={4}
        />
      </Box>

      <Divider sx={{ marginTop: 3, marginBottom: 2 }} />

      <Box>
        <Typography variant="h6" fontWeight={600} mt={1} mb={1}>
          Conclusion :
        </Typography>
        <Typography variant="p">
          Socket.IO is a powerful tool for building real-time applications like
          chat systems, live notifications, and collaborative tools. It offers
          an easy-to-use API for developers, with built-in features like
          automatic fallbacks, room management, and namespaces, ensuring a
          scalable and reliable experience. By leveraging Socket.IO, you can
          create dynamic, interactive web applications that keep users engaged
          with responsive, real-time communication. Understanding its core
          methods—like connecting, handling events, and managing rooms—enables
          you to build robust, interactive applications efficiently.
          <br />
          <br />
          Happy coding!
        </Typography>
      </Box>
    </Box>
  );
}

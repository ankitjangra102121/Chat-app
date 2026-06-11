import { io } from "socket.io-client";

const token = localStorage.getItem("token");

export const socket = io(
  import.meta.env.VITE_SOCKET_URL || "http://localhost:5000",
  {
    autoConnect: false,
    auth: { token },
  },
);

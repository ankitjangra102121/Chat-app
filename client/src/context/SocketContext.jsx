import { socket } from "../socket/socket";
import { SocketContext } from "./SocketContextValue";

export const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

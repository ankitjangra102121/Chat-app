import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";

import Register from "./pages/Register";

import ProtectedRoute from "./routes/ProtectedRoute";

import Chat from "./pages/Chat";
import { getStoredToken } from "./services/authStorage";

function App() {
  const token = getStoredToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/chat" /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

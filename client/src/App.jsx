import "react-toastify/dist/ReactToastify.css";

import AuthRoute from "./components/AuthRoute.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: { mode: "dark" }
  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage/>
            </ProtectedRoute>
          }/>
          <Route path="/signin" element={
            <AuthRoute>
              <SigninPage/>
            </AuthRoute>
          }/>
          <Route path="/signup" element={
            <AuthRoute>
              <SignupPage/>
            </AuthRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

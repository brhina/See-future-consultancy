import Header from "./components/Header"
import Footer from "./components/Footer"
import ClientAssistant from "./components/ClientAssistant"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <AppRoutes />
      </div>
      <Footer />
      <ClientAssistant />
    </div>
  )
}

export default App

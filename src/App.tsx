import { Alert } from "./components/Alert/Alert"
import { Button } from "./components/Alert/Button"
import { Grid } from "./components/Grid"

function App() {

  return (
    <>
    <Alert type="success">Alert Message Success</Alert>
    <Alert type="error">Something Went Wrong</Alert>
    <Button/>
    <Grid/>

    </>
  )
}

export default App

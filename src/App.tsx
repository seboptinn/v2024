
import { Button, ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import React from 'react';

function App() {

  const noDialog = ["", "Er du sikker?", "Er du helt sikker? 🤨", "Er du helt sikker på at du er sikker?🤦‍♂️", "Er du helt sikker på at du er helt sikker på at du er sikker?😠", "Er du helt sikker på at du er helt sikker på at du er helt sikker på at du er sikker? 😡", "Hvis du trykker nei en gang til, så får du muligens en runde juling 🤬", "Ok, du ba om det, en god dose juling bestilt😌", "Åja så det var ikke nok? Du vil ha mer? 2 julinger comin up 🐱‍👤", "Okay vet du hva, du har nå mistet retten til å si nei."]
  const [noCounter, setNoCounter] = React.useState(0);
  const [onYesClick, setOnYesClick] = React.useState(false);

  // Or Create your Own theme:
  const theme = createTheme({
    // palette: {
    //   primary: {
    //     main: '#ddedea'
    //   }
    // }
  });

  if (onYesClick) return (
    <div>
      <ThemeProvider theme={theme}>
        <h2>
          Yay, riktig valg! 🥰
        </h2>
        <h4>
          Jeg gleder meg til å tilbringe valentinsdagen med deg 🥰
        </h4>
      </ThemeProvider>
    </div>
  )


  return (
    <div>
      <ThemeProvider theme={theme}>
        <h3 style={{ marginBottom: "50px" }}>Til hu søte fra byen midt i Norge:</h3>
        <h4>{noDialog[noCounter]}</h4>
        {noCounter >= noDialog.length && <h4>Sånn, da har du mistet nei-privilegiene dine. Da er det bare å trykke på det eneste riktige svaret 🥰</h4>}
        <h2>Vil du være min valentin?</h2>
        <div className='content'>
          <Button variant="contained" color='primary' onClick={() => setOnYesClick(true)}>Ja 🥰</Button>
          <Button className='hover-run' variant="contained" color='error' onClick={() => setNoCounter(noCounter + 1)} disabled={noCounter >= noDialog.length}>Nei🤡</Button>
        </div>

      </ThemeProvider>
    </div>
  )
}

export default App

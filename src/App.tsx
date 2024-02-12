
import { Button, ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import React from 'react';
import greetingCat from "./assets/Cat.jpg"
import sadCat from "./assets/Cat-sad.jpg"
import successCat from "./assets/Cat-success.jpg"

function App() {

  const noDialog = ["", "Er du sikker?", "Er du helt sikker? 🤨", "Er du helt sikker på at du er sikker?🤦‍♂️", "Er du helt sikker på at du er helt sikker på at du er sikker?😠", "Er du helt sikker på at du er helt sikker på at du er helt sikker på at du er sikker? 😡", "Hvis du trykker nei en gang til, så får du muligens en runde juling 🤬", "Ok, du ba om det, en god dose juling bestilt😌", "Åja så det var ikke nok? Du vil ha mer? 2 julinger comin up 🐱‍👤", "Okay vet du hva, du har nå mistet retten til å si nei."]
  const [noCounter, setNoCounter] = React.useState(0);
  const [onYesClick, setOnYesClick] = React.useState(false);
  const [showLetter, setShowLetter] = React.useState(true);
  const [showSadCat, setShowSadCat] = React.useState(false);
  const width = 270;
  const height = 270;

  // Or Create your Own theme:
  const theme = createTheme({
    // palette: {
    //   primary: {
    //     main: '#ddedea'
    //   }
    // }
  });

  if (showSadCat) return (
    <div className='container'>
      <ThemeProvider theme={theme}>
        <h3 style={{ marginBottom: "24px" }}>Det var synd
          <span role="img" aria-label="sad">😔</span>
        </h3>
        <img width={width} height={height} style={{ borderRadius: "16px" }} src={sadCat} />
        <div className='knapper'>
          <Button className='hover-run' variant="contained" color='primary' onClick={() => { setShowSadCat(false); setShowLetter(false) }}>Jeg angrer, jeg er den søte jenta 😥</Button>
        </div>
      </ThemeProvider>
    </div>
  )

  if (showLetter) return (
    <div className='container'>
      <ThemeProvider theme={theme}>
        <h3 style={{ marginBottom: "24px" }}>Heisann frøken, er du hu søte jenta fra byen midt i Norge?</h3>
        <img width={width} height={height} style={{ borderRadius: "16px" }} src={greetingCat} />
        <div className='knapper'>
          <Button className='hover-run' variant="contained" color='error' onClick={() => setShowSadCat(true)}>Nei😔</Button>
          <Button variant="contained" color='primary' onClick={() => setShowLetter(false)}>Ja🤔</Button>
        </div>

      </ThemeProvider>
    </div>
  )

  if (onYesClick) return (
    <div>
      <ThemeProvider theme={theme}>
        <h2>
          Yay, riktig valg! 🥰
        </h2>
        <img width={width} height={height} style={{ borderRadius: "16px" }} src={successCat} />
        <h4>
          Jeg gleder meg til å tilbringe valentinsdagen med deg 🥰
        </h4>
      </ThemeProvider>
    </div>
  )


  return (
    <div className='container'>
      <ThemeProvider theme={theme}>
        <h3 style={{ marginBottom: "48px" }}>Til hu søte fra byen midt i Norge:</h3>
        <h4>{noDialog[noCounter]}</h4>
        {noCounter >= noDialog.length && <h4>Sånn, da har du mistet nei-privilegiene dine. Da er det bare å trykke på det eneste riktige svaret 🥰</h4>}
        <h2>Vil du være min valentin?</h2>
        <div className='knapper'>
          <Button className='hover-run' variant="contained" color='error' onClick={() => setNoCounter(noCounter + 1)} disabled={noCounter >= noDialog.length}>Nei🤡</Button>
          <Button variant="contained" color='primary' onClick={() => setOnYesClick(true)}>Ja 🥰</Button>
        </div>

      </ThemeProvider>
    </div>
  )
}

export default App

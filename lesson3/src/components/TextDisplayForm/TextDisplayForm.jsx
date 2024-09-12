import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";

function TextDisplayForm() {

  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const updateText = (e) => {
    setText(text => e.target.value);
    setText('');
  }

  const handleClick = () => {
    setDisplayedText(text);
  }

  return (
    <div>
      <div>
        <TextField fullWidth onChange={updateText}
          label="Введите текст"
          defaultValue="Normal"
          variant="filled"
          value={text}
        />
      </div>
      <Button onClick={handleClick} variant="outlined">Добавить</Button>
      <Card className={displayedText ? 'active' : 'hidden'} >
        <CardContent>
          <Typography variant="h5" component="div">{displayedText}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default TextDisplayForm;
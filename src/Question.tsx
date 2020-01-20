import React from 'react';
import {
  Button,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  Typography,
  Divider,
  Box,
  Paper,
  Zoom,
} from '@material-ui/core';
import './Question.css';

export default class Question extends React.Component {
  render() {
    return (
      <Zoom in>
        <Paper elevation={4} square className="question">
          <Typography className="question-text" variant="h6">
            On a clear day you chance upon a strange animal, its leg trapped in a hunter's clawsnare. Judging from the bleeding it will not survive long.
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup className="question-choices">
              <FormControlLabel value="strength" control={<Radio />} label="Draw your dagger, mercifully ending its life with a single thrust." />
              <Divider />
              <FormControlLabel value="magic" control={<Radio />} label="Use herbs from your pack to put it to sleep." />
              <Divider />
              <FormControlLabel value="stealth" control={<Radio />} label="Do not interfere in the natural evolution of events, but rather take the opportunity to learn more about a strange animal you have never seen before." />
            </RadioGroup>
          </FormControl>
          <Box display="flex" flexDirection="row-reverse">
            <Button className="button">Next</Button>
          </Box>
        </Paper>
      </Zoom>
    );
  }
}

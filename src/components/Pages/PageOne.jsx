import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { green } from '@mui/material/colors'
import { useDispatch } from 'react-redux';

function PageOne(){

    const handleChange = (event) => {
        const action = { type: 'SET_PERSON_NAME', payload: event.target.value };
        dispatch(action);
    }

    return (
        <Grid item xs={12} md={4}>
        <Card sx={{ minWidth: 275 }} >
            <CardContent>
                <Typography
                    variant="h5"
                >
              How are you feeling today?
                </Typography>
                < br/>
                <TextField id="outlined-basic" label="Answer" onChange={handleChange} variant="outlined" />
            </CardContent>
            <CardActions>
                <Button
                    variant="outlined"
                    color= "error"
                    >Next</Button>
            </CardActions>
        </Card>
    </Grid>
    )
}
export default PageOne;
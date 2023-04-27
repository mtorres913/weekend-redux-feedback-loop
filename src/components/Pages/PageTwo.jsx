import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PageTwo(){
    const history = useHistory();
    const dispatch = useDispatch();

    const understanding = useSelector(store => store.understanding)

    const handleChange = (event) => {
        const action = { type: 'SET_UNDERSTANDING', payload: event.target.value };
        dispatch(action);
    }

    const nextPage = () => {
        if (understanding > 0) {
            history.push('/page-3');
        } else {
            alert('Please submit a response.');
        }
    }
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275 }} >
                <CardContent>
                    <Typography
                        variant="h5"
                    >
                        How well are you understanding the content?
                    </Typography>
                    < br />
                    <TextField id="outlined-basic" label="Answer" onChange={handleChange} variant="outlined" />
                    < br />
                    < br/>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={nextPage}
                    >Next</Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default PageTwo;
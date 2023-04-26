import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useDispatch } from 'react-redux';

function PageOne(){
    return (
        <Grid item xs={12} md={4}>
        <Card sx={{ minWidth: 275 }} >
            <CardContent>
                <Typography
                    variant="h5"
                >
              How are you feeling today?
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="outlined"
                    color="error"
                    >Next</Button>
            </CardActions>
        </Card>
    </Grid>
    )
}
export default PageOne;
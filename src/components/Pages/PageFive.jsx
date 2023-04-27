import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function PageFive(){
    const history = useHistory();
    const dispatch = useDispatch();

    const comments = useSelector(store => store.comments)
    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)



    const nextPage = () => {
    return history.push('/page-5')
    }
    
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275 }} >
                <CardContent>
                    <Typography
                        variant="h5"
                    >
                      Review your Feedback
                    </Typography>
                    < br />   
                    <Typography
                        variant="h6"
                    >
                        Feeling: {feeling}
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        Understanding: {understanding}
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        Support: {support}
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        Comments: {comments}
                    </Typography>
                    < br/>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={nextPage}
                    >Submit</Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default PageFive;
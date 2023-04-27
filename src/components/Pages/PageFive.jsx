import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function PageFive(){
    const history = useHistory();


    const comments = useSelector(store => store.comments)
    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)



    const submitFeedback = () => {
        axios.post('/feedback', {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        }).then(response => {
         history.push('/page-6')
        }).catch(error => {
            alert('Something went wrong! Please try again later.');
            console.log(error);
        })
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
                        onClick={submitFeedback}
                    >Submit</Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default PageFive;
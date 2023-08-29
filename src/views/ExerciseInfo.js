import { useContext, useEffect } from "react";
import { Stack, Button, Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import BottomNav from '../components/BottomNav';
import { Context } from "../store/context";
import {useNavigate, useParams} from "react-router-dom";

function ExerciseInfo(props) {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{actions.getExerciseInfo(id)},[])

  return(
    <>
      <Stack
      direction="row"
      justifyContent="space-between"
      spacing={4}
      >
        <Button onClick={()=>navigate("/exercise")} variant="text" size="small">Back</Button>
        <Button onClick={()=>{actions.deleteExercise(id); navigate("/exercise")}} color="error" variant="text" size="small">Remove</Button>
      </Stack>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={12}
            lg={12}
          >
            <Box sx={{textAlign: 'center', marginBottom:5}}>
            <Typography
              gutterBottom
              variant="h5"
            >
              Exercise info
            </Typography>
            </Box>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Name: " + store.exercise.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Description: " + store.exercise.description}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Sets: " + store.exercise.sets}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Repetitions: " + store.exercise.repetitions}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Weight: " + store.exercise.weight}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Equipment: " + store.exercise.equipment_name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Routine: " + store.exercise.routine_name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {store.exercise.equipment_issue === "minor_issue" ? "Equipment Alert: Minor Issue" : store.exercise.equipment_issue ==="mid_issue" ? "Equipment Alert:  Middle Issue" : store.exercise.equipment_issue ==="mayor_issue" ? "Equipment Alert:  Major Issue" : null}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {store.exercise.is_completed ? "Completed" : "Not Completed"}
            </Typography>

            <Box sx={{ textAlign: 'center', marginBottom: 5, height: 300, width: "100%", backgroundImage: `url(${store.exercise.photo_link})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          </Box>
          </Grid>
        </Grid>
      </Container>
        <Fab onClick={()=>navigate("/set_exercise/"+store.exercise.id)} color="primary" aria-label="delete" sx={{position: 'absolute', bottom: 100, right: 16}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
        </Fab>
    </Box>
    <BottomNav />
    </>
  )
};

export default ExerciseInfo;
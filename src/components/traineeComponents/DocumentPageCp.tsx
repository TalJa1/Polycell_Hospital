import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import TraineeHeader from '../layoutComponents/TraineeHeader'
import { Link } from 'react-router-dom'
import Footer from '../layoutComponents/Footer'

const DocumentPageCp : React.FC = () => {
  

  return (
    <Box>
      <TraineeHeader title='Document' />
      <Grid
        container
        direction="row"
        sx={{
          minHeight: "900px",
          maxHeight: "fit-content",
        }}
      >
        <Grid item xs={9}>
          <Grid
            container
            direction="column"
            sx={{
              backgroundColor: "#F7F7F7",
              minHeight: "900px",
              maxHeight: "fit-content",
              marginRight: "10px",
              marginTop: "10px",
              // borderRadius: "5px",
            }}
          >
            {lessons.map((lesson) => (
              <Grid item key={lesson.code} container>
                <Card sx={{ width: "90%", margin: "auto", marginTop: "5px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 25, color: "black" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>{lesson.name}</strong>
                    </Typography>
    
                    <Typography variant="body2">
                      {lesson.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="document-page">
                      <Button size="small">Link</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            direction="column"
            sx={{
              backgroundColor: "#F7F7F7",
              minHeight: "900px",
              maxHeight: "fit-content",
              marginTop: "10px",
            }}
          >
            <Grid
              item
              container
              direction="column"
              rowGap={2}
              sx={{
                backgroundColor: "white",
                minHeight: "700px",
                maxHeight: "fit-content",
                width: "95%",
                marginTop: "5px",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  )
}

export default DocumentPageCp;

const lessons = [
    {
      code: "LESSON1",
      name: "Lesson 1",
      description:
        "Develop your skills in medical terminology. Identify word parts (prefixes, suffixes, and roots) and abbreviations commonly used in the medical field, read and understand health records, and identify terms associated with all 10 major organ systems.",
    },
    {
      code: "LESSON2",
      name: "Lesson 2",
      description:
        "Learn about anatomy and physiology. Explore the structure and function of the human body, including major organ systems and their interconnections.",
    },
    {
      code: "LESSON3",
      name: "Lesson 3",
      description:
        "Study common diseases and disorders. Understand the causes, symptoms, and treatments of various diseases and conditions prevalent in the medical field.",
    },
    // Add more lessons here...
  ];
  

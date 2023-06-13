import React from "react";
import Footer from "../layoutComponents/Footer";
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import TraineeHeader from "../layoutComponents/TraineeHeader";
import { Link, useParams } from "react-router-dom";

const SyllabusPageCp: React.FC = () => {

  const course = useParams<string>();


  return (
    <Box>
      <TraineeHeader title='Syllabus' />
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
            <Grid item container>
              <Card sx={{ width: "90%", margin: "auto", marginTop: "5px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 25, color: "black" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <strong>Detail</strong>
                  </Typography>

                  <Typography variant="body2">
                    A nondigital or paper document can be physically stored in a
                    file cabinet, whereas an electronic or digital document is
                    stored in a computer as one or more files.
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Link to="/document-page">
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions> */}
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ width: "90%", margin: "auto", marginTop: "5px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 25, color: "black" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <strong>Grade</strong>
                  </Typography>

                  <Typography variant="body2">
                    A nondigital or paper document can be physically stored in a
                    file cabinet, whereas an electronic or digital document is
                    stored in a computer as one or more files.
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ width: "90%", margin: "auto", marginTop: "5px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 25, color: "black" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <strong>Source</strong>
                  </Typography>

                  <Typography variant="body2">
                    A nondigital or paper document can be physically stored in a
                    file cabinet, whereas an electronic or digital document is
                    stored in a computer as one or more files.
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </Grid>
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
              <Grid item>
                <strong>Class {courseDetail.class}</strong>
              </Grid>
              <Grid item>Trainer: {courseDetail.trainer}</Grid>
              <Grid item>Last: {courseDetail.last}</Grid>
              <Grid item>
                <Link to="/syllabus-page">Sylumbus</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default SyllabusPageCp;

const courseDetail = {
    class: "BS220",
    trainer: "Kieu Trong Khanh",
    last: "20 weeks",
  };

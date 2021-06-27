import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Segment, Button } from "semantic-ui-react";
import CvService from "../services/CvService";

export default function CvShow() {
  let { id } = useParams();
  const [cv, SetCv] = useState([]);
  useEffect(() => {
    let cvService = new CvService();
    cvService.getByEmployeeCvId(id).then((result) => SetCv(result.data.data));
  });

  return (
    <div>
      <Grid centered>
        <Grid.Column>
          <Segment.Group>
            <Segment>{cv.photo}</Segment>
            <Segment>{cv.github}</Segment>
            <Segment>{cv.linkedIn}</Segment>
            <Segment>{cv.article}</Segment>
          </Segment.Group>
        </Grid.Column>

        <Grid.Column>
          {cv.experiances?.map((exp) => (
            <Segment.Group>
              <Segment>{exp.workplaceName}</Segment>
              <Segment>{exp.position}</Segment>
              <Segment>{exp.startDate}</Segment>
              <Segment>{exp.finishDate}</Segment>
            </Segment.Group>
          ))}
        </Grid.Column>

        <Grid.Column>
          {cv.foreignLanguages?.map((lang) => (
            <Segment.Group>
              <Segment>{lang.language}</Segment>
              <Segment>{lang.level}</Segment>
            </Segment.Group>
          ))}
        </Grid.Column>
        <Grid.Column>
          {cv.langs?.map((lang) => (
            <Segment.Group>
              <Segment>{lang.usedLanguageg}</Segment>
            </Segment.Group>
          ))}
        </Grid.Column>
        <Grid.Column>
          {cv.schools?.map((school) => (
            <Segment.Group>
              <Segment>{school.name}</Segment>
              <Segment>{school.department}</Segment>
              <Segment>{school.startDateSchool}</Segment>
              <Segment>{school.finishDateSchool}</Segment>
            </Segment.Group>
          ))}
        </Grid.Column>
      </Grid>
      <Grid>
        <Link to={`/cvAdd${id}`}>
          <Button color="red">Update</Button>
        </Link>
      </Grid>
    </div>
  );
}

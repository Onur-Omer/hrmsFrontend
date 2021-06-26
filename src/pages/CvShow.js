import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid,Segment} from "semantic-ui-react";
import CvService from "../services/CvService";


export default function CvShow() {
    let { id } = useParams();
    const [cv, SetCv] = useState({});
    useEffect(() => {
        let cvService = new CvService();
        cvService
          .getAllByEmployee_EmployeeId(id)
          .then((result) => SetCv(result.data.data));
      });
     
    return (
        <div>
            <Grid centered>

        <Grid.Column>
          <Segment.Group>
            <Segment>{photo}</Segment>
            <Segment>{github}</Segment>
            <Segment>{linkedIn}</Segment>
            <Segment>{article}</Segment>
          </Segment.Group>
        </Grid.Column>

        <Grid.Column>
            {experiances.map((exp)=>(
                <Segment.Group>
            <Segment>{exp.workplaceName}</Segment>
            <Segment>{exp.position}</Segment>
            <Segment>{exp.startDate}</Segment>
            <Segment>{exp.finishDate}</Segment>
          </Segment.Group>
            ))}
          
        </Grid.Column>

        <Grid.Column>
            {foreignLanguages.map((lang)=>(
                <Segment.Group>
                <Segment>{lang.language}</Segment>
                <Segment>{lang.level}</Segment>
              </Segment.Group>
            ))}
          
        </Grid.Column>
        <Grid.Column>
        {langs.map((lang)=>(
                <Segment.Group>
                <Segment>{lang.usedLanguageg}</Segment>
              </Segment.Group>
            ))}
        </Grid.Column>
        <Grid.Column>
        {cv.schools.map((school)=>(
                <Segment.Group>
                <Segment>{school.name}</Segment>
                <Segment>{school.department}</Segment>
                <Segment>{school.startDateSchool}</Segment>
                <Segment>{school.finishDateSchool}</Segment>
              </Segment.Group>
            ))}
        </Grid.Column>
        
      </Grid>
        </div>
    )
}

import { ProgramList, TimelineList } from "components/List/ProgramList";
import {
  Body,
  BodyEnd,
  BodyParagraph,
  Heading,
} from "components/Typography/StyledTypography.styled";
import Grid from "@material-ui/core/Grid";

export function ProjectSection() {
  return (
    <>
      <Heading text="Project Track" />
      <Body>
        This track is meant for <b>intermediate developers</b> or above. Based
        on your answers to our questionnaire, we match you up in groups of
        similar experience and interests, and have you code two projects, one
        orientation project (will allow you to get to know your group members
        through a small one-week project) and a <b>capstone</b> project (1 week
        of planning, 9 weeks of coding, one presentation).
      </Body>
      <BodyEnd>
        These projects will be <b>mentored by industry professionals</b> to
        ensure and give feedback on code quality, best practices, design, and so
        on. Mentors and volunteers will also help you pick projects that will
        match your professional goals and look the best on your resume.
      </BodyEnd>
    </>
  );
}

export function LearnerSection() {
  return (
    <>
      <Heading text="Learner Track" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Body>
            The Learner Track for Hack Your Own will focus on teaching full-stack
            web development using the MERN stack (MongoDB, Express, React, and
            Node.js). Over the next 12 weeks, our goal is to get you familiar with
            front-end and back-end web development through{" "}
            <b> practical coding lessons </b>
            and a capstone project. The Learner track program will run from Monday,
            June 1st, 2020 to Friday, August 21st, 2020, according to the following
            structure:
          </Body>
        </Grid>
        <Grid justify="center" container md={6}>
          <img style={{width: "400px"}} src="/images/react.png" />
        </Grid>
        <Grid justify="center" container md={6}>
          <img style={{width: "400px"}} src="/images/experts.png" />
        </Grid>
        <Grid item xs={12} md={6}>
          <BodyParagraph>
            These projects will be <b>mentored by industry professionals</b> to
            ensure and give feedback on code quality, best practices, design, and so
            on. Mentors and volunteers will also help you pick projects that will
            match your professional goals and look the best on your resume.
          </BodyParagraph>
        </Grid>
      </Grid>
      <ProgramList />
      <BodyParagraph>
        More details about course content and schedule for the Learner track can
        be found below:
      </BodyParagraph>
      <TimelineList />
      <BodyParagraph>
        <i>
          *Note: there may be a small cost for course materials for weeks 5-8
          (maximum of $20) due to the use of outside materials for our
          curriculum.
        </i>
      </BodyParagraph>
    </>
  );
}

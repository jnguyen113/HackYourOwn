import { StyledList, TitleStyledList } from "components/List/StyledList.styled";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const ProgramList = () => {
  return (
    <>
      <StyledList
        icon={faStar}
        text="The first 8 weeks will be focused on learning the basics of web development from course material that we will distribute weekly over Discord and video. Small projects will also be assigned to help you build your skills."
      />
      <StyledList
        icon={faStar}
        text="The last 4 weeks will be focused on using what you’ve learned over the summer to create and showcase a final project in groups of 4-6 Learners, which can be put in your portfolio and resume."
      />
    </>
  );
}

const useTimelineStyles = makeStyles({
  root: {
    maxWidth: "70%",
    margin: "0 auto"
  },
  dFlex: {
    display: "flex"
  },
  left: {
    width: "100%",
    textAlign: "right"
  },
  right: {
    width: "100%",
    textAlign: "left"
  },
  middle: {
    flexDirection: "column",
    marginTop: "10px",
  },
  line: {
    border: "1px solid #222",
    width: "5%",
    margin: "0 auto",
    height: "100%"
  },
  lines: {
    height: "100%",
    margin: "0 auto",
  }
})

const TimelineCircle = () => (
  <div 
    style={{ 
      width: "30px", height: "30px", borderRadius: "50%", 
      background: "white", border: "3px solid orange"
    }} 
  />
);

export const TimelineList = () => {
  const classes = useTimelineStyles();
  return (
    <List className={classes.root} >
      <div className={classes.dFlex}>
        <div className={classes.left}>
          <TitleStyledList
            title="Week 1:"
            text="Git / GitHub, Basics of HTML, Basics of CSS"
          />
        </div>
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
          <div className={classes.dFlex, classes.lines}>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.right} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
      </div>
      <div className={classes.dFlex}>
        <div className={classes.left} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
          <div className={classes.dFlex, classes.lines}>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.right} >
          <TitleStyledList
            title="Week 2:"
            text="Intro to JavaScript, DOM Manipulation"
          />
        </div>
      </div>
      <div className={classes.dFlex}>
        <div className={classes.left} >
          <TitleStyledList
            title="Week 3:"
            text="Advanced JavaScript (ES6, classes, modules), Functional programming in JavaScript"
          />
        </div>
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
          <div className={classes.dFlex, classes.lines}>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.right} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
      </div>
      <div className={classes.dFlex}>
        <div className={classes.left} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
          <div className={classes.dFlex, classes.lines}>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.right} >
          <TitleStyledList
            title="Week 4:"
            text="Javascript Data Structures, NPM, Webpack"
          />
        </div>
      </div>
      <div className={classes.dFlex}>
        <div className={classes.left}>
          <TitleStyledList
            title="Week 5-8:"
            text="React, Node.js, Express.js, MongoDB, REST APIs*"
          />
        </div>
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
          <div className={classes.dFlex, classes.lines}>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.right} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
      </div>
      <div className={classes.dFlex}>
        <div className={classes.left} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
            <TimelineCircle />
        </div>
        <div className={classes.right} >
          <TitleStyledList
            title="Week 9-12:"
            text="Capstone Project (full-stack MERN project)"
          />
        </div>
      </div>
    </List>
  );
};
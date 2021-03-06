import React from "react";
import { connect } from "react-redux";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
// import "../App.css";
import classnames from "classnames";
import "./myProfile.css";
// import FooterPage from "../Footer/footer-test";
import {
  getSingleTeamMembers,
  addTeamMembers,
  getTeamMembers,
  addTeam,
  getTeams,
  editTeamMembers,
  getSingleTeam,
  fetchSingleSurvey,
  getSurvey,
  joinTeam,
  getPreFeeling,
  getFeelings,
  getManagers,
  getSurveyActivity
} from "../../actions/index";
import NavBar from "../NavBar/NavBar";
import GenerateTeams from "./generateTeams";
import GenerateSurveys from "./generateSurveys";
import Happy from "../PNG/nobackgroundHappy.png";
import loadinggif from "../callback/loading.svg";

class Profile extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      view: "",
      name: "",
      team_code: 0,
      team_id: 0,
      jointeam: "",
      createTeam: "",
      loading: true,
      added: false,
      activeTab: "1"
    };
  }

  componentDidMount() {
    this.props.getSingleTeamMembers(localStorage.getItem("email"));
    this.props.getSurvey(localStorage.getItem("id"));
    this.props.getTeams();
    this.props.getManagers(localStorage.getItem("id"));
    this.props.getSingleTeam(localStorage.getItem("team_id"));
    this.props.getFeelings(localStorage.getItem("id"));
    this.props.getSurveyActivity();
    if (this.props.survey.length > 0) {
      this.props.fetchSingleSurvey(this.props.survey[0].survey_time_stamp);
      this.setState({
        loading: false
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.survey.length !== prevProps.survey.length) {
      this.props.fetchSingleSurvey(this.props.survey[0].survey_time_stamp);
    }

    if (this.state.added === true) {
      this.props.getSingleTeamMembers(localStorage.getItem("email"));
      this.setState({
        added: false
      });
    }

    if (this.props.teams.length !== prevProps.teams.length) {
      this.props.getSingleTeamMembers(localStorage.getItem("email"));
    }

    if (
      this.props.singleTeamMembers.length > 0 &&
      localStorage.getItem("team_id") === null
    ) {
      if (
        this.props.singleTeamMembers[0].team_id !==
        localStorage.getItem("team_id")
      ) {
        this.props.getSingleTeamMembers(localStorage.getItem("email"));
      }
    }
  }
  createTeam = event => {
    event.preventDefault();
    const name = this.state.createTeam;
    const memberId = this.props.singleTeamMembers[0].id;
    const combine = { name: name, memberId: memberId };
    this.props.addTeam(combine);
    console.log(this.state.createTeam);
    this.setState({
      ...this.state,
      createTeam: "",
      added: true
      // view: 'create'
    });
    let currentMember = this.props.singleTeamMembers[0];
    currentMember.type = "manager";

    localStorage.setItem("joined", true);

    setTimeout(() => {
      this.props.history.push("/loading");
    }, 500);
  };
  // Mood
  goToSurveyMaker = event => {
    event.preventDefault();
    this.props.history.push("/survey");
  };
  // Curie
  goToCurieSurveyMaker = event => {
    event.preventDefault();
    this.props.history.push("/standup");
  };

  addCodeToMember = event => {
    event.preventDefault();
    const code = parseInt(this.state.team_code);
    let teams = this.props.teams;
    let futureTeamId = null;
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].team_code === code) {
        futureTeamId = teams[i].id;
      }
    }

    console.log(futureTeamId);

    let member = this.props.singleTeamMembers[0];

    member.team_id = futureTeamId;
    member.type = "team_member";

    console.log(member);

    this.props.joinTeam(member.id, { team_code: code });
    this.setState({
      team_code: 0,
      added: true
    });
    let currentMember = this.props.singleTeamMembers[0];
    this.props.getSingleTeamMembers(localStorage.getItem("email"));

    currentMember.type = member.type;
    currentMember.team_id = futureTeamId;

    localStorage.setItem("joined", true);

    this.props.history.push("/loading");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    if (!localStorage.getItem("email")) {
      this.props.history.push("/home");
    }
    const view = this.state.view;

    // "https://slack.com/oauth/authorize?scope=commands,bot&client_id=596381005414.586225274705&redirect_uri=http://localhost:5003/api/slackauth&state="
    // "https://slack.com/oauth/authorize?scope=commands&client_id=596381005414.586225274705&redirect_uri=http://localhost:5003/api/slackauth&state="
    const uri = "https://labs11-curie-web.herokuapp.com/api/slackauth";
    const url1 =
      "https://slack.com/oauth/authorize?scope=commands,bot&client_id=596381005414.586225274705";
    const url2 =
      "https://slack.com/oauth/authorize?scope=commands&client_id=596381005414.586225274705";
    // const uri = "http://localhost:5003/api/slackauth";
    console.log(view);
    if (this.state.loading === true) {
      return <img className="loadinggif" src={loadinggif} alt="loading" />;
    } else if (
      this.props.singleTeams.length > 0 &&
      localStorage.getItem("team_id") != null
    ) {
      console.log(this.props.singleTeamMembers[0].status);
      return (
        <div className="profilepage-container background-color">
          <NavBar />
          <div className="profilecontent-container">
            <div className="name-container">
              {" "}
              <h1
                className="welcome-container"
                style={{
                  fontFamily: "Roboto Slab, serif",
                  fontSize: "4rem",
                  marginTop: "4%"
                }}
              >
                {/* Welcome, {this.props.singleTeamMembers[0].firstName}! */}
                Dashboard
              </h1>
              {/*<p>Curie Active: {this.props.singleTeamMembers[0].status.toString()}</p>*/}
              <div className="sub-container-1">
                <div className="sub-container-2">
                 
                  {this.props.managers.length === 1 ? (
                    this.props.singleTeamMembers[0].type === "manager" ? (
                      <h2 className="optional-text-2">
                        Once you're connected to a slack work space, connect
                        your mood bot to a channel with the slash command:{" "}
                        <span className="span">/connect_channel_to_survey</span>
                      </h2>
                    ) : (
                      <h2 className="optional-text-2">
                        Hint once connected to a slack workspace, you can use
                        the slash command:{" "}
                        <span className="span">/send-me-buttons</span> to
                        receive existing surveys!
                      </h2>
                    )
                  ) : null}
                  <h3 className="team-wordbox">
                    Team: {this.props.singleTeams[0].name}
                  </h3>
                </div>
                <div className="secondcolumn">
                {this.props.singleTeamMembers[0].type === "manager" ? (
                    <a
                      href={`${url1}&redirect_uri=${uri}&state=${
                        this.props.singleTeamMembers[0].id
                      }`}
                    >
                      <img
                        alt="Add to Slack"
                        height="40"
                        width="139"
                        src="https://platform.slack-edge.com/img/add_to_slack.png"
                        srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                      />
                    </a>
                  ) : (
                    <a
                      href={`${url2}&redirect_uri=${uri}&state=${
                        this.props.singleTeamMembers[0].id
                      }`}
                    >
                      <img
                        alt="Add to Slack"
                        height="40"
                        width="139"
                        src="https://platform.slack-edge.com/img/add_to_slack.png"
                        srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                      />
                    </a>
                  )} 

                  <img
                    className="happy"
                    src={Happy}
                    alt="Happy MoodBot"
                    width="58"
                    height="58"
                  />
                
                </div>
              </div>
            </div>
            <div >
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Mood
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Curie
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <div>Test tab 1</div>
                  <div className="reactions">
                    {this.props.singleTeamMembers[0].type === "manager" ? (
                      <p>Your Moods:</p>
                    ) : (
                      <p>Your Reactions:</p>
                    )}
                    <div className="reactions-scroll">
                      {this.props.singleTeamMembers[0].type === "manager" ? (
                        this.props.survey.length > 0 ? (
                          <p>
                            <GenerateSurveys />
                          </p>
                        ) : (
                          <p>Oops! You haven't created any moods yet!</p>
                        )
                      ) : this.props.feelings.length > 0 ? (
                        <p>
                          <GenerateTeams />
                        </p>
                      ) : (
                        <p>Oops! You haven't responded to any moods yet!</p>
                      )}
                    </div>
					{/* survey buttons */}
                    <div>
                      {localStorage.getItem("type") === "manager" ? (
                        <div
                          id="gotosurveymaker"
                          onClick={this.goToSurveyMaker}
                        >
                          Get Moods
                        </div>
                      ) : null}
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div>Test tab 2</div>
                  <div className="standups">
                    {this.props.singleTeamMembers[0].type === "manager" ? (
                      <p>Your Surveys:</p>
                    ) : (
                      <p>Your standups:</p>
                    )}
                    <div className="standups-scroll">
                      {this.props.singleTeamMembers[0].type === "manager" ? (
                        this.props.survey.length > 0 ? (
                          <p>
                            <GenerateSurveys />
                          </p>
                        ) : (
                          <p>Oops! You haven't created any surveys yet!</p>
                        )
                      ) : this.props.feelings.length > 0 ? (
                        <p>
                          <GenerateTeams />
                        </p>
                      ) : (
                        <p>Oops! You haven't responded to any surveys yet!</p>
                      )}
                    </div>
					{/* survey buttons */}
                    <div>
                      {localStorage.getItem("type") === "manager" ? (
                        <div
                          id="gotosurveymaker"
                          onClick={this.goToCurieSurveyMaker}
                        >
                          Start Standup
                        </div>
                      ) : null}
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </div>
          {/* <FooterPage /> */}
        </div>
      );
    }
    if (view === "") {
      return (
        <div className="profilepage-container background-color">
          <NavBar />
          <div className="profilecontent-container">
            <div className="sub-container-3">
              {" "}
              <h1 className="welcome-container">Welcome to Mood!</h1>
              <img
                className="happy"
                src={Happy}
                alt="Happy MoodBot"
                width="200"
                height="200"
              />
            </div>
            <div className="sub-container-4">
              <h2>You're not on a Team!</h2>
              <p className="p-con-4">
                If you wish to join an existing team as a team member, place the
                team code provided by you're project manager inside the team
                code input and click the "Join A Team" button.
              </p>
              
              <div className="sub-container-5">
                <div className="input-div">
                  <h3>Join a Team!</h3>
                  <p>Submit the Team Code Below</p>
                  <input
                    onChange={this.handleChange}
                    name="team_code"
                    id="number"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="Enter Team Code Here"
                  />
                  <button className="btn-feel" onClick={this.addCodeToMember}>
                    Join A Team
                  </button>{" "}
                </div>
                <div className="input-div">
                  <h3>Create a Team!</h3>
                  <p>Submit the Team Name Below</p>
                  <input
                    onChange={this.handleChange}
                    name="createTeam"
                    placeholder="Your Team Name"
                  />{" "}
                  <button className="btn-feel" onClick={this.createTeam}>
                    Create a Team
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* <FooterPage /> */}
        </div>
      );
    } else if (view === "create") {
      return (
        <div className="page-container background-color">
          <div className="profilecontent-container">
            <NavBar />
            <div className="container-pandb">
              {localStorage.getItem("team_id") !== null ? (
                <p className="p-tag">
                  Congratulations on creating your team! Our bots will update
                  you access in just a moment. Once the page refreshes, feel
                  free to explore the site.
                </p>
              ) : (
                <p>Feel free to explore the site.</p>
              )}
              <br />
            </div>
          </div>
          {/* <FooterPage /> */}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    singleTeamMembers: state.teamMembersReducer.singleTeamMembers,
    error: state.teamMembersReducer.error,
    teamMembers: state.teamMembersReducer.teamMembers,
    survey: state.surveyReducer.survey,
    surveyIsFetching: state.surveyReducer.surveyIsFetching,
    singleSurvey: state.surveyReducer.singleSurvey,
    singleTeams: state.teamsReducer.singleTeams,
    feelings: state.feelingsReducer.feelings,
    teams: state.teamsReducer.teams,
    managers: state.managersReducer.managers,
    managersIsFetching: state.managersReducer.managersIsFetching,
    active: state.surveyReducer.active
  };
}

export default connect(
  mapStateToProps,
  {
    getSingleTeamMembers,
    addTeamMembers,
    getTeamMembers,
    addTeam,
    getTeams,
    editTeamMembers,
    getSingleTeam,
    fetchSingleSurvey,
    getSurvey,
    joinTeam,
    getPreFeeling,
    getFeelings,
    getManagers,
    getSurveyActivity
  }
)(Profile);

// https://bikbik.auth0.com/login?state=g6Fo2SA3bW56SjVmbko1X3dYSWo4UUl5bjRRU08xRlVLTTdCb6N0aWTZIFF2anJoSFJheG5aV3N1N3NyR21TRzE2ZkQ4bUI4ZnR0o2NpZNkgQm5YU3ZVNnRFNFc4V0dNdDNnRFdyYTI0aFhyOHFZMGU&client=BnXSvU6tE4W8WGMt3gDWra24hXr8qY0e&protocol=oauth2&response_type=token%20id_token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=openid%20profile%20email&nonce=ns7LGAhEZ5rqXoXMSra~MoODQHn~pEOc&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMC4wIn0%3D

// http://localhost:3000/callback#access_token=5YgbYYAujg1LoygaBq-z9NQIzZFTlvi-&expires_in=7200&token_type=Bearer&state=JC0g6LRhgFkT8aaIJT-F11s7HCC.G5dd&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qVkJPRGhHTURjM1JUWTBRVGt4TkRrM1JURXpRek5HUVVRd01ERXhOVGhFUmpBMU1FRkJPUSJ9.eyJnaXZlbl9uYW1lIjoiVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJDbGF5ZG9uIiwibmlja25hbWUiOiJ0b21jbGF5ZG9uMTAyIiwibmFtZSI6IlRob21hcyBDbGF5ZG9uIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tbUJ4Wm9jZXRSMkkvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNldm9RUEpfbmZqUXQwTXFXNnF4UTBDQzVXbjJyQi1ldy9tby9waG90by5qcGciLCJnZW5kZXIiOiJtYWxlIiwibG9jYWxlIjoiZW4iLCJ1cGRhdGVkX2F0IjoiMjAxOS0wMi0yMVQwNDoxMjo1My4zMDFaIiwiZW1haWwiOiJ0b21jbGF5ZG9uMTAyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Jpa2Jpay5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDc5NDU2NDA3OTk2MDk3NzIyODIiLCJhdWQiOiJCblhTdlU2dEU0VzhXR010M2dEV3JhMjRoWHI4cVkwZSIsImlhdCI6MTU1MDcyMjM3MywiZXhwIjoxNTUwODA4NzczLCJhdF9oYXNoIjoiaEhfSzg2Z0xGWjZlZkhHbF9YSktPUSIsIm5vbmNlIjoiWkhkdEkyS1gyVFFUa2owcWFUWUtoSkVxekZpZnMtdEMifQ.AGLlaFrG9ZoyIHHBNub3ZkpSDJR7WgVp6XrpXo9L2I-x0bYz_ic2G71mvAGKBzXFCsWhU47MZ6Qf4BLtwsHZS_C13huljVJDJoEzYklM5mQxUIfCaOTPGsIx_3zninyU-nZ9HqIqRl4fyHKehQjZReXKI0mp_08oi3k-4cyfNhi2aztYoVksswojYSnFEBklwwRQaInDKX8R4oHCstY71JUSkX91jpjPagW5-sQ_iM_N5eRE1tT9J5i0exOCu64Bsa6LjGmBMenpV_6dFG_bzUjAgwh611rS5r6not1WsmqJPhXQ8_suUjT99g30vk1iXBqgN64UIQbqOrMkGPOT9A

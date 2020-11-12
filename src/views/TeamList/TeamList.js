import React from "react";
import { Image, Table, Icon, Input } from "semantic-ui-react";
import history from "historyObj";
import playerImage from "assets/imgs/player.png";
import teamLogo from "assets/imgs/w.png";
import messiImage from "assets/imgs/messi.png";
import bluePolyImg from "assets/imgs/bluePoly.png";
import darkBluePolyImg from "assets/imgs/darkBluePoly.png"
const List = () => (
  <div className="columnItem">
  <Table padded singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>TEAM</Table.HeaderCell>
        <Table.HeaderCell>NO. OF PLAYERS</Table.HeaderCell>
        <Table.HeaderCell>AVG  PLAYER AGE</Table.HeaderCell>
        <Table.HeaderCell>PLAYERS</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map(() => (
        <Table.Row>
          <Table.Cell>
            <img src={teamLogo} />
            <span className="teamName">Wanderers F.C.</span>
          </Table.Cell>
          <Table.Cell>32</Table.Cell>
          <Table.Cell>30</Table.Cell>
          <Table.Cell>
            {[1,  5].map(() => (
              <Image src={playerImage} avatar className="playersImg" />
            ))}
              <span className="playersImgText" >
                            <img src={darkBluePolyImg}/>
                            <span>Z</span></span>
                            <Image src={playerImage} avatar className="playersImg" />


                            <span className="playersImgText" >
                            <img src={darkBluePolyImg}/>
                            <span>MR</span></span>

                          <span className="playersImgText" >
                            <img src={bluePolyImg}/>
                            <span>+12</span></span>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
  </div>
);

const TeamList = () => {
  return (
    <div className="teamListComponent">
      <div className="listItem">

        <div className="leftContent">
        <div className="title">
          <span className="disabled">My Teams</span>
          <span>All Teams</span>
          <Input
            icon="search"
            placeholder="Search..."
            className="searchInput"
          />      </div>

        {List()}
        </div>
        <img src={messiImage} className="rightContent"></img>
      </div>
    </div>
  );
};

export default TeamList;

import React from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
import { AppContext } from "../../Context/AppProvider";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  overflow-y: scroll;
  height: 570px;
  
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: flex;
  margin-bottom: 5px;
  color: #1c1e21;

  padding: 20px;
  border-radius: 10px 10px;

  align-items: center;
  p {
    color: #1c1e21;
    padding: 0;
    margin: 0;
  }
  div {
    margin-left: 20px;
  }
  :hover {
    background: #3e4042;
  }
  :active {
    background: #3e4042;
  }
`;

export default function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    React.useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Danh sách các phòng" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            <img
              style={{
                width: "40px",
                height: "40px",
                fill: "white",
              }}
              src="https://img.icons8.com/dotty/344/ffffff/group-task.png"
            ></img>
            <div>
              <p>{room.name}</p>
            </div>
          </LinkStyled>
        ))}
        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

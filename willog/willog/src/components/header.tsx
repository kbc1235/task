import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Like } from "../components/icon";
export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderBox>
      <LogoBox>Logo</LogoBox>
      <UserBtnBox>
        <Button>사진제출</Button>
        <Button onClick={() => navigate("/bookmark")}>
          북마크
          <Like width={14} height={14} fill="#222" stroke="#222" />
        </Button>
      </UserBtnBox>
    </HeaderBox>
  );
}
const HeaderBox = styled.header`
  background-color: #ffffff;
  display: flex;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`;

const LogoBox = styled.div`
  display: flex;
  color: #000;
`;

const UserBtnBox = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 0.75rem;
  color: #000;
  & > svg {
    margin-left: 5px;
  }
`;

import { Col, Container, Row } from "react-bootstrap"
import { AddExpenseForm } from "./AddExpenseForm"
import { ExpenseTable } from "./ExpenseTable"
import styled from "styled-components"
import { useRecoilValue } from "recoil"
import { groupNameState } from "../state/groupName"
import { SettlementSummary } from "./SettlementSummary"
import { ServiceLogo } from "./shared/ServiceLogo"

export const ExpenseMain = () => {
    return (
        <Container fluid>
          <Row>
            <Col xs={12} sm={5} md={4}>
              <LeftPane />
            </Col>
            <Col>
              <LightPane />  
            </Col>
          </Row>
        </Container>
    )
}

const LeftPane = () => (
    <Container>
      <Row>
        <ServiceLogo />
      </Row>
      <Row>
        <AddExpenseForm />
      </Row>
      <Row>
        <SettlementSummary />
      </Row>
    </Container>
  )
  
  const LightPane = () => {
    const groupName = useRecoilValue(groupNameState)

    return (
    <StyledContainer>
      <Row>
        <Col>
          <StyledGroupName>{groupName || '그룹 이름'}</StyledGroupName>
        </Col>
      </Row>
      <Row>
        <Col>
          <ExpenseTable /> 
        </Col>
      </Row>
    </StyledContainer>
    )
}

const StyledGroupName = styled.h2`
  margin-bottom: 80px;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
`

  const StyledContainer = styled(Container)`
    padding: 100px 31px 100px 31px;
  `
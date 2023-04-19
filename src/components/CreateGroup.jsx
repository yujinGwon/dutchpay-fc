import { Button, Container, Form, Row } from 'react-bootstrap';
import { CenteredOverlayForm } from './CenteredOverlayForm';
import { useSetRecoilState } from 'recoil';
import { groupNameState } from '../state/groupName';
import { useState } from 'react';
import styled from 'styled-components';

export const CreateGroup = () => {
  const [validated, setValidated] = useState(false);
  const [validGroupName, setValidGroupName] = useState(false);
  const setGroupName = useSetRecoilState(groupNameState);

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidGroupName(true)
    } else {
      event.stopPropagation()
      setValidGroupName(false)
    }
    setValidated(true)
  }

  return (
      <CenteredOverlayForm>
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <StyledRow>
            <Row className='align-items-start'>
              <StyledH2>먼저, 더치 페이 할 그룹의 이름을 정해볼까요?</StyledH2>
            </Row>
            <Row className='align-items-center'>
              <Form.Group controlId="validationGroupName">
                <Form.Control
                  type="text"
                  required
                  placeholder="2022 제주도 여행"
                  onChange={(e) => setGroupName(e.target.value)}
                />
                <Form.Control.Feedback
                  type="invalid"
                  data-valid={validGroupName}
                >
                  그룹 이름을 입력해 주세요.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='align-items-end'>
              <StyledSubmitButton>저장</StyledSubmitButton>
            </Row>
            </StyledRow>
          </Form>
        </Container>
      </CenteredOverlayForm>
  )
}

const StyledH2 = styled.h2`
  font-weight: 700;
  line-height: 35px;
  test-align: right;
  overflow-wra: break-word;
  word-break: keep-all;
`

const StyledSubmitButton = styled(Button).attrs({
  type: 'submit'
})`
  background-color: #6610F2;
  border-radius: 8px;

  &:hover {
    background-color: #6610F2;
    filter: brightness(80%);
  }
`

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: center;
  height: 60vh;
`

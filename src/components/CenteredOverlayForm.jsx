import { Button, Container, Form, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { OverlayWrapper } from './shared/OverlayWrapper'

export const CenteredOverlayForm = ({
  title,
  children,
  validated,
  handleSubmit,
}) => {
  return (
    <StyledCentralizedContainer>
      <StyledHeader>Dutch Pay</StyledHeader>

      <OverlayWrapper>
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <StyledRow>
              <Row className="align-items-start">
                <StyledH2>{title}</StyledH2>
              </Row>
              <Row className="align-items-center">{children}</Row>
              <Row className="align-items-end">
                <StyledSubmitButton>저장</StyledSubmitButton>
              </Row>
            </StyledRow>
          </Form>
        </Container>
        {/* {children} */}
      </OverlayWrapper>
    </StyledCentralizedContainer>
  )
}

const StyledHeader = styled.h1`
  font-weight: 200;
  letter-spacing: 10px;
  color: slateblue;
  text-align: center;
  margin-bottom: 0.8em;
`

const StyledCentralizedContainer = styled(Container)`
  width: 50vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
`

export const StyledH2 = styled.h2`
  font-weight: 700;
  line-height: 35px;

  text-align: right;
  overflow-wrap: break-word;
  word-break: keep-all;
`

export const StyledSubmitButton = styled(Button).attrs({
  type: 'submit',
})`
  width: 60%;
  height: 50px;
  margin: 0 auto;
  background-color: #6610f2;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: #6610f2;
    filter: brightness(80%);
  }
`

export const StyledRow = styled(Row)`
  align-items: center;
  justify-content: center;
  height: 60vh;
`

import { Button, Container, Form, Row } from "react-bootstrap"
import { CenteredOverlayForm } from "./CenteredOverlayForm"
import { InputTags } from "react-bootstrap-tagsinput"
import { useRecoilState, useRecoilValue } from "recoil"
import { groupMembersState } from "../state/groupMembers"
import { useState } from "react"
import { groupNameState } from "../state/groupName"

export const AddMembers = () => {
  const [groupMembers, setGroupMemers] = useRecoilState(groupMembersState)
  const groupName = useRecoilValue(groupNameState)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <CenteredOverlayForm>
      <Container>
        <Form noValidate onSubmit={handleSubmit}>
        {/* <StyledRow> */}
        <Row>
            <h2>{groupName} 그룹에 속한 사람들의 이름을 모두 적어 주세요.</h2>
        </Row>
        <Row>
          <InputTags
            values={groupMembers}
            data-testid="input-member-names"
            placeholder="이름 간 띄어 쓰기"
            onTags={(value) => setGroupMemers(value.values)}
          />
          {formSubmitted && groupMembers.length === 0 && (
            <span>그룹 멤버들의 이름을 입력해 주세요.</span>
          )}
        </Row>
        <Row>
            <Button type="submit">저장</Button>
        </Row>
        {/* </StyledRow> */}
        </Form>
      </Container>
    </CenteredOverlayForm>
  )
}
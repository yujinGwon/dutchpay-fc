import { CenteredOverlayForm } from './shared/CenteredOverlayForm';
import { InputTags } from 'react-bootstrap-tagsinput'
import { useRecoilState, useRecoilValue } from 'recoil'
import { groupMembersState } from '../state/groupMembers'
import { useState } from 'react';
import { groupNameState } from '../state/groupName'
import styled from 'styled-components';

export const AddMembers = () => {
  const [groupMembers, setGroupMemers] = useRecoilState(groupMembersState)
  const groupName = useRecoilValue(groupNameState)
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)
  };

  const header = `${groupName} 그룹에 속한 사람들의 이름을 모두 적어 주세요.`;

  return (
    <CenteredOverlayForm
      title={header}
      validated={validated}
      handleSubmit={handleSubmit}
    >
      <InputTags
        values={groupMembers}
        data-testid="input-member-names"
        placeholder="이름 간 띄어 쓰기"
        onTags={(value) => setGroupMemers(value.values)}
      />
      {validated && groupMembers.length === 0 && (
        <StyledErrorMessage>그룹 멤버들의 이름을 입력해 주세요.</StyledErrorMessage>
      )}
    </CenteredOverlayForm>
  )
}

const StyledErrorMessage = styled.span`
  color: red;
`
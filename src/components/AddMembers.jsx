import { CenteredOverlayForm } from './CenteredOverlayForm';
import { InputTags } from 'react-bootstrap-tagsinput'
import { useRecoilState, useRecoilValue } from 'recoil'
import { groupMembersState } from '../state/groupMembers'
import { useState } from 'react';
import { groupNameState } from '../state/groupName'

export const AddMembers = () => {
  const [groupMembers, setGroupMemers] = useRecoilState(groupMembersState)
  const groupName = useRecoilValue(groupNameState)
  const [validated, setValidated] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
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
      {formSubmitted && groupMembers.length === 0 && (
        <span>그룹 멤버들의 이름을 입력해 주세요.</span>
      )}
    </CenteredOverlayForm>
  )
}

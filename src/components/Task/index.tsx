import { useState } from 'react'
import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../util/enums/Tarefa'

const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => backgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

const SaveButton = styled(Button)`
  background-color: ${variables.green};
`
const RemoveButton = styled(Button)`
  background-color: ${variables.red};
`

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parametro: 'status' | 'priority'
}

function backgroundColor(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return variables.yellow
    if (props.status === enums.Status.CONCLUIDA) return variables.green
  } else {
    if (props.priority === enums.Priority.URGENTE) return variables.red
    if (props.priority === enums.Priority.IMPORTANTE) return variables.yellow2
  }
  return '#ccc'
}

const Task = ({ title, priority, status, description }: Props) => {
  const [editing, setEditing] = useState(false)

  return (
    <Card>
      <Title>{title}</Title>
      <Tag parametro="priority" priority={priority}>
        {priority}
      </Tag>
      <Tag parametro="status" status={status}>
        {status}
      </Tag>
      <Description value={description}></Description>
      <ActionBar>
        {editing ? (
          <>
            <SaveButton>Salvar</SaveButton>
            <RemoveButton onClick={() => setEditing(false)}>
              Cancelar
            </RemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setEditing(true)}>Editar</Button>
            <RemoveButton>Remover</RemoveButton>
          </>
        )}
      </ActionBar>
    </Card>
  )
}

export default Task

import { ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import variables from '../../styles/variables'
import * as enums from '../../util/enums/Tarefa'
import { remove, edict, changeStatus } from '../../store/reducers/task'
import TaskClass from '../../models/Task'
import { Button, SaveButton } from '../../styles'

const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  label {
    display: flex;
    margin-bottom: 32px;
    align-items: center;
  }
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;S
  margin-bottom: 16px;
  margin-left: 8px;
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

const RemoveButton = styled(Button)`
  background-color: ${variables.red};
`

type Props = TaskClass

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

const Task = ({
  title,
  priority,
  status,
  description: descriptionOrignal,
  id
}: Props) => {
  const [editing, setEditing] = useState(false)
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (descriptionOrignal.length > 0) setDescription(descriptionOrignal)
  }, [descriptionOrignal])

  function cancelButtonClick() {
    setEditing(false)
    setDescription(descriptionOrignal)
  }

  function SaveButtonClick() {
    dispatch(
      edict({
        title,
        priority,
        status,
        description,
        id
      })
    )
    setEditing(false)
  }

  function changeStatusTask(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        id,
        finished: event.target.checked
      })
    )
  }

  return (
    <Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          onChange={changeStatusTask}
          checked={status === enums.Status.CONCLUIDA}
        />
        <Title>
          {editing && <em>Editando: </em>}
          {title}
        </Title>
      </label>
      <Tag parametro="priority" priority={priority}>
        {priority}
      </Tag>
      <Tag parametro="status" status={status}>
        {status}
      </Tag>
      <Description
        disabled={!editing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></Description>
      <ActionBar>
        {editing ? (
          <>
            <SaveButton onClick={SaveButtonClick}>Salvar</SaveButton>
            <RemoveButton onClick={cancelButtonClick}>Cancelar</RemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setEditing(true)}>Editar</Button>
            <RemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </RemoveButton>
          </>
        )}
      </ActionBar>
    </Card>
  )
}

export default Task

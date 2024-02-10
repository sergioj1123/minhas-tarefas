import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Title, Input, SaveButton } from '../../styles'
import styled from 'styled-components'
import * as enums from '../../util/enums/Tarefa'
import { register } from '../../store/reducers/task'

const FormStyle = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  color: #666666;
  font-size: 14px;
  textarea {
    resize: none;
    margin: 16px 0;
  }
`

const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()
    dispatch(
      register({
        title,
        priority,
        status: enums.Status.PENDENTE,
        description
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <FormStyle onSubmit={registerTask}>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Título"
        />
        <Input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          as="textarea"
          placeholder="Descrição da Tarefa"
        ></Input>
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </FormStyle>
    </MainContainer>
  )
}

export default Form

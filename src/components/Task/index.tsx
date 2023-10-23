import styled from 'styled-components'

const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Tag = styled.span`
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: #e1a32a;
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

const Task = () => (
  <Card>
    <Title>Nopme da Tarefa</Title>
    <Tag>Importante</Tag>
    <Tag>Pendente</Tag>
    <Description></Description>
    <ActionBar>
      <Button>Editar</Button>
      <Button>Remover</Button>
    </ActionBar>
  </Card>
)

export default Task

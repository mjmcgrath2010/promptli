import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import FormTextInput from './FormTextInput'
import CommonButton from './CommonButton'
import Headline from './Headline'
import SelectWrapper from './SelectWrapper'

const FormContainer = styled.form`
  width: 50%;
  max-width: 600px;
  min-width: 300px;
  margin: 0 auto;
  text-align: center;
`

const Header = styled.div`
  width: 50%;
  max-width: 600px;
  min-width: 300px;
  margin: 0 auto;
`

const InputContainer = styled.div`
  display: block;
  width: 80%;
  margin: 0 auto;
  position: relative;
`
const ButtonContainer = styled.div`
  width: 35%;
  margin: 0 1.5em;
  text-align: center;
  position: relative;
  display: inline-block;
`

class Form extends Component {
  renderInputField(field) {
    return (
      <InputContainer key={field.name}>
        <FormTextInput
          key={field.name}
          value={field.value}
          label={field.label}
          name={field.name}
          type={field.type}
          multiline={field.multiline}
          onChange={this.props.onChange}
        />
      </InputContainer>
    )
  }

  renderSelect(field) {
    return (
      <InputContainer key={field.name}>
        <SelectWrapper values={field.values} value={field.value} onChange={field.onChange} label={field.label} />
      </InputContainer>
    )
  }

  renderInputs() {
    return this.props.fields.map(field => {
      switch (field.type) {
        case 'select':
          return this.renderSelect(field)
        case 'input':
        default:
          return this.renderInputField(field)
      }
    })
  }

  render() {
    const { title, onSubmit, onSecondaryAction, submitBtnText, secondaryBtnText } = this.props
    return (
      <Fragment>
        <Header>{title && <Headline text={title} variant="h4" align="center" />}</Header>
        <FormContainer
          method="POST"
          onSubmit={e => {
            if (e) {
              e.preventDefault()
            }
            return onSubmit
          }}
        >
          {this.renderInputs()}
          {secondaryBtnText && (
            <ButtonContainer>
              <CommonButton text={secondaryBtnText} onClick={onSecondaryAction} color="secondary" fullWidth />
            </ButtonContainer>
          )}
          <ButtonContainer>
            <CommonButton text={submitBtnText} onClick={onSubmit} type="submit" fullWidth />
          </ButtonContainer>
        </FormContainer>
      </Fragment>
    )
  }
}

export default Form

import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dialog from '.';

describe('Component: Dialog', () => {
  test('render dropdown', () => {
    render(<Dialog text='' />)
    const component = screen.getByTestId('dialog')
  
    expect(component).toBeInTheDocument()
  })

  test('render Dialog with customs props', () => { 
    render (
      <Dialog 
        text='message test' 
        showDialog={true}
        duration={200}
      />
    )

    const component = screen.getByTestId('dialog')
    const message = screen.getByText('message test')
      
    expect(component).toBeInTheDocument()
    expect(message).toBeInTheDocument()
  })

  test('render Dialog show', () => { 
    render (
      <Dialog 
        text='message test show' 
        showDialog={true}
      />
    )

    const message = screen.getByText('message test show')      
    expect(message).toBeInTheDocument()
  })

  test('render Dialog hide', () => { 
    render (
      <Dialog 
        text='message test hide' 
        showDialog={false}
      />
    )

    const component = screen.getByTestId('dialog')
      
    expect(component).toBeInTheDocument()
    expect(() => screen.getByText('message test hide')).toThrow()
  })

  test('render Dialog close button', async () => { 
    jest.spyOn(window, 'setTimeout');
    const handleClose = jest.fn()

    render (
      <Dialog 
        text='message test'
        showDialog={true}
        duration={500}
        onClose={handleClose}
      />
    )

    const component = screen.getByTestId('dialog')
    const closeButton = screen.getByTestId('close-button')

    fireEvent.click(closeButton)
      
    expect(component).toBeInTheDocument()
    expect(setTimeout).toHaveBeenCalled()
    expect(component.className.includes('hide')).toBeTruthy()

    await new Promise((r) => setTimeout(r, 600));
    
    expect(component.style.display === 'none').toBeTruthy()
    expect(handleClose).toHaveBeenCalled()
  })

  test('render Dialog close button without callback', async () => { 
    render (
      <Dialog 
        text='message test'
        showDialog={true}
        duration={500}
      />
    )

    const component = screen.getByTestId('dialog')
    const closeButton = screen.getByTestId('close-button')

    fireEvent.click(closeButton)
      
    expect(component).toBeInTheDocument()
    expect(component.className.includes('hide')).toBeTruthy()
  })
})

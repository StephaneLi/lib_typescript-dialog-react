import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSProperties, FunctionComponent, useEffect, useState } from 'react';
import './style.scss';

type DialogProps = {
  text: string,
  showDialog?: boolean,
  duration?: number,
  className?:string,
  onClose?: CallableFunction
}

const Dialog: FunctionComponent<DialogProps> = ({ text, showDialog= false, duration = 500, className, onClose}) => {
  const [showDialogAction, setShowDialogAction] = useState<boolean>(showDialog)
  const [displayDialog, setDisplayDialog] = useState<boolean>(showDialogAction)

  useEffect(() => {
    setShowDialogAction(showDialog)
  }, [showDialog])

  useEffect(() => {
    if(showDialogAction) {
      setDisplayDialog(true)
    } else {
      const timer = setTimeout(() => {
        setDisplayDialog(false)
        clearTimeout(timer)
      }, duration)  
    }
  }, [showDialogAction, duration])

  const onCloseAction = async () => {    
    setShowDialogAction(false)
    if(onClose) await onClose()
  }

  return (
    <div 
      data-testid="dialog"
      className={`dialog ${className} ${ !showDialogAction ? ' hide' : '' }`} 
      style={{
        display: displayDialog ? 'flex' : 'none',
        '--duration': duration + 'ms'
      } as CSSProperties}
    >
      { displayDialog ? (
        <div className={`dialog__modal${ !showDialogAction ? ' hide' : '' }`}>
          <p>{text}</p>
          <i data-testid="close-button" onClick={onCloseAction}><FontAwesomeIcon icon={faCircleXmark}/></i>
        </div>
      ) : null }
    </div>
  );
}

export default Dialog;

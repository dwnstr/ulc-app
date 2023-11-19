import Tooltip from './Tooltip'

const Label = (props) => {
  const { text, tooltipText } = props

  return (
    <div className="text-shark-200 flex gap-2 mb-2">
      <label className='select-none'>{text}</label>
      <Tooltip text={tooltipText}/>
    </div>
    
  )
}

export default Label;
import Tooltip from './Tooltip'

const Label = (props) => {
  const { text, tooltipText } = props

  return (
    <div className="text-zinc-300 flex gap-2 mb-2">
      <label>{text}</label>
      <Tooltip text={tooltipText}/>
    </div>
    
  )
}

export default Label;
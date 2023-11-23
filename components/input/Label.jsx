import Tooltip from './Tooltip'

const Label = (props) => {
  const { text, tooltip } = props

  return (
    <div className="text-shark-200 flex gap-2">
      <label className='select-none'>{text}</label>
      {tooltip ? (<Tooltip text={tooltip.text} link={tooltip.link}/>) : null}
    </div>
    
  )
}

export default Label;
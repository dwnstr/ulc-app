import * as Collapsible from '@radix-ui/react-collapsible';

const CollapsibleSection = (props) => {
  const {children, open} = props
  

  return (
    <Collapsible.Root open={open} className={`${!open? "": "mt-2"}`}>
      <Collapsible.Content className='flex flex-col gap-4'>{children}</Collapsible.Content>
    </Collapsible.Root>
  )
}

export default CollapsibleSection;
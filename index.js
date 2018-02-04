
const defaultContent = 'Hello World...'
const defaultClass = 'default'

const defaultProps = {
    className: defaultClass,
    children: defaultContent
}

const defaultElement = <div {...defaultProps} />
ReactDOM.render(defaultElement, root)

const Dynamic = props => {
    return (<div>
        {props.children}
        {console.log(props.anotherProp)}
    </div>)}
    
const dynamicElement =
    <Dynamic {...defaultProps}
        className='overrideDefaultClass'
        anotherProp='I am another prop'>
        Hello World!!!
    </Dynamic>
ReactDOM.render(dynamicElement, root)
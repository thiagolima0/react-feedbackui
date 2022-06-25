const AppCard = ({children, reverse}) => {
  // return (
  //   <div className={`card ${reverse && 'reverse'}`}>
  //     {children}
  //   </div>
  // )

  return (
    <div className="card" style={{
      backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
      color: reverse ? '#fff' : '#000'
    }}>{children}</div>
  )
}

AppCard.defaultProps = {
  reverse: false
}

export default AppCard
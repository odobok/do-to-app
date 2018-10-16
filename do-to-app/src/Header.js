class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="menu"></div>

        <span className="title">Due To</span>

        <input
          type="button"
          className="addButton"
          placeholder="Add..." />

        <div className="addIcon"></div>
      </div>
    )
  }
}

/*this document adds the bones of a header. will need all classNames defined - where? - and buttons to create in css*/
/*figure out how to call this in after login --> see if Blockstack stuff is helpful here*/ 

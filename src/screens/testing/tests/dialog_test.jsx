import React from "react";
import Dialog from "../../../components/Dialog";

class DialogTest extends React.Component {

  canceled(e) { alert(`--- Canceled dialog ---`); }
  confirmed(e) { alert(`--- Confirmed dialog ---`); }

  render() {
    return (
      <>
        <Dialog
            id='testDialog' show={true}
            title='Title' 
            showDescription={true} description='Description'
            content='...Some content...'
            cancelButton={true}  canceled={this.canceled}
            confirmed={this.confirmed}
        />
      </>
    ); 
  }
}

export default DialogTest;
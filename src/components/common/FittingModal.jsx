
const FittingModal = ({openState, close}) => {

    return(
        // <div class= "modal fade" id="smallModal" tabindex="-1" aria-hidden="true" >
        <div className={openState ? "modal fade show" : "modal fade"} 
            id="smallModal" 
            tabindex="-1" 
            style={openState ? {display: "block"} : {display: "none"}} 
            aria-modal={openState ? "true" : ""} 
            role={openState ? "dialog" : ""}
            aria-hidden={openState ? "" : "true"}>
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel2">Modal title</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={close}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col mb-3">
                                <label for="nameSmall" className="form-label">Name</label>
                                <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                            </div>
                        </div>
                        <div className="row g-2">
                            <div className="col mb-0">
                                <label className="form-label" for="emailSmall">Email</label>
                                <input type="text" className="form-control" id="emailSmall" placeholder="xxxx@xxx.xx" />
                            </div>
                            <div className="col mb-0">
                                <label for="dobSmall" className="form-label">DOB</label>
                                <input id="dobSmall" type="text" class="form-control" placeholder="DD / MM / YY" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FittingModal;
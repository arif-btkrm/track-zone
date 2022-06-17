import $ from "jquery";

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

const EditForm = ({
  uId,
  input,
  setInput,
  clocks,
  setClocks,
  editForm,
  setEditForm,
}) => {
  if (editForm != null) {
    // console.log(editForm.input);
    setInput(editForm.input);

    const editFormHandler = (e) => {
      e.preventDefault();

      //   const newClocks = clocks.map(clock => {
      //     consloe.log(clock);
      //     // clock.id === uId ? { uId, editForm } : clock;
      //   });
    };

    const handleChange = (e) => {
      setInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    return (
      <div>
        <div id="EditModal" className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">
                  <b>Update Your Clock</b>
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className={"modal-body"}>
                <form onSubmit={editFormHandler}>
                  <div className={"form-group"}>
                    <input
                      value={input.clockTitle}
                      name={"clockTitle"}
                      type={"text"}
                      className={"form-control"}
                      placeholder={"Clock Title"}
                      onChange={handleChange}
                      required
                    />
                    <br />

                    <div className={"form-group"}>
                      <select
                        value={input.clockZone}
                        name={"clockZone"}
                        className={"form-control"}
                        id="tz"
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled={true}>
                          Chose Time Zone
                        </option>
                        <option value="Asia/Dhaka">Asia/Dhaka</option>
                        <option value="Asia/Kolkata">Kolcata</option>
                        <option value="Europe/London">Europe/London</option>
                        <option value="Africa/Cairo">Africa/Cairo</option>
                        <option value="Asia/Kathmandu">Asia/Kathmandu</option>
                        <option value="Asia/karachi">Asia/karachi</option>
                        <option value="Europe/Rome">Europe/Rome</option>
                        <option value="Asia/Dubai">Asia/Dubai</option>
                        <option value="Asia/Tehran">Asia/Tehran</option>
                        <option value="America/Sao_Paulo">
                          America/Sao_Paulo
                        </option>
                        <option value="America/Santiago">
                          America/Santiago
                        </option>
                        <option value="America/Guyana">America/Guyana</option>
                        <option value="Australia/Darwin">
                          Australia/Darwin
                        </option>
                        <option value="Asia/Seoul">Asia/Seoul</option>
                        <option value="America/St_Johns">
                          America/St_Johns
                        </option>
                      </select>
                    </div>

                    <textarea
                      value={input.clockNote}
                      name={"clockNote"}
                      className={"form-control"}
                      aria-label={"With textarea"}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className={"modal-footer"}>
                    <center>
                      <button
                        type="submit"
                        className={"btn btn-primary"}
                        // data-dismiss={"modal"}
                      >
                        {" "}
                        Update{" "}
                      </button>
                    </center>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default EditForm;

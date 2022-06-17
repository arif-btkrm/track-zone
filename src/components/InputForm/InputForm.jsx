import $ from "jquery";

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

const init = {
  clockTitle: "",
  clockZone: "",
  clockNote: "",
};

const InputForm = ({ input, setInput, clocks, setClocks }) => {
  const inputFormHandler = (e) => {
    e.preventDefault();

    setClocks([...clocks, { id: generateId(10), input }]);
    // console.log(clocks);
    setInput(init);
  };

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generateId = (length) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <div>
      <div id="exampleModal" className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                <b>Add New Clock</b>
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
              <form onSubmit={inputFormHandler}>
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
                      <option value="" disabled={true} selected>
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
                      <option value="America/Santiago">America/Santiago</option>
                      <option value="America/Guyana">America/Guyana</option>
                      <option value="Australia/Darwin">Australia/Darwin</option>
                      <option value="Asia/Seoul">Asia/Seoul</option>
                      <option value="America/St_Johns">America/St_Johns</option>
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
                      Add{" "}
                    </button>
                  </center>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <center>
        <button
          id="myModal"
          className="btn btn-warning btn-lg"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add More Clock
        </button>
      </center>
    </div>
  );
};

export default InputForm;

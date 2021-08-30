import React from "react";

const SubCard = (props) => {
    return (
        <div className="card">
          <div className="row">
            <div className="col">
              <div className="card-body">
                <div className="card-title">
                  <a
                    href={"r/" + props.sub.title + "/" + props.sub._id}
                    className="display-3"
                  >
                    <h4>{props.sub.title}</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SubCard;
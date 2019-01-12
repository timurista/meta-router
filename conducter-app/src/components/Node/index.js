import React, { Component } from "react";
import styled from "@emotion/styled";

const NodeStyled = styled.div`
  border-radius: 2vw;
  max-width: 10vw;
  padding: 0.5rem;
  background-color: #eee;
  box-shadow: 1px 1px 2px 3px #ccc;
`;

export default class NodeComponent extends Component {
  state = {
    loading: false,
    editMode: false
  };

  renderEditMode() {
    return (
      <div>
        <key>
          <i class="fas fa-key" /> * * * * *{" "}
        </key>
        <pword />
        <div>
          errors <i class="fas fa-exclamation-triangle" />
        </div>
        <div>
          input <i class="fas fa-sign-in-alt" />
        </div>
        <div>
          output <i class="fas fa-sign-out-alt" />
        </div>

        <div>
          Live Edit <i class="fas fa-edit" />
        </div>
      </div>
    );
  }
  render() {
    return (
      <NodeStyled
        onClick={() => this.setState(prev => ({ editMode: !prev.editMode }))}
      >
        {this.props.children}
        {this.state.editMode && this.renderEditMode()}
      </NodeStyled>
    );
  }
}

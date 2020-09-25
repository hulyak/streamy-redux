import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  // destructure from meta
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    // console.log(meta);
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    // event.preventDefault();
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {/* input fields */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// validate form inputs
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);

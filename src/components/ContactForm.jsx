"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const submitted = await fetch("/email/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(submitted);
      if (submitted.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      setSubmissionError(error);
    } finally {
      setLoading(false);
    }
  };
  console.log("errors: ", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="full_name" className="form-label">
          Your Full Name
        </label>
        <input
          type="text"
          placeholder="John Scott"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          id="full_name"
          disabled={submitted}
          {...register("name", { required: true, max: 155, min: 3 })}
        />
        {errors.name && <div className="invalid-feedback">{errors.name.type}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Your Email
        </label>
        <input
          type="email"
          placeholder="john@scott.com"
          id="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          disabled={submitted}
          {...register("email", {})}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.type}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Your Phone Number
        </label>
        <input
          type="tel"
          placeholder="346 326 3009"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          id="phone"
          disabled={submitted}
          {...register("phone", { required: true })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="transportation_mode" className="form-label">
          Mode of Transportation
        </label>
        <select
          className={`form-select ${errors.option ? "is-invalid" : ""}`}
          id="transportation_mode"
          disabled={submitted}
          {...register("option", { required: true })}
        >
          <option value="Open Car Transport">Open Car Transport</option>
          <option value=" Enclosed Auto Transport"> Enclosed Auto Transport</option>
          <option value=" Door to Door Transport"> Door to Door Transport</option>
          <option value=" Other"> Other</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Your Message
        </label>
        <textarea
          id="message"
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          rows="5"
          disabled={submitted}
          {...register("message", { required: true })}
        />
      </div>
      {errors.message && <div className="invalid-feedback">{errors.message.type}</div>}

      {loading ? (
        <input type="submit" value="Submitting" className="btn btn-warning w-100" />
      ) : submissionError ? (
        <input type="submit" value="Error! Try Again" className="btn btn-danger w-100" />
      ) : submitted ? (
        <input type="Submitted" value="Submitted" className="btn btn-success w-100" disabled={submitted} />
      ) : (
        <input type="submit" value="Get Connected" className="btn btn-primary w-100" />
      )}
    </form>
  );
};
export default ContactForm;

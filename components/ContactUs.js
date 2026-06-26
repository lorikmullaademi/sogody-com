import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { Modal, Button, Form, Col, InputGroup, Image } from "react-bootstrap"
import { Formik, Form as FormikForm } from "formik"
import * as yup from "yup"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import whiteArrow from "../assets/svgs/white-arrow.svg"
import calendar from "../assets/svgs/calendar-month-outline.svg"
import { MdOutlineFileUpload, MdClose } from "react-icons/md"
import InitKoalendar from "./init-koalendar"
import ReCAPTCHA from "react-google-recaptcha"
const schema = yup.object({
  username: yup.string().required("Please write down your name."),
  company: yup.string().required("Please write down your company."),
  email: yup
    .string()
    .email("Invalid email.")
    .required("Please write down your email address."),
  additional: yup.string(),
})

const selectStyles = {
  option: styles => ({
    ...styles,
    color: "#000",
    fontSize: "14px",
    fontFamily: "HelveticaNeueLT Pro 55 Roman",
    backgroundColor: "#fff",
    cursor: "pointer",
  }),
}

export default function ContactUs(props) {
  const myPortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="description">{children}</p>,
      h2: ({ children }) => <h2 className="heading2">{children}</h2>,
    },
  }

  const [resultForm, setResultForm] = useState(null)
  const [status, setStatus] = useState("Submit")
  const [formError, setFormError] = useState(null)
  const recaptchaRef = useRef(null)
  const contactVideo =
    "https://files.sogody.co.uk/2025-04-18T11-33-58.070Z-Optimized_contact-video-1.mp4"

  useEffect(() => {
    setResultForm("")
  }, [props.show])

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setStatus("Submitting...")
    setSubmitting(true)
    setFormError(null)
    setResultForm(null)

    try {
      const token = await recaptchaRef.current.executeAsync()

      const formData = new FormData()

      formData.append("username", values.username)
      formData.append("company", values.company)
      formData.append("email", values.email)
      formData.append("radio", values.radio.join(", "))
      formData.append("additional", values.additional || "")
      formData.append("g-recaptcha-response", token)
      formData.append("file", fileInput.current.files[0])

      const response = await fetch(
        "https://sogody-contact-form.sogody-seca.workers.dev/",
        {
          method: "POST",
          body: formData,
        }
      )

      if (!response.ok) {
        const text = await response.text()
        throw new Error(text)
      }

      resetForm()
      fileInput.current.value = ""
      setCvFileName("")
      setResultForm(
        "Thank you for contacting us. You should hear back from our team."
      )
      setStatus("Submit")
      setSubmitting(false)
      recaptchaRef.current.reset()
    } catch (err) {
      setFormError(`An error occurred: ${err.message}`)
      setStatus("Submit Again!")
      setSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const fileInput = useRef(null)
  const [cvFileName, setCvFileName] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const handleUploadClick = () => {
    if (!cvFileName) {
      fileInput.current.click()
    }
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    if (file) {
      const fileName =
        file.name.length > 15
          ? file.name.slice(0, 9) + "..." + file.name.slice(-6)
          : file.name

      setCvFileName(fileName)
      setIsUploading(true)

      setTimeout(() => {
        setIsUploading(false)
      }, 3000)
    }
  }

  const handleRemoveFile = () => {
    setCvFileName("")
    setIsUploading(false)
  }

  const renderForm = hidden => {
    const style = hidden ? { display: "none" } : {}

    return (
      <div className="scroll-show">
        <Formik
          initialValues={{
            username: "",
            company: "",
            email: "",
            additional: "",
            radio: "",
          }}
          validateOnChange={false}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            handleChange,
            values,
            errors,
            setFieldValue,
            setErrors,
          }) => (
            <FormikForm style={style} method="POST">
              <Form.Row>
                <Form.Group as={Col} md="12" className="username-class mt-1">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="First and Last Name *"
                      className="red-asterisk"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={e => {
                        handleChange(e)
                        let err = errors
                        delete err.username
                        setErrors(err)
                      }}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username ? <p> {errors.username} </p> : null}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" className="email">
                  <InputGroup>
                    <Form.Control
                      type="email"
                      placeholder="Work Email *"
                      className="red-asterisk"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      value={values.email}
                      onChange={e => {
                        handleChange(e)
                        let err = errors
                        delete err.email
                        setErrors(err)
                      }}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email ? <p> {errors.email} </p> : null}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="12" className="company-field">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      aria-describedby="inputGroupPrepend"
                      name="company"
                      value={values.company}
                      onChange={e => {
                        handleChange(e)
                        let err = errors
                        delete err.company
                        setErrors(err)
                      }}
                      isInvalid={!!errors.company}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.company ? <p> {errors.company} </p> : null}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <div className="forms-layout-mobile">
                <Form.Row>
                  <Form.Group as={Col} md="12" className="additional">
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Tell Us More About Your Project"
                        aria-describedby="inputGroupPrepend"
                        name="additional"
                        value={values.additional}
                        onChange={e => {
                          handleChange(e)
                          let err = errors
                          delete err.additional
                          setErrors(err)

                          e.target.style.height = "auto"
                          e.target.style.height = `${e.target.scrollHeight}px`
                        }}
                        isInvalid={!!errors.additional}
                        className="expandable-textarea"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.additional ? (
                          <p> {errors.additional} </p>
                        ) : null}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="12" className="checkbox-buttons">
                    <InputGroup>
                      <Form.Label className="form-label-styling">
                        How Can We Help? (Select all that apply) *
                      </Form.Label>
                      <div className="checkbox-container">
                        {[
                          "Strategic Guidance",
                          "A Project Build",
                          "Optimization & Growth",
                          "AI & Automation",
                          "A Potential Partnership",
                        ].map((option, index) => (
                          <Form.Check
                            type="checkbox"
                            id={`checkbox-${index}`}
                            key={index}
                            label={option}
                            name="radio"
                            value={option}
                            onChange={e => {
                              const { checked, value } = e.target
                              let updatedValues = [...values.radio]
                              if (checked) {
                                updatedValues.push(value)
                              } else {
                                updatedValues = updatedValues.filter(
                                  item => item !== value
                                )
                              }
                              setFieldValue("radio", updatedValues)
                            }}
                            isInvalid={!!errors.radio}
                            checked={
                              values.radio && values.radio.includes(option)
                            }
                            className="custom-checkbox"
                          />
                        ))}
                        <Form.Control.Feedback type="invalid">
                          {errors.radio ? <p>{errors.radio}</p> : null}
                        </Form.Control.Feedback>
                      </div>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
              </div>
              <Form.Row>
                <Form.Row className="mob-width">
                  <Form.Group
                    as={Col}
                    lg="12"
                    controlId="file"
                    className="mb-2"
                  >
                    <Button
                      className="custom-upload-btn my-2"
                      onClick={handleUploadClick}
                      disabled={isUploading}
                    >
                      {cvFileName && !isUploading ? (
                        <MdClose
                          className="remove-file-icon"
                          size={16}
                          onClick={handleRemoveFile}
                        />
                      ) : (
                        <MdOutlineFileUpload
                          className="upload-icon p-0 m-0"
                          size={16}
                        />
                      )}
                      {isUploading
                        ? "Loading file..."
                        : cvFileName || "Upload Project File"}
                    </Button>
                    <Form.File
                      className="d-none"
                      ref={fileInput}
                      accept="application/pdf, application/msword"
                      onChange={handleFileChange}
                    />
                  </Form.Group>
                </Form.Row>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" style={{ marginBottom: "10px" }}>
                  <Button
                    type="submit"
                    className="contact-us-link hover-state apply-btn resume-btn submit w-100 justify-content-center"
                    disabled={isSubmitting}
                  >
                    {status}
                    <span className="arrow-icon">
                      <img src={whiteArrow} alt="Arrow Icon" />
                    </span>
                  </Button>
                </Form.Group>
                {resultForm !== null && (
                  <Form.Group as={Col} md="12">
                    <p className="career-result">{resultForm}</p>
                  </Form.Group>
                )}
                {formError !== null && (
                  <Form.Group as={Col} md="12">
                    <p className="career-error">{formError}</p>
                  </Form.Group>
                )}
              </Form.Row>
              <Form.Group as={Col} md="12" className="desktop-only">
                <p className="terms-privacy mb-0 mt-2">
                  By clicking the button, you agree to Sogody's{" "}
                  <Link to="/terms/">Terms of Service</Link> and{" "}
                  <Link to="/privacy/">Privacy Policy</Link>.
                </p>
              </Form.Group>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdPd_MfAAAAAAVbxNvhyZU1bnuf_GisE8AtxA83"
                size="invisible"
                className="g-recaptcha"
                id="recaptcha"
              />
            </FormikForm>
          )}
        </Formik>
      </div>
    )
  }

  return (
    <>
      <div className="contact-us-container container mb-1">
        <div className="image-video-container desktop-only">
          <div className="image-video-container">
            <video
              src={contactVideo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
              }}
              autoPlay
              playsInline
              controls={false}
              loop
              muted
            />

            <div className="d-flex justify-content-center">
              <InitKoalendar className="green green-hover book-a-call mb-0 ml-1 d-flex align-items-center">
                <img src={calendar} alt="Calendar Icon" className="mr-2 mb-1" />
                <span className="dark-green-hover">Book a call now</span>
              </InitKoalendar>
            </div>
          </div>
        </div>
        <div className="contact-us-form" style={{ flex: 1 }}>
          {renderForm()}
        </div>
      </div>
      <Form.Group
        as={Col}
        md="12"
        className="contact-us-container mobile-only2"
      >
        <p className="terms-privacy mb-0 mt-2 text-left pl-2">
          By clicking the button, you agree to Sogody's{" "}
          <Link to="/terms/">Terms of Service</Link> and{" "}
          <Link to="/privacy/">Privacy Policy</Link>.
        </p>
      </Form.Group>
    </>
  )
}

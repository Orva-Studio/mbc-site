"use client";

import { useState } from "react";

const FORM_ID = "8242509";

const KitForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Removed ConvertKit script loading since we're handling submission manually
  // The script was causing conflicts with React's DOM management

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    try {
      // Use URLSearchParams instead of FormData for better compatibility
      const formData = new URLSearchParams();
      formData.append("email_address", email);
      formData.append("form", FORM_ID);

      const response = await fetch(`https://app.kit.com/forms/${FORM_ID}/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (response.ok) {
        setEmail("");
        // Show success message - you could replace this with a toast or modal
        alert("Success! Now check your email to confirm your subscription.");
      } else {
        const errorText = await response.text();
        console.error("Form submission error:", errorText);
        setErrors(["Something went wrong. Please try again."]);
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrors(["Network error. Please try again."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="seva-form formkit-form"
      data-sv-form={FORM_ID}
      data-uid="60a8355b5d"
      data-format="inline"
      data-version="5"
      style={{
        backgroundColor: "rgb(249, 250, 251)",
        borderRadius: "4px",
        border: "1px solid #e3e3e3",
        maxWidth: "700px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="formkit-background" style={{ opacity: 0.2 }}></div>
      <div data-style="minimal" style={{ padding: "20px", width: "100%", position: "relative" }}>
        <div
          className="formkit-header"
          data-element="header"
          style={{
            color: "rgb(77, 77, 77)",
            fontSize: "27px",
            fontWeight: 700,
            margin: "0 0 27px 0",
            textAlign: "center",
          }}
        >
          <h2>Join the waiting list</h2>
        </div>
        
        <div
          className="formkit-subheader"
          data-element="subheader"
          style={{
            color: "rgb(104, 104, 104)",
            fontSize: "18px",
            margin: "18px 0",
            textAlign: "center",
          }}
        >
          <p>Subscribe to get our latest content by email.</p>
        </div>

        {errors.length > 0 && (
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
            style={{
              background: "#fde8e2",
              borderColor: "#f2643b",
              color: "#ea4110",
              borderRadius: "5px",
              listStyle: "none",
              margin: "25px auto",
              padding: "12px",
              textAlign: "center",
              width: "100%",
            }}
          >
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <div
          data-element="fields"
          data-stacked="false"
          className="seva-fields formkit-fields"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "25px auto 0 auto",
          }}
        >
          <div
            className="formkit-field"
            style={{
              minWidth: "220px",
              margin: "0 0 15px 0",
              flex: "1 0 100%",
            }}
          >
            <input
              className="formkit-input"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                color: "rgb(0, 0, 0)",
                borderColor: "rgb(227, 227, 227)",
                borderRadius: "4px",
                fontWeight: 400,
                background: "#ffffff",
                fontSize: "15px",
                padding: "12px",
                border: "1px solid #e3e3e3",
                width: "100%",
                lineHeight: 1.4,
                margin: 0,
                transition: "border-color ease-out 300ms",
              }}
            />
          </div>
          
          <button
            data-element="submit"
            className="formkit-submit"
            type="submit"
            disabled={isSubmitting}
            style={{
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(22, 119, 190)",
              borderRadius: "4px",
              fontWeight: 400,
              border: 0,
              cursor: "pointer",
              display: "inline-block",
              textAlign: "center",
              fontSize: "15px",
              marginBottom: "15px",
              overflow: "hidden",
              padding: 0,
              position: "relative",
              verticalAlign: "middle",
              margin: "0 0 15px 0",
              flex: "1 0 100%",
            }}
          >
            {isSubmitting && (
              <div
                className="formkit-spinner"
                style={{
                  display: "flex",
                  height: "100%",
                  width: "50px",
                  margin: "0 auto",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  overflow: "hidden",
                  textAlign: "center",
                  transition: "all 300ms ease-in-out",
                  opacity: 1,
                }}
              >
              </div>
            )}
            <span
              style={{
                display: "block",
                transition: "all 300ms ease-in-out",
                padding: "12px 24px",
                opacity: isSubmitting ? 0 : 1,
              }}
            >
              Download
            </span>
          </button>
        </div>

        <div
          className="formkit-guarantee"
          data-element="guarantee"
          style={{
            color: "rgb(77, 77, 77)",
            fontSize: "13px",
            fontWeight: 400,
            margin: "10px 0 15px 0",
            textAlign: "center",
          }}
        >
          <p>We won't send you spam. Unsubscribe at any time.</p>
        </div>
      </div>
    </form>
  );
};

export default KitForm;

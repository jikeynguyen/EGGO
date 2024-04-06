import React, { useState } from "react";

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to handle submission would go here
    // For example, you could post this data to a backend service
    alert(`Email: ${email}, Language: ${language}`);
    // Reset fields after submission for user to register again if desired
    setEmail("");
    setLanguage("");
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Địa chỉ thư điện tử:
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="language" className="form-label">
          Ngôn ngữ:
        </label>
        <select
          id="language"
          className="form-control"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          required
        >
          <option value="">Chọn ngôn ngữ...</option>
          <option value="Tiếng Việt">Tiếng Việt</option>
          <option value="English">English</option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        Đăng ký
      </button>
    </form>
  );
};

export default RegistrationForm;

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* CURRENT ROLE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Banking Operations Analyst</h4>
                <h5>DXC Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Supporting banking operations including payments, settlements, and
              customer account processes. Resolving issues, ensuring compliance,
              and improving efficiency through data analysis and operational support.
            </p>
          </div>

          {/* ACCENTURE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Service Advisor</h4>
                <h5>Accenture</h5>
              </div>
              <h3>2022–2025</h3>
            </div>
            <p>
              Managed customer complaints, handled CRM systems, resolved technical
              issues, and supported case investigations while maintaining high service
              standards in a fast-paced environment.
            </p>
          </div>

          {/* ASAP DATA */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Executive</h4>
                <h5>ASAP Data Solutions</h5>
              </div>
              <h3>2021–2022</h3>
            </div>
            <p>
              Built dashboards using Salesforce CRM and PostgreSQL data, supported
              marketing campaigns, and used analytics to improve performance and reporting.
            </p>
          </div>

          {/* APTRA */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Web Developer Intern</h4>
                <h5>APTRA</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Developed SQL scripts, REST APIs, and frontend components using Java,
              HTML, CSS, and JavaScript while supporting backend integration and testing.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
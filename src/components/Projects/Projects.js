import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import erp from "../../Assets/Projects/erp.jpg";
import cutting from "../../Assets/Projects/cutting.png";
import dental from "../../Assets/Projects/dental.webp";
import armadaworks from "../../Assets/Projects/armadaworks.png";
import configurator from "../../Assets/Projects/configurator.png";
import dome from "../../Assets/Projects/dome.jpg";
import metalspinning from "../../Assets/Projects/metalspinning.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={armadaworks}
              isBlog={false}
              title="ArmadaWorks"
              description="ArmadaWorks is an addin for SolidWorks. It aims to automate redundant, time-consuming tasks that users might encounter in SolidWorks. It offers many features such as automatic sheet metal unfolding, bill of materials, nesting, and more. C#, Solidworks API were used in the project"
              demoLink="https://armadaworks.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dome}
              isBlog={false}
              title="Dome"
              description="The Dome project is a SolidWorks addin designed to construct living spaces in dome shapes. It calculates the placement of components based on entered diameter and frequency values, enabling the realization of the design. C#, Solidworks API were used in the project"
              demoLink="https://capedome.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dental}
              isBlog={false}
              title="Dental CAD/CAM"
              description="A custom CAD/CAM software has been developed for the dental industry. Many features have been developed to meet the specific needs of the customers, such as tooth segmentation, mesh boolean operations... c++, QT, Opencascade, VTK, Moduleworks were used in the project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erp}
              isBlog={false}
              title="ERP Integration"
              description="In the project I have developed, the CAD data created by designers is automatically transferred to ERP systems (such as SAP, IFS) via SOLIDWORKS, PDM API, in many customers. This includes opening stock cards and transferring prescriptions and images. .Net C#, SOLIDWORKS API, PDM API, web services were used in the project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={configurator}
              isBlog={false}
              title="Configurator"
              description="The Configurator project involves generating a product in a CAD environment based on the user's selections and displaying it in a 3D web format. On the web page, the product is dynamically created based on user selections. The parts list needed to assemble this product is assembled in the assembly environment using the SOLIDWORKS API, according to predefined rules. Subsequently, it can be displayed in 3D on the web. .Net Web API, Angular, Threejs, SOLIDWORKS API were used in the project"
              demoLink="https://gearboxselection.pgr.com.tr/reducer-selection?lang=tr"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cutting}
              isBlog={false}
              title="Cutting Module"
              description="In the project, an aluminum composite cutting program was developed. MFC/QT/C++ were used in the project. The program enables reading of DXF/DWG files, which are then rendered using OpenGL."
              demoLink="https://solidcnc.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metalspinning}
              isBlog={false}
              title="Metal Spinning"
              description="The traditional chipless manufacturing method of sheet metal spinning has been digitized. A CAD/CAM system has been developed to generate tool paths for CNC specifically designed for sheet metal spinning."
              demoLink="https://solidcnc.net/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

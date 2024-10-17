## Project Description

### Objective:

The "Traffic Light Interface" project aims to create an interactive widget that simulates the functioning of traffic lights available in a web browser. This tool is intended for educational purposes as well as for developers and user interface designers. The application allows users to understand how traffic lights operate and can be used as a visual element on websites or in educational materials.

### Functionality Description:

- **Traffic Light Simulation:** Users can observe how the lights change in a defined cycle.
- **Cycle Personalization:** Users can customize the duration of each light (red, yellow, green).
- **Interactivity:** Users can manually change the lights to better understand their operation.
- **Website Integration:** The widget can be easily embedded on websites using a short code snippet.

## Requirements Analysis:

### Functional Requirements:

- **Light Cycle Simulation:** The widget automatically changes the lights (red, yellow, green) in a defined time interval.
- **Cycle Personalization:** Users can set the duration of each light using sliders or text fields.
- **Manual Mode:** Users can switch between automatic and manual modes, where they control the light changes.
- **Responsive Design:** The widget works properly on various screen resolutions (desktop, tablet, smartphone).

### Non-functional Requirements:

- **Animation Smoothness:** Implement smooth transitions between light changes.
- **Performance Speed:** The widget should operate without delays in both automatic and manual modes.
- **User Interface:** A simple, minimalist, and intuitive design that reflects the appearance of real traffic lights.

## Interface Design:

### Sketches/Visualizations of the Interface:

- _Home Page:_ Display of the traffic light with three colors (red, yellow, green) and a control panel for adjusting the cycle duration.
- _Customization Panel:_ Sliders or text fields to set the duration for each light.
- _Manual Mode:_ A button to allow manual switching of the lights.

### Site Map:

- _Home Page_
  - Traffic Light Simulator
  - Customization Panel (light duration)
  - Toggle for automatic/manual mode

## System Architecture:

### Data Structure Description:

The application will store data related to light cycle settings and their current states:

- **Cycle Parameters:** Stores the duration for each light (red, yellow, green).
- **Traffic Light State:** Stores information about which light is currently active.

### Architecture Diagrams:

The application architecture will be based on a classic MVC structure:

- **Model:** Manages the logic for changing the lights and storing cycle settings.
- **View:** Responsible for visualizing the traffic light and the user interface.
- **Controller:** Connects the model logic to the view and manages user interactions.

## Implementation:

### Technology Description:

- **Frontend:** HTML, CSS, JavaScript (React.js or Vue.js).
- **Backend:** May be used for extensions, such as APIs for further integrations (e.g., traffic data).
- **Database:** At this stage, the application does not require a persistent database, but future extensions may include integrations with databases (e.g., for storing usage statistics).

### Code Structure:

- _Directories/Files:_ Separate components for the traffic light, customization panel, and manual mode.
- _Coding Style:_ A modular approach with clear comments and adherence to ES6+ standards in JavaScript.

## Testing:

### Testing Plan:

- **Unit Tests:** Verify the correctness of the logic for changing lights and cycle personalization.
- **Integration Tests:** Ensure that all components (traffic light, customization panel, manual mode) work together seamlessly.
- **User Interface Tests:** Confirm that the widget functions on various resolutions and devices.
- **Performance Tests:** Assess the smoothness of light transitions and response to setting changes.

### Testing Procedures:

- Prepare a set of test cases that will verify each function of the widget.
- Regular testing on different browsers and mobile devices.
- Reporting and fixing identified bugs.

## Deployment and Maintenance:

### Deployment Plan:

- **Deployment Stages:**
  - Implementation of the basic version of the widget.
  - Functional and performance testing.
  - Publishing as a plugin or widget that can be embedded on websites.
- **Deadlines:** Establish a timeline for each phase, from implementation to publication.

### Maintenance Procedures:

- **Technical Support:** Establish a communication channel for users to report issues with the widget.
- **Updates:** Regular updates based on user feedback and the introduction of new features (e.g., additional customization options).

## Schedule:

### Project Plan:

- **Execution Stages:** Break down the work into specific tasks (e.g., designing the interface, implementing light change logic, testing).
- **Deadlines:** Determine the time needed for each task.

## Cost Estimate:

### Estimated Costs:

- **Application Development:** Costs related to developer salaries and testing.
- **Maintenance Costs:** Hosting, support fees, and potential external service charges.

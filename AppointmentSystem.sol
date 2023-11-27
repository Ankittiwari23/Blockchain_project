pragma solidity >=0.5.16 <0.9.0;

contract AppointmentSystem {
    // Enum to represent the status of an appointment
    enum AppointmentStatus { Pending, Completed }

    // Struct to define the structure of an appointment
    struct Appointment {
        address patient;         // Address of the patient who scheduled the appointment
        address doctor;          // Address of the doctor providing the service
        uint appointmentDate;    // Timestamp of the appointment date
        uint duration;           // Duration of the appointment in minutes
        AppointmentStatus status; // Status of the appointment (Pending or Completed)
    }

    // Array to store all appointments
    Appointment[] public appointments;

    // Constant to define the cost per minute of an appointment
    uint public constant APPOINTMENT_COST_PER_MINUTE = 1 wei;

    // Events to log important actions on the contract
    event AppointmentScheduled(address patient, address doctor, uint appointmentDate, uint duration, uint cost);
    event AppointmentCompleted(uint appointmentId);

    // Function to schedule a new appointment
    function scheduleAppointment(address doctor, uint appointmentDate, uint duration) public payable {
        // Check if the sent payment matches the required amount
        require(msg.value == duration * APPOINTMENT_COST_PER_MINUTE, "Invalid payment amount.");
        
        // Check if the appointment date is in the future
        require(appointmentDate >= block.timestamp, "Appointment date must be in the future.");

        // Create a new appointment and add it to the array
        Appointment memory appointment = Appointment(
            msg.sender,
            doctor,
            appointmentDate,
            duration,
            AppointmentStatus.Pending
        );
        appointments.push(appointment);

        // Emit an event to log the scheduled appointment
        emit AppointmentScheduled(msg.sender, doctor, appointmentDate, duration, msg.value);
    }

    // Function to mark an appointment as completed
    function completeAppointment(uint appointmentId) public {
        // Check if the appointment ID is valid
        require(appointmentId < appointments.length, "Invalid appointment ID.");

        // Get a reference to the appointment
        Appointment storage appointment = appointments[appointmentId];

        // Check if the caller is the patient who scheduled the appointment
        require(appointment.patient == msg.sender, "Only the patient can mark the appointment as completed.");

        // Check if the appointment is still pending
        require(appointment.status == AppointmentStatus.Pending, "Appointment has already been completed.");

        // Mark the appointment as completed
        appointment.status = AppointmentStatus.Completed;

        // Emit an event to log the completed appointment
        emit AppointmentCompleted(appointmentId);
    }

    // Function to get the total number of appointments
    function getAppointmentCount() public view returns (uint) {
        return appointments.length;
    }

    // Function to get details of a specific appointment
    function getAppointment(uint appointmentId) public view returns (
        address patient,
        address doctor,
        uint appointmentDate,
        uint duration,
        AppointmentStatus status
    ) {
        // Check if the appointment ID is valid
        require(appointmentId < appointments.length, "Invalid appointment ID.");

        // Get details of the appointment
        Appointment memory appointment = appointments[appointmentId];
        return (
            appointment.patient,
            appointment.doctor,
            appointment.appointmentDate,
            appointment.duration,
            appointment.status
        );
    }
}

// Import necessary libraries and dependencies
import React, { useState } from "react";
import Web3 from "web3"; // Web3 library for interacting with the Ethereum blockchain
import MedicalBookingContract from "../src/contractsCopy/MedicalBooking.json"; // Smart contract ABI and network information
import bg from "../src/wallpaper.jpg"; // Background image
import "../src/App.css"; // Stylesheet

// Main functional component
function App() {
  // State variables to manage the web3 instance, user accounts, smart contract, and appointments
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [admitDate, setAdmitDate] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [roomNumber, setRoomNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to load Web3 and initialize the application
  const loadWeb3 = async () => {
    // Check if MetaMask (or another compatible wallet) is available
    if (window.ethereum) {
      // Enable the Ethereum provider in MetaMask
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      // Get user accounts
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);

      // Connect to the smart contract on the Ethereum blockchain
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = MedicalBookingContract.networks[networkId];
      const contract = new web3.eth.Contract(
        MedicalBookingContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(contract);

      // Load existing appointments from the smart contract
      const appointmentsCount = await contract.methods
        .appointmentsCount()
        .call();
      const appointments = [];
      for (let i = 0; i < appointmentsCount; i++) {
        const appointment = await contract.methods.appointments(i).call();
        appointments.push(appointment);
      }
      setAppointments(appointments);
    } else {
      // Display an error message if MetaMask is not detected
      alert("Please install MetaMask to use this dApp.");
    }
  };

  // Function to create a new appointment
  const createAppointment = async () => {
    // Convert admit and discharge dates to Unix timestamps
    const admitDateUnix = new Date(admitDate).getTime() / 1000;
    const dischargeDateUnix = new Date(dischargeDate).getTime() / 1000;

    // Convert total price to Wei (Ethereum's smallest unit)
    const totalPriceWei = web3.utils.toWei(totalPrice.toString(), "ether");

    // Call the smart contract method to create a new appointment
    await contract.methods
      .createAppointment(admitDateUnix, dischargeDateUnix, roomNumber)
      .send({ from: accounts[0], value: totalPriceWei });

    // Update the list of appointments with the new appointment
    setAppointments([
      ...appointments,
      {
        patientAddress: accounts[0],
        admitDate: admitDateUnix,
        dischargeDate: dischargeDateUnix,
        roomNumber,
        totalCost: totalPriceWei,
        paid: true,
        patientName: "", // Set the patient name accordingly
        doctorName: "", // Set the doctor name accordingly
        diseaseName: "", // Set the disease name accordingly
        medicineName: "", // Set the medicine name accordingly
      },
    ]);
  };

  // Function to handle payment of an appointment
  const payAppointment = async (appointmentId) => {
    const appointment = appointments[appointmentId];
    // Call the smart contract method to mark the appointment as paid
    await contract.methods
      .payAppointment(appointmentId)
      .send({ from: accounts[0] });

    // Update the list of appointments with the updated payment status
    appointment.paid = true;
    setAppointments([
      ...appointments.slice(0, appointmentId),
      appointment,
      ...appointments.slice(appointmentId + 1),
    ]);
  };

  // Check if Web3 is not initialized, display a button to connect to MetaMask
  if (!web3) {
    return (
      <div>
        <button onClick={loadWeb3}>Connect to MetaMask</button>
      </div>
    );
  }

  // Render the main UI
  return (
    <div class="background">
      <br />
      <div class="back">
        <h1 class="heading">
          <i>ChainStay- Medical Booking dApp</i>
        </h1>
        <h2 class="labh">Create an Appointment</h2>

        {/* Form to input appointment details */}
        <label class="lab">Admit Date:</label>
        <input
          class="inputs"
          type="date"
          value={admitDate}
          onChange={(e) => setAdmitDate(e.target.value)}
        />
        <br />
        <label class="lab">Discharge Date:</label>
        <input
          class="inputs"
          type="date"
          value={dischargeDate}
          onChange={(e) => setDischargeDate(e.target.value)}
        />
        <br />
        <label class="lab">Room Number:</label>
        <input
          class="inputs"
          type="number"
          min="1"
          max="10"
          value={roomNumber}
          onChange={(e) => setRoomNumber(parseInt(e.target.value))}
        />
        <br />
        <label class="lab">Total Price:</label>
        <input
          class="inputs"
          type="number"
          step="0.01"
          value={totalPrice}
          onChange={(e) => setTotalPrice(parseFloat(e.target.value))}
        />
        <br />
        {/* Button to create a new appointment */}
        <button class="reserve-button" onClick={createAppointment}>
          Create Appointment
        </button>
        <br />
        <br />
      </div>
      <div>
        {/* Display the list of appointments in a table */}
        <h2 class="res_head">
          <u>Appointments</u>
        </h2>
        <table border="1" class="edit back">
          {/* Table header with column names */}
          <thead>
            <tr class="tr">
              <th class="th">Patient Address</th>
              <th class="th">Admit Date</th>
              <th class="th">Discharge Date</th>
              <th class="th">Room Number</th>
              <th class="th">Total Price</th>
              <th class="th">Paid</th>
              <th class="th">Action</th>
            </tr>
          </thead>
          {/* Table body to display appointment details */}
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.patientAddress}</td>
                <td>
                  {new Date(appointment.admitDate * 1000).toLocaleDateString()}
                </td>
                <td>
                  {new Date(
                    appointment.dischargeDate * 1000
                  ).toLocaleDateString()}
                </td>
                <td>{appointment.roomNumber}</td>
                <td>
                  {web3.utils.fromWei(
                    appointment.totalCost.toString(),
                    "ether"
                  )}
                </td>
                <td>{appointment.paid ? "Yes" : "No"}</td>
                <td>
                  {/* Button to pay for the appointment if not already paid */}
                  {!appointment.paid && (
                    <button onClick={() => payAppointment(index)}>Pay</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;



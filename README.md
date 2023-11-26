# Health Records Management Using Blockchain 
## Current Scenario 
In the healthcare industry, many organizations still rely on outdated systems to maintain patient health records. These antiquated software solutions store patient medical data in local records, which can result in several challenges:

**Time-Consuming Diagnosis**: The use of outdated systems can make the diagnosis process time-consuming. Doctors often struggle to access and retrieve essential patient information efficiently.

**Complexity for Healthcare Providers**: Outdated software systems can complicate the workflow for healthcare professionals. They may face difficulties in navigating and retrieving patient data, hindering their ability to provide timely and accurate care.

Healthcare organizations currently rely on centralized databases to store a wide range of data, including personal information, diagnostic reports, and doctor's prescriptions. However, this centralized approach brings with it a set of significant problems, such as:

**Identity Theft**: Centralized databases are vulnerable to breaches, potentially leading to identity theft. Unauthorized access to patient records can compromise sensitive personal information.
![leaking data info](https://github.com/Ankittiwari23/Blockchain_project/assets/84897935/e02e6515-ad93-4ce6-9d43-710f388f70db)


**Spamming**: Patient data stored in a centralized location can become a target for spamming and unsolicited communications, potentially jeopardizing patient privacy.


**Financial Data Crimes**: Centralized databases also pose a risk of financial data crimes. Hackers can exploit vulnerabilities to steal credit card and bank information, leading to unethical financial activities.

Securing patient data is paramount in the healthcare sector, as tampering with patient records can have severe consequences for both patients and healthcare providers. Notably, between the years 2009 and 2023, over 200 million patient records were breached. Hackers exploited these breaches to gain access to sensitive financial data and misuse it for nefarious purposes.
![blockchain data breach](https://github.com/Ankittiwari23/Blockchain_project/assets/84897935/68472a05-6ca9-4988-a3f5-b785bb273591)


## Proposed Solution
This project will implement blockchain technology and Smart contracts for Electronic Health records  and also provide secure and scalable storage of electronic records by defining granular access rules for the users.

## Smart Contracts in health care
Smart contracts are self-executing lines of code that run atop blockchains and are triggered once a set of predetermined conditions are met. They are used to automate the execution of online agreements without the involvement of third parties. Smart contracts can be used to create patient profiles on the blockchain while allowing doctors and relevant medical practitioners to view past medical records. This would allow them to come up with better treatment procedures based on a patient’s past treatment history and subsequent outcomes.Health centers can also configure smart contracts to track health complications arising from treatment side effects and encode them to share the information with partner drug manufacturing companies and medical associations that have yet to uncover the full side effects of new drugs.
It is additionally possible to have smart contracts that send patient information to insurance companies for the purposes of patient compensation claims to smooth out such processes.

## Future Scope of the project
Many healthcare organizations and blockchain companies are working on building blockchain-enabled systems to enhance healthcare services for both patients and healthcare professionals. This project can be extended to decentralize patient medical history, improving payment methods and tracking pharmaceuticals. Smart contracts can be used to create patient profiles on the blockchain while allowing doctors and relevant medical practitioners to view past medical records. This would allow them to come up with better treatment procedures based on a patient’s past treatment history and subsequent outcomes.
<!-- TABLE OF CONTENTS -->

## Required Software Tools
1. Ethereum:
Contribution: Ethereum serves as the underlying blockchain platform, providing the decentralized ledger where health records are stored securely and immutably. It ensures data integrity, transparency, and resilience against unauthorized access or tampering.
Use Case: Ethereum is used to deploy and execute the HealthRecord smart contract, which manages the storage and retrieval of health records.
2. Solidity:
Contribution: Solidity is a critical tool for developing smart contracts on the Ethereum blockchain. It allows for the definition of data structures, functions, and access control logic within the smart contract.
Use Case: Solidity is used to code the HealthRecord smart contract, specifying how records are added, accessed, and secured.
3. React.js:
Contribution: React.js is a JavaScript library used for building dynamic and responsive user interfaces. It enables the creation of a user-friendly frontend application for interacting with the blockchain and smart contract.
Use Case: React.js is used to develop the patient dashboard and healthcare provider portal, providing users with intuitive interfaces to manage and access health records.
4. Web3.js:
Contribution: Web3.js is a JavaScript library that facilitates interaction with Ethereum smart contracts from a web application. It allows the frontend application to send transactions, query data, and monitor events on the blockchain.
Use Case: Web3.js is integrated into the React.js application to connect to the HealthRecord smart contract, enabling users to add records and retrieve patient data.
5. Truffle:
Contribution: Truffle are development and deployment tools for Ethereum smart contracts. They provide a development environment, testing framework, and deployment tools to streamline the smart contract development process.
Use Case: Truffle can be used to write, test, and deploy the HealthRecord smart contract to the Ethereum blockchain.
6. Ganache
Contribution: Use to create the local etherum network
## Usecase of this project
The implementation of a blockchain-based health records project offers numerous benefits and advantages that can significantly improve the healthcare industry. Here are some of the key reasons highlighting the usefulness of such a project:

1. **Enhanced Security**: Blockchain technology is inherently secure due to its decentralized and cryptographic nature. Patient health records stored on a blockchain are highly resistant to unauthorized access, tampering, and data breaches. This ensures the confidentiality and integrity of sensitive medical information.

2. **Data Integrity**: Blockchain's immutability ensures that once data is recorded, it cannot be altered without consensus from network participants. This feature is crucial in maintaining the accuracy and trustworthiness of health records, reducing errors and misdiagnoses.

3. **Patient Empowerment**: Patients gain more control over their health data. They can grant and revoke access to their records, allowing for greater privacy and consent management. This empowers individuals to actively participate in their healthcare decisions.

4. **Interoperability**: Blockchain can serve as a standardized platform for sharing health data across different healthcare providers, systems, and institutions. This promotes interoperability, reducing fragmentation in the healthcare landscape and improving continuity of care.

5. **Efficient Data Exchange**: Traditional healthcare data sharing often involves slow and cumbersome processes. Blockchain streamlines data exchange, enabling real-time access to critical patient information, which is vital in emergency situations.

6. **Reduced Administrative Costs**: Blockchain can automate various administrative processes, such as claims processing, billing, and insurance verification. This reduces administrative overhead, leading to cost savings for healthcare organizations.

7. **Research and Development**: Healthcare researchers can access a comprehensive, secure, and anonymized dataset for medical research. This accelerates innovation and can lead to breakthroughs in treatments and therapies.

8. **Auditability and Accountability**: Every transaction on a blockchain is recorded and timestamped. This creates an auditable trail of actions, enhancing accountability within the healthcare system. Healthcare providers can track who accessed patient data and when.

9. **Reduction in Fraud**: Blockchain's transparency and immutability make it challenging for fraudulent activities to go unnoticed. This can help combat insurance fraud, prescription drug abuse, and other forms of healthcare-related fraud.

10. **Streamlined Regulatory Compliance**: Blockchain can simplify compliance with healthcare regulations, such as HIPAA in the United States or GDPR in Europe. Automated, secure data handling ensures adherence to legal requirements.

11. **Global Access**: Blockchain transcends geographical boundaries, allowing for global access to health records. This is especially valuable for patients who frequently travel or seek healthcare services abroad.

12. **Disaster Recovery**: Decentralized storage on a blockchain ensures redundancy, making data recovery in the event of natural disasters or system failures more robust and reliable.

13. **Long-term Data Preservation**: Healthcare records stored on a blockchain are designed to last indefinitely. This ensures that patient data remains accessible and unaltered over extended periods.

## Flowchart of the process
![blockchain_project_flowchart](https://github.com/Ankittiwari23/Blockchain_project/assets/84897935/ed4faedc-a486-4037-8316-8ccc58285e41)

1. **User Login:**
   - The process begins when a user initiates a login operation. This may involve entering a username and password or using other authentication methods such as multi-factor authentication.

2. **Interacts with React.js Frontend:**
   - After successful authentication, the user interacts with the user interface built using React.js. This frontend application provides a dashboard and user-friendly interface for managing their Electronic Health Records (EHR).

3. **Frontend Interacting with Smart Contract:**
   - The React.js frontend communicates with the Ethereum blockchain via a specific smart contract designed for managing EHR. This interaction is made possible through the integration of Web3.js, a JavaScript library that allows the frontend to connect to the blockchain.

4. **Smart Contract on Ethereum Processes Requests:**
   - The core component of this system is the smart contract written in Solidity, a language for Ethereum smart contracts. This smart contract defines the rules and functions for handling health records. When the user interacts with the frontend to perform actions like retrieving or adding records, the frontend sends requests to the smart contract.

   - The smart contract processes these requests by executing predefined functions and checks. For instance, it verifies the user's permissions and authorization to access or modify specific records.

   - The smart contract ensures the security, privacy, and integrity of the health records. It may employ access control mechanisms to restrict data access to authorized parties, ensuring only healthcare professionals and the patient have the necessary access rights.

5. **Data Stored Securely on Ethereum Blockchain:**
   - The health records are stored on the Ethereum blockchain in a secure and immutable manner. Blockchain technology ensures that once data is recorded, it cannot be altered or deleted. This feature is crucial for maintaining the integrity of EHR data.

   - Access to the health records on the blockchain is governed by the rules and permissions defined in the smart contract. Users can only access data that they are authorized to view or modify.

6. **User Retrieves Health Records and Adds New Records:**
   - Once the user is authenticated and authorized, they can perform various actions:
     - **Retrieve Health Records:** Users can view their existing health records stored on the blockchain. These records can include information about medical treatments, diagnoses, prescriptions, and other relevant medical history.
     - **Add New Records:** Users have the ability to add new records to their EHR. For example, they can update their medical history with recent diagnoses, treatments, or test results.

   - These operations are executed through the smart contract, ensuring that data is stored and managed in a secure and standardized manner.

7. **User Logs Out:**
   - After completing their tasks, the user can log out from the application. This terminates their session and ensures that their EHR data remains secure.

## Algorithm for the process:
1. Setting Up the Development Environment<br>
•	Install Node.js: Ensure that you have Node.js installed on your development machine as it's required for running various tools like Truffle and React.js.<br>
2. Setting Up Ganache<br>
•	Install Ganache: Set up a local Ethereum blockchain for development using Ganache.<br>
•	Start Ganache: Run Ganache to create a local Ethereum network with test accounts, private keys, and predefined Ether balances.<br>
3. Writing the Smart Contract (Solidity)<br>
•	Create a new Solidity file for the HealthRecord smart contract.<br>
•	Define the data structures and functions within the smart contract for managing health records, access control, and data integrity.<br>
•	Implement access control mechanisms to ensure only authorized users (patients and healthcare professionals) can access and modify records.<br>
•	Compile the smart contract using the Solidity compiler.<br>
4. Testing the Smart Contract (Truffle)<br>
•	Use Truffle's testing framework to write test cases for the smart contract functions.<br>
•	Run tests to ensure the smart contract behaves as expected.<br>
5. Deploying the Smart Contract (Truffle)<br>
•	Configure Truffle to connect to the Ganache blockchain.<br>
•	Deploy the HealthRecord smart contract to the local Ethereum network for testing purposes.<br>
6. Developing the React.js Frontend<br>
•	Create a new React.js project for the frontend.
•	Build user-friendly interfaces for patients and healthcare professionals, including login and dashboard components.
•	Integrate Web3.js into the frontend to enable interaction with the Ethereum blockchain and the deployed smart contract.
8. User Authentication and Authorization<br>
•	Implement user authentication mechanisms, allowing users to log in using their credentials or MFA.
•	Ensure that only authorized users can access and manage health records.<br>
•	Verify user permissions and access rights within the frontend application.<br>
9. Retrieving and Adding Health Records<br>
•	Implement functionality for users to retrieve their existing health records from the blockchain.<br>
•	Allow users to add new records to their EHR, such as recent diagnoses, treatments, and test results.<br>
•	Ensure that these operations trigger transactions to the smart contract for recording and retrieval.<br>
10. Handling User Sessions<br>
•	Implement a session management system to allow users to log in and log out securely.<br>
•	Ensure that logging out terminates the user's session and prevents unauthorized access.<br>
11. Deployment<br>
•	Once the application is fully tested, deploy the React.js frontend on a web server.<br>
•	Ensure that the smart contract is deployed to the main Ethereum network, making it accessible to real users.<br>
12. Ongoing Maintenance<br>
•	Regularly update and maintain the smart contract and the frontend to address issues, enhance security, and add new features as needed.<br>



Developers working on this project are responsible for coding, deploying, and maintaining the smart contract, developing and maintaining the React.js frontend, and ensuring that all components work together securely and efficiently to provide a robust and user-friendly EHR system. They must also define and enforce granular access rules to protect the confidentiality and privacy of patient health records.

## Division of entire process
![Blockchain work division](https://github.com/Ankittiwari23/Blockchain_project/assets/84897935/be283ad5-ea01-4212-b69c-46b35b6e9bcb) 

## Workflow  
**React Frontend:**
1.	Launch the Application 
2.	Check for MetaMask 
3.	Connect to MetaMask 
4.	Input Health Record Data 
5.	Create Health Record 
6.	Display Newly Created Health Record 
7.	Update Medical History 
8.	Update Medications 
9.	Display Updated Health Record Information 
Solidity Smart Contract: 
1.	Define HealthRecord Struct 
2.	Create Health Record Mapping 
3.	Create Function for Creating Health Records 
4.	Input Validation for Creation 
5.	Update Medical History Function 
6.	Update Medications Function 
7.	Ownership Verification for Updates 
8.	Emit HealthRecordUpdated Events for Updates 
These step headings help break down the flow of the React frontend and the Solidity smart contract into distinct actions and interactions.  
 
**Creating Meta Mask Account** 
 
MetaMask is a popular Ethereum wallet and browser extension that allows users to manage their Ethereum accounts and interact with decentralized applications (DApps) on the Ethereum blockchain. It serves as a bridge between users and the Ethereum network, providing features like wallet management, transaction signing, and secure key storage. 
 
 
To create a MetaMask account: 
 
1.	Install MetaMask as a browser extension. 
2.	Launch MetaMask and agree to terms. 
3.	Create a new wallet with a strong password. 
4.	Write down and securely store the 12-word seed phrase. 
5.	Verify the seed phrase. 
6.	You now have a MetaMask account. Keep the password and seed phrase safe. 
<img width="452" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/bb35d8c0-c56c-479f-93bc-69908bd0bf6a">
 <img width="452" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/75a04f62-0e6e-43b4-933a-afb7b669c3c8">

**Installing Ganache**  
 
Ganache is a widely used development tool for Ethereum and blockchain developers. It provides a personal and customizable Ethereum blockchain environment for local development and testing. It offers pre-funded accounts, event tracking, and control over gas costs, making it a safe and controlled environment for Ethereum developers to build and test smart contracts and applications before deploying them to the real Ethereum network. 
 
 <img width="452" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/6d2d1653-a0ee-4d06-8e19-dc6af8505f43">

  
**Account Creation in MetaMask**  

<img width="452" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/c0a641cf-fba1-432b-bad1-1e24ab71c640">
 
**Copying private key of Ganache**  
<img width="180" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/549b327e-0723-42d9-b23a-ae8b8581cf30"> 

## Code  

## How Transaction is taking place 
<img width="458" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/ab91e618-7197-47b9-aa02-ae12d81e94ae">
<img width="458" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/88572c1a-0115-41b6-a26c-39d716a95427">

**Connect to MetaMask:**
User clicks "Connect to MetaMask" in the React.js application.
MetaMask extension is opened, and the user connects their Ethereum wallet.

**Load Web3 and Accounts:**
The React.js application loads the Web3 library and enables the Ethereum provider in MetaMask. User accounts are retrieved.

**Load Smart Contract:**
The application connects to the deployed smart contract on the Ethereum blockchain using the contract's ABI and address.

**Load Existing Appointments:**
The application fetches existing appointments from the smart contract.

**User Creates Appointment:**
User enters admit date, discharge date, room number, and total price.
The application converts dates, calculates the total price in Wei, and calls the smart contract method to create a new appointment.The transaction is sent to the Ethereum network.

**Get Transaction Hash:**
The application retrieves the transaction hash after sending the transaction.
The hash uniquely identifies the transaction on the Ethereum blockchain.

**Update UI - Transaction Pending:**
The application updates the UI to inform the user that the transaction is pending confirmation.

**User Reviews Transaction:**
The user reviews the transaction details on MetaMask.
MetaMask displays information like gas fees, total cost, and transaction hash.

**User Confirms Transaction:**
If the user confirms the transaction on MetaMask, it proceeds to confirmation. If rejected, the transaction is canceled. Gas fees are paid by the user at this stage.
 
**Get Gas Price:**
The application fetches the current gas price from the Ethereum network.

**Transaction Confirmation:**
The transaction is confirmed when included in a mined block.The application updates the UI to reflect the confirmed status. The smart contract executes the appointment creation.

**Update UI - Appointment Created:**
The application updates the UI to inform the user that the appointment was successfully created.

**User Pays for Appointment:**
User clicks "Pay" for the appointment.The application calls the smart contract method to mark the appointment as paid.The transaction is sent to the Ethereum network.

**Get Transaction Hash (Payment):**
The application retrieves the transaction hash for the payment transaction.

**Update UI - Payment Pending:**
The application updates the UI to inform the user that the payment transaction is pending confirmation.

**User Reviews Payment Transaction:**
Similar to the appointment creation, the user reviews the payment transaction on MetaMask.
MetaMask displays information like gas fees, total cost, and transaction hash.

**User Confirms Payment Transaction:**
If the user confirms the payment transaction on MetaMask, it proceeds to confirmation. If rejected, the transaction is canceled. Gas fees are paid by the user at this stage.

**Transaction Confirmation (Payment):**
The payment transaction is confirmed when included in a mined block.The application updates the UI to reflect the confirmed payment status. The smart contract executes the payment.

**Update UI - Payment Completed:**
The application updates the UI to inform the user that the payment was successfully completed. 

## OUTPUT 

**Step 1: Inintalizing truffle and connecting to ganache and compiling contracts** 
<img width="452" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/28a4ef0d-fd55-4687-a4be-48d03921c4fe">

 
 

**Step 2: If metamask is not downloaded**
<img width="452" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/c0830f88-7c62-479f-b9b2-fef65457e2c5">


**Step 2 : Connecting to metamask**
**Step 3: Connecting to metamask Wallet account**

<img width="452" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/79270745-1a89-40da-a8b1-00af8838acba">

 















**Step 4: selecting account and confirm**
 <img width="451" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/10330154-ad86-45a6-8b05-c642a9a6d98c">

**Step 4: Filling the appointment details**
**Step 5: On metamask confirming the transacxtion by verifying gas price and appointment price** 

<img width="476" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/98b08cc8-457a-4a9a-90bb-7956b740e9a4">
 










**Step 6: Clicking on confirm and the transaction is confirmed**

<img width="484" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/20f96256-64e8-4e31-ab16-60fe3db7ebc8">

 
**Result :**

 <img width="223" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/6ab0252e-c1d5-446b-9c1a-e34e2b15d0f0">




**Step 7: Opening Ganache**
**Step 8 : Checking transaction details**
<img width="452" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/d7a771cc-c4a2-46d9-817a-98a3cb162baa">


**Step 9: Checking the block history of ganache network** 
 <img width="452" alt="image" src="https://github.com/Ankittiwari23/Blockchain_project/assets/113471177/6562384a-bcca-405b-8a3e-2b48f77faaa8">


## Final Result -  

•	The contract is initialized and compiled. Transaction is done from one account to another account. 

•	The application fetches the current gas price from the Ethereum network.

•	The application retrieves the transaction hash for the payment transaction.

•	The payment transaction is confirmed when included in a mined block.The application updates the UI to reflect the confirmed payment status. The smart contract executes the payment.

•	The application updates the UI to inform the user that the payment was successfully completed. 



## Future Scope 

Many healthcare organizations and blockchain companies are working on building blockchain-enabled systems to enhance healthcare services for both patients and healthcare professionals. This project can be extended to decentralize patient medical history, improving payment methods and tracking pharmaceuticals. Smart contracts can be used to create patient profiles on the blockchain while allowing doctors and relevant medical practitioners to view past medical records. This would allow them to come up with better treatment procedures based on a patient’s past treatment history and subsequent outcomes.

## Conclusion 

Thus a new way of storing the health record securely is done using Ethereum blockchain and Smart Contracts using solidity which will protect the health information of the users and save it from data breach. It also provide secure and scalable storage of electronic records by defining granular access rules for the users. The project promotes a patient-centric approach by empowering users to have transparent and direct access to their health records. Decentralization minimizes the risks associated with centralized data storage. There is no single point of control, reducing vulnerabilities to hacking, data breaches, or system failures. the described project showcases a robust and forward-thinking solution for Electronic Health Record management, addressing critical aspects such as security, privacy, scalability, and user accessibility.


## Reference :
1. https://www.hipaajournal.com/healthcare-data-breach-statistics/#:~:text=Between%202009%20and%202022%2C%205%2C150%20healthcare%20data%20breaches,than%201.2x%20the%20population%20of%20the%20United%20States.
2. AYESHA SHAHNAZ ,USMAN QAMAR AND AYESHA KHALID :Using Blockchain for Electronic Health Records IEEE https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8863359

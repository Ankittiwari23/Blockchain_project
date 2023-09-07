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
## Division of entire process
![Blockchain work division](https://github.com/Ankittiwari23/Blockchain_project/assets/84897935/be283ad5-ea01-4212-b69c-46b35b6e9bcb)

## Reference :
1. https://www.hipaajournal.com/healthcare-data-breach-statistics/#:~:text=Between%202009%20and%202022%2C%205%2C150%20healthcare%20data%20breaches,than%201.2x%20the%20population%20of%20the%20United%20States.
2. AYESHA SHAHNAZ ,USMAN QAMAR AND AYESHA KHALID :Using Blockchain for Electronic Health Records IEEE https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8863359
